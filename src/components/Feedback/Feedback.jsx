import css from "./Feedback.module.css";

const Feedback = ({ feedbacks, totalFeedback, positiveFeedback }) => {
  return (
    <ul className={css.list}>
      <li>Good: {feedbacks.good}</li>
      <li>Neutral: {feedbacks.neutral}</li>
      <li>Bad: {feedbacks.bad}</li>
      <li>Total: {totalFeedback}</li>
      <li>Positive: {positiveFeedback} %</li>
    </ul>
  );
};

export default Feedback;
