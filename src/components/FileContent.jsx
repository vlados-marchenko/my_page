// FileContent.js
import React from 'react';

const FileContent = ({ file, folderName, onClose, onNext, onPrev }) => {
  const getFileContent = () => {
    if (!file) {
      return <div className="text-center text-neutral-500">Файл не найден</div>;
    }

    const fileExtension = file.split('.').pop().toLowerCase();
    const filePath = `/public/projects/${folderName}/${file}`;

    if (['pdf', 'py', 'txt'].includes(fileExtension)) {
      return (
        <iframe
          src={filePath}
          className="w-[1000px] h-[600px] border rounded-lg"
          title="File Viewer"
        />
      );
    }

    return (
      <div className="text-center text-neutral-500">
        Файл типа {fileExtension} не поддерживается
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center relative">
      {/* Кнопки перехода между файлами */}
      <div className="flex space-x-4 mt-4">
        <button
          className="text-neutral-400 hover:text-neutral-200"
          onClick={onPrev}
          disabled={file === files[0]} // если первый файл, нельзя перейти назад
        >
          ← Предыдущий файл
        </button>
        <button
          className="text-neutral-400 hover:text-neutral-200"
          onClick={onNext}
          disabled={file === files[files.length - 1]} // если последний файл, нельзя перейти вперед
        >
          Следующий файл →
        </button>
      </div>

      <button
        className="absolute top-3 right-3 text-neutral-500 hover:text-neutral-100 transition"
        onClick={onClose}
      >
        ✕
      </button>

      <div className="mt-6">
        {getFileContent()}
      </div>
    </div>
  );
};

export default FileContent;
