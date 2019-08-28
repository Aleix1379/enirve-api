export interface Verb {
  id: number;
  completed: boolean;
}

export interface Progress {
  sectionId: number;
  verbs: Verb[];
}

export interface User {
  id?: number;
  code?: number;
  username: string;
  email: string;
  picture: string;
  password?: string;
  friends: number[];
  progress?: {
    points: number;
    activity: Progress[];
  };
}
