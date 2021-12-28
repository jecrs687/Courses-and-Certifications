import React, { Component } from 'react';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent'
import Home from './HomeComponent'
import { DISHES } from '../shared/Dishes';
import { Routes, Route, Navigate } from 'react-router-dom'

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    }

    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId });
    }

    render() {
        const HomePage = () => {
            return (
                <>
                    <Home />
                </>
            )
        }
        return (
            <>
                <Header />
                <Routes>
                    <Route path='/*' element={<Navigate replace to="/home" />} />

                    <Route path='/' element={<Home />} >

                    </Route>
                    <Route path='home' element={<HomePage />} />

                    <Route path='menu' element={<Menu dishes={this.state.dishes} />} />

                </Routes>
                <Footer />
            </>
        );
    }
}

export default Main;