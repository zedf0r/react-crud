import type { TypePost } from "../types/Posts.types";
import { Image } from "./Image";

export const Post = ({
  post,
  children,
}: {
  post: TypePost;
  children?: React.ReactNode;
}) => {
  return (
    <>
      <div className="post">
        <div className="post__personal">
          <div className="post__personal-info">
            <Image />
            <div className="personal-info">
              <div className="personal-info__name">Ilnaz Galiev</div>
              <div className="personal-info__status">
                <span>Основатель группы</span>
                <span className="personal-info__time-published">
                  {Math.floor(((post.created / 1000) * 60) % 60)} минут
                </span>
              </div>
            </div>
          </div>
          <div className="post__hide">
            <div></div>
            <div></div>
          </div>
        </div>
        <p className="post__text">{post.content}</p>
        <div className="post__interaction">
          <div className="interaction-like">Нравится</div>
          <div className="interaction-comment">Комментировать</div>
        </div>
      </div>
      {children}
    </>
  );
};
