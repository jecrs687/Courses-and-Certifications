import React from 'react';
import {
    Card, CardImg, CardText, CardBody, Row, Label, Col,
    CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalBody, ModalHeader
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Loading } from './LoadingComponent';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';
import { baseUrl } from '../shared/baseUrl';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

function RenderDish({ dish }) {
    return (
        <FadeTransform
            in
            transformProps={{
                exitTransform: 'scale(0.5) translateY(-50%)'
            }}>
            <Card>
                <CardImg top src={baseUrl + dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </FadeTransform>
    )
}
function RenderComments({ comments, postComment, dishId }) {
    return (
        <div className="col-12 col-md-10 m-1">
            <ul className='list-unstyled'>
                <h4>Comments</h4>
                <Stagger in>
                    {comments.map((comment) => {
                        return (
                            <Fade in>
                                <li key={comment.id}>
                                    <p>{comment.comment}</p>
                                    <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
                                </li>
                            </Fade>
                        );
                    })}
                </Stagger>
            </ul>
        </div>

    )
}
function Mod({ toggle, dishId, postComment }) {
    function handleSubmit(values) {
        toggle();
        // addComment(dishId, values.rating, values.yourname, values.message);
        postComment(dishId, values.rating, values.yourname, values.message);
    }
    return (<>
        <ModalHeader toggle>
            Login
        </ModalHeader>
        <ModalBody>
            <div className='col-12'>
                <LocalForm onSubmit={(values) => handleSubmit(values)}>
                    <Row className="form-group mt-4">
                        <Label htmlFor="rating" md={2}>Rating</Label>

                        <Col md={10}>
                            <Control.select model=".rating" name="rating"
                                className="form-control">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Control.select>
                        </Col>
                    </Row>
                    <Row className="form-group mt-3">
                        <Label htmlFor="yourname" md={2}>Your Name</Label>
                        <Col md={10}>
                            <Control.text model=".yourname" id="yourname" name="yourname"
                                placeholder="Your Name"
                                className="form-control"
                                validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(13)
                                }}
                            />
                            <Errors
                                className='text-danger'
                                model=".yourname"
                                show="touched"
                                messages={{
                                    required: 'Required. ',
                                    minLength: 'Must be greater than 2 characters. ',
                                    maxLength: 'Must be 15 characters or less. '
                                }}
                            />
                        </Col>
                    </Row>


                    <Row className="form-group mt-3">
                        <Label htmlFor="message" md={2}>Comment</Label>
                        <Col md={10}>
                            <Control.textarea model=".message" id="message" name="message"
                                rows="6"
                                className="form-control" />
                        </Col>
                    </Row>
                    <Row className="form-group mt-3">
                        <Col md={{ size: 10, offset: 2 }}>
                            <Button type="submit" color="primary">
                                Submit
                            </Button>
                        </Col>
                    </Row>
                </LocalForm>
            </div>
        </ModalBody>
    </>)
}
function DishDetail(props) {
    const [isModalOpen, setModalOpen] = useState(false)
    function toggleModal() {
        setModalOpen(!isModalOpen)
    }
    if (props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else if (props.dish != null) {
        return (
            <div div className="container" >
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} />
                        <Button outline onClick={toggleModal}>
                            <span className="fa fa-pencil fa-lg " /> Submit Comment
                        </Button>
                    </div>

                </div>
                <Modal isOpen={isModalOpen} toggle={toggleModal}>
                    <Mod postComment={props.postComment} toggle={toggleModal}
                        addComment={props.addComment} dishId={props.dish.id} />
                </Modal>
            </div>
        )
    }

}
export default DishDetail;