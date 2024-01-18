export type NotificationItemD = {
  id: number;
  name: string;
  pic: string;
  type: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  message: string;
  time: string;
  status: 0 | 1 | 2;
  link: string;
  talentnum: number;
  UpdateStatus?: any;
};
