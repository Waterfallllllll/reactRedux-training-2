import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3001"}),
    tagTypes: ["Heroes"],

    endpoints: builder => ({
        getHeroes: builder.query({
            query: () => "/heroes",
            providesTags: ["Heroes"] // Когда мы получили данные к какому тегу они будут относиться
        }),
        createHero: builder.mutation({
            query: hero => ({
                url: "/heroes",
                method: "POST",
                body: hero
            }),
            invalidatesTags: ["Heroes"] // Если происходит мутация, то в каких данных это происходит
        }),
        deleteHero: builder.mutation({
            query: id => ({
                url: `/heroes/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Heroes"]
        })
    })
});

export const {useGetHeroesQuery, useCreateHeroMutation, useDeleteHeroMutation} = apiSlice;