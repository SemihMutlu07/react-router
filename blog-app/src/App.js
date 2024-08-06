import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
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
                <div className='flex flex-col min-h-screen'>
                    <Header />
                    <div className='flex-grow'>
                        <Routes>
                            <Route path="/create-post" element={<CreatePost />} />
                            <Route path="/edit-post/:id" element={<EditPost />} />
                            <Route path="/post-list" element={<PostList />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/" element={<PostList />} />
                        </Routes>
                    </div>
                    <Footer />
                </div>
            </Router>
        </Provider>
    );
};

export default App;
