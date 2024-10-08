import deadpool from '@/assets/imgs/deadpool.jpeg'
import boys from  '@/assets/imgs/boys.jpeg'
const movies = [
    deadpool.src,boys.src,deadpool.src,boys.src,deadpool.src,boys.src,deadpool.src,boys.src,deadpool.src,boys.src
];

export function getMovies(){
    return movies;
}

export function getNomes(){
    const nomes = ['Whinds', 'Freeway', 'Teste', 'Maria'];
    return nomes;
}

