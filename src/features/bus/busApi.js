import { apiSlice } from "../api/apiSlice";
import { setAvailableRoutes, setForm, setIsLoading, setTo } from "./busSlice";

export const  busApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAvailableBusRoutes: builder.query({
            query: (data) => ({
                url: `/bus/routes?from=${data?.form}&to=${data?.to}&page=${data?.page}`,
                method: 'GET',
            }),
        }),
        searchBusRoutes:builder.mutation({
            query: (data) => ({
                url: `/bus/routes?from=${data?.form}&to=${data?.to}&page=${data?.page}`,
                method: 'GET',
            }),
            async onQueryStarted(arg,{queryFulfilled,dispatch}){
                dispatch(setIsLoading(true))
                try{
                    const result = await queryFulfilled;
                    if(result){
                        dispatch(setIsLoading(false));
                        dispatch(setAvailableRoutes(result?.data?.data?.results));
                        dispatch(setForm(result?.data?.data?.from));
                        dispatch(setTo(result?.data?.data?.to));
                    }
                }
                catch(error){
                    console.log(error);
                }
            }
        })
    
    }),
});

export const {useGetAvailableBusRoutesQuery,useSearchBusRoutesMutation} =busApi;