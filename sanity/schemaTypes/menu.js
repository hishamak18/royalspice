export const menuImages = {
    name: 'menuImages',
    title: 'Menu',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Branch Name',
            description: 'e.g., Thonichal Branch or Koyileri Branch',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            description: 'Set to thonichal-menu or koyileri-menu',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
        },
        {
            name: 'images',
            title: 'Menu Images',
            description: 'Add all pages of the menu for this branch',
            type: 'array',
            of: [
                {
                    type: 'image',
                    options: {
                        hotspot: true,
                    },
                    fields: [
                        {
                            name: 'alt',
                            type: 'string',
                            title: 'Alternative Text',
                        }
                    ]
                }
            ]
        },
        {
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [
                {
                    title: 'Block',
                    type: 'block',
                    styles: [{ title: 'Normal', value: 'normal' }],
                    lists: [],
                },
            ],
        },
    ],
    preview: {
        select: {
            title: 'name',
            media: 'images.0',
        },
    },
}
