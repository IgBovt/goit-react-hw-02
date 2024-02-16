import Description from '../Description/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';

const App = () => {
  const state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  return (
    <>
      <Description
        title={'Sip Happens Café'}
        text={`Please leave your feedback about our service by selecting one of the
        options below.`}
      />
      <Options names={['Good', 'Neutral', 'Bad', 'Reset']} />
      <Feedback
        good={state.good}
        bad={state.bad}
        neutral={state.neutral}
      />{' '}
    </>
  );
};

export default App;
