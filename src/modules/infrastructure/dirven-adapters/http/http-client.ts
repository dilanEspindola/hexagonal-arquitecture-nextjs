import axios from "axios";
import { HttpRepository } from "@/modules/domain/repositories";

const axiosConfig = axios.create({
  baseURL: "http://localhost:3000",
});

export class HttpClient implements HttpRepository {
  async get<T>(path: string, config?: any): Promise<any> {
    const res = await axiosConfig.get(path, config);
    return res.data as T;
  }

  async post<T>(path: string, body: any, config?: any): Promise<any> {
    const res = await axiosConfig.post(path, body, config);
    return res.data as T;
  }

  async put<T>(path: string, body: any, config?: any): Promise<any> {
    const res = await axiosConfig.put(path, body, config);
    return res.data as T;
  }

  async patch<T>(path: string, body: any, config?: any): Promise<any> {
    const res = await axiosConfig.patch(path, body, config);
    return res.data as T;
  }

  async delete<T>(path: string, config?: any): Promise<any> {
    const res = await axiosConfig.delete(path, config);
    return res.data as T;
  }
}
