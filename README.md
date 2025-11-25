# Chelsea Kramer Notary Public Website

A modern, responsive website for Chelsea Kramer Notary Public built with Next.js 15, TypeScript, Tailwind CSS, shadcn/ui, and Magic UI components.

## 🌟 Features

- **Modern Design**: Clean, professional layout with burgundy and gold brand colors
- **Responsive**: Fully responsive design that works on all devices
- **Accessible**: Built with accessibility in mind (WCAG 2.1 compliant)
- **Animated**: Smooth animations and transitions using Framer Motion
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Fast Performance**: Optimized for speed with Next.js 15 App Router

## 📄 Pages

1. **Home** - Hero section, services overview, and call-to-action
2. **Estate Planning** - Interactive accordion with key legal documents and preparation checklist
3. **Real Estate** - Timeline-based process overview and comprehensive service list
4. **Notaries Public** - Professional team profiles and BC notary information
5. **Contact** - Contact form, map integration, and office information

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion (Magic UI)
- **Icons**: Lucide React
- **Form Handling**: React Hook Form + Zod (ready for implementation)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
cd /Users/meuhimanshu/Desktop/cknotary/notary-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
notary-website/
├── app/                          # Next.js App Router pages
│   ├── contact/                  # Contact page
│   ├── estate-planning/          # Estate planning page
│   ├── notaries-public/          # Team profiles page
│   ├── real-estate/              # Real estate page
│   ├── globals.css               # Global styles & CSS variables
│   ├── layout.tsx                # Root layout with navigation & footer
│   └── page.tsx                  # Home page
├── components/                   # React components
│   ├── ui/                       # shadcn/ui components
│   │   ├── accordion.tsx
│   │   ├── animated-card.tsx    # Custom animated card
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── fade-in.tsx          # Custom fade-in animation
│   │   ├── form.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── navigation-menu.tsx
│   │   └── textarea.tsx
│   ├── footer.tsx                # Site footer
│   └── navigation.tsx            # Site navigation
├── lib/                          # Utility functions
│   └── utils.ts                  # Tailwind class merger
└── public/                       # Static assets
```

## 🎨 Design System

### Colors

The website uses a professional color palette:

- **Primary**: Burgundy/Red (`oklch(0.35 0.15 15)`) - Main brand color
- **Accent**: Gold (`oklch(0.75 0.12 85)`) - Call-to-action buttons
- **Background**: Off-white for comfortable reading
- **Muted**: Light gray for secondary content

### Typography

- **Headings**: Playfair Display (serif) - Elegant and professional
- **Body**: Geist Sans - Modern and readable
- **Mono**: Geist Mono - For code or technical content

### Components

All UI components are built with shadcn/ui for consistency and customizability:

- Buttons with hover states and loading indicators
- Cards with subtle shadows and animations
- Forms with validation and accessible labels
- Navigation with mobile-responsive menu
- Accordions for collapsible content

## 🔧 Customization

### Updating Colors

Edit the CSS variables in `app/globals.css`:

```css
:root {
  --primary: oklch(0.35 0.15 15);  /* Burgundy */
  --accent: oklch(0.75 0.12 85);   /* Gold */
  /* ... other colors */
}
```

### Adding New Pages

1. Create a new folder in the `app/` directory
2. Add a `page.tsx` file with your content
3. Update navigation in `components/navigation.tsx`

### Modifying Components

All shadcn/ui components can be customized in the `components/ui/` directory.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- High contrast ratios for text
- Focus indicators on all interactive elements

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in Vercel
3. Deploy with one click

### Build for Production

```bash
npm run build
npm start
```

## 📝 Future Enhancements

- [ ] Add blog/news section
- [ ] Implement actual form submission (email service)
- [ ] Add testimonials from real clients
- [ ] Integrate online booking system
- [ ] Add multi-language support (English/French)
- [ ] Implement dark mode toggle
- [ ] Add real team photos

## 📞 Contact Information

**Chelsea Kramer Notary Public**
- Address: 101 – 5145 26th Street, Vernon, BC
- Phone: 250-542-1111
- Fax: 250-542-1112
- Email: info@cknotary.ca

**Office Hours:**
- Monday – Friday: 8:30 AM – 4:30 PM
- Drop-ins: Tuesday & Thursday, 11:00 AM – 12:00 PM

## 📄 License

This project is proprietary and confidential.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Animations inspired by [Magic UI](https://magicui.design/)
- Icons from [Lucide](https://lucide.dev/)
