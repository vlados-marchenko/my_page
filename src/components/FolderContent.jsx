import React from 'react';

const FolderContent = ({ folderName, files, onOpenFile }) => {


  files.map((file) => console.log(file))
  return (
    <div className="space-y-4 mt-6">
      {
        <span href="https://github.com" type="link">github_nltk</span>
      // files && files.length > 0 ? (
      //   files.map((file, index) => (
      //     <div 
      //       key={index}
      //       className="cursor-pointer p-4 hover:bg-neutral-800 rounded-lg transition"
      //       onClick={() => onOpenFile(folderName, file)} // Передаем folderName
      //     >
      //       <span className="text-neutral-300">{file}</span>
      //     </div>
      //   ))
      // ) : (
      //   <div className="text-neutral-500">Folder is empty</div>
      // )
      }
    </div>
  );
};

export default FolderContent;
