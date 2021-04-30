import React, { Component } from 'react';
import axios from 'axios';

const Topicsbytweetvolume = props => (
    <tr>
        <td>{props.Topicsbytweetvolume.name}</td>
        <td>{props.Topicsbytweetvolume.tweet_volume}</td>

    </tr>
)

export default class TopicsBytweetvolume extends Component {
    constructor(props) {
        super(props);

        //this.deleteExercise = this.deleteExercise.bind(this)

        this.state = { Topicsbytweetvolume: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/topicsbytweetvolume/')
            .then(response => {
                this.setState({ Topicsbytweetvolume: response.data })
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

   topicsbytweetbyvolumeList() {
       return this.state.Topicsbytweetvolume.map(currentexercise => {
           return <Topicsbytweetvolume Topicsbytweetvolume={currentexercise} key={currentexercise._id} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Top 10 Trending Topics Based on Tweet Volume</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Topic name</th>
                            <th>Tweet Volume </th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.topicsbytweetbyvolumeList()}
                    </tbody>
                </table>
                <img src="./Goal2.PNG" alt="BigCo Inc. logo" />
            </div>
        )
    }
}