import React from 'react';

const Modal = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-neutral-900 p-6 rounded-lg shadow-lg w-96 relative">
        <button 
          className="absolute top-2 right-2 text-neutral-400 hover:text-white" 
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
