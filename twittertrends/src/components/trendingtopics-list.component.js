import React, { Component } from 'react';
import axios from 'axios';

const Trendingtopics = props => (
    <tr>
        <td>{props.Trendingtopics.name}</td>
        <td>{props.Trendingtopics.url}</td>
        {/*<td>{props.Trendingtopics.promoted_content}</td>
        <td>{props.Trendingtopics.query}</td>*/}
        <td>{props.Trendingtopics.tweet_volume}</td>
        {/*<td>
            <Link to={"/edit/" + props.Trendingtopics._id}>edit</Link> | <a href="#" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a>
        </td>*/}
    </tr>
)

export default class TrendingTopics extends Component {
    constructor(props) {
        super(props);

        //this.deleteExercise = this.deleteExercise.bind(this)

        this.state = { Trendingtopics: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/Trendingtopics/')
            .then(response => {
                this.setState({ Trendingtopics: response.data })
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

    trendingList() {
        return this.state.Trendingtopics.map(currentexercise => {
            return <Trendingtopics Trendingtopics={currentexercise} key={currentexercise._id} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Trending Topics Dataset</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>name</th>
                            <th>url </th>
                           {/* <th>promoted_content</th>
                            <th>query</th>*/}
                            <th>tweet_volume</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.trendingList()}
                    </tbody>
                </table>
            </div>
        )
    }
}