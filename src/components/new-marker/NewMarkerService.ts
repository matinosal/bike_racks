import { dev_config } from "../../../dev-config";

//TODO: typ dla odpowiedzi zwracanej przez serwer
export class NewMarkerService {
  public addMarker = async (data: MarkerData, token: string) => {
    return false;
  };
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
}
