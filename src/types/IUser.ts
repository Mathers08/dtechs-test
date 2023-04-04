export type TRole = 'ANT' | 'ANT_MANAGER' | 'ANT_OFFICER' | 'DEVELOPER';

export interface IWorkBorders {
  id: string;
  name: string;
}

export interface IUser {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  roles: TRole[];
  workBorders: IWorkBorders[];
}
