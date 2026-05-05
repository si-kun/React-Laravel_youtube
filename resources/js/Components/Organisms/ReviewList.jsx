import { Box } from '@chakra-ui/react'
import React from 'react'
import ReviewItem from '../Molecules/ReviewItem'

const ReviewList = ({reviews}) => {
  return (
    <Box>
        {reviews.map((review) => (
            <ReviewItem key={review.id} review={review} />
        ))}
    </Box>
  )
}

export default ReviewList