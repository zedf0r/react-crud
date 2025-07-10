import { useNavigate } from "react-router-dom";

export const CloseButton = () => {
  const navigate = useNavigate();
  return (
    <div className="new-post__header-close" onClick={() => navigate(-1)}>
      <div></div>
      <div></div>
    </div>
  );
};
