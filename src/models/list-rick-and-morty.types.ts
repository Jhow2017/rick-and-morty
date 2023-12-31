export interface ListRickAndMortyDto {
    data: ListRickAndMorty;
}

export interface ListRickAndMorty {
    characters: Characters;
    location: Location;
    episodesByIds: EpisodesById[];
}

export interface Characters {
    info: Info;
    results: Result[];
}

export interface Info {
    count: number;
}

export interface Result {
    id?: string;
    name: string;
    status: string;
    image: string;
    species: string;
    gender?: string;
    type?: string;
    origin?: {
        id: string;
        name: string;
    };
}

export interface Location {
    id: string;
}

export interface EpisodesById {
    id: string;
}
