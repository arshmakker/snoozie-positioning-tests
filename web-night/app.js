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
    
    // Night window: 9:30 PM to 1:30 AM
    const nightStart = 21 * 60 + 30; // 9:30 PM
    const nightEnd = 1 * 60 + 30; // 1:30 AM
    
    const isNightTime = (currentTime >= nightStart && currentTime <= 23 * 60 + 59) || 
                        (currentTime >= 0 && currentTime <= nightEnd);

    if (!isNightTime) {
      // Show holding state
      document.body.innerHTML = `
        <div class="container">
          <h1>I'm not here right now.</h1>
          <p class="subtext">I only come at night.<br><br>If you're awake between 9:30 PM and 1:30 AM,<br>come back then.</p>
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

