import axios from 'axios'

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: '1820ed5b82c5417bb06b2b5fc8648315'
    }
})