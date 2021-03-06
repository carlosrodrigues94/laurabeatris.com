import Image from 'next/image'
import { Text, Stack } from '@chakra-ui/react'

import { Heading } from 'components/Base/Heading'

import { PlaceImageProps } from './types'

export function PlaceImage ({
  name,
  endYear,
  imageSrc,
  startYear,
  ...rest
}: PlaceImageProps) {
  return (
    <Stack direction='column' spacing={4} {...rest}>
      <Image
        src={imageSrc}
        alt={`Picture of ${name} city`}
        quality={100}
        width={734}
        height={300}
        className='next-image'
      />

      <Stack spacing={0.5} direction='column'>
        <Heading size='xs' as='strong'>
          {name}
        </Heading>
        <Text as='small' color='gray.300'>
          {startYear} - {endYear ?? 'Present'}
        </Text>
      </Stack>
    </Stack>
  )
}
