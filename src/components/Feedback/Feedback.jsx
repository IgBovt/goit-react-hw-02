export default function Feedback({ good, bad, neutral }) {
  return (
    <ul>
      <li>
        <p>Good:{good}</p>
      </li>
      <li>
        <p>Neutral:{neutral}</p>
      </li>
      <li>
        <p>Bad:{bad}</p>
      </li>
    </ul>
  );
}
