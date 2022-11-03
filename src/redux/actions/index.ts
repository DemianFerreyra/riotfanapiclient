import axios from "axios";
import { Dispatch } from "redux";
import { Cards } from "../../interfaces";
const BACK_URL = process.env.REACT_APP_BACKEND_URL;

interface AllCards {
  type: string;
  payload: Array<Cards>;
}

export const GetAllCharacters = () => {
  return async function (dispatch: Dispatch<AllCards>) {
    const allCharacters = await axios.get(`${BACK_URL}/characters`);
    const mapped = allCharacters.data.map((char: any) => {
      const card: Cards = {
        name: char.name,
        id: char.id,
        pngURL: char.png,
        role: char.role,
      };
      return card;
    });
    dispatch({ type: "GetCharacters", payload: mapped });
  };
};

export const FilterBy = (filter: Array<String>) => {
  return async function (dispatch: Dispatch<any>) {
    dispatch({ type: "FilterBy", payload: filter });
  };
};

export const OrderBy = (orderedArray: Array<Cards>) => {
  return async function (dispatch: Dispatch<any>) {
    setTimeout(function(){
      dispatch({ type: "OrderBy", payload: orderedArray });
    }, 100);
  };

};

export const ResetFilters = () => {
  return async function (dispatch: Dispatch<any>) {
    dispatch({ type: "ResetFilters" });
  };
};