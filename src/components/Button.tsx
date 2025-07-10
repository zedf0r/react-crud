export const Button = ({
  text,
  className,
  evt,
}: {
  text: string;
  className?: string;
  evt: (event: React.MouseEvent) => void;
}) => {
  return (
    <button className={`btn-submit ${className}`} type="button" onClick={evt}>
      {text}
    </button>
  );
};
