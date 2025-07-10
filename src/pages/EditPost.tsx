import { Button, Image } from "../components";
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
      <div className="post-edit__main">
        <Image />
        <textarea
          className="post-edit__textarea"
          value={post.content}
          onChange={handleChange}
        />
      </div>
      <Button text="Сохранить" evt={handleSave} />
    </div>
  );
};
