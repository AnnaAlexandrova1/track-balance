export interface IArea {
  title: string;
  color: string;
  done?: number;
}

export interface IDataForCircle {
  labels: string[];
  datasets: { label: string; data: number[]; backgroundColor: string[] }[];
}

export interface ICircleArea {
  title: string;
  color: string;
  score: number;
  maxScore?: number;
  goals?: string;
  achievements?: string;
}

export interface ICircle {
    areas: ICircleArea[];
    description: string;
}

export interface IDescriptionItem {
  title: string;
  color: string;
  goals: string;
  achievements: string;
}