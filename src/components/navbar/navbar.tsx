import React, {FC} from "react";
import s from "./navbar.module.css";
import { Filters } from '../../interfaces/index';

interface Props {
  buttons: Array<string>
  filters: Array<Filters>
}
const Navbar: FC<Props> = ({buttons, filters}) =>{
  return (
    <header className={s.navbar}>
      {buttons.map((button) => (
        <h2>{button}</h2>
      ))}
      <button className={s.filterButton}></button>
      <nav className={s.filterBar}>
        <div className={s.separator}>
        {filters.map((filter) => (
        <img src={filter.imageURL} alt={filter.name} />
        ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
