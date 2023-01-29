import { apiSlice } from "../api/apiSlice";

export const  openApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getDistricts : builder.query({
            query: () => ({
                url: `/districts`,
                method: 'GET',
            }),
        }),
    }),
});

export const {useGetDistrictsQuery} =openApi;