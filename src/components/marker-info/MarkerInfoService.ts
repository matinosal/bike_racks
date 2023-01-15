import { dev_config } from "../../../dev-config";

class MarkerInfoService {
  public async getMarker(id: number): Promise<MarkerData | null> {
    if (id <= 0) return null;
    const serverResult = await this.apiCall(`/markers/${id}`);
    if (serverResult?.marker) {
      return serverResult.marker as MarkerData;
    }
    return null;
  }

  private apiCall = async (endpoint: string) => {
    const response = await fetch(`${dev_config.localApi}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  };
}

export default MarkerInfoService;
