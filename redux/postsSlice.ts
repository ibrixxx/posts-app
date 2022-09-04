import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface PostData {
    title: string,
    status: number,
    desc: string,
    photo: string,
    createdAt: string
}

const postSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [] as PostData[],
        loading: false
    },
    reducers: {
        setPost(state, action: PayloadAction<PostData>) {
            state.posts = [...state.posts, action.payload]
        },
        setInitialPost(state, action: PayloadAction<PostData[]>) {
            state.posts = action.payload
        }
    }
})

export const { setPost, setInitialPost } = postSlice.actions
export default postSlice.reducer
