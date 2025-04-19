// import React, { useState } from 'react';
// import { motion } from "framer-motion";

// // component to show file's insight
// const FileContent = ({ file, onClose, onBack }) => {
//     const getFileContent = () => {
//         const fileExtention = file.split('.').pop();

//         if(fileExtention === 'pdf' || fileExtention === 'py') {
//             return <iframe src={`/projects/${file}`} className="w-full h-96" />
//         }

//         if(fileExtention === 'png' || fileExtention === 'jpg' || fileExtention === 'jpeg') {
//             return <img src={`/projects/${file}`} alt={file} className="w-full h-auto" />
//         }

//         return <div className="text-center text-neutral-500">Невозможно отобразить этот файл</div>
//     };

//     return (
//         <div className="flex flex-col items-center">
//             <button className="absolute top-3 right-3 text-neutral-500 hover:text-neutral-100 transition"
//             onClick={onClose}>
//                 ✕
//             </button>

//             {/* Кнопка возврата в папку */}
//             <button className="mt-4 text-neutral-400 hover:text-neutral-200" onClick={onBack}>
//                 ← Вернуться в папку
//             </button>

//             <div className="mt-6">
//                 {getFileContent()}
//             </div>
//     </div>
//     );
// };

// // modal window to show files
// const Modal = ({ files, currentFileIndex ,onClose, onBack }) => {
//     const currentFile = files[currentFileIndex];
    
//     return (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-lg z-50">
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 20 }}
//             transition={{ duration: 0.3 }}
//             className="bg-neutral-900 text-neutral-300 border border-neutral-700 p-6 rounded-2xl shadow-2xl w-96 max-w-full"
//           >
//             <FileContent file={currentFile} onClose={onClose} onBack={onBack} />
//           </motion.div>
//         </div>
//       );
// };

// // folder component with clickable icon and openable modal window
// const Folder = ({ folderName, files }) => {
//     const[isModalOpen, setIsModalOpen] = useState(false);
//     const [currentFileIndex, setCurrentFileIndex] = useState(0);

//     const openFile = (index) => {
//         setCurrentFileIndex(index);
//         setIsModalOpen(true);
//     };

//     const closeModal = () => {
//         setIsModalOpen(false);
//         setCurrentFileIndex(0);
//     };

//     const goBackToFolder = () => {
//         setIsModalOpen(false);
//     };
//     // const openModal = () => setIsModalOpen(true);
//     // const closeModal = () => setIsModalOpen(false);

//     return (
//         <div className="flex flex-col items-center space-y-4 p-4 w-64"> {/* Ограничение ширины папки */}
//           <div
//             className="flex items-center space-x-3 cursor-pointer p-4 hover:bg-neutral-800 rounded-lg transition w-full justify-center" 
//             onClick={() => openFile(0)} // Открытие первого файла в папке
//           >
//             <img className="w-12 h-12" src="folder-icon.png" alt="Folder Icon" />
//             <span className="text-lg font-medium text-neutral-300">{folderName}</span>
//           </div>
    
//           {isModalOpen && (
//             <Modal
//               files={files}
//               currentFileIndex={currentFileIndex}
//               onClose={closeModal}
//               onBack={goBackToFolder}
//             />
//           )}
//         </div>
//     );
// };

// const Portfolio = () => {
//     const filesInProject1 = ["work_with_nltk.py"];
//     // const filesInProject2 = ["", ""];

//     return (
//         <div className="p-6 flex justify-center space-x-6">
//             <Folder folderName="project1" files={filesInProject1} />
//             {/* <Folder folderName="project2" files={filesInProject2} /> */}

//         </div>
//     );
// };

// export default Portfolio;

// import React, { useState } from "react";
// import { motion } from "framer-motion";

// // Компонент для отображения содержимого файла
// const FileContent = ({ file, files, onClose, onBack, onNext, onPrev }) => {
//     const getFileContent = () => {
//         if (!file) {
//           return <div className="text-center text-neutral-500">Файл не найден</div>;
//         }
      
//         const fileExtension = file.split('.').pop().toLowerCase();
//         const filePath = `/projects/project1/${file}`;
      
//         if (['pdf', 'py', 'png', 'jpeg', 'txt'].includes(fileExtension)) {
//           return (
//             <iframe
//               src={filePath}
//               className="w-[1000px] h-[600px] border rounded-lg"
//               title="PDF Viewer"
//             />
//           );
//         }
      
//         return (
//           <div className="text-center text-neutral-500">
//             Файл типа {fileExtension} не поддерживается
//           </div>
//         );
//       };
      

//   return (
//     <div className="flex flex-col items-center relative">
//       <button
//         className="absolute top-3 right-3 text-neutral-500 hover:text-neutral-100 transition"
//         onClick={onClose}
//       >
//         ✕
//       </button>

//       {/* Кнопка возврата в папку */}
//       {/* <button
//         className="mt-4 text-neutral-400 hover:text-neutral-200"
//         onClick={onBack}
//       >
//         ← Вернуться в папку
//       </button> */}

//       {/* Кнопки перехода между файлами */}
//       <div className="flex space-x-4 mt-4">
//         <button
//           className="text-neutral-400 hover:text-neutral-200"
//           onClick={onPrev}
//           disabled={file === files[0]} // если первый файл, нельзя перейти назад
//         >
//           ← Предыдущий файл
//         </button>
//         <button
//           className="text-neutral-400 hover:text-neutral-200"
//           onClick={onNext}
//           disabled={file === files[files.length - 1]} // если последний файл, нельзя перейти вперед
//         >
//           Следующий файл →
//         </button>
//       </div>

//       <div className="mt-6">
//         {getFileContent()}
//       </div>
//     </div>
//   );
// };

// const Modal = ({ files, currentFileIndex, onClose, onBack, onNext, onPrev }) => {
//   const currentFile = files[currentFileIndex];

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-lg z-50">
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: 20 }}
//         transition={{ duration: 0.3 }}
//         className="bg-neutral-900 text-neutral-300 border border-neutral-700 p-6 rounded-2xl shadow-2xl w-auto max-w-full h-auto"
//       >
//         <FileContent
//           file={currentFile}
//           files={files} // Передаем все файлы в компонент
//           onClose={onClose}
//           onBack={onBack}
//           onNext={onNext}
//           onPrev={onPrev}
//         />
//       </motion.div>
//     </div>
//   );
// };

// // Компонент для отображения папки с проектами
// const Folder = ({ folderName, files, onOpenFile }) => {
//   return (
//     <div className="flex flex-col items-center space-y-4 p-4 w-64">
//       <div
//         className="flex items-center space-x-3 cursor-pointer p-4 hover:bg-neutral-800 rounded-lg transition w-full justify-center" 
//         onClick={() => onOpenFile(folderName)} // Открытие файлов в папке
//       >
//         <img className="w-12 h-12" src="folder-icon.png" alt="Folder Icon" />
//         <span className="text-lg font-medium text-neutral-300">{folderName}</span>
//       </div>
//     </div>
//   );
// };

// // Главный компонент для отображения списка папок и файлов
// const Portfolio = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [currentFileIndex, setCurrentFileIndex] = useState(0);
//   const [filesInCurrentFolder, setFilesInCurrentFolder] = useState([]);
//   const [isFolderView, setIsFolderView] = useState(true); // Статус: показываем папку или файлы

//   const projectFiles = {
//     project1: ["work_with_nltk.py", "simple movie reviews.txt", "example.pdf"],
//     // Добавить другие проекты здесь
//   };

//   const openFile = (index) => {
//     setCurrentFileIndex(index);
//     setIsModalOpen(true);
//     setIsFolderView(false); // Переходим к просмотру файлов, а не папки
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setCurrentFileIndex(0);
//     setFilesInCurrentFolder([]);
//     setIsFolderView(true); // После закрытия модального окна показываем снова папку
//   };

//   const goNextFile = () => {
//     if (currentFileIndex < filesInCurrentFolder.length - 1) {
//       setCurrentFileIndex(currentFileIndex + 1);
//     }
//   };

//   const goPrevFile = () => {
//     if (currentFileIndex > 0) {
//       setCurrentFileIndex(currentFileIndex - 1);
//     }
//   };

//   const openFolder = (folderName) => {
//     console.log("Opening folder:", folderName); // Для отладки
//     const files = projectFiles[folderName];
//     if (!files) {
//       console.error("No files found for this folder");
//       return;
//     }
//     setFilesInCurrentFolder(files);
//     setIsFolderView(false); // Переходим к отображению файлов в папке
//   };

//   return (
//     <div className="p-6 flex justify-center space-x-6">
//       {/* Показываем папки, если не в режиме просмотра файлов */}
//       {isFolderView &&
//         Object.keys(projectFiles).map((folderName) => (
//           <Folder
//             key={folderName}
//             folderName={folderName}
//             files={projectFiles[folderName]}
//             onOpenFile={openFolder}
//           />
//         ))}

//       {/* Показываем список файлов, если в режиме просмотра папки */}
//       {!isFolderView && (
//         <div className="flex flex-col items-center space-y-4 p-4 w-64">
//           <h2 className="text-xl text-neutral-300 mb-4">Файлы в папке:</h2>
//           <div className="space-y-2">
//             {filesInCurrentFolder.map((file, index) => (
//               <div
//                 key={index}
//                 className="cursor-pointer text-neutral-300 hover:text-neutral-100 p-2"
//                 onClick={() => openFile(index)} // Открытие файла
//               >
//                 {file}
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Модальное окно с содержимым файла */}
//       {isModalOpen && (
//         <Modal
//           files={filesInCurrentFolder}
//           currentFileIndex={currentFileIndex}
//           onClose={closeModal}
//           onNext={goNextFile}
//           onPrev={goPrevFile}
//         />
//       )}
//     </div>
//   );
// };

// export default Portfolio;


// import React, { useState } from "react";
// import { motion } from "framer-motion";

// // Компонент для отображения содержимого файла
// const FileContent = ({ file, files, onClose, onNext, onPrev }) => {
//   const getFileContent = () => {
//     if (!file) {
//       return <div className="text-center text-neutral-500">Файл не найден</div>;
//     }

//     const fileExtension = file.split('.').pop().toLowerCase();
//     const filePath = `/projects/project1/${file}`;

//     if (['pdf', 'py', 'png', 'jpeg', 'txt'].includes(fileExtension)) {
//       return (
//         <iframe
//           src={filePath}
//           className="w-[1000px] h-[600px] border rounded-lg"
//           title="PDF Viewer"
//         />
//       );
//     }

//     return (
//       <div className="text-center text-neutral-500">
//         Файл типа {fileExtension} не поддерживается
//       </div>
//     );
//   };

//   return (
//     <div className="flex flex-col items-center relative">
//       <button
//         className="absolute top-3 right-3 text-neutral-500 hover:text-neutral-100 transition"
//         onClick={onClose}
//       >
//         ✕
//       </button>

//       {/* Кнопки перехода между файлами */}
//       <div className="flex space-x-4 mt-4">
//         <button
//           className="text-neutral-400 hover:text-neutral-200"
//           onClick={onPrev}
//           disabled={file === files[0]} // если первый файл, нельзя перейти назад
//         >
//           ← Предыдущий файл
//         </button>
//         <button
//           className="text-neutral-400 hover:text-neutral-200"
//           onClick={onNext}
//           disabled={file === files[files.length - 1]} // если последний файл, нельзя перейти вперед
//         >
//           Следующий файл →
//         </button>
//       </div>

//       <div className="mt-6">
//         {getFileContent()}
//       </div>
//     </div>
//   );
// };

// // Модальное окно для отображения содержимого файла
// const Modal = ({ files, currentFileIndex, onClose, onNext, onPrev }) => {
//   const currentFile = files[currentFileIndex];

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-lg z-50">
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: 20 }}
//         transition={{ duration: 0.3 }}
//         className="bg-neutral-900 text-neutral-300 border border-neutral-700 p-6 rounded-2xl shadow-2xl w-auto max-w-full h-auto"
//       >
//         <FileContent
//           file={currentFile}
//           files={files}
//           onClose={onClose}
//           onNext={onNext}
//           onPrev={onPrev}
//         />
//       </motion.div>
//     </div>
//   );
// };

// // Компонент для отображения папки с проектами
// const Folder = ({ folderName, files, onOpenFile }) => {
//   return (
//     <div className="flex flex-col items-center space-y-4 p-4 w-64">
//       <div
//         className="flex items-center space-x-3 cursor-pointer p-4 hover:bg-neutral-800 rounded-lg transition w-full justify-center"
//         onClick={() => onOpenFile(folderName)} // Открытие файлов в папке
//       >
//         <img className="w-12 h-12" src="folder-icon.png" alt="Folder Icon" />
//         <span className="text-lg font-medium text-neutral-300">{folderName}</span>
//       </div>

//       {/* Кнопка для возврата к папкам */}
//       {/* <button
//         className="mt-4 text-neutral-400 hover:text-neutral-200"
//         onClick={onGoBack}
//       >
//         Назад
//       </button> */}
//     </div>
//   );
// };

// // Главный компонент для отображения списка папок и файлов
// const Portfolio = () => {
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [currentFileIndex, setCurrentFileIndex] = useState(0);
//     const [filesInCurrentFolder, setFilesInCurrentFolder] = useState([]);
//     const [isFolderView, setIsFolderView] = useState(true); // Состояние для отображения папок или файлов
  
//     const projectFiles = {
//       project1: ["work_with_nltk.py", "simple movie reviews.txt"],
//       // project2: ["folder-icon.png"],
//     };
  
//     const openFile = (index) => {
//       setCurrentFileIndex(index);
//       setIsModalOpen(true);
//       setIsFolderView(false);  // Переход к отображению файлов в папке
//     };
  
//     const closeModal = () => {
//       setIsModalOpen(false);
//       setCurrentFileIndex(0);
//       setFilesInCurrentFolder([]);
//     };
  
//     const goBackToFolderView = () => {
//       setIsFolderView(true);  // Возвращаемся к отображению папок
//       setFilesInCurrentFolder([]); // Очистить список файлов
//     };
  
//     const goNextFile = () => {
//       if (currentFileIndex < filesInCurrentFolder.length - 1) {
//         setCurrentFileIndex(currentFileIndex + 1);
//       }
//     };
  
//     const goPrevFile = () => {
//       if (currentFileIndex > 0) {
//         setCurrentFileIndex(currentFileIndex - 1);
//       }
//     };
  
//     const openFolder = (folderName) => {
//       console.log("Opening folder:", folderName); // Для отладки
//       const files = projectFiles[folderName];
//       if (!files) {
//         console.error("No files found for this folder");
//         return;
//       }
//       setFilesInCurrentFolder(files);
//       setIsModalOpen(true);
//       setIsFolderView(false);  // Показываем файлы в папке
//     };
  
//     return (
//       <div className="p-6 flex justify-center space-x-6">
//         {/* Показываем папки */}
//         {Object.keys(projectFiles).map((folderName) => (
//           <Folder 
//             key={folderName} 
//             folderName={folderName} 
//             files={projectFiles[folderName]} 
//             onOpenFile={openFolder} 
//           />
//         ))}
  
//         {isModalOpen && (
//           <Modal
//             files={filesInCurrentFolder}
//             currentFileIndex={currentFileIndex}
//             onClose={closeModal}
//             onGoBack={goBackToFolderView}  // Передаем функцию
//             onNext={goNextFile}
//             onPrev={goPrevFile}
//           />
//         )}
//       </div>
//     );
// };
  

// export default Portfolio;

import React, { useState } from "react";
import { motion } from "framer-motion";

// Компонент для отображения содержимого файла
const FileContent = ({ file, files, onClose, onNext, onPrev }) => {
  const getFileContent = () => {
    if (!file) {
      return <div className="text-center text-neutral-500">Файл не найден</div>;
    }

    const fileExtension = file.split('.').pop().toLowerCase();
    const filePath = `/projects/project1/${file}`;

    if (['pdf', 'py', 'txt'].includes(fileExtension)) {
      return (
        <iframe
          src={filePath}
          className="w-[1000px] h-[600px] border rounded-lg"
          title="PDF Viewer"
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
      <button
        className="absolute top-3 right-3 text-neutral-500 hover:text-neutral-100 transition"
        onClick={onClose}
      >
        ✕
      </button>

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

      <div className="mt-6">
        {getFileContent()}
      </div>
    </div>
  );
};

// Модальное окно для отображения содержимого файла
const Modal = ({ files, currentFileIndex, onClose, onNext, onPrev, onGoBack }) => {
  const currentFile = files[currentFileIndex];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-lg z-50">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
        className="bg-neutral-900 text-neutral-300 border border-neutral-700 p-6 rounded-2xl shadow-2xl w-auto max-w-full h-auto"
      >
        <FileContent
          file={currentFile}
          files={files}
          onClose={onClose}
          onNext={onNext}
          onPrev={onPrev}
          //TODO: check how this influece to this component
          onGoBack={goBackToFolderView}      
        />

        {/* Кнопка возврата к списку файлов */}
        <button
          className="mt-4 text-neutral-400 hover:text-neutral-200"
          onClick={onGoBack}
        >
          Назад к списку файлов
        </button>
      </motion.div>
    </div>
  );
};

// Компонент для отображения папки с проектами
const Folder = ({ folderName, onOpenFolder }) => {
  return (
    <div className="flex flex-col items-center space-y-4 p-4 w-64">
      <div
        className="flex items-center space-x-3 cursor-pointer p-4 hover:bg-neutral-800 rounded-lg transition w-full justify-center"
        onClick={() => onOpenFolder(folderName)} // Открытие файлов в папке
      >
        <img className="w-12 h-12" src="folder-icon.png" alt="Folder Icon" />
        <span className="text-lg font-medium text-neutral-300">{folderName}</span>
      </div>
    </div>
  );
};

// Главный компонент для отображения списка папок и файлов
const Portfolio = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentFileIndex, setCurrentFileIndex] = useState(0);
    const [filesInCurrentFolder, setFilesInCurrentFolder] = useState([]);
    const [isFolderView, setIsFolderView] = useState(true); // Состояние для отображения папок или файлов
  
    const projectFiles = {
      project1: ["work_with_nltk.py", "simple movie reviews.txt"]
    };

    // Функция открытия файла
    const openFile = (index) => {
      setCurrentFileIndex(index);
      setIsModalOpen(true);
      setIsFolderView(false);  // Переход к отображению файлов в папке
    };
  
    // Закрытие модального окна
    const closeModal = () => {
      setIsModalOpen(false);
      setCurrentFileIndex(0);
      setFilesInCurrentFolder([]); // Очистка списка файлов
    };

    //TODO: smth goes wrong
    // Переход обратно к папке
    const goBackToFolderView = () => {
      setIsFolderView(true);  // Возвращаемся к отображению папок
      setFilesInCurrentFolder([]); // Очистить список файлов, когда вы вернулись к папке
    };
  
    // Функция для перехода к следующему файлу
    const goNextFile = () => {
      if (currentFileIndex < filesInCurrentFolder.length - 1) {
        setCurrentFileIndex(currentFileIndex + 1);
      }
    };
  
    // Функция для перехода к предыдущему файлу
    const goPrevFile = () => {
      if (currentFileIndex > 0) {
        setCurrentFileIndex(currentFileIndex - 1);
      }
    };
    // TODO: check this endpoint -> open/close
    // Открытие папки
    const openFolder = (folderName) => {
      console.log("Opening folder:", folderName); // Для отладки
      const files = projectFiles[folderName];
      if (!files) {
        console.error("No files found for this folder");
        return;
      }
      setFilesInCurrentFolder(files);  // Сохранение файлов текущей папки
      setIsFolderView(false);  // Показываем файлы в папке
    };

    // Показ папок или файлов в зависимости от состояния
    const renderContent = () => {
      if (isFolderView) {
        return Object.keys(projectFiles).map((folderName) => (
          <Folder
            key={folderName}
            folderName={folderName}
            onOpenFolder={openFolder}
          />
        ));
      } else {
        return (
          <div className="space-y-4">
            {/* Показываем список файлов */}
            {filesInCurrentFolder.map((file, index) => (
              <div
                key={index}
                className="cursor-pointer p-2 hover:bg-neutral-800 rounded-lg"
                onClick={() => openFile(index)} // Открытие содержимого файла
              >
                <span className="text-lg font-medium text-neutral-300">{file}</span>
              </div>
            ))}
          </div>
        );
      }
    };

    return (
      <div className="p-6 flex justify-center space-x-6">
        {renderContent()}

        {isModalOpen && (
          <Modal
            files={filesInCurrentFolder}
            currentFileIndex={currentFileIndex}
            onClose={closeModal}
            onGoBack={goBackToFolderView}  // Передаем функцию
            onNext={goNextFile}
            onPrev={goPrevFile}
          />
        )}
      </div>
    );
};
  

export default Portfolio;
