import React, {FC} from "react";
import s from "./card.module.css";
import { Cards } from '../../interfaces/index';

interface Props {
  cards: Cards;
}
const Card: FC<Props> = ({cards}) =>{
  console.log(cards)
  return (
    <section>
        <img src={cards.pngURL} alt={cards.name}/>
        <h2>{cards.name}</h2>
        <button>ver mas</button>
    </section>
  );
}

export default Card;
