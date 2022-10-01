import {useLoaderData, Link} from '@remix-run/react'
import {getPosts} from '~/models/posts.server'
import ListadoPosts from '~/components/listado-posts'

export function meta() {
  return {
      title: 'GuitarLA - Nuestro Blog',
      description: "Blog del mundo de las guitarras"
  } 
}

export async function loader(){
  const posts = await getPosts()
  return posts.data
}

function Blog() {
  const posts = useLoaderData()
  return (
    <>
      <ListadoPosts
          posts={posts}
      />
      <div>
        <Link className='enlace' to={'/'}>Regresar</Link>
      </div>
    </>
     
  )
}

export default Blog