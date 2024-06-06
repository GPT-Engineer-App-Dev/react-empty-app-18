import { Container, Box, Heading, VStack } from "@chakra-ui/react";
import { SupabaseAuthUI } from "../integrations/supabase/auth.jsx"; // Import SupabaseAuthUI

const Login = () => {
  return (
    <Container centerContent maxW="container.sm" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Box width="100%" p={4} borderWidth={1} borderRadius="lg" boxShadow="lg">
        <VStack spacing={4}>
          <Heading as="h1" size="lg">Login</Heading>
          <SupabaseAuthUI /> {/* Use the SupabaseAuthUI component */}
        </VStack>
      </Box>
    </Container>
  );
};

export default Login;