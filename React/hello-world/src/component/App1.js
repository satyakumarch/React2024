import React, { Component } from 'react';
import Form from './Form'; // Make sure to adjust the import path based on your project structure

class App extends Component {
    state = {
        submittedData: [],
    };

    handleSubmit = (data) => {
        this.setState((prevState) => ({
            submittedData: [...prevState.submittedData, data],
        }));
    };

    render() {
        const { submittedData } = this.state;

        return (
            <div>
                <h1>Submit Your Information</h1>
                <Form handleSubmit={this.handleSubmit} />
                {submittedData.length > 0 && (
                    <table border="1" style={{ marginTop: '20px' }}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Job</th>
                            </tr>
                        </thead>
                        <tbody>
                            {submittedData.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.job}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        );
    }
}

export default App;
