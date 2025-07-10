import { Link } from "react-router-dom";
import { fetchApi } from "../api/fetchApi";
import { useEffect, useState } from "react";
import { Post } from "../components";

import type { TypePost } from "../types/Posts.types";

export const MainPage = () => {
  const [posts, setPosts] = useState<TypePost[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    try {
      setIsLoading(true);
      fetchApi("/posts", "GET").then((data) => {
        setPosts(data);
      });
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
      throw new Error(`Ошибка ${error}`);
    }
  }, []);

  return (
    <div className="main__container">
      <div className="container__box-new-post">
        <Link to="/posts/new" className="btn__new-post">
          Создать пост
        </Link>
      </div>
      <div className="container__posts">
        {isError
          ? "Ошибка"
          : isLoading
          ? "Загрузка"
          : posts.map((post) => {
              return (
                <Link key={post.id} to={`posts/${post.id}`}>
                  <Post key={post.id} post={post} />
                </Link>
              );
            })}
      </div>
    </div>
  );
};
