type Movie = {
  title: string;
  poster: string;
  showtime: string;
};

type TheaterData = {
  theater: string;
  city: string;
  movies: Movie[];
};

export type Deal = {
  id: number;
  movieA: {
    title: string;
    poster: string;
    showtime: string;
  };
  movieB: {
    title: string;
    poster: string;
    showtime: string;
  };
  theater: string;
  originalPrice: number;
  discountPrice: number;
  seatsLeft: number;
  appearsAt: Date;
  expiresAt: Date;
};

//Helper: Convert "19:00" to today's Date object
function showtimeToDate(showtime: string): Date {
  const [hours, minutes] = showtime.split(":").map(Number);
  const date = new Date();
  date.setHours(hours, minutes, 0, 0);
  return date;
}

//Helper: Check if two showtimes are within 30 minutes
function isWithin30Minutes(time1: Date, time2: Date): boolean {
  const diffMs = Math.abs(time1.getTime() - time2.getTime());
  const diffMinutes = diffMs / (1000 * 60);
  return diffMinutes <= 30;
}

//Step1: Group movies within 30-minute windows

function groupMoviesByTime(movies: Movie[]): Movie[][] {
  if (movies.length === 0) return [];

  //Sort by show time
  const sorted = [...movies].sort(
    (a, b) =>
      showtimeToDate(a.showtime).getTime() -
      showtimeToDate(b.showtime).getTime()
  );

  const groups: Movie[][] = [];
  let currentGroup: Movie[] = [sorted[0]];

  for (let i = 1; i < sorted.length; i++) {
    const currentTime = showtimeToDate(sorted[i].showtime);
    const groupStartTime = showtimeToDate(currentGroup[0].showtime);

    if (isWithin30Minutes(currentTime, groupStartTime)) {
      currentGroup.push(sorted[i]);
    } else {
      groups.push(currentGroup);
      currentGroup = [sorted[i]];
    }
  }
  groups.push(currentGroup);
  return groups;
}

//Step 2: Create all possible pairs from a group
function createPairs(movies: Movie[]): Array<[Movie, Movie]> {
  const pairs: Array<[Movie, Movie]> = [];

  for (let i = 0; i < movies.length; i++) {
    for (let j = i + 1; j < movies.length; j++) {
      pairs.push([movies[i], movies[j]]);
    }
  }

  return pairs;
}

//Step 3: Generate deals from theater data

export function generateDeals(theaterData: TheaterData[]): Deal[] {
  const deals: Deal[] = [];
  let dealId = 1;

  for (const theater of theaterData) {
    const groups = groupMoviesByTime(theater.movies);
    for (const group of groups) {
      //Skip gorups with only 1 movie
      if (group.length < 2) continue;

      //Create all possible pairs
      const pairs = createPairs(group);

      for (const [MovieA, MovieB] of pairs) {
        //Find earliest showtime in this pair
        const timeA = showtimeToDate(MovieA.showtime);
        const timeB = showtimeToDate(MovieB.showtime);

        const earliestTime = timeA < timeB ? timeA : timeB;

        //Deal appears 1 hour before earliest showtime
        const appearsAt = new Date(earliestTime.getTime() - 60 * 60 * 1000);

        //Deal expires when earliest showtime starts
        const expiresAt = earliestTime;

        deals.push({
          id: dealId++,
          movieA: {
            title: MovieA.title,
            poster: MovieA.poster,
            showtime: MovieA.showtime,
          },
          movieB: {
            title: MovieB.title,
            poster: MovieB.poster,
            showtime: MovieB.showtime,
          },
          theater: `${theater.theater}, ${theater.city}`,
          originalPrice: 500,
          discountPrice: 250,
          seatsLeft: Math.floor(Math.random() * 10) + 5, //Random5-15
          appearsAt,
          expiresAt,
        });
      }
    }
  }
  return deals;
}

//Filter deals that arer currently visible
export function getActiveDeals(deals: Deal[]): Deal[] {
  const now = new Date();

  return deals.filter((deal) => {
    return now >= deal.appearsAt && now < deal.expiresAt;
  });
}
