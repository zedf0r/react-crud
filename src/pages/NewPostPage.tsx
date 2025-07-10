import { useNavigate } from "react-router-dom";
import { fetchApi } from "../api/fetchApi";
import { Button, CloseButton, PostForm } from "../components";
import { useState } from "react";

export const NewPostPage = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.preventDefault();
    setMessage(event.target.value);
  };

  const handleSubmit = (event: React.MouseEvent) => {
    event.preventDefault();

    const responseBody = { id: 0, content: message };

    fetchApi("/posts", "POST", responseBody)
      .then(() => {
        navigate(-1);
      })
      .catch((error) => {
        throw new Error(`Ошибка ${error}`);
      })
      .finally(() => {
        console.log("Загрузка закончена");
      });
  };

  return (
    <div className="main__container">
      <div className="new-post">
        <div className="new-post__header">
          <div className="new-post__header-type">
            <p>Публикация</p>
          </div>
          <CloseButton />
        </div>
        <PostForm onChange={handleChange} message={message} />
        <Button onClick={handleSubmit}>Опубликовать</Button>
      </div>
    </div>
  );
};
