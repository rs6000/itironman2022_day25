import axios from 'axios';

const KEY = 'AIzaSyAsHmqH9SX3RDJOr_FYi8m8ZM62-ohWcGI'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    },
})