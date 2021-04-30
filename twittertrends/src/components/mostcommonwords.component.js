import React, { Component } from 'react';
import axios from 'axios';


const Mostcommonwords = props => (
    <tr>
        <td>{props.Mostcommonwords.Topics}</td>
        <td>{props.Mostcommonwords.Common_Words}</td>

    </tr>
)

export default class MostCommonwords extends Component {
    constructor(props) {
        super(props);

        //this.deleteExercise = this.deleteExercise.bind(this)

        this.state = { Mostcommonwords: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/mostcommonwords/')
            .then(response => {
                this.setState({ Mostcommonwords: response.data })
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

    MostcommonwordsList() {
        return this.state.Mostcommonwords.map(currentexercise => {
            return <Mostcommonwords Mostcommonwords={currentexercise} key={currentexercise._id} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Most Common Words per Topic</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Topic Name</th>
                            <th>Second Most Common word </th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.MostcommonwordsList()}
                    </tbody>
                </table>
                <img src="./Goal1.PNG" alt="BigCo Inc. logo" />
            </div>

        )
    }
}