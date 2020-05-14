import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './components/Home';
import Posts from './components/Posts';
import Error from './components/Error';
import Navigation from './components/Navigation';
import Signup from './components/Signup.js';
import Signin from './components/Signin.js';
import CreatePost from './components/CreatePost.js';
 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/posts" component={Posts}/>
             <Route path="/signup" component={Signup}/>
             <Route path="/signin" component={Signin}/>
             <Route path="/createpost" component={CreatePost}/>
             <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;