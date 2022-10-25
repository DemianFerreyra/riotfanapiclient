import {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllCharacters } from '../redux/actions';
import s from './css/principalpage.module.css';
import Card from '../components/card/card';
import Navbar from '../components/navbar/navbar';
import store from '../redux/store';
import { Store } from '../redux/reducer';
import { Cards } from '../interfaces';


const PrincipalPage = () =>{
  const dispatch = useDispatch;
  const allCharacters = useSelector((state: Store) => state.characterReducer.characters);
  useEffect(() =>{
    store.dispatch(GetAllCharacters());
  }, [dispatch])
  return (
    <article className="PrincipalPage">
            <Navbar buttons={["sobre mi"]} filters={[{name: "controlador", imageURL: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt63e21ca9443dce8e/5eb270f43b09c042ddca1353/Controller.png"},{name: "controlador", imageURL: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt63e21ca9443dce8e/5eb270f43b09c042ddca1353/Controller.png"}]}/>
            {
              allCharacters.map((char : Cards) =>(
                <Card cards={char}/>
              ))
            }
            
    </article>
  );
}

export default PrincipalPage;
