import { dev_config } from "../../../dev-config";

//TODO: typ dla odpowiedzi zwracanej przez serwer
export class FormLoginService {
  private errorMessage: string = "";
  private token: string = "";

  public async register(user: simpleUser): Promise<boolean> {
    const serverResult = await this.apiCall(
      `${dev_config.localApi}/user/add`,
      user
    );

    if (serverResult.data) return true;

    this.errorMessage = serverResult.message;
    return false;
  }

  public async login(user: simpleUser): Promise<boolean> {
    const serverResult = await this.apiCall(`${dev_config.localAuth}`, user);
    if (serverResult.data) {
      this.token = serverResult.token;
      return true;
    }

    this.errorMessage = serverResult.message;
    return false;
  }

  private apiCall = async (endpoint: string, data: simpleUser) => {
    const response = await fetch(`${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  };

  public getErrorMessage = (): string => {
    return this.errorMessage;
  };

  public getToken = (): string => {
    return this.token;
  };
}
