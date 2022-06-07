import Link from 'next/link'

export default function about() {
  return (
    <div>
      <h2>About</h2>
      <Link href='/'>
        <a>Home</a>
      </Link>
    </div>
  )
}
