# unsalaslan.me — Portfolio Development Guide

> **AI-Assisted Development Prompt Base**  
> Use this README as context when working with Claude, Cursor, Copilot, or any AI coding assistant.

---

## 🎯 Project Overview

```yaml
Project: Personal Portfolio & Resume Website
Domain: unsalaslan.me
Owner: Ünsal Aslan (@dyamba)
Role: Tech Lead & Full Stack Developer
Experience: 17+ years (2008 - Present)
Location: Istanbul, Turkey
```

### Quick Context for AI

```
I am Ünsal Aslan, a Tech Lead and Full Stack Developer with:
- BSc in Mathematics
- BSc in Computer Science  
- MSc in Computer Engineering
- Professional experience since 2008
- Started at Istanbul University (2008-2010)
- Career path: Developer → Team Leader → Tech Lead
- Active side project developer
- GitHub: https://github.com/dyamba
```

---

## 🏗️ Current Architecture

### Tech Stack

| Layer | Technology |
|-------|------------|
| Structure | HTML5 Semantic |
| Styling | Pure CSS3 (CSS Variables) |
| Animations | CSS Keyframes + JS IntersectionObserver |
| Fonts | Google Fonts (JetBrains Mono, Playfair Display) |
| Icons | Inline SVG |
| Hosting | Static (Vercel/Netlify/GitHub Pages ready) |

### File Structure

```
unsalaslan.me/
├── index.html          # Main single-page application
├── README.md           # This file (development guide)
├── assets/             # (future) Static assets
│   ├── images/
│   ├── fonts/
│   └── icons/
├── css/                # (future) Extracted styles
│   └── styles.css
├── js/                 # (future) Extracted scripts
│   └── main.js
└── data/               # (future) Content as JSON
    └── profile.json
```

### Design System

```css
/* Color Palette */
--bg-primary: #0a0a0b;      /* Deep black */
--bg-secondary: #111113;     /* Card backgrounds */
--bg-tertiary: #1a1a1d;      /* Elevated surfaces */
--text-primary: #f5f5f7;     /* Main text */
--text-secondary: #a1a1a6;   /* Subdued text */
--text-muted: #6e6e73;       /* Muted text */
--accent: #00d4aa;           /* Teal/mint accent */
--accent-dim: #00d4aa33;     /* Accent with transparency */
--grid-color: #ffffff08;     /* Background grid */
--border-subtle: #ffffff10;  /* Subtle borders */

/* Typography */
Font Display: 'Playfair Display' (serif) - Headlines
Font Body: 'JetBrains Mono' (monospace) - Body, code
```

---

## 📋 Content Data

### Personal Information

```json
{
  "name": "Ünsal Aslan",
  "title": "Tech Lead & Full Stack Developer",
  "location": "Istanbul, Turkey",
  "email": "contact@unsalaslan.me",
  "github": "https://github.com/dyamba",
  "linkedin": "https://linkedin.com/in/unsalaslan",
  "website": "https://unsalaslan.me",
  "available": true
}
```

### Experience Timeline

```json
[
  {
    "period": "2020 - Present",
    "role": "Tech Lead",
    "company": "Leading Engineering Teams",
    "description": "Architecting scalable solutions, mentoring developers, driving technical strategy"
  },
  {
    "period": "2015 - 2020",
    "role": "Team Leader",
    "company": "Software Development Teams",
    "description": "Led cross-functional teams, established best practices, continuous improvement culture"
  },
  {
    "period": "2010 - 2015",
    "role": "Software Developer",
    "company": "Various Projects",
    "description": "Full-stack development, web applications, mobile solutions"
  },
  {
    "period": "2008 - 2010",
    "role": "Software Developer",
    "company": "Enko Teknik - Sakarya",
    "description": "Software solutions for research and administrative purposes. Outsource projects at TOYOTA."
  }
]
```

### Skills Matrix

```json
{
  "frontend": ["React", "TypeScript", "Vue.js", "Angular", "HTML5/CSS3", "SCSS", "Tailwind"],
  "backend": ["Node.js", "Python", ".NET", "Java", "REST APIs", "GraphQL", "Microservices"],
  "mobile": ["Swift", "iOS", "React Native", "Flutter"],
  "database": ["PostgreSQL", "MongoDB", "Redis"],
  "cloud": ["AWS", "Azure", "Docker", "Kubernetes"],
  "leadership": ["Team Management", "Agile/Scrum", "Architecture", "Code Review", "Mentoring"],
  "foundations": ["Algorithms", "Data Structures", "System Design", "Optimization"]
}
```

### GitHub Projects

```json
[
  {
    "name": "GitProjeKontrol",
    "url": "https://github.com/dyamba/GitProjeKontrol",
    "description": "Project management system",
    "tech": ["Management", "Git"],
    "emoji": "📊"
  },
  {
    "name": "PitchPerfect",
    "url": "https://github.com/dyamba/PitchPerfect",
    "description": "iOS audio recording app with effects",
    "tech": ["Swift", "iOS", "AVFoundation"],
    "emoji": "🎵"
  },
  {
    "name": "SkillShop",
    "url": "https://github.com/dyamba/skillshop",
    "description": "E-commerce platform for skill-based services",
    "tech": ["TypeScript", "React"],
    "emoji": "🛒"
  },
  {
    "name": "OpenUniversity",
    "url": "https://github.com/dyamba/Open-University",
    "description": "Open University project",
    "tech": ["TypeScript", "Angular", "Node.js", "MongoDB", "Docker", "Kubernetes",".NET Core", "Azure"],
    "emoji": "🎓"
  },
  {
    "name": "IOS-Playground",
    "url": "https://github.com/dyamba/IOS-Playground",
    "description": "iOS test applications",
    "tech": ["Swift", "iOS"],
    "emoji": "🎮"
  }
]
```

### Education

```json
[
  {
    "degree": "Master's Degree",
    "field": "Computer Engineering",
    "focus": "Systems and software architecture"
  },
  {
    "degree": "Bachelor's Degree",
    "field": "Computer Science",
    "focus": "Algorithms, data structures, theoretical foundations"
  },
  {
    "degree": "Bachelor's Degree",
    "field": "Mathematics",
    "focus": "Analytical thinking and problem-solving"
  }
]
```

---

## 🚀 Development Prompts

### Feature Addition Prompts

Use these prompts when asking AI to add features:

#### Add Blog Section
```
Add a blog section to unsalaslan.me that:
- Matches the existing dark theme with --accent: #00d4aa
- Uses the same card style as project cards
- Shows post title, date, reading time, and tags
- Has hover animations consistent with other sections
- Links to Medium/Dev.to or local markdown files
```

#### Add Dark/Light Theme Toggle
```
Add a theme toggle to unsalaslan.me that:
- Switches between dark (current) and light mode
- Stores preference in localStorage
- Respects prefers-color-scheme
- Animates smoothly between themes
- Uses a sun/moon icon in the navbar
```

#### Add Multilingual Support (TR/EN)
```
Add language toggle for Turkish/English:
- Store language preference in localStorage
- Add data-i18n attributes to all text content
- Create language JSON files for translations
- Smooth transition when switching languages
- Flag icons or TR/EN text toggle in navbar
```

#### Add Contact Form
```
Add a contact form that:
- Matches the terminal card aesthetic
- Fields: name, email, message
- Validates inputs with helpful error states
- Integrates with Formspree/Netlify Forms/EmailJS
- Shows success/error states with animations
- Includes honeypot spam protection
```

#### Add Resume/CV Download
```
Add a downloadable PDF resume:
- Floating download button or navbar link
- Generate PDF from site content or link to hosted PDF
- Track downloads with analytics event
- Button style matches contact-link class
```

### Bug Fix Prompts

```
Fix [issue] in unsalaslan.me:
- Current behavior: [describe]
- Expected behavior: [describe]
- Browser/device: [specify]
- Maintain existing design system and animations
```

### Refactoring Prompts

#### Extract CSS to Separate File
```
Refactor unsalaslan.me to extract inline CSS:
- Move all styles to css/styles.css
- Keep CSS variables in :root
- Organize by component/section
- Add comments for each section
- Maintain all animations and effects
```

#### Extract JS to Separate File
```
Refactor unsalaslan.me to extract inline JavaScript:
- Move all scripts to js/main.js
- Use ES6 modules if beneficial
- Add JSDoc comments
- Maintain IntersectionObserver animations
- Keep parallax mouse effect
```

#### Convert to React/Next.js
```
Convert unsalaslan.me to Next.js:
- Create component structure matching sections
- Use CSS Modules or styled-components
- Implement static generation (SSG)
- Keep all animations with Framer Motion
- Maintain exact visual appearance
- Add SEO with next-seo
```

#### Convert to Astro
```
Convert unsalaslan.me to Astro:
- Create .astro components for each section
- Use scoped styles
- Implement static build
- Add View Transitions API
- Keep interactive elements as islands
- Maintain exact design and animations
```

---

## 🎨 Design Guidelines for AI

When generating new components, follow these rules:

### Do's ✅
- Use CSS variables for all colors
- Match JetBrains Mono for body, Playfair Display for headings
- Include hover states with `transition: all 0.3s ease`
- Use `border: 1px solid var(--border-subtle)` for cards
- Add `border-radius: 12px` for cards, `6-8px` for smaller elements
- Include scroll animations with IntersectionObserver
- Keep accent color (#00d4aa) for interactive elements

### Don'ts ❌
- Don't use colors outside the defined palette
- Don't add new fonts without updating the design system
- Don't use inline colors (always use CSS variables)
- Don't skip hover/focus states
- Don't break the monospace + serif typography pairing
- Don't use heavy shadows (keep them subtle with accent glow)

### Animation Patterns
```css
/* Fade in from bottom (sections) */
.fade-in {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s ease-out;
}
.fade-in.visible {
    opacity: 1;
    transform: translateY(0);
}

/* Hover lift (cards) */
.card:hover {
    transform: translateY(-5px);
    border-color: var(--accent);
    box-shadow: 0 20px 40px rgba(0, 212, 170, 0.1);
}

/* Underline grow (links) */
a::after {
    width: 0;
    transition: width 0.3s ease;
}
a:hover::after {
    width: 100%;
}
```

---

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */
/* Base: Mobile (< 768px) */
/* Tablet: 768px - 968px */
/* Desktop: > 968px */

@media (max-width: 968px) {
    /* Stack grids, reduce padding */
    /* Hide desktop nav, show mobile menu */
}

@media (max-width: 768px) {
    /* Single column layout */
    /* Smaller typography scale */
}
```

---

## 🔧 Common Tasks

### Adding a New Section

1. Create section HTML with proper structure
2. Add section-header with label and title
3. Include `fade-in` class for animation
4. Add responsive styles if needed
5. Add to navigation if it's a main section

### Adding a New Skill Category

1. Copy existing `.skill-category` div
2. Update icon, title, and tags
3. Add `fade-in` class
4. Ensure grid responds correctly

### Adding a New Project

1. Copy existing `.project-card` structure
2. Update emoji, title, description, tech tags
3. Update href to GitHub repo
4. Add `fade-in` class

---

## 🌐 Deployment Notes

### Static Hosting (Recommended)
- **Vercel**: Push to GitHub, import to Vercel
- **Netlify**: Drag and drop or connect repo
- **GitHub Pages**: Enable in repo settings

### Domain Setup
- Point unsalaslan.me to hosting provider
- Enable HTTPS (automatic on most platforms)
- Set up www redirect

### Performance Checklist
- [ ] Optimize images (WebP format)
- [ ] Enable gzip compression
- [ ] Add caching headers
- [ ] Minify CSS/JS in production
- [ ] Test Core Web Vitals

---

## 📝 Changelog

### v1.0.0 (Initial Release)
- Single-page portfolio with 6 sections
- Dark theme with teal accent
- Terminal-style hero card
- Animated timeline for experience
- Skills grid with hover effects
- GitHub projects showcase
- Education cards
- Contact section with social links
- Responsive design
- Scroll animations
- Mouse parallax effect

---

## 🤖 AI Assistant Notes

When working on this project with AI assistance:

1. **Always provide this README as context** for consistent outputs
2. **Reference the design system** when adding new elements
3. **Test on mobile** - the site is responsive
4. **Keep the clever touches** - terminal card, math symbols (∞, →)
5. **Maintain performance** - no heavy frameworks unless necessary

---

*Built with passion && precision by Ünsal Aslan*
