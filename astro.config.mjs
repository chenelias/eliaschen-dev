import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import react from '@astrojs/react'
import image from '@astrojs/image'
import tailwind from '@astrojs/tailwind'
import addClasses from 'rehype-add-classes'
import mdx from '@astrojs/mdx'
import preact from '@astrojs/preact'

// https://astro.build/config
export default defineConfig({
    site: 'https://eliaschen.dev/',
    integrations: [sitemap(), react(), image(), tailwind(), mdx(), preact()],
    markdown: {
        extendDefaultPlugins: true,
        rehypePlugins: [
            [
                addClasses,
                {
                    h1: 'text-6xl font-bold',
                    h2: 'text-4xl font-bold',
                    h3: 'text-2xl font-bold',
                    h4: 'text-xl font-bold ',
                    h5: 'text-lg font-bold ',
                    h6: 'text-md font-bold ',
                    img: 'border border-slate-300 dark:border-zinc-700 rounded-xl mb-6 ',
                    a: 'underline underline-offset-2 hover:text-orange-500 decoration-orange-500',
                },
            ],
        ],
    },
})
