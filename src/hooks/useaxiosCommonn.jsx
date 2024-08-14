import axios from 'axios'

export const axiosCommon = axios.create({
    baseURL: import.meta.env.VITE_APII_URL,
})
const useAxiosCommon = () => {
    return axiosCommon
}

export default useAxiosCommon
