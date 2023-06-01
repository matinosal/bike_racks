import { dev_config } from "../../../dev-config";
import { UserData, UserStats } from "./UserInfoTypes";

class UserInfoService {
  private stats!: UserStats;

  getStats = () => this.stats;

  public async getUser(token: string): Promise<any> {
    const serverResult = await this.apiCall(`/user`, token);
    console.log(serverResult);
    if (serverResult?.stats) {
      this.stats = serverResult.stats;
    }
    if (serverResult?.user) {
      return serverResult.user as UserData;
    }
    return null;
  }

  private apiCall = async (endpoint: string, token: string) => {
    const response = await fetch(`${dev_config.localApi}${endpoint}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.json();
  };
}

export default UserInfoService;
