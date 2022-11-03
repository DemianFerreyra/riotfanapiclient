import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllCharacters } from "../redux/actions";
import s from "./css/principalpage.module.css";
import Card from "../components/card/card";
import Navbar from "../components/navbar/navbar";
import store from "../redux/store";
import { Store } from "../redux/reducer";
import { Cards } from "../interfaces";

const PrincipalPage = () => {
  const dispatch = useDispatch();
  const allCharacters = useSelector(
    (state: Store) => state.characterReducer.filteredChars
  );

  useEffect(() => {
    store.dispatch(GetAllCharacters());
  }, [dispatch]);

  return (
    <article className={s.PrincipalPage}>
      <Navbar
        buttons={["sobre mi"]}
        filters={[
          {
            name: "controlador",
            imageURL:
              "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt63e21ca9443dce8e/5eb270f43b09c042ddca1353/Controller.png",
          },
          {
            name: "iniciador",
            imageURL:
              "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt2965c8a8dce0467d/5eaa0685e6f6795e530a1cbe/Initiator.png",
          },
          {
            name: "duelista",
            imageURL:
              "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt213441880cf2cdf5/5eaa06851b51e36d7c1b61d4/Duelist.png",
          },
          {
            name: "centinela",
            imageURL:
              "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt72ffc2e48d4a7a58/5eaa06852b79652f27c31ff6/Sentinel.png",
          },
        ]}
      />
      {allCharacters.map((char: Cards, index: number) => (
        <Card cards={char} key={index} />
      ))}
    </article>
  );
};

export default PrincipalPage;
