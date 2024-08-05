import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'D:/coding/react-router/blog-app/src/redux/store'
import Header from './components/Header';
import Footer from './components/Footer';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import PostList from './pages/PostList';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Header />
                <Switch>
                    <Route path="/create-post" component={CreatePost} />
                    <Route path="/edit-post/:id" component={EditPost} />
                    <Route path="/post-list" component={PostList} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/" exact component={PostList} />
                </Switch>
                <Footer />
            </Router>
        </Provider>
    );
};

export default App;
