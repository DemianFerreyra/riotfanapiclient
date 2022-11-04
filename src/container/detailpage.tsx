import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetDetail } from "../redux/actions";
import s from "./css/detailpage.module.css";
import store from "../redux/store";
import { Store } from "../redux/reducer";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const id = useParams();
  const dispatch = useDispatch();
  const Character = useSelector(
    (state: Store) => state.characterReducer.character
  );

  useEffect(() => {
    store.dispatch(GetDetail(id));
  }, [dispatch]);

  return (
    <article className={s.DetailPage}>
      <article className={s.imagesZone}>
        <section className={s.characterImg}>
          <img src={Character[0].pngURL} alt={Character[0].name} />
          <h1>AGENTE</h1>
          <h2>{Character[0].name}</h2>
        </section>
        <section className={s.carousel}>
          {
            Character[0].images.map((img: any, index: any) => (
              <img src={img} alt={`${Character[0].name}_${index}`} />
            ))
          }
        </section>
      </article>
      <article className={s.characterInfo}>
       <p>{Character[0].description}</p>
       <section>
        <img src={`https://vemaps.com/uploads/img/${Character[0].country}-07.png`} alt={`${Character[0].country}_Map`} />
       </section>
      </article>
    </article>
  );
};

export default DetailPage;
