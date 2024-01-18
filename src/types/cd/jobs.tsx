import { JobItemD, JobRoleD } from "types/jobs";
export type JobFilterTypeD = "" | "active" | "draft" | "pending";
export type cdProjectItem = {
  date_created: any;
  asap: any;
  title: string;
  role: JobRoleD;
  job: JobItemD;
  casting_id: any;
  status: JobFilterTypeD;
};