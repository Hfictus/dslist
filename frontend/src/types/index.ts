

export interface GameListDTO {
  id: number;
  name: string;
}

export interface GameMinDTO {
  id: number;
  title: string;
  year: number;
  imgUrl: string;
  shortDescription: string;
}

export interface GameDTO {
  id: number;
  title: string;
  year: number;
  genre: string;
  platforms: string;
  score: number;
  imgUrl: string;
  shortDescription: string;
  longDescription: string;
}
