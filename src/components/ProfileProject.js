import { useState } from 'react';
import { Card, CardBody, Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Col, Input } from 'reactstrap';
import { Formik, Form, Field } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';




const ProfileProject = ({ title, creator, description, audioSrc }) => {

    console.log('audioSrc:', audioSrc);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <Card className='project-card'>
            <CardBody>
                <div className='profile-project-info'>

                    <h5>{creator}</h5>
                </div>
                <div className='profile-project-info'>
                    <h5>{title}</h5>
                </div>

                <audio src={audioSrc} controls className='audio-player' />
                <div>
                    <a href={audioSrc} download>
                        <FontAwesomeIcon icon={faDownload} className='project-button' />
                    </a>

                    <Button className='edit-button' onClick={toggleModal}>Edit</Button>

                </div>

            </CardBody>

            <Modal isOpen={isModalOpen} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>Edit Project</ModalHeader>
                <ModalBody>


                    <Formik
                        initialValues={{
                            title: title,
                            genre: '',
                            description: description
                        }}

                    >
                        <Form>
                            <FormGroup row>
                                <Label htmlFor='title' md='2'>
                                    Title:
                                </Label>
                                <Col md='12'>
                                    <Field
                                        name='title'
                                        placeholder='Title'
                                        className='form-control'
                                    />
                                </Col>

                            </FormGroup>

                            <FormGroup row>

                                <Label htmlFor='description' md='12'>
                                    Description:
                                </Label>
                                <Col md='12'>
                                    <Field
                                        name='description'
                                        placeholder='Description'
                                        className='form-control' />
                                </Col>

                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="fileInput" className="custom-file-upload">
                                    Replace File:
                                    <Input type="file" id="fileInput" name="file" />
                                </Label>
                            </FormGroup>

                        </Form>
                    </Formik>



                </ModalBody>

                <ModalFooter>





                    <Button color='primary' onClick={toggleModal}>
                        Save
                    </Button>

                    <Button color='secondary' onClick={toggleModal}>
                        Cancel
                    </Button>

                </ModalFooter>
            </Modal>
        </Card>
    );
}


export default ProfileProject;