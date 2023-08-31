import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Button, FormGroup, Col, Label } from 'reactstrap';
import DropZone from './DropZone';
import { useUploadContext } from '../context/UploadContext';

const UploadForm = () => {

    const { uploadedData, setUploadedData } = useUploadContext();
    const [uploadedFiles, setUploadedFiles] = useState([]);

    const handleSubmit = (values, { resetForm }) => {
        setUploadedData([...uploadedData, values]);
        resetForm();
        setUploadedFiles([]);
    }

    return (
        <div className='upload-form-container'>
            <Formik
                initialValues={{
                    title: '',
                    genre: '',
                    description: ''
                }}
                onSubmit={handleSubmit}
            >
                <Form>
                    <FormGroup row>
                        <Label htmlFor='title' md='2'>
                            Title:
                        </Label>
                        <Col md='10'>
                            <Field
                                name='title'
                                placeholder='Title'
                                className='form-control'
                            />
                        </Col>

                    </FormGroup>

                    <FormGroup row>

                        <Label htmlFor='description' md='2'>
                            Description:
                        </Label>
                        <Col md='10'>
                            <Field
                                name='description'
                                placeholder='Description'
                                className='form-control' />
                        </Col>

                    </FormGroup>


                    <FormGroup>
                        <Col md='12'>
                            <p>Upload:</p>
                            <DropZone uploadedFiles={uploadedFiles} setUploadedFiles={setUploadedFiles} />
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col md={{ size: 5, offset: 10 }}>
                            <Button type='submit' color='primary' className='m-1'>
                                Save
                            </Button>
                            <Button type='cancel' color='danger'>
                                Cancel
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </Formik>

        </div>
    );
}


export default UploadForm;