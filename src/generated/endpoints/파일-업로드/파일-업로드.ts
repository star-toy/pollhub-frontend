/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Generated by orval v7.1.1 🍺
 * Do not edit manually.
 * polling API
 * polling API Document
 * OpenAPI spec version: 1.0.0
 */
import { useMutation } from '@tanstack/react-query';
import type {
  MutationFunction,
  UseMutationOptions,
  UseMutationResult,
} from '@tanstack/react-query';
import type { UploadFile200, UploadFileBody } from '../../model';
import { customInstance } from '../../mutator/custom-instance';

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];

export const uploadFile = (
  uploadFileBody: UploadFileBody,
  options?: SecondParameter<typeof customInstance>,
) => {
  const formData = new FormData();
  formData.append('file', uploadFileBody.file);

  return customInstance<UploadFile200>(
    {
      url: `/v1/files/upload`,
      method: 'POST',
      headers: { 'Content-Type': 'multipart/form-data' },
      data: formData,
    },
    options,
  );
};

export const getUploadFileMutationOptions = <TError = unknown, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof uploadFile>>,
    TError,
    { data: UploadFileBody },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof uploadFile>>,
  TError,
  { data: UploadFileBody },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof uploadFile>>,
    { data: UploadFileBody }
  > = (props) => {
    const { data } = props ?? {};

    return uploadFile(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type UploadFileMutationResult = NonNullable<Awaited<ReturnType<typeof uploadFile>>>;
export type UploadFileMutationBody = UploadFileBody;
export type UploadFileMutationError = unknown;

export const useUploadFile = <TError = unknown, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof uploadFile>>,
    TError,
    { data: UploadFileBody },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof uploadFile>>,
  TError,
  { data: UploadFileBody },
  TContext
> => {
  const mutationOptions = getUploadFileMutationOptions(options);

  return useMutation(mutationOptions);
};
