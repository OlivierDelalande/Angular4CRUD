export class Movie {

  private id: number;
  private title: string;
  private category: string;
  private poster: string;
  private directors: string;
  private actors: string;
  private synopsis: string;
  private rate: number;
  private price: number;

  constructor() {

  }

  getId ()
  {
    return this.id;
  }

  getTitle ()
  {
    return this.title;
  }

  getCategory ()
  {
    return this.category;
  }
  getPoster ()
  {
    return this.poster;
  }

  getDirectors ()
  {
    return this.directors;
  }

  getActors ()
  {
    return this.actors;
  }

  getSynopsis () {
    return this.synopsis;
  }

  getRate ()
  {
    return this.rate;
  }

  getPrice ()
  {
    return this.price;
  }
}

