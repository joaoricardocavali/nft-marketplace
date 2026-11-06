import { configureStore, createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface NavigationState {
  currentPage: string
}

const initialState: NavigationState = {
  currentPage: 'inicio',
}

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setCurrentPage(state, action: PayloadAction<string>) {
      state.currentPage = action.payload
    },
  },
})

export const { setCurrentPage } = navigationSlice.actions

export const store = configureStore({
  reducer: {
    navigation: navigationSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
