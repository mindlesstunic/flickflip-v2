export type Deal = {
  id: number;
  movieA: {
    title: string;
    poster: string;
  };
  movieB: {
    title: string;
    poster: string;
  };
  originalPrice: number;
  discountPrice: number;
  theater: string;
  showTime: string;
  seatsLeft: number;
};

export const deals: Deal[] = [
  {
    id: 1,
    movieA: {
      title: "Dune: Part Two",
      poster: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    },
    movieB: {
      title: "Oppenheimer",
      poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    },
    originalPrice: 500,
    discountPrice: 250,
    theater: "PVR Phoenix, Hyderabad",
    showTime: "7:00 PM",
    seatsLeft: 8,
  },
  {
    id: 2,
    movieA: {
      title: "Barbie",
      poster: "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
    },
    movieB: {
      title: "The Batman",
      poster: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    },
    originalPrice: 450,
    discountPrice: 225,
    theater: "INOX GVK One, Hyderabad",
    showTime: "9:30 PM",
    seatsLeft: 5,
  },
  {
    id: 3,
    movieA: {
      title: "Interstellar",
      poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    },
    movieB: {
      title: "Inception",
      poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    },
    originalPrice: 400,
    discountPrice: 200,
    theater: "AMB Cinemas, Hyderabad",
    showTime: "6:45 PM",
    seatsLeft: 12,
  },
  {
    id: 4,
    movieA: {
      title: "Interstellar",
      poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    },
    movieB: {
      title: "Inception",
      poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    },
    originalPrice: 400,
    discountPrice: 200,
    theater: "AMB Cinemas, Hyderabad",
    showTime: "6:45 PM",
    seatsLeft: 12,
  },
];
