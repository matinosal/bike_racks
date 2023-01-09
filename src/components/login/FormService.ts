import { dev_config } from "../../../dev-config";

export class FormService {
  public async registerUser(user: simpleUser): Promise<boolean> {
    const serverResult = await this.apiCall(user);
    console.log(serverResult);
    return false;
  }
  private apiCall = async (data: simpleUser) => {
    const response = await fetch(`${dev_config.localApi}/user/add`, {
      method: "POST",
      body: JSON.stringify({ user: data }),
    }).then((res) => res.json());
    console.log(response);
    console.log({ user: data });
    return response;
  };
}
