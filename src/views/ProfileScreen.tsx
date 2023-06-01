import React, { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import { AuthContext } from "../context/AuthContext";
import Loader from "../components/loader/Loader";
import UserBio from "../components/user-info/UserBio";
import UserHeader from "../components/user-info/UserHeader";
import UserInfoService from "../components/user-info/UserInfoService";
import UserStatistics from "../components/user-info/UserStatistics";
import { UserData, UserStats } from "../components/user-info/UserInfoTypes";
import UserInfoEdit from "../components/user-info/UserInfoEdit";

const UserInfo: React.FC = () => {
  const [activeLoader, setActiveLoader] = useState<boolean>(false);
  const [user, setUser] = useState<UserData>({
    id: 0,
    image: "",
    username: "",
    bio: "",
  });
  const [stats, setStats] = useState<UserStats>({ visited: 0, added: 0 });
  const [editUser, setUserEdit] = useState<boolean>(false);
  const service = new UserInfoService();
  const { userToken }: any = useContext(AuthContext);

  const changeUserInfoEditMode = () => {
    setUserEdit(!editUser);
  };

  //dorobić aktualizację danych
  useEffect(() => {
    (async () => {
      setActiveLoader(true);
      const userData = await service.getUser(userToken);
      const statsData = service.getStats();
      setUser(userData);
      setStats(statsData);
      setActiveLoader(false);
    })();
  }, []);

  if (activeLoader) {
    return <Loader />;
  } else if (editUser) {
    return (
      <UserInfoEdit
        bio={user.bio}
        image={user.image}
        username={user.username}
        id={user.id}
        changeEditMode={(editMode: boolean) => setUserEdit(editMode)}
      />
    );
  }

  return (
    <View style={styles.container}>
      <UserHeader
        style={styles.firstSectionSeparator}
        image={user.image}
        username={user.username}
      />
      <UserBio style={styles.sectionSeparator} bio={user.bio} />
      <UserStatistics style={styles.lastSectionSeparator} stats={stats} />
      <TouchableOpacity style={styles.button} onPress={changeUserInfoEditMode}>
        <Text style={styles.buttonText}>Edit profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  firstSectionSeparator: {
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  sectionSeparator: {
    marginTop: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  lastSectionSeparator: {
    marginTop: 10,
  },
  button: {
    width: 90,
    height: 40,
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: "#47B377",
    borderRadius: 4,
    textAlign: "center",
    color: "#47B377",
    alignSelf: "flex-end",
  },
  buttonText: {
    textAlign: "center",
  },
});
export default UserInfo;
