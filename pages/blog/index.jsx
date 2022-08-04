import Layout from '../../components/Layout'

export default function index({ data }) {
  if (!data) return
  return (
    <Layout title='Blog | Next.js'>
      <h2>Blog</h2>
      {data
        .filter((d) => d.id <= 20)
        .map((d) => (
          <div key={d.id}>
            <h3>{d.title}</h3>
            <p>{d.body}</p>
          </div>
        ))}
    </Layout>
  )
}

export async function getStaticProps() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return {
      props: { data }
    }
  } catch (error) {
    console.log(error)
  }
}
