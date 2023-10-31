import { QueryKey, useQuery, UseQueryResult } from '@tanstack/react-query';
import axios from "axios";

interface ICreateQuery<Request, Params> {
    queryKey: QueryKey | ((request: Request, params: Params) => QueryKey);
    url: string | ((variables: Params extends never ? never : Params) => string);
}

interface IUseQuery<Request, Response, Params, T> {
    select?: (data: Response) => T;
    enabled?: boolean;
    params?: Params extends never ? never : Params;
    query?: Request extends never ? never : Request;
}

const createQuery = <Request, Response, Params = never>({
                                                            queryKey,
                                                            url,
                                                        }: ICreateQuery<Request, Params>): (<T = Response>(
    props: IUseQuery<Request, Response, Params, T>
) => UseQueryResult<T, unknown>) => {
    return (props) => {
        const { select, enabled, params, query } = props;
        const axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api',
        });
        const _queryKey = generateQueryKey<Request, Params>({
            queryKey,
            query: query,
            params: params,
        });
        const requestUrl = generateUrl<Params>({ url, params });
        const newParams = generateParamsData<Request>({
            query: query,
        });
        return useQuery({
            select,
            queryFn: async ({ signal }) => {
                const { data } = await axiosClient.get(requestUrl, {
                    signal,
                    params: newParams,
                });
                return data;
            },
            queryKey: _queryKey,
            enabled,
        });
    };
};

interface IGenerateQueryKey<Request, Params> {
    queryKey: QueryKey | ((variables: Request, params: Params) => QueryKey);
    query?: Request extends never ? never : Request;
    params?: Params extends never ? never : Params;
}

const generateQueryKey = <T, K>({ queryKey, query, params }: IGenerateQueryKey<T, K>) => {
    return typeof queryKey === 'function'
        ? queryKey(query ?? ({} as T), params ?? ({} as K))
        : queryKey;
};

interface IGenerateParamsData<Request> {
    query?: Request;
}

const generateParamsData = <T>({ query }: IGenerateParamsData<T>) => {
    return query ? query : {};
};

interface IGenerateURl<Params> {
    url: string | ((variables: Params extends never ? never : Params) => string);
    params?: Params extends never ? never : Params;
}

const generateUrl = <T>({ url, params }: IGenerateURl<T>) => {
    if (!params) params = {} as T;
    return typeof url === 'function' ? url(params) : url;
};

export default createQuery;
