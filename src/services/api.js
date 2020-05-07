import axios from 'axios'

const api = axios.create({
    baseURL: 'https://www.googleapis.com/customsearch'
})

export default api