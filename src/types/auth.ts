export type Creds = {
  expire: number;
  token: string;
  refreshToken: string;
};

export interface AuthContextInterface {
  auth: any;
  user: any;
  creds: any;
}
