export interface Auth {
  id: string;
  email: string;
  password: string;
  token?: string;
  isCompany: boolean;
}
