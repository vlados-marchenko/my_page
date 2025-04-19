import React, { useEffect, useState } from 'react';

const ModalW = ({ folderName, file, onClose }) => {
    const [content, setContent] = useState('');

    useEffect(() => {
        if (folderName && file) {
            const filePath = `/public/projects/${folderName}/${file}`; // Формируем путь к файлу

            // Проверяем, что файл существует, и загружаем его содержимое
            fetch(filePath)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Не удалось загрузить файл');
                    }
                    return response.text();
                })
                .then(data => setContent(data)) // Загружаем содержимое файла
                .catch(() => setContent('Не удалось загрузить файл')); // Обработка ошибки
        }
    }, [folderName, file]);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded shadow-lg w-1/3 max-h-[80vh] overflow-auto">
                <h2 className="text-lg font-semibold mb-4">{file}</h2>
                {/* Просто выводим текст, не интерпретируя HTML */}
                <pre className="text-black whitespace-pre-wrap">{content}</pre>
                <button 
                    className="mt-4 px-4 py-2 bg-gray-500 text-white rounded"
                    onClick={onClose}
                >
                    Закрыть
                </button>
            </div>
        </div>
    );
};

export default ModalW;
