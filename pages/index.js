import styles from '../styles/Home.module.css'
import { StructuredText } from 'react-datocms';
import { getPost } from './lib/api/api'

export default function Home({ data }) {
  console.log(data)
  return (
    <div className={styles.container}>
      {data.map(post => {
        <div key={post.id}>
          <h6>{post.title}</h6>
        </div>
      })}
    </div>
  )
}

export async function getStaticProps() {
  const data = await getPost();
  return ({
    props: {
      data
    }
  })
}
