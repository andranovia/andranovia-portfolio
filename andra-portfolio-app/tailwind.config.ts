import type { Config } from 'tailwindcss'

const config: Config = {
  
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'ShadowCard': '0px 0px 0px 2px rgba(6, 24, 44, 0.4), 0px 4px 6px -1px rgba(6, 24, 44, 0.65), 0px 1px 0px inset rgba(255, 255, 255, 0.08)',
      },
      
    },
  },
  plugins: [
    
  ],
}
export default config
