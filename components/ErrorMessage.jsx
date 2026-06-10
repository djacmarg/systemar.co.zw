const ErrorMessage = ({ 
  message, 
  className = "",
  showIcon = true 
}) => {
  if (!message) return null;

  return (
    <div
      className={`mt-2 bg-red-100 border border-red-300 rounded-xl p-3 flex items-center gap-3 ${className}`}
      role="alert"
    >
      {showIcon && (
        <div className="w-4 h-4 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
          !
        </div>
      )}
      <p className="text-red-700 text-sm font-medium leading-tight">{message}</p>
    </div>
  );
};

export default ErrorMessage;