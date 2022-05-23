import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import TeamsCount from 'src/pages/components/TeamsCount'
import TeamsList from 'src/pages/components/TeamsList'

const Home: NextPage = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center py-2'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex w-full flex-1 flex-col items-center justify-center px-20 text-center'>
        <h1 className='py-4 text-6xl font-bold'>Next.js Demo</h1>

        <p className='mt-3 max-w-2xl text-2xl'>
          This app showcases the different ways to consume the{' '}
          <code className='rounded-md bg-gray-100 p-3 font-mono text-lg'>@myapi/client</code>{' '}
          package in a Next.js application.
        </p>

        <div className='mt-6 flex max-w-4xl flex-col flex-wrap items-center justify-around sm:w-full'>
          <TeamsList />
          <TeamsCount />
        </div>
      </main>

      <footer className='flex h-24 w-full items-center justify-center border-t'>
        <a
          className='flex items-center justify-center gap-2'
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}

export default Home
