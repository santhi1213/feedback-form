// src/components/FeedbackList.js
import React from 'react';

const FeedbackList = ({ feedbacks }) => {
  return (
    <div>
      <h2>Feedback List</h2>
      {feedbacks.length === 0 ? (
        <p>No feedback yet!</p>
      ) : (
        <ul>
          {feedbacks.map((fb, index) => (
            <li key={index}>
              <strong>{fb.name}</strong>: {fb.feedback}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FeedbackList;
