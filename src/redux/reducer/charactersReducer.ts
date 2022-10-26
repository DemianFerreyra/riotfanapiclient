import { ProductsState } from "../../interfaces";
const initialState: ProductsState = {
    characters: [],
    error: '',
};

export function characterReducer(state = initialState, action: any) {
    switch (action.type) {
      case "GetCharacters":
        return {
          ...state,
          characters: action.payload,
          error: '',
        };
      default:
        return state;
    }
}