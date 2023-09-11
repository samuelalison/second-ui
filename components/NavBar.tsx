"use client"
import {
  Container,
  Box,
  Image,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { AiTwotonePhone } from 'react-icons/ai'
import Link from 'next/link';

interface Props {
  children: React.ReactNode
}

// const Links = ['Home', 'About', 'Contact']


const Links = [
  {
    id: 1,
    name: "Home",
    link: 'index.html'
  },
  {
    id: 2,
    name: "What We Do",
    link: '#'
  },
  {
    id: 3,
    name: "Who We Support",
    link: '#'
  },
  {
    id: 4,
    name: "Services",
    link: '#'
  },
  {
    id: 5,
    name: "Contact Us",
    link: '#'
  },
]




const NavLink = (props: Props) => {
  const { children } = props

  return (
    <Flex
      as="a"
      px={2}
      py={1}
      justifyContent={'center'}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'#'}>
      {children}
    </Flex>
  )
}

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
    <Container
    // p={{base: '1rem',   lg:'2rem 8rem'}}
    maxW={'1140px'}
    >
     <HStack
     mt={'4rem'}
     display={'flex'}
     flexDirection={{base: 'column', lg: 'row'}}
     justifyContent={'space-between'}
     alignItems={'center'}
    //  p={{base: '1rem',   lg:'2rem 8rem'}}
     >
      
        <Box
        mb={{base: '1rem'}}
        >
           <Image src='images/Link → Integra-Logo-Black.png.png'/>
        </Box>
        <Box
        // display={{base: 'none'}}
        display={{base: 'none', lg:'flex'}}
        alignItems={'center'}
        gap={'1rem'}
        > 
        <Text
        fontSize={'17px'}
        lineHeight={'30px'}

        // wordBreak={'normal'}
        >Follow Us:</Text>
        <Link href="#">
        <FaFacebookSquare/>
        </Link>
        <Link href="#">
        <FaInstagram/>
        </Link>
        <Link href="#">
        <FaXTwitter/>
        </Link>
        </Box>
        <Box>
          <Box
          display={'flex'}
          alignItems={'center'}
          outline={'solid 1px #70abb6'}
          borderRadius={'5px'}
          backgroundColor={'#03b6cb'}
          p={'16px 36px'}
          gap={'2px'}
          >
            <Box
            color={'#fff'}
            >
            <AiTwotonePhone />
            </Box>
            <Box 
            as='span'
            color={'#fff'}
            >
           01902 858131
           </Box>
          </Box>
        </Box>
        </HStack> 

        </Container>

         <Box
         boxShadow={'0px 4px 6px 0px #00000040'}
         backgroundColor={'#f8f9fa'}
         >
          <Container
            maxW={'1140px'}
          >
        <Flex
        display={{base: 'none', lg: 'flex'}}
        p={{base: '12px 15px 15px 0', lg: '0'}}
        alignItems={"center"}
        >
        {Links.map((link) => (
        <NavLink key={link.id}>{link.name}</NavLink>
      ))}
          </Flex>


          <Flex
          mt={'1rem'}
          p={{base: '8px', lg: '0'}}
          justifyContent={'center'}
          >
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ lg: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            
          />
</Flex>

           {isOpen ? (
          <Box pb={4} display={{ lg: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.id}>{link.name}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
          </Container>
          </Box>
    </>
  )
}
