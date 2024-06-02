import client from './client'

export const fetchBlogPosts = async () => {
  const query = `*[_type == "post"]{
    title,
    description,
    "slug": slug.current,
    mainImage {
      asset->{
        url
      },
      alt
    },
    body
  }`
  try {
    return await client.fetch(query)
  } catch (error) {
    console.error('Error fetching posts:', error)
  }
}
