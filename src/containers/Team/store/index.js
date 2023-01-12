import { createSlice } from '@reduxjs/toolkit'
import { getMembers } from '../../../api/team'

const initialState = {
  isLoading: true,
  errors: {},
  members: []
}

export const teamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload
    },

    setMembers: (state, action) => {
      state.members = action.payload
    }
  }
})

export const { setMembers, setIsLoading } = teamSlice.actions

export const fetchMembers =
  (loading = true) =>
  async (dispatch) => {
    try {
      dispatch(setIsLoading(loading))
      const { data } = await getMembers()
      dispatch(setMembers(data))
    } catch (error) {
      dispatch(setIsLoading(false))
      console.log(error)
    }
  }

export const selectMembers = (state) => state.team.members
export const selectLoading = (state) => state.team.isLoading

export default teamSlice.reducer
