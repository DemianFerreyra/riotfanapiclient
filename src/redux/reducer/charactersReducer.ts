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
        filteredChars: action.payload.length?(state.characters.filter(
          (char: any) => action.payload.includes(char.role)
        )):(state.characters),
        error: "",
      };
    case "OrderBy":
      return {
        ...state,
        filteredChars: action.payload,
        error: "",
      };
    case "ResetFilters":
      return {
        ...state,
        filteredChars: [],
        error: "",
      };
    default:
      return state;
  }
}
