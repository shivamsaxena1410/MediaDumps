export const Loader = ({ size = 'sm', color = 'text-(--accent)' }) => {
  // Map size choices to Tailwind sizing utilities
  const sizeClasses = {
    sm: 'w-50 h-50 border-10    ',
    md: 'w-8 h-8 border-4',
    lg: 'w-12 h-12 border-4',
  };

  return (
    <div className="flex items-center justify-center py-50">
      <div
        className={`
          ${sizeClasses[size] || sizeClasses.md} 
          ${color} 
          animate-spin 
          rounded-full 
          border-solid 
          border-current 
          border-r-transparent 
          motion-reduce:animate-[spin_1.5s_linear_infinite]
        `}
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loader
