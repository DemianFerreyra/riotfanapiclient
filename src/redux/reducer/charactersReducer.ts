import { compareFn } from "../../helpers";
import { ProductsState } from "../../interfaces";
const initialState: ProductsState = {
  characters: [],
  filteredChars: [],
  error: "",
};

export function characterReducer(state = initialState, action: any) {
  switch (action.type) {
    case "GetCharacters":
      return {
        ...state,
        characters: action.payload,
        filteredChars: action.payload,
        error: "",
      };
    case "FilterBy":
      return {
        ...state,
        filteredChars: state.characters.filter(
          (char: any) => char.role === action.payload
        ),
        error: "",
      };
    case "OrderBy":
      console.log(action.payload)
      return {
        ...state,
        filteredChars: action.payload,
        error: "",
      };
    case "ResetFilters":
      console.log("a")
      return {
        ...state,
        filteredChars: [],
        error: "",
      };
    default:
      return state;
  }
}
