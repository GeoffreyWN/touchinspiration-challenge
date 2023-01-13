import axios from 'axios'
import { requestDefaults } from '.'

const { baseURL, headers } = requestDefaults

export const getMembers = () => axios.get(`${baseURL}/sample`, { headers })

export const updateMemberDetails = (data) =>
  axios.patch(`${baseURL}/sample/${data.memberId}`, data, { headers })
