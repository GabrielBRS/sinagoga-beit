import { IUser } from "./i-user-models";

export class User implements IUser{
  firstName: any;
  lastName: any;
  address: any;
  city: any;
  state: any;
  phone: any;
  mobilephone: any;
  email: any;
  password?: any;
  id?: any;
  token?: any;
  tokenDecode:any = [];
  tokenExpired?: boolean | undefined;
  crm:any;
  cpf: any;
  userType: any;
  userTypeDescription: any;
  loading:boolean = true;
  loadingRoute:any;
}
