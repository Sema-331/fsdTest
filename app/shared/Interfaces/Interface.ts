export interface Item {
  id: string;
  task: string;
}

export interface Ints {
  id: string;
  task: string;
  completed: false;
}

export interface ItemSingle {
  item: Ints;
  tasks: Ints[];
  setTasks: (value: Ints[]) => void;
}
