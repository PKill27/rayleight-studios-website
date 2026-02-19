# Adding Images to Your Website

## Image Folder Structure
Place all your images in this `images/` folder.

## Recommended Image Formats
- **JPG/JPEG**: Best for photos and complex images
- **PNG**: Best for images with transparency (logos, icons)
- **WebP**: Modern format with better compression (optional)

## How to Add Images in HTML

### Basic Image Tag Syntax
```html
<img src="images/your-image.jpg" alt="Description of image">
```

### Important Attributes:
- `src`: Path to your image file
- `alt`: Description for accessibility (required for SEO and screen readers)
- `class`: CSS class for styling (optional)
- `width` and `height`: Optional, but helps with page loading

## Common Places to Add Images

### 1. Game Card Images
Replace the placeholder in the game cards:
```html
<div class="game-image">
    <img src="images/dont-crack-game.jpg" alt="Don't Crack! Game Screenshot" style="width: 100%; height: 100%; object-fit: cover;">
</div>
```

### 2. Hero Section Background
Add a background image to the hero section:
```html
<section id="home" class="hero-section" style="background-image: url('images/hero-background.jpg'); background-size: cover; background-position: center;">
```

### 3. About Section Image
Replace the placeholder:
```html
<div class="about-image">
    <img src="images/studio-photo.jpg" alt="Rayleight Studios" style="width: 100%; border-radius: 20px;">
</div>
```

### 4. Team Member Photos
```html
<div class="team-avatar">
    <img src="images/team-member.jpg" alt="Team Member Name" style="width: 100%; border-radius: 50%;">
</div>
```

## Image Optimization Tips
1. **Resize images** before uploading (don't use huge images and scale them down)
2. **Compress images** using tools like TinyPNG or ImageOptim
3. **Use appropriate sizes**:
   - Game cards: ~800x600px
   - Hero background: ~1920x1080px
   - Team photos: ~400x400px
   - Logos: ~200-400px wide

## Example File Structure
```
images/
  ├── dont-crack-game.jpg
  ├── hero-background.jpg
  ├── studio-photo.jpg
  ├── logo.png
  └── team-member.jpg
```
