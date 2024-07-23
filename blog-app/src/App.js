import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '/.pages/Home';
import Login from '/.pages/Login';
import Register from '/.pages/Register';
import CreatePost from '/.pages/CreatePoste';
import EditPost from '/.pages/EditPost';
import PostList from '/.pages/PostList';
import PostDetail from '/.pages/PostDetail';



function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
        <Route path='/create' component={CreatePost}/>
        <Route path='/edit/:id' component={EditPost}/>
        <Route path='/posts' component={PostList}/>
        <Route path='/post/:id' component={PostDetail}/>
      </Switch>
    </Router>
  );
}

export default App;
