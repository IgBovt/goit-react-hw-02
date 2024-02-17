import Description from '../Description/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';
import { useState } from 'react';

const App = () => {
  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  function updateFeedback(feedbackType) {
    setClicks({
      ...clicks,
      [feedbackType]: clicks[feedbackType] + 1,
    });
  }

  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;

  return (
    <>
      <Description
        title={'Sip Happens Café'}
        text={`Please leave your feedback about our service by selecting one of the
        options below.`}
      />
      <Options
        names={['good', 'neutral', 'bad']}
        onBtn={key => updateFeedback(key)}
        total={totalFeedback}
        setClicks={setClicks}
      />
      {totalFeedback ? (
        <Feedback
          good={clicks.good}
          bad={clicks.bad}
          neutral={clicks.neutral}
        />
      ) : (
        <Notification text={'No feedback yet'} />
      )}
    </>
  );
};

export default App;
