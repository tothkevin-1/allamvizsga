import React from 'react';
import { Link as RouterLink, Outlet } from 'react-router-dom';
// ITT A LÉNYEG: Minden használt komponenst importálni kell
import { Box, Flex, Link, Button, useColorMode, Container, Heading } from '@chakra-ui/react';

const MainLayout = () => {
  // A Chakra beépített hook-ja a színséma váltásához
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
      {/* A Flex egy div, aminek alapból display: flex van beállítva */}
      <Flex
        as="header"
        align="center"
        justify="space-between"
        p={4}
        borderBottomWidth="1px"
      >
        <Heading as="h2" size="lg">
          {/* A sima Link nem működik Router Link-ként, ezért kell az "as" prop */}
          <Link as={RouterLink} to="/">Oktatási Platform</Link>
        </Heading>
        <Box>
          <Link as={RouterLink} to="/" mr={4}>Főoldal</Link>
          <Link as={RouterLink} to="/dashboard" mr={4}>Dashboard</Link>
          <Link as={RouterLink} to="/login" mr={6}>Bejelentkezés</Link>
          <Button onClick={toggleColorMode} size="sm">
            {colorMode === 'light' ? 'Sötét' : 'Világos'} mód
          </Button>
        </Box>
      </Flex>

      {/* A Container középre igazítja a tartalmat és maximális szélességet ad neki */}
      <Container maxW="container.xl" py={8}>
        <Outlet />
      </Container>

      <Box as="footer" p={4} mt={8} textAlign="center" borderTopWidth="1px">
        <p>&copy; 2025 Diplomamunka</p>
      </Box>
    </Box>
  );
};

export default MainLayout;