# SaberVirtual Website

A modern, responsive website for SaberVirtual - an after-school tutoring center in Santa Maria da Feira, Portugal.

## Features

- 🌐 **Multi-language support**: Portuguese (default), English, Spanish, and French
- 📱 **Fully responsive**: Works on desktop, tablet, and mobile devices
- 🎨 **Modern design**: Clean UI with smooth animations
- ⚡ **No backend required**: Pure HTML, CSS, and JavaScript
- 🔄 **Language persistence**: User's language preference is saved in localStorage

## Structure

```
sabervirtual/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styles
├── js/
│   ├── i18n.js         # Internationalization module with all translations
│   └── main.js         # Main JavaScript functionality
├── images/             # Image assets (add your images here)
└── README.md           # This file
```

## Setup

1. **Add your images** to the `images/` folder:
   - `logo.png` - Main logo
   - `logo-white.png` - White version for dark backgrounds
   - `robot.png` - Hero section image
   - `students.png` - Students image for "Why Us" section
   - `tutoring.png` - Tutoring section image
   - `recruitment.png` - Recruitment section image
   - Various icons (optional, fallbacks are included)

2. **Serve the website**:
   - Using Python: `python3 -m http.server 8080`
   - Using Node.js: `npx serve`
   - Or any other local server

3. **Open in browser**:
   - Navigate to `http://localhost:8080`

## Customization

### Colors
Edit CSS variables in `css/styles.css`:

```css
:root {
    --primary-blue: #00bcd4;
    --primary-blue-dark: #0097a7;
    --accent-yellow: #ffc107;
    --accent-pink: #e91e63;
    --accent-green: #8bc34a;
}
```

### Content
- Edit text directly in `index.html`, or
- Update translations in `js/i18n.js` for multi-language support

### Contact Information
Update the contact section in `index.html`:
- Address
- Phone numbers
- Email
- Social media links

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

All rights reserved. This website is created for SaberVirtual.
