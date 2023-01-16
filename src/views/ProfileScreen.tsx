import React, { useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";
import { AuthContext } from "../context/AuthContext";
import Loader from "../components/loader/Loader";
import UserBio from "../components/user-info/UserBio";
import UserHeader from "../components/user-info/UserHeader";
import UserInfoService from "../components/user-info/UserInfoService";
import UserStats from "../components/user-info/UserStats";

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
  useEffect(() => {
    (async () => {
      setActiveLoader(true);
      const userData = await service.getUser(
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NzM5MDM4NDgsImV4cCI6MTY3MzkwNzQ0OCwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoidGVzdCJ9.lc43VJSRk_Wm6-Er12wIAiWbgxZ8znqRBjy41pg3rL2hokuNR3-hR7C_Z-s1y6bvz4Zf-FwpMQW4kBqOTsQFWHK60jySdRkjj-MlmogmNMzlPOn2UXheydhxfXrtZFKA45KRhgADlXLB5zK7ElbK0GuHgyf72XXkLQhUtII-TlECj6kW2F7U64i38ewb6LSHpAVWcM4_BM6UpikMtIe_D8Z7kGzNAQ4ETxoOJssfssXi901hCREJklDYfTY0C3DtsMkwL2l4-Ejk9vmTBj7XA_gPtiXbYmbC9d-W-nNBv8PbW9IF3uZBamhxtSMUfpAIUkFMQsn3UP-IGv3uzEtLqw"
      );
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
    <View>
      <UserHeader image={user.image} username={user.username} />
      <UserBio bio={user.bio} />
      <UserStats stats={stats} />
    </View>
  );
};

export default UserInfo;
