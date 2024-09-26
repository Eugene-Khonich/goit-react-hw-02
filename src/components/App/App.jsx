import "./App.module.css";
import Description from "../Description/Description";
import Option from "../Options/Options";
import Feedback from "../Feedback/Feedback";

const App = () => {
  // const [feedbacks, setFeedbacks] = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };
  return (
    <div>
      <Description />
      <Option />
      <Feedback />
    </div>
  );
};

export default App;
