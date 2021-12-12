import React from "react";

const Reviews = ({ reviews }) => (
  <div>
    {reviews !== undefined && reviews.length !== 0 ? (
      <ul>
        {console.log(reviews)}
        {reviews.map((review) => (
          <li key={review.id}>
            <h4>Author: {review.author}</h4>
            <p>{review.content}</p>

            <span>{review.character}</span>
          </li>
        ))}
      </ul>
    ) : (
      <h3>Reviews not found!</h3>
    )}
  </div>
);
export default Reviews;
