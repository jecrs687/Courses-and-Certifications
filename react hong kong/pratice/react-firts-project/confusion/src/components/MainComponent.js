import React, { Component } from 'react';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent'
import Home from './HomeComponent'
import ContactUs from './ContactComponent'
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

import { Routes, Route, Navigate } from 'react-router-dom'


class Main extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          dishes: DISHES,
          comments: COMMENTS,
          promotions: PROMOTIONS,
          leaders: LEADERS
        };
      }


    render() {
        const HomePage = () => {
            return (
                <>
         <Home 
              dish={this.state.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
              leader={this.state.leaders.filter((leader) => leader.featured)[0]}
          />                </>
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
                    <Route path='contactus' element={<ContactUs />} />
                    <Route path='menu' element={<Menu dishes={this.state.dishes} />} />

                </Routes>
                <Footer />
            </>
        );
    }
}

export default Main;