import React from 'react'

function ReviewComponent(review) {
  return (
    <div className='review-component'>
      <div>&lt;</div>
      <div className='review-text'>{review.review}</div>
      <div>&gt;</div>
    </div>
  )
}

export default ReviewComponent
