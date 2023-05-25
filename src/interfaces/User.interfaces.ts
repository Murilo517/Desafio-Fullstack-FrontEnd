export interface iRegisterUser{
    name: string;
    username: string;
    email: string;
    password: string;
    telephone: string;
  }

export interface iUser{
  name: string;
  username: string;
  email: string;
  telephone?: string;
}