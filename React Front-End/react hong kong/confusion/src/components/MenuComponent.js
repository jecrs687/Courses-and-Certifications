import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem, CardHeader, CardImgOverlay
} from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderMenuItem({ dish }) {
    return (
        <Card>
            <Link to={`/menu/${dish.id}`} >
                <h4>
                    <CardImgOverlay>
                        <CardHeader className="text-dark bg-light" >
                            {dish.name}
                        </CardHeader>
                    </CardImgOverlay>
                </h4>
                <CardImg top src={dish.image} alt={dish.name} />
            </Link>
        </Card>
    );
}

const Menu = ({ dishes }) => {

    const menu = dishes.map((dish) => {
        return (
            <div className="col-12 col-md-5 m-1" key={dish.id}>
                <RenderMenuItem dish={dish} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Menu</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Menu</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                {menu}
            </div>
        </div>
    );
}

export default Menu;