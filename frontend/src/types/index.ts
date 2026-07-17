

export interface GameMinDTO {
  id: number;
  title: string;
  year: number;
  imgUrl: string;
  shortDescription: string;
}

export interface GameDTO extends GameMinDTO {
  genre: string;
  platforms: string;
  score: number;
  longDescription: string;
}

export interface GameListDTO {
  id: number;
  name: string;
}

export interface ReplacementDTO {
  sourceIndex: number;
  destinationIndex: number;
}
