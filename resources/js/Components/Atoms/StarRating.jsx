import { StarIcon } from '@chakra-ui/icons';
import { HStack } from '@chakra-ui/react';
import React from 'react'

const StarRating = ({rating}) => {
  return (
      <HStack>
          {Array(5)
              .fill("")
              .map((_, index) => (
                  <StarIcon
                      key={index}
                      color={index < rating ? "yellow.400" : "gray.300"}
                  />
              ))}
      </HStack>
  );
}

export default StarRating