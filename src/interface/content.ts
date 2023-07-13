interface CommentUser {
  fullname: string;
  images: string | null;
  id: string;
}

export interface CommentInterface {
  content: string;
  comments_user: CommentUser;
}
interface UserPost {
  id: string;
  fullname: string;
}

export interface ContentInterface {
  validation: boolean;
  content: string;
  image: string;
  id: string;
  post_user: UserPost;
  post_comments: CommentInterface[];
}
