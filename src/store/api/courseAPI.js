import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const COURSE_API = 'http://localhost:8080/api/v1/course'

export const courseApi = createApi({
    reducerPath: 'courseAPI',
    tagTypes: ['Refetch-Creater-Course'],
    baseQuery: fetchBaseQuery({
        baseUrl: COURSE_API,
        credentials: 'include'
    }),
    endpoints: (builder) => ({
        createCourse: builder.mutation({
            query: ({courseTitle, category}) => ({
                url: '',
                method: 'POST',
                body: {courseTitle, category}
            }),
            invalidatesTags: ['Refetch-Creater-Course']
        }),
        getCreatorCourse: builder.query({
            query: () => ({
                url: '',
                method: 'GET'
            }),
            providesTags: ['Refetch-Creater-Course']
        })
    })
})

export const {
    useCreateCourseMutation,
    useGetCreatorCourseQuery
} = courseApi