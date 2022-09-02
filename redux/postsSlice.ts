import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface PostData {
    title: string,
    status: string,
    desc: string,
    photo: string
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
        }
    }
})

export const { setPost } = postSlice.actions
export default postSlice.reducer
