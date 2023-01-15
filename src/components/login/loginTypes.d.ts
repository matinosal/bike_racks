type loginProps = {
  changeForm(): void;
  changeLoaderState(value: boolean): void;
  loaderActive: boolean;
};

type simpleUser = {
  email: string;
  password: string;
  username?: string;
};
