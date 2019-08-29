import axios from 'axios'

export default {
    username: function() {
        return axios.get("http://localhost:5000/api/login")
    }
}