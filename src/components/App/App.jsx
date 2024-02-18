import Description from '../Description/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';
import { useState, useEffect } from 'react';

const App = () => {
  const getFeedback = () => {
    const state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
    const saveFeedback = window.localStorage.getItem('feedback-result');
    return saveFeedback !== null ? JSON.parse(saveFeedback) : state;
  };

  const [clicks, setClicks] = useState(getFeedback);

  function updateFeedback(feedbackType) {
    setClicks({
      ...clicks,
      [feedbackType]: clicks[feedbackType] + 1,
    });
  }
  useEffect(() => {
    window.localStorage.setItem('feedback-result', JSON.stringify(clicks));
  }, [clicks]);

  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;
  const percents = Math.round(
    ((clicks.good + clicks.neutral) / totalFeedback) * 100
  );

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
          total={totalFeedback}
          percents={percents}
        />
      ) : (
        <Notification text={'No feedback yet'} />
      )}
    </>
  );
};

export default App;
