export interface Filters {
    name: string;
    imageURL: string;
}
export interface InputFilters {
    name: string;
    options: Array<string>;
}
export interface Cards {
    name: string;
    id: Number;
    pngURL: string;
}
export interface ProductsState {
    characters: Array<Cards>,
    error: string,
};