import request from "./query";

const ALL_POSTS_QUERY = `
  query allPosts {
    allPosts {
      id
      slug
      title
      content {
        value
      }
    }
  }
`

const getPost = async () => {
  const result = await request({ query: ALL_POSTS_QUERY })
  return result.allPosts
}

export {
  getPost,
}