import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Post, Button } from "../components";

import { fetchApi } from "../api/fetchApi";

import type { TypePost } from "../types/Posts.types";
import { EditPost } from "./EditPost";

export const PostEdit = () => {
  const [post, setPost] = useState<TypePost>({
    id: 0,
    created: 0,
    content: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [showEditPost, setShowEditPost] = useState(false);

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    fetchApi(`/posts/${id}`, "GET")
      .then((data) => {
        setPost(data.post);
      })
      .catch((error) => {
        throw new Error(`Ошибка ${error}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  const handleDelete = (event: React.MouseEvent) => {
    event.preventDefault();

    fetchApi(`/posts/${id}`, "DELETE").then((response) => {
      if (response.ok) {
        navigate(-1);
      }
    });
  };

  const handleClick = () => {
    setShowEditPost((prev) => (prev = !prev));
  };

  const handleSave = () => {
    fetchApi(`/posts/${id}`, "PUT", post).then((response) => {
      if (response) {
        setShowEditPost((prev) => (prev = !prev));
        return;
      }

      throw new Error("Произошла ошибка");
    });
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.preventDefault();

    setPost((prev) => ({
      ...prev,
      content: event.target.value,
    }));
  };

  if (isLoading) {
    return <p>Загрузка</p>;
  }

  if (showEditPost) {
    return (
      <>
        <div className="post-edit__header">
          <p>Редактировать публикацию</p>
          <div className="new-post__header-close" onClick={handleClick}>
            <div></div>
            <div></div>
          </div>
        </div>
        <EditPost
          post={post}
          handleChange={handleChange}
          handleSave={handleSave}
        />
      </>
    );
  }

  return (
    <div className="main__container">
      <Post post={post}>
        <div className="edit-buttons">
          <Button onClick={handleClick}>Изменить</Button>
          <Button
            className="btn-delete"
            onClick={(event) => {
              handleDelete(event);
            }}
          >
            Удалить
          </Button>
        </div>
      </Post>
    </div>
  );
};
