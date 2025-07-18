export interface Status {
  title: string;
  action: string;
  condition: string;
  color: string;
  bgColor: string;
}

export interface WeeklyTasks {
  id: number;
  startDate: string;
  endDate: string;
  hours: number;
  days: {
    tasks: {
      id: number;
      name: string;
      hours: number;
      project: string;
      description: string;
    }[];
  }[];
}
