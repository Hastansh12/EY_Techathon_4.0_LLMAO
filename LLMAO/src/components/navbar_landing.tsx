import React from 'react';
import {
  Box,
  Flex,
  Image,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorMode,
  Stack,
  useColorModeValue,
  Icon,
  Center,
  Link
} from '@chakra-ui/react';
import { PhoneIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

import Logo from '../assets/images/Logo2.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignIn, faUserPlus, faIdCard } from '@fortawesome/free-solid-svg-icons';
export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box bg={useColorModeValue('rgba(0,0,0,0)', 'rgba(0,0,0,0)')} px={4} shadow={'lg'}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box >
            <Link href="/">
              <Image src={Logo} mt={2} maxH={'20vh'} alt="Logo" />
            </Link>
          </Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Box
                as="a"
                px={2} py={1} borderRadius={'md'} fontSize={18} rounded={'md'} _hover={{ textDecoration: 'none', transform: "scale(1.05)", color: 'white', bg: useColorModeValue('purple.500', 'purple.600'), }} transition="transform 0.3s" _active={{ bg: 'purple.500' }} href={'/login'}
              >
                <FontAwesomeIcon style={{ marginRight: "6px", marginBottom: "1px" }} icon={faSignIn} />
                <b>Login</b>
              </Box>
              <Box
                as="a"
                px={2} py={1} borderRadius={'md'} fontSize={18} rounded={'md'} _hover={{ textDecoration: 'none', transform: "scale(1.05)", color: 'white', bg: useColorModeValue('purple.500', 'purple.600'), }} transition="transform 0.3s" _active={{ bg: 'purple.500' }} href={'/signup'}
              >
                <FontAwesomeIcon style={{ marginRight: "6px", marginBottom: "1px" }} icon={faUserPlus} />
                <b>Sign Up</b>
              </Box>
              <Box
                as="a"
                px={2} py={1} borderRadius={'md'} fontSize={18} rounded={'md'} _hover={{ textDecoration: 'none', transform: "scale(1.05)", color: 'white', bg: useColorModeValue('purple.500', 'purple.600'), }} transition="transform 0.3s" _active={{ bg: 'purple.500' }} href={'/login'}
              >
                <FontAwesomeIcon style={{ marginRight: "6px", marginBottom: "1px" }} icon={faIdCard} />
                <b>About Us</b>
              </Box>
              <Box
                as="a"
                px={2} py={1} borderRadius={'md'} fontSize={18} rounded={'md'} _hover={{ textDecoration: 'none', transform: "scale(1.05)", color: 'white', bg: useColorModeValue('purple.500', 'purple.600'), }} transition="transform 0.3s" _active={{ bg: 'purple.500' }} href={'/contact'}
              >
                <PhoneIcon mr={2} mb={1} ></PhoneIcon>
                <b>Contact Us</b>
              </Box>
              <Box>
                {/* <Button onClick={toggleColorMode} _hover={{bg: useColorModeValue('purple.500', 'purple.600'),transform: "scale(1.05)"}} mr={4} transition="transform 0.3s" bg={'rgba(0,0,0,0)'}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button> */}
              </Box>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
