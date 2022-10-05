

    export interface Pokemon {
        name: string;
        url: string;
    }

    export interface PokemonResponse { //response siempre se le colocará a la interfaz principal (como recomendación)
        count: number;
        next: string;
        previous: string;
        results: Pokemon[]; //No se pude cambiar los nombres de las interfaces porqie son tipos que no son básicos
    }

