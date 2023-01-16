import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (
    <Box bg="white" w="100%" p={4} color="grey" borderRadius="15px;">
      <VStack spacing={4} align="stretch">
        <Image src={imageSrc} borderRadius="15px;" alt="Dan Abramov" />
        <Heading fontSize="lg" color={"black"}>
          {title}
        </Heading>
        <Text fontSize="md">{description}</Text>
        <HStack spacing={4} direction="row">
          <Text fontSize="md">See More</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </Box>
  );
};

export default Card;
