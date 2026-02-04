# Maureen Njihia — Personal Portfolio

A modern, responsive personal portfolio website built with **Next.js 16**, showcasing professional experience, skills, projects, and certifications.

![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)
![SASS](https://img.shields.io/badge/SASS-1.97-CC6699?style=flat-square&logo=sass)

🔗 **Live Demo:** [maureennjihia.com](https://www.maureennjihia.com/)

## ✨ Features

- **Hero Section** — Animated introduction with typewriter effect
- **Facts & Statistics** — Key metrics with odometer animations
- **Testimonials** — Client testimonials with Swiper carousel
- **Experience Timeline** — Professional work history
- **Skills Grid** — Technical skills with DevIcon integration
- **Work Portfolio** — Project showcase with modal previews
- **Services** — Professional services offered
- **Certifications** — Professional certifications and credentials
- **Contact Form** — Integrated contact form with email functionality via Resend
- **Responsive Design** — Mobile-first design with smooth animations

## 🛠️ Tech Stack

| Category          | Technologies            |
| ----------------- | ----------------------- |
| **Framework**     | Next.js 16 (App Router) |
| **Language**      | TypeScript              |
| **Styling**       | SASS/SCSS, Bootstrap 5  |
| **Animations**    | GSAP                    |
| **UI Components** | Swiper.js               |
| **Email**         | Resend                  |
| **Notifications** | Sonner                  |

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Main landing page
│   ├── layout.tsx         # Root layout
│   └── actions.ts         # Server actions (contact form)
├── components/            # React components
│   ├── ui/                # UI components (header, nav, sidebar)
│   ├── hero.tsx           # Hero section
│   ├── facts.tsx          # Statistics section
│   ├── testimonials.tsx   # Testimonials carousel
│   ├── experience.tsx     # Work experience
│   ├── skills.tsx         # Skills grid
│   ├── work.tsx           # Portfolio projects
│   ├── services.tsx       # Services section
│   ├── certifications.tsx # Certifications
│   ├── contact.tsx        # Contact form
│   └── footer.tsx         # Footer
├── data/                  # Static data files
│   ├── experiences.ts     # Work experience data
│   ├── skills.ts          # Skills data
│   ├── work.ts            # Portfolio projects data
│   ├── services.ts        # Services data
│   ├── testimonials.ts    # Testimonials data
│   ├── certifications.ts  # Certifications data
│   └── menu.ts            # Navigation menu items
├── styles/                # SCSS stylesheets
├── public/                # Static assets
├── fonts/                 # Custom fonts
├── types/                 # TypeScript type definitions
└── utils/                 # Utility functions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Njihia413/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:

   ```env
   RESEND_API_KEY=your_resend_api_key
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open in browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Build for production     |
| `npm run start` | Start production server  |
| `npm run lint`  | Run ESLint               |

## 🎨 Customization

### Content Updates

All content is managed through TypeScript files in the `/data` directory:

- **`experiences.ts`** — Work experience entries
- **`skills.ts`** — Technical skills with icons
- **`work.ts`** — Portfolio projects
- **`services.ts`** — Professional services
- **`testimonials.ts`** — Client testimonials
- **`certifications.ts`** — Certifications

### Styling

Styles are organized in the `/styles` directory using SCSS:

- Global styles and variables
- Component-specific stylesheets
- Animation definitions

## 📄 License

This project is private and proprietary.

---

<p align="center">
  Built with ❤️ by Maureen Njihia
</p>
