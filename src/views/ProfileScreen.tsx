import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AuthContext } from "../context/AuthContext";
import Loader from "../components/loader/Loader";
import UserBio from "../components/user-info/UserBio";
import UserHeader from "../components/user-info/UserHeader";
import UserInfoService from "../components/user-info/UserInfoService";
import UserStatistics from "../components/user-info/UserStatistics";
import { UserData, UserStats } from "../components/user-info/UserInfoTypes";

const UserInfo: React.FC = () => {
  const [activeLoader, setActiveLoader] = useState<boolean>(false);
  const [user, setUser] = useState<UserData>({
    id: 0,
    image: "",
    username: "",
    bio: "",
  });
  const [stats, setStats] = useState<UserStats>({ visited: 0, added: 0 });
  const service = new UserInfoService();
  const { userToken }: any = useContext(AuthContext);
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
});
export default UserInfo;
