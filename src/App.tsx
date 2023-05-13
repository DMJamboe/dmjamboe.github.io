import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Heading,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl" bgGradient='linear(to-r, cyan.300, purple.500)'>
      <Grid minH="100vh" padding='10%' p={3} alignItems='start'>
        <VStack align='start' height='50%' width='80%'>
          <Heading as='h1' size='4xl' noOfLines={1} color='white'>
            My Portfolio
          </Heading>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
)
