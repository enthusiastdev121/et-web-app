export type ClassCardBigD = {
  id: number;
  img: string;
  title: string;
  desc: string;
  updatedAt: string;
  duration: number;
  lecturesCount: number;
  difficultyLevel: string;
  cat: string;
  rating: number;
  price: number;
  isFav: boolean;
  tags: string[];
};

export type ClassCardSmallD = {
  desc: ReactNode;
  id: number;
  img: string;
  title: string;
  cat: string;
  rating: number;
};

export type OwnClassCardD = {
  id: number;
  title: string;
  desc: string;
  progress: number;
  thumbnail: string;
  fav: boolean;
  status: 1 | 2 | 3 | 4;
};
