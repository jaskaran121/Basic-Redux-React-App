import axios from 'axios';

const fetchPostsAPI = () => axios.get("https://jsonplaceholder.typicode.com/posts");

const createPostAPI = (postData) => axios
            .post("https://jsonplaceholder.typicode.com/posts", postData)

export default {
    fetchPostsAPI,
    createPostAPI
}