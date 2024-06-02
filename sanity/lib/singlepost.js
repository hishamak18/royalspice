import client from './client';

export const fetchBlogPostBySlug = async (slug) => {
    const query = `*[_type == "post" && slug.current == $slug]{
    title,
    "slug": slug.current,
    mainImage {
      asset->{
        url
      },
      alt
    },
    body
  }`;

    const params = { slug };

    try {
        const posts = await client.fetch(query, params);
        return posts[0]; // Assuming there's only one post with this slug
    } catch (error) {
        console.error('Error fetching post:', error);
        return null;
    }
};
