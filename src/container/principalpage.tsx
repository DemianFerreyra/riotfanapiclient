import React from 'react';
import s from './css/principalpage.module.css';
import Navbar from '../components/navbar/navbar';
import { Filters } from '../interfaces';

const PrincipalPage = () =>{
  return (
    <article className="PrincipalPage">
            <Navbar buttons={["sobre mi"]} filters={[{name: "controlador", imageURL: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt63e21ca9443dce8e/5eb270f43b09c042ddca1353/Controller.png"},{name: "controlador", imageURL: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt63e21ca9443dce8e/5eb270f43b09c042ddca1353/Controller.png"}]}/>
    </article>
  );
}

export default PrincipalPage;
