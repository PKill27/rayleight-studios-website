# Rayleight Studios Website

A modern, responsive website for Rayleight Studios game development company.

## Features

- 🎨 Modern, sleek design with gradient effects
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast loading with optimized assets
- 🎮 Game studio themed UI/UX
- 📧 Contact form ready for integration
- 🎯 Smooth scrolling navigation

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom styling with modern features
- **JavaScript** - Interactive functionality
- **Bootstrap 5** - Responsive framework (via CDN)
- **Bootstrap Icons** - Icon library
- **Google Fonts** - Orbitron & Inter fonts

## Project Structure

```
Rayleight studios website/
├── index.html          # Main HTML file
├── css/
│   └── style.css      # Custom styles
├── js/
│   └── main.js        # JavaScript functionality
└── README.md          # This file
```

## Local Development

1. Open `index.html` in your web browser
2. Or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   ```
3. Navigate to `http://localhost:8000` in your browser

## Deploying to GoDaddy

### Option 1: Using GoDaddy Website Builder (Easiest)
1. Log into your GoDaddy account
2. Go to "My Products" → "Websites"
3. Use GoDaddy's file manager or FTP to upload your files

### Option 2: Using GoDaddy Hosting with cPanel (Recommended)

#### Step 1: Access Your Hosting
1. Log into your GoDaddy account
2. Navigate to "My Products" → "Web Hosting"
3. Click "Manage" next to your hosting plan
4. Click "cPanel Admin"

#### Step 2: Upload Your Files
1. In cPanel, find "File Manager"
2. Navigate to the `public_html` folder (this is your website root)
3. Delete any default files (like `index.html` if it exists)
4. Upload all your website files:
   - `index.html` → `public_html/index.html`
   - `css/` folder → `public_html/css/`
   - `js/` folder → `public_html/js/`

#### Step 3: Connect Your Domain
1. In cPanel, go to "Domains" → "Addon Domains" or "Subdomains"
2. Add your domain if it's not already connected
3. Make sure it points to `public_html` or your domain's folder

#### Step 4: Verify DNS Settings
1. In GoDaddy, go to "My Products" → "Domains"
2. Click "DNS" next to your domain
3. Ensure you have an A record pointing to your hosting IP:
   - Type: A
   - Name: @ (or your domain)
   - Value: Your hosting IP (found in cPanel)
   - TTL: 600 (or default)

4. Ensure you have a CNAME for www:
   - Type: CNAME
   - Name: www
   - Value: @ (or your domain)
   - TTL: 600

### Option 3: Using FTP Client

1. **Get FTP Credentials:**
   - In cPanel, go to "FTP Accounts"
   - Note your FTP hostname, username, and password

2. **Use an FTP Client:**
   - Download FileZilla (free) or use any FTP client
   - Connect using your FTP credentials
   - Navigate to `public_html` folder
   - Upload all your files maintaining the folder structure

3. **File Structure on Server:**
   ```
   public_html/
   ├── index.html
   ├── css/
   │   └── style.css
   └── js/
       └── main.js
   ```

## Customization

### Update Content
- Edit `index.html` to change text, game titles, team members, etc.
- Replace placeholder images with your actual images
- Update contact information in the contact section

### Change Colors
- Edit `css/style.css` and modify the CSS variables at the top:
  ```css
  :root {
      --primary-color: #6366f1;
      --secondary-color: #8b5cf6;
      --accent-color: #ec4899;
      /* ... */
  }
  ```

### Add Images
1. Create an `images/` folder
2. Add your images
3. Update the HTML to reference your images:
   ```html
   <img src="images/your-image.jpg" alt="Description">
   ```

### Make Contact Form Functional
You have several options:

1. **Use a Form Service (Easiest):**
   - Sign up for [Formspree](https://formspree.io/) or [Netlify Forms](https://www.netlify.com/products/forms/)
   - Update the form action in `index.html`

2. **Use PHP (if your hosting supports it):**
   - Create a `contact.php` file
   - Update form action to point to `contact.php`

3. **Use a Backend Service:**
   - Set up a serverless function (AWS Lambda, Vercel, etc.)
   - Update the form submission in `js/main.js`

## Testing Your Website

1. **Before Uploading:**
   - Test locally in different browsers
   - Test on mobile devices
   - Check all links work

2. **After Uploading:**
   - Visit your domain in a browser
   - Test on mobile devices
   - Check loading speed
   - Verify all sections display correctly

## Troubleshooting

### Website Not Loading
- Check that `index.html` is in the `public_html` folder
- Verify file permissions (should be 644 for files, 755 for folders)
- Clear your browser cache

### Images Not Showing
- Check file paths are correct
- Ensure images are uploaded to the server
- Verify file names match exactly (case-sensitive)

### CSS/JS Not Loading
- Check file paths in HTML
- Ensure files are in correct folders
- Verify CDN links are working (Bootstrap, etc.)

### Domain Not Connecting
- Wait 24-48 hours for DNS propagation
- Verify DNS settings in GoDaddy
- Check A record points to correct IP

## Next Steps

1. ✅ Upload files to GoDaddy hosting
2. ✅ Connect your domain
3. ✅ Customize content with your actual information
4. ✅ Add real images and game screenshots
5. ✅ Set up contact form functionality
6. ✅ Test on multiple devices
7. ✅ Consider adding Google Analytics
8. ✅ Set up SSL certificate (HTTPS) - usually free with GoDaddy hosting

## Support

For GoDaddy-specific help:
- GoDaddy Support: https://www.godaddy.com/help
- GoDaddy Community: https://www.godaddy.com/community

## License

This website template is free to use and modify for your game studio.

---

**Good luck with your game studio! 🎮**
