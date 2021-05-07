import useSWR, { ConfigInterface, responseInterface } from 'swr';
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

// .envにのせる
const AxiosClient = axios.create({
  baseURL: 'http://localhost:3000',
  // headers: { Authorization: `Bearer ${token}` }, // tokenはなんらかの形でセットしてください
});

export type RequestType = AxiosRequestConfig | null;

interface Return<Data, Error>
  extends Pick<
    responseInterface<AxiosResponse<Data>, AxiosError<Error>>,
    'isValidating' | 'revalidate' | 'error' | 'mutate'
  > {
  response: AxiosResponse<Data> | undefined;
}

export type Config<Data = unknown, Error = unknown> = Omit<
  ConfigInterface<AxiosResponse<Data>, AxiosError<Error>>,
  ''
>;

export const useRequest = <Data = unknown, Error = unknown>(
  request: RequestType,
  config: Config<Data, Error> = {}
): Return<Data, Error> => {
  const { data: response, error, isValidating, revalidate, mutate } = useSWR<
    AxiosResponse<Data>,
    AxiosError<Error>
  >(
    request && JSON.stringify(request),
    /**
     * NOTE: Typescript thinks `request` can be `null` here, but the fetcher
     * function is actually only called by `useSWR` when it isn't.
     */
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    () => AxiosClient(request!),
    config
  );
  return {
    response,
    error,
    isValidating,
    revalidate,
    mutate,
  };
};
