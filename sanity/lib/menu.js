// fetchData.js
import client from './client'

export const fetchMenuImages = async () => {
  const query = `*[_type == "menuImages"]{
    name,
    "slug": slug.current,
    "images": images[]{
      "url": asset->url,
      alt
    },
    description
  }`
  return await client.fetch(query)
}
