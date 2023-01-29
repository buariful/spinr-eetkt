import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://eetkt.spinnertechltd.com/api',
        prepareHeaders: async (headers, { getState, endpoint }) => {
            const token = getState()?.auth?.token;
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
                headers.set('Content-Type', 'application/json');
                headers.set('Accept', 'application/json');
            }
            else{
                headers.set('Content-Type', 'application/json');
                headers.set('Accept', 'application/json');
            }
            return headers;
        },
    }),
    tagTypes: [''],
    endpoints: (builder) => ({}),
});
        