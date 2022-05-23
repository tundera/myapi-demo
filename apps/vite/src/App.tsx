import { useState } from 'react'
import { Stack, Flex, Heading, Text, Code, SimpleGrid } from '@chakra-ui/react'
import useSWR from 'swr'

import TeamCard from './components/TeamCard'
import myapi from './lib/myapi'

const fetcher = () => myapi.Teams()

function App() {
  const { data } = useSWR('/api/teams', fetcher)

  return (
    <Flex width='full' minHeight='100vh' bgColor='black' align='center' justify='center'>
      <Stack align='center' spacing='8'>
        <Stack align='center' spacing='2'>
          <Heading as='h1' fontSize='6xl' fontWeight='extrabold' color='white'>
            Vite Demo
          </Heading>
          <Text fontSize='lg' fontStyle='italic' color='white'>
            Example integration of <Code mx='1.5'>@myapi/client</Code> in a Vite application.
          </Text>
        </Stack>

        <SimpleGrid columns={2} spacing={10}>
          {data?.teams.edges.map((team) => {
            return (
              <TeamCard
                key={team?.node.name}
                city={team?.node.city as string}
                name={team?.node.name as string}
              />
            )
          })}
        </SimpleGrid>
      </Stack>
    </Flex>
  )
}

export default App
