import client from './client'

export const fetchGallery = async () => {
    const query = `*[_type == "gallery"]{
        title,
        "slug": slug.current,
        images[]{
            "imageUrl": asset->url,
            "imageAlt": alt
        },
        description
    }`
    return await client.fetch(query)
}
