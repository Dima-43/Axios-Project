//Axios: is a popular tool to make HTTP requests (like GET, POST, etc.)
//imports the Axios library
const axios = require('axios');

//Set the Base URL
const BASE_URL = 'https://jsonplaceholder.typicode.com'; //just add the rest instead of typing the full URL every time


//keywords:
//async: means this function does something asynchronously (waits for data)
//await: it waits for something (like an API request) to finish before moving to the next line.

// 1. Fetch all posts
async function getAllPosts() {
  const response = await axios.get(`${BASE_URL}/posts`);//sends a GET request to get all posts
  console.log(response.data); //prints the data (list of posts)
}

// 2. Fetch single post by ID
async function getPostById(id) {
  const response = await axios.get(`${BASE_URL}/posts/${id}`); //It takes a post id and gets that specific post
  console.log(response.data);
}

// 3. Fetch comments for specific post
async function getCommentsForPost(id) {
  const response = await axios.get(`${BASE_URL}/posts/${id}/comments`); //gets comments related to one post using its id
  console.log(response.data);
}

// 4. Update a post (PUT replaces everything)
//PUT replaces the entire post with new content.
async function updatePostWithPut(id) {
  const response = await axios.put(`${BASE_URL}/posts/${id}`, {
    title: 'Updated title',
    body: 'Updated body',
    userId: 1,
  }); //The object { title, body, userId } is the new post data.
  console.log(response.data);
}

// 5. Partial update (PATCH)
async function updatePostWithPatch(id) {
  const response = await axios.patch(`${BASE_URL}/posts/${id}`, {
    title: 'New Title Only',
  }); //This only changes the title of the post
  console.log(response.data);
}

// 6. Delete a post
async function deletePost(id) {
  const response = await axios.delete(`${BASE_URL}/posts/${id}`); //sends a request to delete a post
  console.log('Deleted:', response.status === 200); //If it's successful (status === 200), it logs Deleted: true
}

//getAllPosts();
 getPostById(1);
// getCommentsForPost(1); //gets comments for post 1
// updatePostWithPut(1);
// updatePostWithPatch(1);
// deletePost(1);
