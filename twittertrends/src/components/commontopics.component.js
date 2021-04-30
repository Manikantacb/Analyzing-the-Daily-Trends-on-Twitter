import React, { Component } from 'react';
import axios from 'axios';

const Commontopics = props => (
    <tr>
        <td>{props.Commontopics.name}</td>
        <td>{props.Commontopics.tweet_volume}</td>

    </tr>
)

export default class CommonTopics extends Component {
    constructor(props) {
        super(props);

        //this.deleteExercise = this.deleteExercise.bind(this)

        this.state = { Commontopics: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/commontopics/')
            .then(response => {
                this.setState({ Commontopics: response.data })
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

    CommontopicsList() {
        return this.state.Commontopics.map(currentexercise => {
            return <Commontopics Commontopics={currentexercise} key={currentexercise._id} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Common Topics </h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Topic Name</th>
                            <th>Tweet Volume </th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.CommontopicsList()}
                    </tbody>
                </table>
                <img src="./Goal3.PNG" alt="BigCo Inc. logo" />
            </div>
        )
    }
}