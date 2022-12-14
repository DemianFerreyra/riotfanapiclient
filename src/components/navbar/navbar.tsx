import {FC, useState} from "react";
import s from "./navbar.module.css";
import { Filters } from '../../interfaces/index';
import store from '../../redux/store';
import { FilterBy, OrderBy, ResetFilters } from "../../redux/actions/index"
import { useSelector } from "react-redux";
import { Store } from "../../redux/reducer";
import { compareFn } from "../../helpers/index"

interface Props {
  buttons: Array<string>
  filters: Array<Filters>
}
const Navbar: FC<Props> = ({buttons, filters}) =>{
  const [Show, setShow] = useState({
    show : 0,
    index: -1
  });  
  const [Role, setRole] = useState(Array<String>);  
  const filteredChars = useSelector(
    (state: Store) => state.characterReducer.filteredChars
  );

  function ShowNavbar(){
    if(Show.show === 100){
      setShow({show: 0, index: -1});
    }else{
      setShow({show: 100, index: -1});
    }
  }
  const FilterButton = (e:any) =>{
    let roles : Array<String> = [];
    if(Role.includes(e.target.alt)){
      roles = Role.filter(el => el !== e.target.alt)
      setRole(roles);
    }else{
      roles = [...Role, e.target.alt];
      setRole(roles);
    }
    store.dispatch(FilterBy(roles));
  }
  const OrderButton = (e:any) =>{
    e.preventDefault();
    store.dispatch(ResetFilters());
    store.dispatch(OrderBy(e.target.value === "ascendant" ? filteredChars.sort(compareFn) : filteredChars.sort(compareFn).reverse()));
  }



  return (
    <header className={s.navbar}>
      {buttons.map((button, index) => (
        <h2 key={index}>{button}</h2>
      ))}
      <button className={s.filterButton} onClick={ShowNavbar}></button>
      <nav className={s.filterBar} id="HiddenNavbar" style={{top: `${Show.show}%`, zIndex: `${Show.index}`}}>
        <div className={s.separator}>
         <select onChange={OrderButton} defaultValue="order by...">
           <option disabled>order by...</option>
           <option value="ascendant">Ascendant</option>
           <option value="descendant">Descendant</option>
         </select>
        </div>
        <section className={s.separator}>
        {filters.map((filter, index) => 
          Role.includes(filter.name)?(<img src={filter.imageURL} alt={filter.name} onClick={FilterButton} key={index} style={{backgroundColor: "rgb(60,60,60)"}}/>):(<img src={filter.imageURL} alt={filter.name} onClick={FilterButton} key={index} style={{backgroundColor: "darkgray"}}/>)
        )}
        </section>
      </nav>
    </header>
  );
}

export default Navbar;
