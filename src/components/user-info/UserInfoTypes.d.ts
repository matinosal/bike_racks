import { CustomComponentWrapperStyle } from "../../types/GlobalTypes";

type UserStats = {
  visited: number | null;
  added: number | null;
};

type UserStatsProps = CustomComponentWrapperStyle & {
  stats: UserStats;
};

type UserBioProps = CustomComponentWrapperStyle & {
  bio: string | null;
};

type UserHeaderProps = CustomComponentWrapperStyle & {
  image: string;
  username: string;
};

type UserData = UserHeaderProps &
  UserBioProps & {
    id: number;
  };

type UserEditProps = UserData & {
  changeEditMode: (editMode: boolean) => void;
};
