# Veemail - AI-Powered Lead Generation SaaS

A stunning, futuristic SaaS web application built with Next.js 15, Tailwind CSS, and Framer Motion. Veemail helps businesses generate high-quality leads using AI-powered search and automation.

## ✨ Features

- **Modern Design**: Glassmorphism UI with vibrant yellow accents (#facc15)
- **AI-Powered Search**: Intelligent lead generation with customizable search terms
- **Interactive Dashboard**: Beautiful analytics and lead management
- **Smooth Animations**: Framer Motion transitions and micro-interactions
- **Fully Responsive**: Mobile-first design that works on all devices
- **Dark Mode**: Elegant dark theme with glass effects
- **TypeScript**: Full type safety throughout the application

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS with custom glassmorphism utilities
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Sora & Space Grotesk (Google Fonts)
- **Language**: TypeScript

## 📁 Project Structure

```
veemail/
├── app/
│   ├── auth/
│   │   └── register/
│   │       └── page.tsx
│   ├── dashboard/
│   │   └── page.tsx
│   ├── search/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Footer.tsx
│   ├── LoadingSpinner.tsx
│   └── Navbar.tsx
├── lib/
│   └── utils.ts
└── ...config files
```

## 🎨 Design System

### Colors
- **Primary**: #facc15 (Vibrant Yellow)
- **Dark Backgrounds**: Shades of dark blue/black
- **Glass Effects**: Semi-transparent overlays with backdrop blur

### Typography
- **Display Font**: Space Grotesk
- **Body Font**: Sora
- **Weights**: 300-800

### Components
- **Glass Cards**: `.glass-card` utility class
- **Glass Buttons**: `.glass-button` utility class
- **Gradient Text**: `.gradient-text` utility class
- **Glow Effects**: `.glow-effect` utility class

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd veemail
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Pages Overview

### Landing Page (`/`)
- Hero section with animated background effects
- Feature showcase with interactive cards
- Customer testimonials with ratings
- Call-to-action sections with conversion focus
- Smart navbar that adapts to authentication state

### Authentication Pages
#### Registration (`/auth/register`)
- Glassmorphic form design with validation
- Google OAuth integration ready
- Real-time form validation
- Loading states and error handling
- Password strength indicators

#### Login (`/auth/login`)
- Clean login interface
- Remember me functionality
- Forgot password link
- Social login options
- Error handling with user feedback

### Dashboard (`/dashboard`)
- Comprehensive lead management table
- Real-time performance statistics
- Advanced search and filter functionality
- Export capabilities for data
- Interactive charts and metrics
- Lead scoring and status tracking

### Search Builder (`/search`)
- AI-powered search term generation
- Interactive form with smart suggestions
- Multi-term selection interface
- Pro tips and best practices
- Real-time preview of generated terms

### Lead Campaigns (`/leads`)
- Email and phone campaign management
- Template library with performance metrics
- Campaign analytics and reporting
- Automation controls (play/pause/edit)
- Performance tracking and optimization

### Settings (`/settings`)
- Comprehensive user profile management
- Security settings and password changes
- API key generation and management
- Notification preferences
- Account customization options

### Billing (`/billing`)
- Beautiful pricing plans with animations
- Current plan and usage tracking
- Payment method management
- Billing history with downloadable invoices
- Plan upgrade/downgrade functionality

### 404 Page (`/not-found`)
- Animated error page with glassmorphism
- Navigation options to get users back on track
- Search suggestions for lost users

## 🎭 Animation Features

- **Page Transitions**: Smooth enter/exit animations
- **Scroll Animations**: Elements animate on scroll
- **Hover Effects**: Interactive button and card animations
- **Loading States**: Custom loading spinners and skeletons
- **Micro-interactions**: Button presses, form interactions

## 🎯 Key Components

### Navbar
- Fixed position with glass effect
- Mobile-responsive hamburger menu
- User profile dropdown
- Navigation links with icons

### Footer
- Multi-column layout
- Social media links
- Scroll-to-top functionality
- Company information

### Glass Cards
- Semi-transparent backgrounds
- Backdrop blur effects
- Subtle borders and shadows
- Hover animations

## 🔧 Customization

### Colors
Update the color palette in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    400: '#facc15', // Main accent color
    // ... other shades
  }
}
```

### Fonts
Change fonts in `app/globals.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&display=swap');
```

### Animations
Customize animations in `tailwind.config.js`:
```javascript
animation: {
  'custom-animation': 'customKeyframe 2s ease-in-out infinite',
}
```

## 📦 Build & Deploy

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm start
   ```

3. **Deploy to Vercel** (recommended)
   ```bash
   vercel --prod
   ```

## 🎨 Design Inspiration

This design draws inspiration from modern SaaS applications like:
- Vercel (clean, minimal design)
- Linear (smooth animations)
- Raycast (glassmorphism effects)
- Superhuman (premium feel)
- Notion AI (intelligent features)

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ for the future of lead generation.