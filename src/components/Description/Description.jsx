import css from './Description.module.css';
import { GrCafeteria } from 'react-icons/gr';
export default function Description({ title, text }) {
  return (
    <div>
      <h1 className={css.title}>
        {title} <GrCafeteria size="28" className={css.img} />
      </h1>
      <p className={css.text}>{text}</p>
    </div>
  );
}
