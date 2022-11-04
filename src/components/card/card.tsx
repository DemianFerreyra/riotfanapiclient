import { FC } from "react";
import s from "./card.module.css";
import { Cards } from '../../interfaces/index';
import { Link } from "react-router-dom";

interface Props {
  cards: Cards;
}
const Card: FC<Props> = ({ cards }) => {
  return (
    <section className={s.Card}>
      <img src={cards.pngURL} alt={cards.name} />
      <h2>{cards.name}</h2>
      <Link to={`/${cards.id}`}>
        <button>ver mas</button>
      </Link>
    </section>
  );
}

export default Card;
