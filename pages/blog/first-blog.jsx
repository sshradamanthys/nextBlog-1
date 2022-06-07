import Image from 'next/image'
import Link from 'next/link'

export default function firstBlog() {
  return (
    <div>
      <h2>My First Blog</h2>
      <Link href='/blog/second-blog'>
        <a>Blog 02</a>
      </Link>
      <Image src='/images/01.jpg' alt='MyImg' width={640} height={400} />
    </div>
  )
}
