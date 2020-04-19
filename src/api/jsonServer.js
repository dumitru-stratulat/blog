import axios from 'axios'

export default axios.create({
    baseURL: 'http://3eb7474c.ngrok.io' //change when npm run tunnel in jsonserver folder
})