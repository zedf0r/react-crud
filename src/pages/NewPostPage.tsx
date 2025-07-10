import { CloseButton, FormCrud } from "../components";

export const NewPostPage = () => {
  return (
    <div className="main__container">
      <div className="new-post">
        <div className="new-post__header">
          <div className="new-post__header-type">
            <p>Публикация</p>
          </div>
          <CloseButton />
        </div>
        <FormCrud />
      </div>
    </div>
  );
};
