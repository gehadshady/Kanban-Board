export interface TaskType {
  id: number;
  title: string;
  description: string;
}

export interface ColumnType {
  id: number;
  title: string;
  tasks: TaskType[];
}

export interface BoardType {
  id: number;
  title: string;
  columns: ColumnType[];
}
