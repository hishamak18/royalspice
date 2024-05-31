// fetchData.js
import client from './client'

export const fetchBlogPosts = async () => {
    const query = `*[_type == "post"]{
    title,
    slug,
    mainImage {
      asset->{
        url
      },
      alt
    },
    body[0].children[0].text
  }`
    return await client.fetch(query)
}
