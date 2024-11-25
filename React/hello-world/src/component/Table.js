import React, { Component } from 'react';
import './table.css';

class Table extends Component {
    render() {
        return (
            <table className ="table">
                <thead>
                    <tr className='row'>
                        <th>S.NO</th>
                        <th>Name</th>
                        <th>Addess</th>
                        <th>phone</th>
                        
                    </tr>
                </thead>
                <tbody class="tbody">
                    <tr>
                        <td>12203506</td>
                        <td>Radhe Radhe</td>
                        <td>Patna</td>
                        <td>4254254</td>
                    </tr>
                    <tr>
                        <td>145664</td>
                        <td>Shyam kumar</td>
                        <td>Himanchal</td>
                        <td>530857034</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default Table;