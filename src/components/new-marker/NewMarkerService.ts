import { dev_config } from "../../../dev-config";

//TODO: typ dla odpowiedzi zwracanej przez serwer
export class NewMarkerService {
  public addMarker = async (data: MarkerData, token: string) => {
    const body = new FormData();
    const fileName = data.uri?.split("/").pop();

    body.append("image", {
      uri: data.uri,
      name: fileName,
      type: `image/${data.uri?.split(".").pop()}`,
    });
    body.append("latitude", data.latitude);
    body.append("longitude", data.longitude);
    body.append("description", data.description);
    body.append("imageName", fileName);

    return await this.apiCall("/markers", body, token);
  };
  private apiCall = async (endpoint: string, data: FormData, token: string) => {
    const response = await fetch(`${dev_config.localApi}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
      body: data,
    }).then((res) => res.json());
    return response;
  };
}
