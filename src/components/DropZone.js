import { useCallback, useMemo } from 'react';
import { useDropzone } from 'react-dropzone';

const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '159px',
    padding: '30px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: 'black',
    color: 'white',
    outline: 'none',
    transition: 'border .24s ease-in-out'
};


const DropZone = ({ uploadedFiles, setUploadedFiles }) => {
    //const [uploadedFiles, setUploadedFiles] = useState([]);

    const onDrop = useCallback(acceptedFiles => {
        setUploadedFiles(acceptedFiles);
    }, [setUploadedFiles]);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    const style = useMemo(() => ({
        ...baseStyle
    }))

    return (
        <div>
            <div {...getRootProps({ style })}>
                <input {...getInputProps()} />
                {
                    isDragActive ?
                        <p>Drop the Files here...</p> :
                        <p>Drag n drop here or click!</p>
                }

                {uploadedFiles.length > 0 && (
                    <div className='uploaded-files'>
                        <h3>Uploaded Files:</h3>
                        <ul>
                            {uploadedFiles.map((file, index) => (
                                <li key={index}>{file.name}</li>
                            ))}
                        </ul>
                    </div>
                )}

            </div>

        </div>
    );
}
export default DropZone;