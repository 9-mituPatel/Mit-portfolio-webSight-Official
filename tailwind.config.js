export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,jsx}",
		"./components/**/*.{js,jsx}",
		"./app/**/*.{js,jsx}",
		"./src/**/*.{js,jsx}",
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
                  foreground: 'hsl(var(--accent-foreground))',
                  purple: 'hsl(var(--accent-purple))',
                  cyan: 'hsl(var(--accent-cyan))',
                  pink: 'hsl(var(--accent-pink))',
                  orange: 'hsl(var(--accent-orange))'
                },
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
			// Modern gradient accent colors
			gradient: {
				purple: 'hsl(var(--accent-purple))',
				cyan: 'hsl(var(--accent-cyan))',
				pink: 'hsl(var(--accent-pink))',
				orange: 'hsl(var(--accent-orange))'
			},
			// Glassmorphism utilities
			glass: {
				DEFAULT: 'hsl(var(--glass))',
				border: 'hsl(var(--glass-border))',
				shadow: 'hsl(var(--glass-shadow))'
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
				'heading': ['Playfair Display', 'Georgia', 'serif'],
				'body': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'float': 'float 3s ease-in-out infinite',
                'shine': 'shine 4s linear infinite',
                'shimmer': 'shimmer 1.5s infinite'
            },
            boxShadow: {
                'soft': 'var(--shadow-soft)',
                'elegant': 'var(--shadow-elegant)',
                'glow': 'var(--shadow-glow)',
                'premium': '0 20px 60px -12px rgba(0, 0, 0, 0.15), 0 8px 30px -8px rgba(0, 0, 0, 0.08)'
            }
		}
	},
	plugins: [require("tailwindcss-animate")],
};
