export default function Feedback({ good, bad, neutral, total, percents }) {
  return (
    <div>
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
      <ul>
        <li>Total: {total} feedback</li>
        <li>Positive: {percents}%</li>
      </ul>
    </div>
  );
}
