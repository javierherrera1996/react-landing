import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading; 