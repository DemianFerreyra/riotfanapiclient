import React, {FC, useState} from "react";
import s from "./navbar.module.css";
import { Filters, InputFilters } from '../../interfaces/index';

interface Props {
  buttons: Array<string>
  filters: Array<Filters>
  inputFilters: Array<InputFilters>
}
const Navbar: FC<Props> = ({buttons, filters, inputFilters}) =>{
  const [Show, setShow] = useState({
    show : 0,
    index: -1
  });
  function ShowNavbar(){
    if(Show.show === 100){
      setShow({show: 0, index: -1});
    }else{
      setShow({show: 100, index: 1});
    }
  }
  return (
    <header className={s.navbar}>
      {buttons.map((button) => (
        <h2>{button}</h2>
      ))}
      <button className={s.filterButton} onClick={ShowNavbar}></button>
      <nav className={s.filterBar} id="HiddenNavbar" style={{top: `${Show.show}%`, zIndex: `${Show.index}`}}>
        <div className={s.separator}>
         {
          inputFilters.map((filter) => (
            <select name={filter.name} id={filter.name}>
              {
                filter.options.map((option) =>(
                 <option>{option}</option>
                ))
              }
            </select>
          ))
         }
        </div>
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
