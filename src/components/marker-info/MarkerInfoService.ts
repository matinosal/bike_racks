import { dev_config } from "../../../dev-config";

class MarkerInfoService {
  public async getMarker(
    id: number,
    token: string
  ): Promise<MarkerData | null> {
    if (id <= 0) return null;
    const serverResult = token
      ? await this.apiAuthCall(`/markers/${id}`, token)
      : await this.apiCall(`/markers/${id}`);

    const marker = serverResult?.marker as MarkerData;
    if (!marker) {
      return null;
    }
    if (serverResult?.visited) marker.visited = serverResult.visited;
    return marker;
  }

  public visitMarker = async (markerId: number | undefined, token: string) => {
    if (!markerId) return false;
    return await this.apiAuthCall("/markers/visit", token, {
      marker_id: markerId,
    });
  };
  private apiCall = async (endpoint: string) => {
    const response = await fetch(`${dev_config.localApi}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  };

  private apiAuthCall = async (
    endpoint: string,
    token: string,
    data?: visitedApiData
  ) => {
    const response = await fetch(`${dev_config.localApi}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    return response.json();
  };
}

export default MarkerInfoService;
