import React, { Component } from 'react';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent'
import Home from './HomeComponent'
import DishDetail from './DishdetailComponent'
import ContactUs from './ContactComponent'
import About from './AboutUsComponent'
import { withRouter } from '../functions/withRouter'
import { Routes, Route, Navigate, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { addComment } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}

const mapDispatchToProps = dispatch => ({

    addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment))

});
class Main extends Component {

    constructor(props) {
        super(props);

    }


    render() {


        const HomePage = () => {
            return (
                <>
                    <Home
                        dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                        promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
                        leader={this.props.leaders.filter((leader) => leader.featured)[0]}
                    />                </>
            )
        }
        const DishWithId = () => {
            let params = useParams()
            return (

                <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(params.dishId, 10))[0]}
                    comments={this.props.comments.filter((comment) => comment.dishId === parseInt(params.dishId, 10))}
                    addComment={this.props.addComment}
                />

            );
        };
        const AboutUs = () => {
            return (<About leaders={this.props.leaders} />)
        }
        return (
            <>
                <Header />
                <Routes>
                    <Route path='/*' element={<Navigate replace to="/home" />} />

                    <Route path='/' element={<HomePage />} >

                    </Route>
                    <Route path='home' element={<HomePage />} />
                    <Route path='contactus' element={<ContactUs />} />
                    <Route path='menu' element={<Menu dishes={this.props.dishes} />} />
                    <Route path='menu/:dishId' element={<DishWithId />} />
                    <Route path='aboutus' element={<AboutUs />} />
                </Routes>
                <Footer />
            </>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);