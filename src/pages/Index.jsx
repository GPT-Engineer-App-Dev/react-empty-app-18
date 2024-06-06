import { Container, Text, VStack, Heading, Button } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";
import { useSupabaseAuth } from "../integrations/supabase/auth.jsx"; // Import useSupabaseAuth
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Index = () => {
  const { session, logout } = useSupabaseAuth(); // Get session and logout from useSupabaseAuth

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to Your New React App</Heading>
        <Text fontSize="xl">This is your starting point. Begin building something amazing!</Text>
        <Button leftIcon={<FaRocket />} colorScheme="teal" size="lg">
          Get Started
        </Button>
      {session ? (
          <Button onClick={logout} colorScheme="red" size="lg">Logout</Button>
        ) : (
          <Button as={Link} to="/login" colorScheme="teal" size="lg">Login</Button>
        )}
      </VStack>
    </Container>
  );
};

export default Index;