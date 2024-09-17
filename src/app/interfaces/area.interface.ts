export interface IArea {
  title: string;
  color: string;
  done?: number;
}

export interface IStartArea {
  title: string;
  color: string;
  score?: number;
  maxScore: number;
}

export interface IDataForCircle {
  labels: string[];
  datasets: { label: string; data: number[]; backgroundColor: string[] }[];
}
