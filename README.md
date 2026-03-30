# Kanhere Atta Chakki - Portfolio Website

A professional, mobile-friendly portfolio website for Kanhere Atta Chakki stone-ground flour mill and spice business built with HTML, CSS, and JavaScript.

## Features

### 🎨 Design & UX
- ✅ Modern, clean, minimal design aesthetic
- ✅ Green and white color theme (fresh & professional)
- ✅ Smooth animations and transitions
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Fast loading with optimized styling
- ✅ SEO-friendly HTML structure

### 📱 Responsive Design
- Mobile-first approach
- Adaptive layouts for all screen sizes
- Mobile hamburger menu
- Touch-friendly buttons and controls

### 🛒 Shopping Features
❌ **Removed** - This is now a portfolio website focused on showcasing the business

### 🌐 Website Sections

1. **Navigation Bar**
   - Sticky navbar with smooth scrolling
   - Mobile hamburger menu
   - Logo with leaf icon
   - Direct link to Contact section

2. **Hero Section**
   - Eye-catching banner with gradient background
   - Main tagline: "Premium Quality Atta & Flour"
   - Subtitle: "Authentic, Healthy, and Affordable Whole Wheat Products"
   - Call-to-action button: Order on WhatsApp
   - Animated background elements

3. **About Us**
   - Company description: 30+ years legacy
   - Focus on stone-ground, organic flour production
   - Key values: Pure, Organic, Stone-Ground, No Preservatives
   - Professional copywriting

4. **Product Range Section**
   - 6 product categories with icons:
     - Whole Wheat Flour
     - Multi-Grain Flour
     - Chickpea Flour (Besan)
     - Corn Flour
     - Spice Mixes
     - Organic Grains
   - Hover effects and animations

5. **Special Offers**
   - 3 promotional offers:
     - 25% off Family Combo Pack
     - 15% off Bulk Orders
     - Free Masala Mix Gift
   - Discount badges and descriptions

6. **Why Choose Us**
   - 6 key features:
     - 100% Pure & Organic
     - Stone Ground Process
     - Health Benefits
     - Best Prices (Direct from mill)
     - 30+ Years Legacy
     - Quality Assured

7. **Customer Reviews**
   - 3 verified customer testimonials
   - 5-star ratings
   - Testimonials about product quality and authenticity

8. **Contact Section**
   - Phone: +91 9923817885
   - Address: 105, beside Meghe House, Amar Trupti Nagar, Pande Layout, Khamla, Nagpur, Maharashtra 440025
   - Opening Hours: Thursday 8:30 AM - 1:30 PM, 4:00 PM - 9:00 PM
   - Google Maps embed (live location)
   - WhatsApp chat button
   - Responsive two-column layout

9. **Footer**
   - Social media links (Facebook, Instagram, Twitter, WhatsApp)
   - Quick navigation links
   - Opening hours
   - Newsletter subscription form
   - Copyright information

### ⚡ Interactive Features

- **Sticky Navigation**: Navbar remains at top while scrolling
- **Mobile Menu**: Hamburger toggle for mobile devices
- **WhatsApp Integration**: 
  - Direct WhatsApp order button
  - Pre-filled messages
  - Floating WhatsApp button (bottom-right)
- **Smooth Animations**:
  - Slide-up animations on page load
  - Hover effects on cards
  - Floating background elements
  - Button scale effects
- **Scroll Effects**: Elements animate in as you scroll
- **Responsive Images**: Emoji placeholders for categories

### 📊 Business Information

**Kanhere Atta Chakki**
- **Phone**: +91 9923817885
- **Address**: 105, beside Meghe House, Amar Trupti Nagar, Pande Layout, Khamla, Nagpur, Maharashtra 440025
- **Hours**: Thursday 8:30 AM - 1:30 PM, 4:00 PM - 9:00 PM
- **Products**: Whole Wheat Flour, Multi-Grain Flour, Specialty Flours, Spice Mixes
- **Specialization**: Stone-ground, organic, premium quality flour since 30+ years

## Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No server or build tools required!

### Installation

1. **Download or Clone Files**
   ```bash
   # Create a folder
   mkdir kanhere-atta-chakki
   cd kanhere-atta-chakki
   
   # Copy index.html, styles.css, and script.js to this folder
   ```

2. **Open in Browser**
   - Simply open `index.html` in your web browser
   - Or double-click the file
   - No installation needed!

3. **Live Server (Optional)**
   ```bash
   # If you have Python installed:
   python -m http.server 8000
   
   # Then visit: http://localhost:8000
   ```

## File Structure

```
kanhere-atta-chakki/
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Customization Guide

### Update Business Information

**Phone Number** - Edit locations:
- `index.html`: Contact section (line ~255)

**Address**
- `index.html`: Contact section (line ~260)

**Opening Hours**
- `index.html`: Contact section (line ~264) and Footer section

**Map Location**
- `index.html`: Replace iframe src URL with your Google Maps embed code

**Social Media Links**
- `index.html`: Footer section

### Modify Colors

Edit CSS variables in `styles.css`:
```css
:root {
    --primary-green: #22c55e;        /* Main green */
    --secondary-green: #16a34a;      /* Darker green */
    --light-green: #dcfce7;          /* Light green bg */
    --white: #ffffff;
    --dark: #1f2937;
    --gray: #6b7280;
    /* ... more colors ... */
}
```

### Add/Update Product Categories

Edit the product categories in `index.html` (Categories section around line ~140):
```html
<div class="category-card">
    <div class="category-icon">
        <i class="fas fa-leaf"></i>  <!-- Change icon -->
    </div>
    <h3>Your Category Name</h3>              <!-- Category name -->
    <p>Category description here</p>           <!-- Description -->
</div>
```

### Change Text & Content

All text content is in `index.html`. Simply:
1. Open `index.html` in a text editor
2. Find and edit the text you want to change
3. Save and refresh the browser

### Enable Advanced Features

For production use:
- Connect to a real payment gateway
- Add user authentication
- Connect to a backend database
- Implement email notifications
- Add image uploading for categories
- Integrate with inventory management system

## Browser Support

- ✅ Chrome/Edge (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ✅ IE11 (Partial support)

## Performance Optimizations

- Minimal CSS with no frameworks
- Lightweight JavaScript (no dependencies)
- Optimized animations using CSS transforms
- Lazy loading for images (emoji placeholders)
- Mobile-optimized viewport settings
- Smooth scroll behavior

## SEO Features

- Semantic HTML5 structure
- Meta tags for description and keywords
- Proper heading hierarchy
- Alt text for images
- Mobile-friendly viewport settings
- Fast page load performance

## Features Roadmap

- [ ] Blog/News section
- [ ] Product catalog (if needed)
- [ ] Image gallery
- [ ] Customer email notifications
- [ ] WhatsApp integration for bulk orders
- [ ] Mobile app
- [ ] Online inquiry form
- [ ] testimonials video integration
- [ ] Multi-language support
- [ ] Analytics integration

## Support

For customization or issues:
1. Check the code comments
2. Review the HTML structure
3. Inspect CSS variables
4. Check JavaScript console for errors

## License

This template is free to use and modify for your business.

## Credits

- Font Icons: Font Awesome 6.4.0
- Fonts: Segoe UI (System font)
- Color Scheme: Green & White (Professional & Fresh)

---

**Created for Kanhere Atta Chakki** - Premium Quality Stone-Ground Flour Since 1994
**Last Updated**: March 30, 2026
