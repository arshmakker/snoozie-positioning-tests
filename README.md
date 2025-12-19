# Snoozie Positioning Tests

**Purpose:** GTM (Go-To-Market) positioning experiments for Snoozie sleep product.

## ⚠️ Important Note

This is **NOT** a production marketing site. This repository contains minimal, experimental landing pages designed to test emotional resonance with different positioning narratives. The focus is on simplicity, calm, and trust rather than conversion optimization.

## The Three Variants

This repository contains three distinct landing pages, each testing a different positioning narrative:

### 1. Sleep Companion (`/companion`)
**Positioning:** A gentle companion for nights when you can't sleep.

**Message:** No tracking obsession. No pressure. Just help switching off.

**Target emotion:** Comfort, companionship, non-judgmental support

### 2. Sleep Habit Builder (`/habit`)
**Positioning:** Build better sleep habits, one night at a time.

**Message:** Track sleep, reduce interruptions, wake up better.

**Target emotion:** Progress, self-improvement, actionable change

### 3. Phone Break at Night (`/phone-break`)
**Positioning:** Stop doom-scrolling at night. Sleep better.

**Message:** Snoozie gently nudges you away from your phone when it's time to rest.

**Target emotion:** Relief from phone addiction, boundary-setting, digital wellness

## Repository Structure

```
snoozie-positioning-tests/
├── companion/
│   ├── index.html
│   └── style.css
├── habit/
│   ├── index.html
│   └── style.css
├── phone-break/
│   ├── index.html
│   └── style.css
├── shared/
│   ├── base.css
│   └── analytics.js
└── README.md
```

## Technical Stack

- **HTML5** - Semantic markup
- **CSS3** - Plain CSS only, no frameworks
- **JavaScript** - Analytics placeholder only
- **Mobile-first** - Optimized for mobile devices, single-screen layout
- **No dependencies** - Works perfectly on GitHub Pages

## Design Principles

- **Dark, calm background** - Deep indigo/charcoal (#1a1a2e)
- **Soft, readable text** - Off-white (#f5f5f0)
- **Generous spacing** - Breathing room for calm
- **No animations** - Still, peaceful experience
- **No icons/logos** - Text-only focus
- **System font** - Inter from Google Fonts

## Setting Up GitHub Pages

1. Push this repository to GitHub
2. Go to repository Settings → Pages
3. Under "Source", select your default branch (usually `main` or `master`)
4. Select `/ (root)` as the folder
5. Click Save
6. Your pages will be available at:
   - `https://yourusername.github.io/snoozie-positioning-tests/companion/`
   - `https://yourusername.github.io/snoozie-positioning-tests/habit/`
   - `https://yourusername.github.io/snoozie-positioning-tests/phone-break/`

## Integration Points

### Email Capture

Each page has a form with a placeholder action URL. To integrate:

1. **Google Forms Method:**
   - Create a separate Google Form for each variant (companion, habit, phone-break)
   - Add an email field to each form
   - Get the form submission URL (looks like: `https://docs.google.com/forms/d/e/FORM_ID/formResponse`)
   - Update the `action` attribute in each HTML file's `<form>` tag
   - Update the input `name` attribute to match your form field name (e.g., `entry.123456789` or `emailAddress`)

2. **Backend Endpoint Method:**
   - Set up API endpoints: `/api/companion-submit`, `/api/habit-submit`, `/api/phone-break-submit`
   - Update the `action` attribute in each HTML file's `<form>` tag
   - Ensure your backend accepts GET requests with an `email` parameter

**Important:** Use different endpoints/forms for each variant to enable clear attribution tracking.

### Analytics

To add analytics tracking:

1. Open `shared/analytics.js`
2. Follow the commented instructions for your chosen analytics provider:
   - Google Analytics 4
   - Plausible Analytics
   - Other providers
3. The analytics script is already included in all three pages

Alternatively, you can add analytics scripts directly in the `<head>` section of each HTML file if you prefer.

## Testing

- Test all three pages on mobile devices (primary target)
- Verify single-screen layout (no scrolling on mobile)
- Test email form submission with your chosen endpoint
- Verify analytics tracking is working
- Check cross-browser compatibility

## License

[Add your license here]

