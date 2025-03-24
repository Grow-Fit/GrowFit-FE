import { MAX_TIMEOUT_TIME } from '@/constants/api'
import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: MAX_TIMEOUT_TIME,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})
