import { Cards } from "../interfaces";


export function compareFn(a: Cards, b: Cards) {
        if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
}