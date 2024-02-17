export default function Options({ names, onBtn, total, setClicks }) {
  return (
    <div>
      <ul>
        {names.map((name, index) => (
          <li key={index}>
            <button type="button" onClick={() => onBtn(name)}>
              {name}
            </button>
          </li>
        ))}
      </ul>
      {total !== 0 && (
        <button
          type="button"
          onClick={() => {
            setClicks({
              good: 0,
              neutral: 0,
              bad: 0,
            });
          }}
        >
          Reset
        </button>
      )}
    </div>
  );
}
