export interface Results {
    results: Donuts[];
  }
  
  export interface Donuts {
    id: number;
    ref: string;
    name: string;
  }
  
  export interface Donut {
    name: string;
    calories: number;
    photo: string;
  }