import { Container } from 'reactstrap';
import Header from '../components/Header.js';
import UploadForm from '../components/UploadForm.js';


const Upload = () => {
    return (
        <div>
            <Header />

            <Container className='upload-container'>

                <UploadForm />

            </Container>
        </div>
    )
}

export default Upload;