// interfaces are a way to describe data shapes
export default interface Movies {
  id: number;
  title: string;
  image: string;
  genre?: 'action' | 'romance' | 'drama'
}
