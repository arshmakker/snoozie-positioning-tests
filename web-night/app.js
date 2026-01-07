(function() {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    // Time-based access control
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const currentTime = hours * 60 + minutes;
    
    // Night window: 9:30 PM to 11:59 PM OR 12:00 AM to 1:30 AM
    const nightWindow1Start = 21 * 60 + 30; // 9:30 PM
    const nightWindow1End = 23 * 60 + 59; // 11:59 PM
    const nightWindow2Start = 0; // 12:00 AM
    const nightWindow2End = 1 * 60 + 30; // 1:30 AM
    
    const inWindow1 = currentTime >= nightWindow1Start && currentTime <= nightWindow1End;
    const inWindow2 = currentTime >= nightWindow2Start && currentTime <= nightWindow2End;
    const isNightTime = inWindow1 || inWindow2;

    if (!isNightTime) {
      // Show holding state
      document.body.innerHTML = `
        <div class="container">
          <h1>I come alive at night.</h1>
          <p class="subtext">Come back after 9:30 PM.</p>
        </div>
      `;
      if (window.plausible) {
        plausible('DaytimeArrived');
      }
      return;
    }

    // Fire NightArrived event
    if (window.plausible) {
      plausible('NightArrived');
    }

    // Initialize experience
    const audio = document.getElementById('night-audio');
    const startButton = document.getElementById('start-button');
    const experienceImage = document.getElementById('experience-image');
    let imageShown = false;

    // Remove autoplay - audio must never autoplay
    if (audio) {
      audio.removeAttribute('autoplay');
    }

    // On button tap
    if (startButton) {
      startButton.addEventListener('click', () => {
        // Start audio
        if (audio) {
          audio.play();
        }
        
        // Hide button
        startButton.hidden = true;
        
        // Fire NightStarted event
        if (window.plausible) {
          plausible('NightStarted');
        }

        // Fade in image at 10 seconds
        setTimeout(() => {
          if (!imageShown && experienceImage) {
            imageShown = true;
            experienceImage.hidden = false;
            experienceImage.style.opacity = '0';
            requestAnimationFrame(() => {
              experienceImage.style.transition = 'opacity 2s ease-in';
              experienceImage.style.opacity = '1';
            });
          }
        }, 10000);
      });
    }
  }
})();

