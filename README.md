# Jack Kweyunga's Professional Portfolio

A modern, minimalist professional portfolio showcasing my work as a DevSecOps Engineer, Electronics Engineer, and Co-founder of Seede XR.

## Features

- **Modern Design**: Clean, professional aesthetic with emerald green accents
- **Dark/Light Mode**: Theme toggle with system preference detection
- **MDX Support**: Easy content editing with MDX files
- **Responsive**: Optimized for all devices and screen sizes
- **Fast**: Built with Next.js 15 and optimized for performance
- **Accessible**: Proper semantic HTML and ARIA labels

## Tech Stack

- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS with custom CSS variables
- **Fonts**: Inter (primary) and JetBrains Mono (monospace)
- **Theme Management**: next-themes
- **Content**: MDX for rich content editing
- **Deployment**: Optimized for Vercel deployment

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/jackkweyunga/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── globals.css     # Global styles and CSS variables
│   ├── layout.tsx      # Root layout with fonts and metadata
│   └── page.tsx        # Main page component
├── components/         # React components
│   ├── Header.tsx      # Navigation header with theme toggle
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Technical skills section
│   ├── Projects.tsx    # Featured projects
│   ├── Contact.tsx     # Contact information
│   ├── ThemeProvider.tsx # Theme context provider
│   └── ThemeToggle.tsx # Dark/light mode toggle
├── content/            # MDX content files
│   └── blog/          # Blog posts in MDX format
public/                 # Static assets
├── favicon.svg        # Custom favicon
└── favicon.ico       # Fallback favicon
```

## Customization

### Colors
Update the CSS variables in `src/app/globals.css`:
```css
:root {
  --color-primary: #059669;    /* Emerald green */
  --color-secondary: #6b7280;  /* Gray */
}
```

### Content
- Edit personal information in the component files
- Add blog posts as MDX files in `src/content/blog/`
- Update projects in `src/components/Projects.tsx`

### Theme
The theme system uses CSS variables that automatically adapt to light/dark modes.

## Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically on every push

### Other Platforms
The site is a static Next.js application and can be deployed on:
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting service

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- **Website**: [Portfolio Link]
- **LinkedIn**: [linkedin.com/in/jackkweyunga](https://linkedin.com/in/jackkweyunga)
- **GitHub**: [github.com/jackkweyunga](https://github.com/jackkweyunga)
- **Email**: Available on request

---

Built with Next.js, TypeScript, and Tailwind CSS