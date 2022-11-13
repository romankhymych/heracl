import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Heracl</title>
        <meta name="description" content="Heracl app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to Heracl</h1>
      </main>

      <footer>
        <a
          href="https://www.heracl.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Heracl
        </a>
      </footer>
    </div>
  )
}
