

    export interface Films {
[x: string]: any;
        name: string;
        height: string;
        mass: string;
        hair_color: string;
        skin_color: string;
        eye_color: string;
        birth_year: string;
        gender: string;
        homeworld: string;
        films: string[];
        species: string[];
        vehicles: string[];
        starships: string[];
        created: Date;
        edited: Date;
        url: string;
    }

    export interface FilmsResponse {
        count: number;
        next: string;
        previous?: any;
        results: Films[];
    }

    export interface Personajes {
        name:       string;
        height:     string;
        mass:       string;
        hair_color: string;
        skin_color: string;
        eye_color:  string;
        birth_year: string;
        homeworld:  string;
        films:      string[];
        species:    string[];
        vehicles:   string[];
        starships:  string[];
        created:    string;
        edited:     string;
        url:        string;
    }

    export interface PeopleResponse {
        count:    number;
        next:     string;
        previous: null;
        results:  Personajes[];
    }

