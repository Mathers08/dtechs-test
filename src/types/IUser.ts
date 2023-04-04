export interface IRole {
  role: 'ANT' | 'ANT_MANAGER' | 'ANT_OFFICER' | 'DEVELOPER'
}

export interface IWorkBorders {
  id: string;
  name: string;
}

export interface IUser {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  roles: IRole;
  workBorders: IWorkBorders;
}
