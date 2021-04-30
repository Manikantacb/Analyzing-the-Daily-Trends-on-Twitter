import React, { Component } from 'react';
import axios from 'axios';

const Trendingtweets = props => (
    <tr>
        <td>{props.Trendingtweets.createdat}</td>
        <td>{props.Trendingtweets.text}</td>
        
    </tr>
)

export default class TrendingTweets extends Component {
    constructor(props) {
        super(props);

        //this.deleteExercise = this.deleteExercise.bind(this)

        this.state = { Trendingtweets: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/trendingtweets/')
            .then(response => {
                this.setState({ Trendingtweets: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    /*deleteExercise(id) {
        axios.delete('http://localhost:5000/exercises/' + id)
            .then(response => { console.log(response.data) });

        this.setState({
            exercises: this.state.exercises.filter(el => el._id !== id)
        })
    }*/

    trendingtweetList() {
        return this.state.Trendingtweets.map(currentexercise => {
            return <Trendingtweets Trendingtweets={currentexercise} key={currentexercise._id} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Trending Tweets Dataset</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Created At</th>
                            <th>Text </th>
                          
                        </tr>
                    </thead>
                    <tbody>
                        {this.trendingtweetList()}
                    </tbody>
                </table>
            </div>
        )
    }
}