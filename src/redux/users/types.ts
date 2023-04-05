export enum RoleEnum {
  'ANT' = 'ANT',
  'ANT_MANAGER' = 'ANT_MANAGER',
  'ANT_OFFICER' = 'ANT_OFFICER',
  'DEVELOPER' = 'DEVELOPER'
}

export enum WorkBordersEnum {
  'BEGLATOY' = 'Белгатой',
  'SHALY' = 'Шали',
  'URUS_MARTAN' = 'Урус-Мартан'
}

export interface IWorkBorder {
  id: string;
  name: WorkBordersEnum;
}

export interface IUser {
  id: string | undefined;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  roles: RoleEnum[];
  workBorders: IWorkBorder[];
}

export interface UserState {
  users: IUser[];
}
