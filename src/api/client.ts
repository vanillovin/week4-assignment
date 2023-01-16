import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

const baseURL = 'http://localhost:4000';

const client = axios.create({ baseURL });

// 요청 인터셉터
client.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // 요청이 전달되기 전에 작업 수행
    return config;
  },
  // 요청 오류가 있는 작업 수행
  (error) => Promise.reject(error)
);

// 응답 인터셉터
client.interceptors.response.use(
  // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
  // 응답 데이터가 있는 작업 수행
  (response: AxiosResponse) => response,
  (error: AxiosError<any>) => {
    // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 오류가 있는 작업 수행
    return Promise.reject(error);
  }
);

export default client;
