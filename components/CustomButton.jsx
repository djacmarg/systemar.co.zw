import Link from "next/link";

const CustomButton = ({
  children,
  type = "button",
  onClick,
  disabled = false,
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex
        items-center
        justify-center
        rounded-xl
        px-6
        py-3
        font-medium
        text-white
        bg-gradient-to-r
        from-cyan-500
        to-blue-600
        shadow-lg
        transition-all
        duration-300
        hover:scale-105
        hover:shadow-xl
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${className}
      `}
    >
      {children}
    </button>
  );
};

const CustomLink = ({
  children,
  href,
  onClick,
  className = "",
}) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`
        inline-flex
        items-center
        justify-center
        rounded-xl
        px-6
        py-3
        font-medium
        text-white
        bg-gradient-to-r
        from-cyan-500
        to-blue-600
        shadow-lg
        transition-all
        duration-300
        hover:scale-105
        hover:shadow-xl
        ${className}
      `}
    >
      {children}
    </Link>
  );
};

export { CustomButton, CustomLink };