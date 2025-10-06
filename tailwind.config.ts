import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				surface: {
					DEFAULT: 'hsl(var(--surface))',
					foreground: 'hsl(var(--surface-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			fontFamily: {
				'display': ['Cormorant Garamond', 'Georgia', 'serif'],
				'serif': ['Crimson Text', 'Georgia', 'serif'],
				'body': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
			},
			letterSpacing: {
				'gallery': '0.01em',
				'refined': '0.005em',
			},
			spacing: {
				'gallery': 'clamp(2rem, 8vw, 8rem)',
				'artwork': 'clamp(1.5rem, 4vw, 4rem)',
			},
			scale: {
				'102': '1.02',
			},
			backgroundImage: {
				'gradient-canvas': 'var(--gradient-canvas)',
				'gradient-paper': 'var(--gradient-paper)',
				'gradient-accent': 'var(--gradient-accent)',
				'gradient-frame': 'var(--gradient-frame)',
			},
			boxShadow: {
				'artwork': 'var(--shadow-artwork)',
				'frame': 'var(--shadow-frame)',
				'subtle': 'var(--shadow-subtle)',
			},
			animation: {
				'fade-in': 'galleryFadeIn 1.2s ease-out forwards',
				'slide-up': 'gallerySlideUp 1s ease-out forwards',
				'float': 'gentleFloat 8s ease-in-out infinite',
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				galleryFadeIn: {
					from: { opacity: '0', transform: 'translateY(30px) scale(0.98)' },
					to: { opacity: '1', transform: 'translateY(0) scale(1)' }
				},
				gallerySlideUp: {
					from: { opacity: '0', transform: 'translateY(50px)', filter: 'blur(4px)' },
					to: { opacity: '1', transform: 'translateY(0)', filter: 'blur(0)' }
				},
				gentleFloat: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-6px)' }
				},
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				}
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
