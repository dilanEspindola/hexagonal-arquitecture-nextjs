export interface HttpRepository {
  get<T>(path: string, config?: any): Promise<T | any>;
  post<T>(path: string, body: any, config?: any): Promise<T | any>;
  put<T>(path: string, body: any, config?: any): Promise<T | any>;
  patch<T>(path: string, body: any, config?: any): Promise<T | any>;
  delete<T>(path: string, config?: any): Promise<T | any>;
}
