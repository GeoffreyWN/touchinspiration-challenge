import axios from 'axios'
import { requestDefaults } from '.'


const { baseURL, headers } = requestDefaults

export const getMembers = () => axios.get(`${baseURL}/sample`, { headers })
