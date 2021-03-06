import { InferGetServerSidePropsType } from 'next'
import { VStack } from '@chakra-ui/react'

import { Heading } from 'components/Base/Heading'
import { Paragraph } from 'components/Base/Paragraph'
import { HighlightLink } from 'components/Base/HighlightLink'
import { getPodcastEpisodes } from 'graphql/queries/getPodcastEpisodes'
import { links } from 'constants/links'
import { ContentList } from 'components/ContentList'
import { ChakraProvider } from 'providers/ChakraProvider'

export async function getServerSideProps ({ req }) {
  try {
    const podcastEpisodes = await getPodcastEpisodes()

    return {
      props: {
        podcastEpisodes,
        cookies: req.headers.cookie ?? ''
      }
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)

    return {
      props: {}
    }
  }
}

export default function Podcast ({
  cookies,
  podcastEpisodes
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <ChakraProvider cookies={cookies}>
      <VStack
        width='full'
        paddingTop={5}
        paddingBottom={10}
        alignItems='flex-start'
      >
        <Heading as='h2'>Podcast</Heading>

        <Paragraph variant='regular'>
          Me and my friend <HighlightLink href='https://br.linkedin.com/in/joseph-oliveira-294a19165'>Joseph Oliveira</HighlightLink>,
          created a podcast called <HighlightLink href={links.podcast}>useCast</HighlightLink>, in order to share knowledge about the world of web development.
          The podcast doesn't only cover technical aspects but also bring content related to soft skills and career.
        </Paragraph>

        <VStack
          width='full'
          alignItems='flex-start'
          paddingTop={10}
        >
          <Heading as='h2' size='sm'>Last Episodes</Heading>

          <Paragraph variant='regular'>Coming soon 🚧</Paragraph>

          <ContentList contentList={podcastEpisodes} />
        </VStack>
      </VStack>
    </ChakraProvider>
  )
}
