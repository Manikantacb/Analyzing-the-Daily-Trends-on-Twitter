import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component"
import TrendingTopics from "./components/trendingtopics-list.component";
import TrendingTweets from './components/trendingtweets.component';
import TopicsBytweetvolume from './components/topicsbytweetvolume.component';
import CommonTopics from './components/commontopics.component';
import MostCommonwords from './components/mostcommonwords.component';
/*import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";*/

function App() {
    return (
        

        <Router>
            <br />
            <div><h1><center>Analyzing The Daily Trends on Twitter</center></h1></div>
            <br />
            <br />
          <div className="container">
          <Navbar />
          <br />
                <Route path="/" exact component={TrendingTopics} />
                <Route path="/tweets" component={TrendingTweets} />
                <Route path="/topics" component={TopicsBytweetvolume} />
                <Route path="/commontopics" component={CommonTopics} />
                <Route path="/mostcommonwords" component={MostCommonwords} />

          {/*<Route path="/user" component={CreateUser} />*/}
           
            </div>
        </Router>
  );
}

export default App;
