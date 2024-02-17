import css from './Feedback.module.css';
import { AiOutlineLike } from 'react-icons/ai';
import { AiOutlineDislike } from 'react-icons/ai';
import { BsEmojiNeutral } from 'react-icons/bs';

export default function Feedback({ good, bad, neutral, total, percents }) {
  return (
    <div>
      <ul className={css.list}>
        <li>
          <p>
            <AiOutlineLike className={css.img} size="12" />
            Good: {good}
          </p>
        </li>
        <li>
          <p>
            <BsEmojiNeutral className={css.img} size="12" />
            Neutral: {neutral}
          </p>
        </li>
        <li>
          <p>
            <AiOutlineDislike className={css.img} size="12" />
            Bad: {bad}
          </p>
        </li>
      </ul>
      <ul className={css.list}>
        <li className={css.listResult}>Total: {total} feedbacks</li>
        <li className={css.listResult}>Positive: {percents}%</li>
      </ul>
    </div>
  );
}
