export interface Filters {
    name: string;
    imageURL: string;
}
export interface Cards {
    name: string;
    id: Number;
    pngURL: string;
    role: string;
}
export interface ProductsState {
    character?: Array<Detail>,
    characters: Array<Cards>,
    filteredChars: Array<Cards>,
    error: string,
};
export interface Detail {
    name: string;
    pngURL: string;
    images: Array<string>;
    description: string;
    role: string;
    country: string;
};