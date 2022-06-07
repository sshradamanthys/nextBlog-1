import Image from 'next/image'
import Link from 'next/link'

export default function secondBlog() {
  return (
    <div>
      <h2>My Second Blog</h2>
      <Link href='/blog/first-blog'>
        <a>Blog 01</a>
      </Link>
      <Image src='/images/02.jpg' alt='MyImg' width={640} height={400} />
    </div>
  )
}
