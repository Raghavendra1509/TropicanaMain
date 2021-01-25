export class User {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  token?: string;
}

export class Login {
  UserName: string;
  Password: string;
}

export class Register {
  UserTypeID: number;
  UserName: string;
  Password: string;
  CreatedBy: string;
  CreatedDate: Date;

}
