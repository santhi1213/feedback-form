// src/components/FeedbackForm.js
import React, { useState } from 'react';

const FeedbackForm = ({ addFeedback }) => {
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && feedback) {
      addFeedback({ name, feedback });
      setName('');
      setFeedback('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Submit your Feedback</h2>
      <div>
        <label>Name</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Your name" 
          required 
        />
      </div>
      <div>
        <label>Feedback</label>
        <textarea 
          value={feedback} 
          onChange={(e) => setFeedback(e.target.value)} 
          placeholder="Your feedback" 
          required 
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FeedbackForm;
