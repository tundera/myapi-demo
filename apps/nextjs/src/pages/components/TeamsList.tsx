import useSWR from 'swr'

import myapi from 'src/lib/myapi'

const fetcher = () => myapi.Teams()

const TeamsList = () => {
  const { data } = useSWR('/api/teams', fetcher)

  return (
    <div className='mt-6 w-full rounded-xl border p-6 text-left'>
      <h3 className='text-2xl font-bold'>Teams List</h3>
      <p className='text-md mt-4 italic'>
        This data is directly executed on the client using the{' '}
        <code className='rounded-md bg-gray-100 p-2 font-mono'>@myapi/client</code> package.
      </p>
      <ul className='mt-4 text-xl'>
        {data?.teams.edges.map((team) => (
          <li key={team?.node.name}>
            <span className='font-bold'>
              {team?.node.city} {team?.node.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TeamsList
