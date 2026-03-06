
const { createClient } = require('@sanity/client');

const client = createClient({
    projectId: 'be9i5ty1',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2023-05-03',
});

async function debugPost() {
    const query = `*[_type == "post" && title match "Why D2C Brands*"][0] {
    _id,
    title,
    mainImage
  }`;

    try {
        const post = await client.fetch(query);
        console.log(JSON.stringify(post, null, 2));
    } catch (error) {
        console.error('Error fetching post:', error);
    }
}

debugPost();
