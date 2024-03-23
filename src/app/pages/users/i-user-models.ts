export interface IUser {
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
  tokenDecode:Array<any>;
  tokenExpired?:boolean;

  cpf:any;
  crm:any;
  userType:any;
  userTypeDescription:any;
  loading:boolean;
  loadingRoute:any;
}
