import axios from 'axios'

interface postsList {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}

async function fetchData(): Promise<postsList[]> {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1/comments")
        return response.data;
    } catch (error) {
        console.log(error);
        return []
    }
}

fetchData().then((postsList) => {
    console.log(postsList);

}).catch((Error) => {
    console.log(Error);
})