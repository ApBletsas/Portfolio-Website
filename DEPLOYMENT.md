# Portfolio Website - Deployment Guide

## 🚀 Quick Start

### Next.js Version (Recommended)
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Export static files for GitHub Pages
npm run export
```

### Static HTML Version
The static version is located in the `/static` folder and can be deployed directly to any web server.

## 📁 Project Structure

```
├── components/          # React components
│   ├── Navigation.tsx   # Navigation with theme toggle
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section
│   ├── Projects.tsx     # Projects showcase
│   ├── Experience.tsx   # Experience timeline
│   ├── Skills.tsx       # Skills section
│   ├── Contact.tsx      # Contact form
│   └── Footer.tsx       # Footer
├── pages/              # Next.js pages
│   ├── _app.tsx        # App wrapper
│   └── index.tsx       # Home page
├── styles/             # Global styles
│   └── globals.css     # Tailwind CSS imports
└── public/             # Static assets
```

## 🌐 Deployment Options

### 1. GitHub Pages (Static Export)
```bash
npm run build
npm run export
# Upload the 'out' folder contents to your GitHub Pages repository
```

### 2. Vercel (Recommended for Next.js)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### 3. Netlify
1. Connect GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `out`

### 4. Static Hosting (HTML Version)
Upload the contents of the `/static` folder to any web server.

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `components/Hero.tsx` - Name, title, description
- `components/About.tsx` - About section content
- `components/Experience.tsx` - Work experience and education
- `components/Projects.tsx` - Project showcase
- `components/Contact.tsx` - Contact information
- `components/Footer.tsx` - Footer content

### Adding Projects
Add new projects to the `projects` array in `components/Projects.tsx`:

```typescript
{
  id: 9,
  title: 'Your Project',
  description: 'Project description',
  technologies: ['React', 'Node.js'],
  github: 'https://github.com/yourusername/project',
  live: 'https://yourproject.com',
  category: 'Full Stack',
  icon: FaCode,
  featured: true
}
```

### Styling
- Modify `tailwind.config.js` for color schemes and custom styles
- Update `styles/globals.css` for global styles
- Customize animations in individual components

## 📱 Features Included

✅ **Modern Design**: Clean, minimal, and professional design with dark/light mode toggle  
✅ **Responsive**: Fully responsive across all devices (mobile, tablet, desktop)  
✅ **Interactive**: Smooth animations and hover effects using Framer Motion  
✅ **Accessible**: Built with accessibility best practices and semantic HTML  
✅ **SEO Optimized**: Meta tags, structured data, and performance optimizations  
✅ **Contact Form**: Functional contact form with validation  
✅ **Project Showcase**: Dynamic project cards with filtering capabilities  
✅ **Skills Visualization**: Interactive skills section with progress bars  
✅ **Experience Timeline**: Professional experience and education timeline  
✅ **Social Links**: GitHub, LinkedIn, Twitter, Email integration  
✅ **Download Resume**: Downloadable resume button functionality  

## 🔧 Technical Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for smooth interactions
- **Icons**: React Icons (Font Awesome)
- **Forms**: React Hook Form with validation
- **Theme**: Next Themes for dark/light mode
- **Deployment**: Static export ready for GitHub Pages

## 📞 Support

For questions or issues, please refer to the README.md file or create an issue in the repository.

---

**Ready to deploy!** 🎉
