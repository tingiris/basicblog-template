import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './_posts/**/*.md'
  ],
  theme: { extend: {} },
  plugins: [require('@tailwindcss/typography')]
}
export default config
