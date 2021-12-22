import React, { Component } from 'react'
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap'


class DishDeails extends Component {
    constructor(props) {
        super(props)
    }


    renderDish([name, description]) {
        return (

            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardText>{description}</CardText>
            </CardBody>
        )
    }
    renderComents(comments) {
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
    render() {
        return (
            this.props.dish ?
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <Card>
                                <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                                {this.renderDish([this.props.dish.name, this.props.dish.description])}
                            </Card>
                        </div>
                        {this.renderComents(this.props.dish.comments)}
                    </div> </div> : null
        )
    }

}
export default DishDeails;