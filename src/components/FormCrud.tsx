import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchApi } from "../api/fetchApi";
import { Button } from "./Button";

export const FormCrud = () => {
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

    fetchApi("/posts", "POST", responseBody).then((response) => {
      if (response) {
        navigate(-1);

        return;
      }
      throw new Error("Произошла ошибка");
    });
  };

  return (
    <>
      <form className="form">
        <div className="form-info">
          <div className="personal-info--image"></div>
          <textarea
            className="post-textarea"
            name="post-textarea"
            value={message}
            onChange={(event) => handleChange(event)}
          ></textarea>
        </div>
        <Button text="Опубликовать" evt={handleSubmit} />
      </form>
    </>
  );
};
