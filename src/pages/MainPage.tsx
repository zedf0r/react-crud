import { Link } from "react-router-dom";
import { fetchApi } from "../api/fetchApi";
import { useEffect, useState } from "react";
import { Post } from "../components";

import type { TypePost } from "../types/Posts.types";

export const MainPage = () => {
  const [posts, setPosts] = useState<TypePost[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  useEffect(() => {
    try {
      setLoading(true);
      fetchApi("/posts", "GET").then((data) => {
        setPosts(data);
      });
      setLoading(false);
      setError(false);
    } catch (error) {
      setError(true);
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
