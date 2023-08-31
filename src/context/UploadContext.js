import { createContext, useContext, useState } from 'react';

const UploadContext = createContext();

export const UploadProvider = ({ children }) => {
    const [uploadedData, setUploadedData] = useState([]);

    return (
        <UploadContext.Provider value={{ uploadedData, setUploadedData }} >
            {children}
        </UploadContext.Provider>

    );
};

export const useUploadContext = () => {
    return useContext(UploadContext);
}