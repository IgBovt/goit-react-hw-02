import Description from '../Description/Description';
import Options from '../Options/Options';

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
      <Options />
    </>
  );
};

export default App;
