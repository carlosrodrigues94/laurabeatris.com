import { AiFillGithub, AiFillLinkedin, AiFillYoutube, AiFillTwitterCircle } from 'react-icons/ai'
import { Link, Flex, HStack, VStack } from '@chakra-ui/react'

import { links } from 'constants/links'
import { Heading } from 'components/Base/Heading'
import { Container } from 'components/Layout/Container'
import { GradientLine } from 'components/GradientLine'

const footerLinks = [
  {
    name: 'GitHub',
    href: links.github,
    icon: AiFillGithub
  },
  {
    name: 'Linkedin',
    href: links.linkedin,
    icon: AiFillLinkedin
  },
  {
    name: 'Youtube',
    href: links.youtube,
    icon: AiFillYoutube
  },
  {
    name: 'Twitter',
    href: links.twitter,
    icon: AiFillTwitterCircle
  }
]

export function Footer () {
  return (
    <Flex
      width='full'
      marginTop='auto'
      direction='column'
      borderTopWidth={2}
    >
      <Container>
        <VStack
          as='footer'
          width='full'
          spacing={4}
          paddingY={8}
          alignItems='center'
          justifyContent='center'
        >
          <Heading
            size='xs'
            width='100%'
            maxWidth={420}
            textAlign='center'
          >
            Keep connected with my work by following me on
          </Heading>

          <HStack
            spacing={4}
            alignItems='flex-end'
            justifyContent='center'
          >
            {
              footerLinks.map(({
                name,
                href,
                icon: Icon
              }) => (
                <Link
                  key={href}
                  width={5}
                  height={5}
                  href={href}
                  position='relative'
                  isExternal
                  title={`Go to ${name}`}
                >
                  <Icon size={25} />
                </Link>
              ))
              }
          </HStack>
        </VStack>
      </Container>
      <GradientLine />
    </Flex>
  )
}
