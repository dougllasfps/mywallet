import axios from 'axios'

const baseUrl = process.env.REACT_APP_BASE_SERVICE_URL;

export default axios.create({baseUrl});