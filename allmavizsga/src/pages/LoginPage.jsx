import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { 
  Box, 
  Button, 
  FormControl, 
  FormLabel, 
  Input, 
  Heading, 
  Stack 
} from '@chakra-ui/react';

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Bejelentkezés...');
    login({ email: 'test@example.com' });
    navigate('/dashboard');
  };

  return (
    // A Box egy konténer, aminek megadhatunk méretet, árnyékot, stb.
    <Box 
      maxW="md" // Maximális szélesség
      mx="auto" // Margin X auto -> középre igazítás
      mt={10}   // Felső margó
      p={8}
      borderWidth={1}
      borderRadius="lg"
      boxShadow="lg"
    >
      <Heading as="h1" size="lg" textAlign="center" mb={6}>
        Bejelentkezés
      </Heading>
      <form onSubmit={handleLogin}>
        {/* A Stack segít az elemeket egymás alá rendezni, egységes térközzel */}
        <Stack spacing={4}>
          {/* A FormControl szépen összekapcsolja a címkét és a beviteli mezőt */}
          <FormControl isRequired>
            <FormLabel>Email cím</FormLabel>
            <Input type="email" placeholder="pelda@iskola.hu" />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Jelszó</FormLabel>
            <Input type="password" placeholder="••••••••" />
          </FormControl>
          
          <Button type="submit" colorScheme="teal" size="lg" fontSize="md">
            Belépés
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default LoginPage;