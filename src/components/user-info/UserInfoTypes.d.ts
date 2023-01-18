import { CustomComponentWrapperStyle } from "../../types/GlobalTypes";

type UserData = UserHeaderProps &
  UserBioProps & {
    id: number;
  };

type UserHeaderProps = CustomComponentWrapperStyle & {
  image: string;
  username: string;
};

type UserBioProps = CustomComponentWrapperStyle & {
  bio: string | null;
};

type UserStatsProps = CustomComponentWrapperStyle & {
  stats: UserStats;
};

type UserStats = {
  visited: number | null;
  added: number | null;
};
