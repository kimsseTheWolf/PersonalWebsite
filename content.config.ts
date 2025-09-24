import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        projects: defineCollection({
            type: 'page',
            source: 'projects/**/*.md',
            schema: z.object({
                title: z.string(),
                description: z.string(),
                date: z.coerce.date(),
                status: z.enum(['not_started', 'ongoing', 'finished']).default('ongoing'),
                tags: z.array(z.string()),
            })
        }),
        blogs: defineCollection({
            type: 'page',
            source: 'blogs/*.md'
        })
    }
})
