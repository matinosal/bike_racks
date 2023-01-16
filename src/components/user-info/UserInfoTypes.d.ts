type UserData = UserHeaderProps &
  UserBioProps & {
    id: number;
  };

type UserHeaderProps = {
  image: string;
  username: string;
};

type UserBioProps = {
  bio: string | null;
};

type UserStatsProps = {
  stats: UserStats;
};

type UserStats = {
  visited: number | null;
  added: number | null;
};
