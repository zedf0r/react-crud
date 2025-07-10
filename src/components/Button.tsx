export const Button = ({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick: (event: React.MouseEvent) => void;
}) => {
  return (
    <button
      className={`btn-submit ${className}`}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
