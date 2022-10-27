import React, { FC, useState } from "react";
import s from "./navbar.module.css";
import { Filters, InputFilters } from "../../interfaces/index";
import store from "../../redux/store";
import { FilterBy } from "../../redux/actions/index";

interface Props {
  buttons: Array<string>;
  filters: Array<Filters>;
  inputFilters: Array<InputFilters>;
}
const Navbar: FC<Props> = ({ buttons, filters, inputFilters }) => {
  const [Show, setShow] = useState({
    show: 0,
    index: -1,
  });

  function ShowNavbar() {
    if (Show.show === 100) {
      setShow({ show: 0, index: -1 });
    } else {
      setShow({ show: 100, index: 1 });
    }
  }
  const FilterButton = (e: any) => {
    e.preventDefault();
    store.dispatch(FilterBy(e.target.alt));
  };

  return (
    <header className={s.navbar}>
      {buttons.map((button, index) => (
        <h2 key={index}>{button}</h2>
      ))}
      <button className={s.filterButton} onClick={ShowNavbar}></button>
      <nav
        className={s.filterBar}
        id="HiddenNavbar"
        style={{ top: `${Show.show}%`, zIndex: `${Show.index}` }}
      >
        <div className={s.separator}>
          {inputFilters.map((filter, index) => (
            <select name={filter.name} id={filter.name} key={index}>
              {filter.options.map((option, index) => (
                <option key={index}>{option}</option>
              ))}
            </select>
          ))}
        </div>
        <div className={s.separator}>
          {filters.map((filter, index) => (
            <img
              src={filter.imageURL}
              alt={filter.name}
              onClick={FilterButton}
              key={index}
            />
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
