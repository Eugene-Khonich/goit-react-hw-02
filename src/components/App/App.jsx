import './App.module.css';
import { useEffect, useState } from 'react';
import Description from '../Description/Description';
import Option from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';

const initialState = { good: 0, neutral: 0, bad: 0 };

const App = () => {
  const [feedbacks, setFeedbacks] = useState(() => {
    const storageFeedback = localStorage.getItem('feedbackValue');
    if (storageFeedback !== null) {
      return JSON.parse(storageFeedback);
    }
    return initialState;
  });

  const updateFeedback = feedbackType => {
    setFeedbacks({ ...feedbacks, [feedbackType]: feedbacks[feedbackType] + 1 });
  };

  const resetFeedback = () => {
    setFeedbacks(initialState);
  };

  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;

  const positiveFeedback = Math.round((feedbacks.good / totalFeedback) * 100);

  useEffect(() => {
    localStorage.setItem('feedbackValue', JSON.stringify(feedbacks));
  }, [feedbacks]);

  return (
    <div>
      <Description />
      <Option
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback ? (
        <Feedback
          feedbacks={feedbacks}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
};

export default App;
