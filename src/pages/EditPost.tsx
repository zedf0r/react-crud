import { Button, PostForm } from "../components";
import type { TypePost } from "../types/Posts.types";

type TypeEditPost = {
  post: TypePost;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSave: () => void;
};

export const EditPost: React.FC<TypeEditPost> = ({
  post,
  handleChange,
  handleSave,
}) => {
  return (
    <div className="post">
      <PostForm
        message={post.content}
        onChange={(event) => handleChange(event)}
      />
      <Button onClick={handleSave}>Сохранить</Button>
    </div>
  );
};
