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

    </article>
  );
};

export default DetailPage;
