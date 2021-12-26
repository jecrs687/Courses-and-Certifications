import React,{useState} from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';


    function RenderDish([name, description]) {
        return (

            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardText>{description}</CardText>
            </CardBody>
        )
    }
    function RenderComents({comments}) {
        return (
            <div className="col-12 col-md-5 m-1">
                <ul className='list-unstyled'>
                    <h4>Comments</h4>
                    {comments.map(comment => (
                        <li>
                            <p> {comment.comment}</p>
                            <p> -- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
                        </li>


                    ))}
                </ul>
            </div>

        )
    }
function DishDeails({dish}) {
           return (
            dish ?
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <Card>
                                <CardImg top src={dish.image} alt={dish.name} />
                                {RenderDish([dish.name, dish.description])}
                            </Card>
                        </div>
                        {RenderComents(dish.comments)}
                    </div> </div> : <h1>{console.log(dish)}</h1>
        )

}
export default DishDeails;