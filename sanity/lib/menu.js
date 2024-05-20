// fetchData.js
import client from './client'

export const fetchMenuImages = async () => {
    const query = `*[_type == "menuImages"]{
    name,
    "slug": slug.current,
    "imageUrl": image.asset->url,
    "imageAlt": image.alt,
    "imageTwoUrl": imagetwo.asset->url,
    "imageTwoAlt": imagetwo.alt,
    bio
  }`
    return await client.fetch(query)
}
