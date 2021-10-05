import './App.css';
import Users from './components/users/Users';
import Home from './components/home/Home';
import About from './components/about/About';
import NotFound from './components/notfound/NotFound';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Detail from './components/detail/Detail';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer/Footer';
import BlogPost from './components/blog/BlogPost';


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
        <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/home">
            <Home>
            </Home>
          </Route>
          <Route path="/user/:id">
            <Detail></Detail>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/users">
            <Users/>
          </Route>
          <Route path="/blog">
            <BlogPost/>

          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
         
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
