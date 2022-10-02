import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import react from '@astrojs/react'
import image from '@astrojs/image'
import tailwind from '@astrojs/tailwind'
import addClasses from 'rehype-add-classes'
import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
    site: 'https://eliaschen.dev/',
    integrations: [sitemap(), react(), image(), tailwind(), mdx()],
    markdown: {
        extendDefaultPlugins: true,
        rehypePlugins: [
            [
                addClasses,
                {
                    h1: 'text-4xl mt-[10px] font-bold font-mplus',
                    h2: 'text-2xl mt-[10px] font-bold font-mplus',
                    h3: 'text-xl mt-[10px] font-bold font-mplus',
                    h4: 'text-lg mt-[10px] font-bold font-mplus',
                    h5: 'font-bold font-mplus',
                    h6: 'font-bold font-mplus',
                    img: 'border border-slate-500 dark:border-zinc-700 rounded-xl mb-6',
                    p: 'mb-6',
                    a: 'underline underline-offset-2 hover:text-orange-500 decoration-orange-500',
                    li: 'list-disc',
                },
            ],
        ],
    },
})
