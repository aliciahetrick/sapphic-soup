// interfaces are a way to describe data shapes
export default interface Movies {
  id: number;
  title: string;
  image: string;
  synopsis: string
  genres?: Genre[]
}

export type Genre = 'action' | 'comedy' | 'drama' | 'horror' | 'romance' | 'sci-fi' | 'thriller' 
