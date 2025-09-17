# Modern Portfolio Website

A beautiful, responsive portfolio website built with HTML, CSS, and JavaScript. Features a modern design, smooth animations, and mobile-first approach.

# Features

- **Responsive Design** - Works perfectly on all devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Mobile Navigation** - Hamburger menu for mobile devices
- **Smooth Scrolling** - Seamless navigation between sections
- **Interactive Elements** - Hover effects and animations
- **Contact Form** - Functional contact form with validation
- **Loading Animation** - Beautiful loading screen
- **Progress Bar** - Scroll progress indicator
- **Accessibility** - Keyboard navigation and focus management

# Structure

```
portfoliorohit/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
└── README.md           # This file
```

# Getting Started

1. **Download/Clone** the project files
2. **Open** `index.html` in your web browser
3. **Customize** the content as needed (see customization guide below)

# Customization Guide

### 1. Personal Information

Update the following in `index.html`:

```html
<!-- Header -->
<h2>Your Name</h2>

<!-- Hero Section -->
<h1 class="hero-title">Hi, I'm <span class="highlight">Your Name</span></h1>
<p class="hero-subtitle">Web Developer & Designer</p>

<!-- About Section -->
<p>Hello! I'm a passionate web developer...</p>

<!-- Contact Section -->
<span>your.email@example.com</span>
<span>+1 (555) 123-4567</span>
<span>Your City, Country</span>

<!-- Footer -->
<h3>Your Name</h3>
<p>&copy; 2024 Your Name. All rights reserved.</p>
```

### 2. Profile Photos

Replace the placeholder elements with your actual photos:

```html
<!-- Home Section Photo -->
<div class="hero-image">
    <img src="path/to/your/photo.jpg" alt="Your Name" class="profile-photo">
</div>

<!-- About Section Photo -->
<div class="about-image">
    <img src="path/to/your/photo.jpg" alt="Your Name" class="profile-photo large">
</div>
```

Add corresponding CSS for the photos:

```css
.profile-photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
}
```

### 3. Projects

Update the project cards with your actual projects:

```html
<div class="project-card">
    <div class="project-image">
        <img src="path/to/project-image.jpg" alt="Project Name">
    </div>
    <div class="project-content">
        <h3>Your Project Name</h3>
        <p>Description of your project...</p>
        <div class="project-tech">
            <span class="tech-tag">React</span>
            <span class="tech-tag">Node.js</span>
        </div>
        <div class="project-links">
            <a href="your-github-link" class="project-link">
                <i class="fab fa-github"></i> Code
            </a>
            <a href="your-live-link" class="project-link">
                <i class="fas fa-external-link-alt"></i> Live
            </a>
        </div>
    </div>
</div>
```

### 4. Skills

Modify the skills section to match your expertise:

```html
<div class="skill-item">
    <i class="fab fa-react"></i>
    <span>React</span>
</div>
```

### 5. Social Media Links

Update the footer social links:

```html
<div class="footer-social">
    <a href="your-linkedin-url" class="social-link">
        <i class="fab fa-linkedin"></i>
    </a>
    <a href="your-github-url" class="social-link">
        <i class="fab fa-github"></i>
    </a>
    <!-- Add more social media links as needed -->
</div>
```

### 6. Colors and Styling

Customize the color scheme in `styles.css`:

```css
:root {
    --primary-color: #2563eb;      /* Main blue color */
    --secondary-color: #fbbf24;    /* Accent yellow color */
    --text-color: #1f2937;         /* Main text color */
    --background-light: #f8fafc;   /* Light background */
    --background-dark: #1f2937;    /* Dark background */
}
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🎯 Sections Overview

### Header
- Fixed navigation bar
- Smooth scrolling to sections
- Mobile-responsive hamburger menu

### Home Section
- Hero introduction
- Call-to-action buttons
- Profile photo placeholder

### About Section
- Personal bio
- Experience statistics
- Profile photo placeholder

### Projects Section
- Project showcase cards
- Technology tags
- GitHub and live links

### Skills Section
- Categorized skills display
- Interactive skill items
- Technology icons

### Contact Section
- Contact information
- Functional contact form
- Form validation

### Footer
- Social media links
- Copyright information
- Brand information

## 🔧 Technical Features

### CSS Features
- CSS Grid and Flexbox layouts
- CSS Custom Properties (variables)
- Smooth transitions and animations
- Backdrop filters and modern effects

### JavaScript Features
- Mobile navigation toggle
- Smooth scrolling navigation
- Form validation and handling
- Scroll animations and effects
- Loading screen and progress bar
- Notification system

### Performance Features
- Optimized animations
- Efficient event handling
- Responsive image handling
- Minimal JavaScript footprint

## Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile Browsers**: iOS Safari, Chrome Mobile, Samsung Internet
- **Fallbacks**: Graceful degradation for older browsers

## Customization Tips

1. **Keep it Simple**: Don't overcrowd with too many elements
2. **High-Quality Images**: Use optimized images for better performance
3. **Consistent Branding**: Maintain color and typography consistency
4. **Test Responsiveness**: Check on various devices and screen sizes
5. **Update Regularly**: Keep projects and skills current

## Deployment

### Local Development
- Open `index.html` in your browser
- Use a local server for testing (recommended)

### Web Hosting
- Upload all files to your web hosting service
- Ensure all file paths are correct
- Test the live website thoroughly

### GitHub Pages
1. Create a new repository
2. Upload your files
3. Enable GitHub Pages in repository settings
4. Your site will be available at `username.github.io/repository-name`

## Contributing

Feel free to fork this project and customize it for your needs. If you make improvements, consider sharing them with the community!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you need help customizing your portfolio:
1. Check the customization guide above
2. Review the HTML structure and CSS classes
3. Use browser developer tools to inspect elements
4. Test changes incrementally

## Features to Add

Consider adding these features to enhance your portfolio:
- Blog section
- Resume download
- Portfolio filters
- Dark/Light theme toggle
- Multi-language support
- Analytics integration
- SEO optimization

# Rohitsportfolio
