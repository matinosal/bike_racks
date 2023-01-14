import { dev_config } from "../../../dev-config";

//TODO: typ dla odpowiedzi zwracanej przez serwer
export class FormService {
  private errorMessage: string = "";

  public async registerUser(user: simpleUser): Promise<boolean> {
    const serverResult = await this.apiCall(user);

    if (serverResult.data) return true;

    this.errorMessage = serverResult.message;
    return false;
  }
  private apiCall = async (data: simpleUser) => {
    const response = await fetch(`${dev_config.localApi}/user/add`, {
      method: "POST",
      body: JSON.stringify({ user: data }),
    }).then((res) => res.json());
    return response;
  };

  public getErrorMessage = (): string => {
    return this.errorMessage;
  };
}
