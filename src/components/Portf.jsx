import React, { useState } from 'react';
import Folder from './Folder';

const Portf = () => {
    const [openFolders, setOpenFolders] = useState({});
    // const [currentFile, setCurrentFile] = useState(null);
    // const [currentFolder, setCurrentFolder] = useState(null);
    // const [isModalOpen, setIsModalOpen] = useState(false);

    const projectLinks = {
        NLTK: ['https://github.com'],
        IntTech: ['https://github.com']
    };

    // const toggleFolder = (folderName) => {
    //     setOpenFolders(prev => ({
    //         [folderName]: !prev[folderName] // Закрываем все папки, открываем только кликнутую
    //     }));
    // };

    // const openFile = (folderName, file) => {
    //     setCurrentFolder(folderName);
    //     setCurrentFile(file);
    //     setIsModalOpen(true);
    // };

    // const closeModal = () => {
    //     setCurrentFolder(null);
    //     setCurrentFile(null);
    //     setIsModalOpen(false);
    // };

    // При клике на папку открываем ссылку в новой вкладке
    const handleFolderClick = (folderName) => {
        window.open(projectLinks[folderName], '_blank');
    };

    return (

        <div className="flex flex-col items-center py-20 px-4"> {/* Добавил отступы сверху/снизу */}
            <h1 className="text-4xl font-medium text-neutral-400 mb-12">Projects</h1> {/* Увеличил отступ снизу */}
            
            <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto"> 
                {/* flex-wrap + max-width для адаптивности */}
                {Object.keys(projectLinks).map((folderName) => (
                    <Folder 
                        key={folderName}
                        folderName={folderName}
                        onClick={() => handleFolderClick(folderName)}
                    />
                ))}
            </div>
        </div>


    );
    
    {/* <div className="text-4xl font-medium text-neutral-400 text-center w-full mt-40">Projects</div>
            <div className="flex justify-center min-h-screen">
            <div className="flex flex-row ">
                {Object.keys(projectLinks).map((folderName) => (
                    <Folder 
                        key={folderName}
                        folderName={folderName}
                        files={projectFiles[folderName]}
                        isOpen={!!openFolders[folderName]}
                        onToggleFolder={() => toggleFolder(folderName)}
                        onClick={() => handleFolderClick(folderName)}
                        onOpenFile={(folderName, file) => openFile(folderName, file)} // Передаем folderName
                    />
                ))}
            </div> */}
            
            {/* Модальное окно для отображения содержимого файла */}
            {/* {isModalOpen && <ModalW folderName={currentFolder} file={currentFile} onClose={closeModal} />} */}
            {/* </div> */}
};

export default Portf;