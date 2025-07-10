export const PostForm = ({
  message,
  onChange,
}: {
  message: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}) => {
  return (
    <div className="box">
      <div className="box-info">
        <div className="personal-info--image"></div>
        <textarea
          className="post-textarea"
          name="post-textarea"
          value={message}
          onChange={(event) => onChange(event)}
        />
      </div>
    </div>
  );
};
