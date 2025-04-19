import React from 'react';

const Folder = ({ folderName, onClick }) => {
    return (
        <div className="flex flex-col items-center space-y-2 p-2 w-48 h-48">
            <div 
                className="flex flex-col items-center cursor-pointer p-2 hover:bg-neutral-800 rounded-lg transition w-full"
                onClick={onClick}
            >
                <img 
                    src="/icons8-folder.svg" 
                    alt="Folder Icon" 
                    className="w-28 h-28"
                />
                <span className="text-md font-medium text-neutral-300 mt-2">
                    {folderName}
                </span>
            </div>

            {/* {isOpen && <FolderContent files={files} folderName={folderName} onOpenFile={onOpenFile} />} */}
        </div>
    );
};

export default Folder;
