import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import { ChakraProvider } from '@chakra-ui/react';


export default function Home() {
  return (
    <main>
      <ChakraProvider>
     <NavBar />
     <Hero />
     </ChakraProvider>
    </main>
  )
}
