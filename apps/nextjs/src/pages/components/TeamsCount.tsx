import useSWR from 'swr'

const fetcher = () => fetch('/api/teams').then((res) => res.json())

const TeamsCount = () => {
  const { data } = useSWR('/api/teams', fetcher)

  console.log(data)

  return (
    <div className='mt-6 w-full rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600'>
      <h3 className='text-2xl font-bold'>Teams Count</h3>
      <p className='mt-4 text-xl'>Total Teams: {data?.teams?.edges?.length ?? 0}</p>
      <p className='text-md mt-4 italic'>
        This data is fetched on the client via the API route{' '}
        <code className='rounded-md bg-gray-100 p-2 font-mono'>/api/teams</code>. The API route
        execute the same <code className='rounded-md bg-gray-100 p-2 font-mono'>@myapi/client</code>{' '}
        package in a Node.js runtime on the server.
      </p>
    </div>
  )
}

export default TeamsCount
