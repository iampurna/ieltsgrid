/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './content/**/*.{md,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                // Brand Colors from Documentation
                primary: {
                    50: '#eff6ff',
                    100: '#dbeafe',
                    500: '#3b82f6',
                    600: '#1E40AF', // Primary Blue
                    700: '#1D4ED8', // Primary Blue Darker
                    900: '#1e3a8a',
                },
                secondary: {
                    400: '#F59E0B', // Orange
                    500: '#EAB308', // Yellow
                },
                neutral: {
                    50: '#F8FAFC',  // Light gray
                    800: '#1F2937', // Dark gray
                    900: '#111827',
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'primary-gradient': 'linear-gradient(135deg, #1E40AF 0%, #1D4ED8 100%)',
                'secondary-gradient': 'linear-gradient(135deg, #F59E0B 0%, #EAB308 100%)',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-in': 'slideIn 0.3s ease-out',
                'bounce-subtle': 'bounceSubtle 2s infinite',
                'pulse-slow': 'pulse 3s infinite',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideIn: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(0)' },
                },
                bounceSubtle: {
                    '0%, 100%': { transform: 'translateY(-5%)' },
                    '50%': { transform: 'translateY(0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
            },
            boxShadow: {
                'blue': '0 4px 14px 0 rgba(30, 64, 175, 0.15)',
                'orange': '0 4px 14px 0 rgba(245, 158, 11, 0.15)',
                'card': '0 2px 8px rgba(0, 0, 0, 0.1)',
                'card-hover': '0 8px 25px rgba(0, 0, 0, 0.15)',
            },
            screens: {
                'xs': '475px',
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}