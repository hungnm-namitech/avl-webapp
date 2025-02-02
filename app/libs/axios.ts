import axios from 'axios';
import { signOut, useSession } from 'next-auth/react';
import { useEffect } from 'react';

export default axios.create({
  headers: { 'Content-Type': 'application/json' },
});
export const axiosAuth = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});
export const axiosNoAuth = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

export const useAxiosAuth = () => {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === 'loading') return;
    const requestIntercept = axiosAuth.interceptors.request.use(
      (config) => {
        if (
          !config.headers['Authorization'] &&
          session?.user?.data?.accessToken
        ) {
          config.headers['Authorization'] =
            `Bearer ${session.user.data.accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = axiosAuth.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error?.response?.status === 401) {
          await signOut({ callbackUrl: '/login' });
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosAuth.interceptors.request.eject(requestIntercept);
      axiosAuth.interceptors.response.eject(responseIntercept);
    };
  }, [session, status]);

  return axiosAuth;
};
