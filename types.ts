//types.ts contain Post and Comment interfaces for better type safety

export interface Post {
  userId: number;
  id?: number;
  title: string;
  body: string;
}

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
