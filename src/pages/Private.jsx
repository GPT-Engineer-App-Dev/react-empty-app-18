import { Container, Heading, Text, VStack } from "@chakra-ui/react";
import { useSupabaseAuth } from "../integrations/supabase/auth.jsx";
import { Navigate } from "react-router-dom";

const Private = () => {
  const { session } = useSupabaseAuth();

  if (!session) {
    return <Navigate to="/login" />;
  }

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Protected Page</Heading>
        <Text fontSize="xl">This page is only accessible to authenticated users.</Text>
      </VStack>
    </Container>
  );
};

export default Private;