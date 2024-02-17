import css from './Options.module.css';

export default function Options({ names, onBtn, total, setClicks }) {
  return (
    <div>
      <ul className={css.list}>
        {names.map((name, index) => (
          <li key={index}>
            <button
              className={css.btn}
              type="button"
              onClick={() => onBtn(name)}
            >
              {name}
            </button>
          </li>
        ))}
      </ul>
      {total !== 0 && (
        <button
          className={css.btnReset}
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
