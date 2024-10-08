/**
 * Generated by orval v7.1.1 🍺
 * Do not edit manually.
 * polling API
 * polling API Document
 * OpenAPI spec version: 1.0.0
 */
import { useMutation, useQuery } from '@tanstack/react-query';
import type {
  DefinedInitialDataOptions,
  DefinedUseQueryResult,
  MutationFunction,
  QueryFunction,
  QueryKey,
  UndefinedInitialDataOptions,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query';
import type { FileStorageDTO, UploadFileBody } from '../../model';
import { customInstance } from '../../mutator/custom-instance';

/**
 * @summary 파일 업로드
 */
export const uploadFile = (uploadFileBody: UploadFileBody) => {
  const formData = new FormData();
  formData.append('file', uploadFileBody.file);

  return customInstance<FileStorageDTO>({
    url: `/v1/files/upload`,
    method: 'POST',
    headers: { 'Content-Type': 'multipart/form-data' },
    data: formData,
  });
};

export const getUploadFileMutationOptions = <TError = unknown, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof uploadFile>>,
    TError,
    { data: UploadFileBody },
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<typeof uploadFile>>,
  TError,
  { data: UploadFileBody },
  TContext
> => {
  const { mutation: mutationOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof uploadFile>>,
    { data: UploadFileBody }
  > = (props) => {
    const { data } = props ?? {};

    return uploadFile(data);
  };

  return { mutationFn, ...mutationOptions };
};

export type UploadFileMutationResult = NonNullable<Awaited<ReturnType<typeof uploadFile>>>;
export type UploadFileMutationBody = UploadFileBody;
export type UploadFileMutationError = unknown;

/**
 * @summary 파일 업로드
 */
export const useUploadFile = <TError = unknown, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof uploadFile>>,
    TError,
    { data: UploadFileBody },
    TContext
  >;
}): UseMutationResult<
  Awaited<ReturnType<typeof uploadFile>>,
  TError,
  { data: UploadFileBody },
  TContext
> => {
  const mutationOptions = getUploadFileMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * @summary fileUid를 이용하여 파일 URL을 조회
 */
export const getFileByUid = (fileUid: string, signal?: AbortSignal) => {
  return customInstance<FileStorageDTO>({ url: `/v1/files/${fileUid}`, method: 'GET', signal });
};

export const getGetFileByUidQueryKey = (fileUid: string) => {
  return [`/v1/files/${fileUid}`] as const;
};

export const getGetFileByUidQueryOptions = <
  TData = Awaited<ReturnType<typeof getFileByUid>>,
  TError = unknown,
>(
  fileUid: string,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getFileByUid>>, TError, TData>>;
  },
) => {
  const { query: queryOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetFileByUidQueryKey(fileUid);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getFileByUid>>> = ({ signal }) =>
    getFileByUid(fileUid, signal);

  return { queryKey, queryFn, enabled: !!fileUid, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getFileByUid>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type GetFileByUidQueryResult = NonNullable<Awaited<ReturnType<typeof getFileByUid>>>;
export type GetFileByUidQueryError = unknown;

export function useGetFileByUid<TData = Awaited<ReturnType<typeof getFileByUid>>, TError = unknown>(
  fileUid: string,
  options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getFileByUid>>, TError, TData>> &
      Pick<
        DefinedInitialDataOptions<Awaited<ReturnType<typeof getFileByUid>>, TError, TData>,
        'initialData'
      >;
  },
): DefinedUseQueryResult<TData, TError> & { queryKey: QueryKey };
export function useGetFileByUid<TData = Awaited<ReturnType<typeof getFileByUid>>, TError = unknown>(
  fileUid: string,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getFileByUid>>, TError, TData>> &
      Pick<
        UndefinedInitialDataOptions<Awaited<ReturnType<typeof getFileByUid>>, TError, TData>,
        'initialData'
      >;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey };
export function useGetFileByUid<TData = Awaited<ReturnType<typeof getFileByUid>>, TError = unknown>(
  fileUid: string,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getFileByUid>>, TError, TData>>;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey };
/**
 * @summary fileUid를 이용하여 파일 URL을 조회
 */

export function useGetFileByUid<TData = Awaited<ReturnType<typeof getFileByUid>>, TError = unknown>(
  fileUid: string,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getFileByUid>>, TError, TData>>;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getGetFileByUidQueryOptions(fileUid, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey;

  return query;
}
