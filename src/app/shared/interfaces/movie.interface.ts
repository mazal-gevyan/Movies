import { IBaseResponse } from "./response.interface";

export interface IMoviesResponse extends IBaseResponse {
    data: IMovie[];
}

export interface IMovie {
    id: string;
    title: string;
    category: string;
    poster: string;
    imdbLink: string;
}
