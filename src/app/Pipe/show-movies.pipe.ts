import { Pipe, PipeTransform } from '@angular/core';

@Pipe({  //injectable injecté dans le component show movies

  name: 'showFilteredMovies'

})
export class ShowMoviesPipe implements PipeTransform {


  transform(movies: any, value: any): any {
    if(!movies || !value) {
      return movies;
    }
    return movies.filter(movie => {
      for (let key in movie) {
        if ((movie[key]).toString().toLowerCase().includes(value.toLowerCase())) {
          return true;
        }
    }
      return false;
    });
  }

}
