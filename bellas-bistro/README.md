# Bella's Bistro - Authentic Italian Restaurant Website

A modern, responsive website built for Bella's Bistro using Next.js 15, Tailwind CSS, and shadcn/ui components.

## 🚀 Features

- **Modern Design**: Clean, elegant Italian restaurant aesthetic with warm earth tones
- **Fully Responsive**: Mobile-first design that works on all devices
- **Interactive Components**: Smooth animations with Framer Motion
- **Performance Optimized**: Built with Next.js 15 and optimized for speed
- **Accessible**: Following accessibility best practices

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui
- **Animations**: Framer Motion  
- **Icons**: Lucide React
- **Fonts**: Inter & Playfair Display

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd bellas-bistro
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
bellas-bistro/
├── app/
│   ├── components/
│   │   ├── common/          # Navbar, Footer
│   │   └── sections/        # Hero, About, Services, etc.
│   ├── lib/
│   │   └── data.ts          # Restaurant data
│   ├── types/
│   │   └── index.ts         # TypeScript interfaces
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/
│   └── ui/                  # shadcn/ui components
└── lib/
    └── utils.ts             # Utility functions
```

## 🎨 Sections

1. **Hero**: Full-screen section with restaurant branding and call-to-action
2. **About**: Restaurant story, mission, and core values  
3. **Services**: Dine-in, private events, and catering options
4. **Gallery**: Filterable photo gallery of food and ambiance
5. **Testimonials**: Customer reviews carousel
6. **Contact**: Contact form, hours, and location information

## 📱 Responsive Design

- **Mobile**: Hamburger navigation, stacked layouts
- **Tablet**: Optimized grid layouts and spacing
- **Desktop**: Full-width hero, multi-column layouts

## ⚡ Performance

- **Next.js Image Optimization**: Automatic image optimization
- **Code Splitting**: Dynamic imports for optimal loading
- **Tailwind Purging**: Unused CSS automatically removed
- **Font Optimization**: Google Fonts with `next/font`

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Manual Build

```bash
npm run build
npm start
```

## 🔧 Configuration

Restaurant data is stored in `app/lib/data.ts` and can be easily modified to update:
- Business information
- Menu items and services  
- Contact details and hours
- Social media links
- Brand colors and styling

## 🎯 SEO & Accessibility

- Semantic HTML structure
- Meta tags for search engines
- Alt text for images
- Keyboard navigation support
- Screen reader compatibility

## 📄 License

This project is licensed under the MIT License.
