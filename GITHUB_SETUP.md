# Complete Guide: GitHub Pages + GoDaddy Domain Setup

This guide will walk you through hosting your website for FREE on GitHub Pages and connecting it to your GoDaddy domain.

---

## Part 1: Setting Up GitHub Pages

### Step 1: Create a GitHub Account
1. Go to [github.com](https://github.com)
2. Click "Sign up" if you don't have an account
3. Complete the signup process (it's free!)

### Step 2: Create a New Repository
1. Once logged in, click the **"+"** icon in the top right
2. Select **"New repository"**
3. Fill in the details:
   - **Repository name**: `rayleight-studios-website` (or any name you like)
   - **Description**: "Official website for Rayleight Studios"
   - **Visibility**: Choose **Public** (required for free GitHub Pages)
   - **DO NOT** check "Initialize with README" (we already have files)
4. Click **"Create repository"**

### Step 3: Upload Your Website Files

#### Option A: Using GitHub Web Interface (Easiest for beginners)
1. On your new repository page, click **"uploading an existing file"**
2. Drag and drop ALL your website files:
   - `index.html`
   - `css/` folder (with `style.css` inside)
   - `js/` folder (with `main.js` inside)
3. Scroll down and click **"Commit changes"**

#### Option B: Using Git Command Line (If you have Git installed)
```bash
# Navigate to your website folder
cd "/Users/pk/Desktop/Rayleight studios website"

# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit - Rayleight Studios website"

# Add GitHub repository as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/rayleight-studios-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages
1. In your repository, click **"Settings"** (top menu)
2. Scroll down to **"Pages"** in the left sidebar
3. Under **"Source"**, select:
   - Branch: **main** (or **master** if that's what you have)
   - Folder: **/ (root)**
4. Click **"Save"**
5. Wait 1-2 minutes, then GitHub will show you a URL like:
   ```
   https://YOUR_USERNAME.github.io/rayleight-studios-website/
   ```

### Step 5: Test Your GitHub Pages Site
1. Visit the URL GitHub provided (it may take a few minutes to go live)
2. Your website should be visible!
3. **Note this URL** - you'll need it for the next part

---

## Part 2: Connecting Your GoDaddy Domain

### Step 1: Get Your GitHub Pages IP Address
GitHub Pages uses these IP addresses:
- **185.199.108.153**
- **185.199.109.153**
- **185.199.110.153**
- **185.199.111.153**

We'll use the first one for the A record.

### Step 2: Access GoDaddy DNS Settings
1. Log into your [GoDaddy account](https://www.godaddy.com)
2. Go to **"My Products"**
3. Find your domain and click **"DNS"** (or **"Manage DNS"**)

### Step 3: Update DNS Records

You need to add/modify these records:

#### A Record (for root domain - yourdomain.com)
1. Look for an existing **A** record with name **@** (or your domain name)
2. If it exists, click the **pencil icon** to edit
3. If it doesn't exist, click **"Add"** → **"A"**
4. Set the following:
   - **Name**: `@` (or leave blank, or your domain name)
   - **Value**: `185.199.108.153`
   - **TTL**: `600` (or default)
5. Click **"Save"**

#### CNAME Record (for www.yourdomain.com)
1. Look for an existing **CNAME** record with name **www**
2. If it exists, click the **pencil icon** to edit
3. If it doesn't exist, click **"Add"** → **"CNAME"**
4. Set the following:
   - **Name**: `www`
   - **Value**: `YOUR_USERNAME.github.io` (replace YOUR_USERNAME with your GitHub username)
   - **TTL**: `600` (or default)
5. Click **"Save"**

**Important**: The CNAME value should be your GitHub username + `.github.io`, NOT your repository name!

### Step 4: Configure Custom Domain in GitHub
1. Go back to your GitHub repository
2. Click **"Settings"** → **"Pages"**
3. Under **"Custom domain"**, enter your domain:
   - Enter: `yourdomain.com` (replace with your actual domain)
4. Check the box **"Enforce HTTPS"** (this enables free SSL certificate)
5. Click **"Save"**

### Step 5: Wait for DNS Propagation
- DNS changes can take **15 minutes to 48 hours** to propagate
- Usually it's within 1-2 hours
- You can check status at: [whatsmydns.net](https://www.whatsmydns.net)

---

## Part 3: Verifying Everything Works

### Check DNS Propagation
1. Visit [whatsmydns.net](https://www.whatsmydns.net)
2. Enter your domain
3. Select **"A"** record type
4. Check if it shows `185.199.108.153` in different locations
5. When most locations show the correct IP, DNS has propagated

### Test Your Website
1. Visit `http://yourdomain.com` (may take a few minutes)
2. Visit `http://www.yourdomain.com` (should also work)
3. Once HTTPS is enabled (can take a few hours), `https://yourdomain.com` will work

---

## Troubleshooting

### Website Shows "404 Not Found"
- **Wait longer**: DNS can take up to 48 hours
- **Check DNS records**: Make sure A record points to `185.199.108.153`
- **Verify GitHub Pages**: Make sure Pages is enabled in repository settings
- **Check custom domain**: In GitHub Pages settings, make sure your domain is entered correctly

### Website Shows GoDaddy Default Page
- **DNS not propagated yet**: Wait a bit longer
- **Wrong A record**: Make sure it points to `185.199.108.153`, not GoDaddy's IP
- **Clear browser cache**: Try incognito/private browsing mode

### HTTPS Not Working
- **Wait**: GitHub's SSL certificate can take a few hours to generate
- **Check "Enforce HTTPS"**: Make sure it's checked in GitHub Pages settings
- **DNS must be fully propagated**: HTTPS won't work until DNS is complete

### www.yourdomain.com Not Working
- **Check CNAME record**: Make sure it points to `YOUR_USERNAME.github.io`
- **Wait for DNS**: CNAME records can take longer to propagate

### Can't Access GitHub Repository Settings
- Make sure you're logged into the correct GitHub account
- Make sure you're the owner of the repository

---

## Quick Reference: DNS Records Summary

For domain: `yourdomain.com`

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 185.199.108.153 | 600 |
| CNAME | www | YOUR_USERNAME.github.io | 600 |

**Important Notes:**
- Replace `YOUR_USERNAME` with your actual GitHub username
- Replace `yourdomain.com` with your actual domain
- The `@` symbol means "root domain" (yourdomain.com)
- You might see existing records - you can delete old ones or modify them

---

## Updating Your Website

### Method 1: GitHub Web Interface
1. Go to your repository on GitHub
2. Click on the file you want to edit (e.g., `index.html`)
3. Click the **pencil icon** (Edit)
4. Make your changes
5. Scroll down, add a commit message
6. Click **"Commit changes"**
7. Your site will update in 1-2 minutes!

### Method 2: Git Command Line
```bash
# Make changes to your files locally
# Then:

git add .
git commit -m "Updated website content"
git push
```

---

## Cost Summary

✅ **GitHub Pages**: FREE  
✅ **GoDaddy Domain**: You already paid for this  
✅ **SSL Certificate**: FREE (provided by GitHub)  
✅ **Total Monthly Cost**: $0

---

## Need Help?

- **GitHub Pages Docs**: https://docs.github.com/en/pages
- **GoDaddy Support**: https://www.godaddy.com/help
- **DNS Check Tool**: https://www.whatsmydns.net

---

**Congratulations!** You now have a professional website hosted for FREE! 🎉
