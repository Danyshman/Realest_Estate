import React from 'react';
import Layout from './hocs/Layout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import Listings from './containers/Listings';
import ListingDetail from './containers/ListingDetail';
import Contact from './containers/Contact';
import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';
import About from './containers/About';
import NotFound from './components/NotFound';

import { Provider } from 'react-redux';
import store from './store';

import './sass/main.scss';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="/listings" component={Listings} />
                        <Route exact path="/Listings/:id" component={ListingDetail} />
                        <Route exact path="/login" component={SignIn} />
                        <Route exact path="/signup" component={SignUp} />
                        <Route component={NotFound} />
                    </Switch>
                </Layout>
            </Router>
        </Provider>
    );
};

export default App;
