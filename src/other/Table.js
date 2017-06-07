import React, {Component} from 'react';

import './Table.css';

class Table extends Component {

    render() {
        return (
            <table >
                <tr>
                    <th>City</th>
                    <th>Date</th>
                    <th>Temperature</th>
                    <th>Altitude</th>
                    <th>Population</th>
                    <th>Diner Rating</th>
                </tr>
                <tr>
                    <td>Walla Walla, WA</td>
                    <td>June 15th</td>
                    <td>75</td>
                    <td>1,204 ft</td>
                    <td>29,686</td>
                    <td>4/5</td>
                </tr>
                <tr>
                    <td>Magic City, ID</td>
                    <td>June 25th</td>
                    <td>74</td>
                    <td>5,312 ft</td>
                    <td>50</td>
                    <td>3/5</td>
                </tr>
            </table>
        );
    }

}

export default Table;
