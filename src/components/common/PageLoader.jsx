const PageLoader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 animate-pulse" />
      
      {/* Loader content */}
      <div className="relative flex flex-col items-center gap-6">
        {/* Logo animation */}
        <div className="relative">
          {/* Spinning ring */}
          <div className="w-16 h-16 rounded-full border-[3px] border-slate-100 border-t-blue-600 animate-spin" />
          
          {/* Pulsing center dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3 h-3 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full animate-pulse" />
          </div>
        </div>
        
        {/* Loading text with fade effect */}
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm font-medium text-slate-600 tracking-wide animate-pulse">
            Loading
          </p>
          
          {/* Animated dots */}
          <div className="flex gap-1">
            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
