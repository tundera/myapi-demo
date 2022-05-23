import { chakra, Box, Text, Flex, useColorModeValue } from '@chakra-ui/react'
import type { Team } from '@myapi/client'

type TeamCardProps = {
  city: string
  name: string
}

const TeamCard = ({ city, name }: TeamCardProps) => {
  return (
    <Flex p={10} w='full' alignItems='center' justifyContent='center'>
      <Box
        w='xs'
        bg={useColorModeValue('white', 'gray.800')}
        shadow='lg'
        rounded='lg'
        overflow='hidden'
        mx='auto'
      >
        <Box py={5} textAlign='center'>
          <Text
            display='block'
            fontSize='2xl'
            color={useColorModeValue('gray.800', 'white')}
            fontWeight='bold'
          >
            {city} {name}
          </Text>
        </Box>
      </Box>
    </Flex>
  )
}

export default TeamCard
