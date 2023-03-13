import { createSlice } from '@reduxjs/toolkit'

let initialState = window.localStorage.getItem('currentUser') ? JSON.parse(window.localStorage.getItem('currentUser')) : {
    isSuccess: false,
    token: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        getUser(state, {payload}) {
            state.isSuccess = true
            state.token = payload.token
            window.localStorage.setItem('currentUser', JSON.stringify({
                isSuccess: true,
                token: payload.token
            }))
            return state
        },
        logout(state) {
            state.isSuccess = false
            state.token = null
            window.localStorage.removeItem('currentUser')
            return state
        }
    }
})

export const { getUser, logout } = authSlice.actions
export default authSlice.reducer