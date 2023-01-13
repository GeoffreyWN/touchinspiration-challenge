/* eslint-disable comma-dangle */
import { createSlice } from '@reduxjs/toolkit'
import { getMembers, updateMemberDetails } from '../../../api/team'

const initialState = {
  isLoading: true,
  errors: {},
  members: [],
  modalOpen: false,
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
    },
    toggleModal: (state, action) => {
      state.modalOpen = action.payload
    },
  },
})

export const { setMembers, setIsLoading, toggleModal } = teamSlice.actions

export const fetchMembers =
  (loading = false) =>
  async (dispatch) => {
    try {
      const { data } = await getMembers()
      dispatch(setMembers(data))
      dispatch(setIsLoading(loading))
    } catch (err) {
      dispatch(setIsLoading(loading))
      // add error handling logic
      console.log(err)
    }
  }

export const updateMember =
  ({ memberId, name, occupation, bio, email }) =>
  async (dispatch) => {
    try {
      await updateMemberDetails({
        memberId,
        name,
        occupation,
        bio,
        email,
      })
      dispatch(fetchMembers())
      dispatch(toggleModal(false))
    } catch (err) {
      // add error handling logic
      console.log(err)
    }
  }

export const selectMembers = (state) => state.team.members
export const selectLoading = (state) => state.team.isLoading
export const selectModalOpen = (state) => state.team.modalOpen

export default teamSlice.reducer
