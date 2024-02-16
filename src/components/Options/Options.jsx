import { useState } from 'react';

export default function Options({ names }) {
  const [clicks, setClicks] = useState(0);

  function updateFeedback() {
    console.log('message');
  }
  return (
    <ul>
      {names.map((name, index) => (
        <li key={index}>
          <button type="button" onClick={updateFeedback}>
            {name}
          </button>
        </li>
      ))}
    </ul>
  );
}
