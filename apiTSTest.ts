//contains all Axios API calls using TypeScript
//error handling

import axios from 'axios';
import * as dotenv from 'dotenv';
import { Post, Comment } from './types';

dotenv.config();

const BASE_URL = process.env.BASE_URL || 'https://jsonplaceholder.typicode.com';

// 1. Fetch all posts
export async function getAllPosts(): Promise<void> {
  try {
    const response = await axios.get<Post[]>(`${BASE_URL}/posts`);
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching all posts:', error);
  }
}

// 2. Fetch post by ID
export async function getPostById(id: number): Promise<void> {
  try {
    const response = await axios.get<Post>(`${BASE_URL}/posts/${id}`);
    console.log(response.data);
  } catch (error) {
    console.error(`Error fetching post ${id}:`, error);
  }
}

// 3. Fetch comments for a post
export async function getCommentsForPost(id: number): Promise<void> {
  try {
    const response = await axios.get<Comment[]>(`${BASE_URL}/posts/${id}/comments`);
    console.log(response.data);
  } catch (error) {
    console.error(`Error fetching comments for post ${id}:`, error);
  }
}

// 4. Create a new post
export async function createPost(post: Post): Promise<void> {
  try {
    const response = await axios.post<Post>(`${BASE_URL}/posts`, post);
    console.log('Created post:', response.data);
  } catch (error) {
    console.error('Error creating post:', error);
  }
}

// 5. Full update with PUT
export async function updatePostWithPut(id: number, post: Post): Promise<void> {
  try {
    const response = await axios.put<Post>(`${BASE_URL}/posts/${id}`, post);
    console.log('Updated (PUT):', response.data);
  } catch (error) {
    console.error(`Error updating post ${id} with PUT:`, error);
  }
}

// 6. Partial update with PATCH
export async function updatePostWithPatch(id: number, data: Partial<Post>): Promise<void> {
  try {
    const response = await axios.patch<Post>(`${BASE_URL}/posts/${id}`, data);
    console.log('Updated (PATCH):', response.data);
  } catch (error) {
    console.error(`Error updating post ${id} with PATCH:`, error);
  }
}

// 7. Delete a post
export async function deletePost(id: number): Promise<void> {
  try {
    const response = await axios.delete(`${BASE_URL}/posts/${id}`);
    console.log('Deleted:', response.status === 200);
  } catch (error) {
    console.error(`Error deleting post ${id}:`, error);
  }
}

// Example usage:
getAllPosts();
// getPostById(1);
// getCommentsForPost(1);
// createPost({ userId: 1, title: 'New Post', body: 'Hello World' });
// updatePostWithPut(1, { userId: 1, title: 'Updated Title', body: 'Updated Body' });
// updatePostWithPatch(1, { title: 'Patched Title' });
// deletePost(1);
