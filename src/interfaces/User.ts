export interface IUserState extends IUserData {
  isLoggedIn: boolean;
}

export interface IUserData {
  displayName: string | null;
  email: string | null;
  token: Promise<string> | undefined;
}
