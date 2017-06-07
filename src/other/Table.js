import React, {Component} from 'react';

import './Table.css';

class Table extends Component {

    render() {
        return (
            <table >

                <caption>表格标题</caption>

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
                <tr>
                    <td>Bountiful, UT</td>
                    <td>July 10th</td>
                    <td>91</td>
                    <td>4,226 ft</td>
                    <td>41,173</td>
                    <td>4/5</td>
                </tr>
                <tr>
                    <td>Last Chance, CO</td>
                    <td>July 23rd</td>
                    <td>102</td>
                    <td>4,780 ft</td>
                    <td>265</td>
                    <td>3/5</td>
                </tr>
                <tr>
                    <td rowSpan="2">Truth or Consequences, NM</td>
                    <td>August 9th</td>
                    <td>93</td>
                    <td rowSpan="2">4,242 ft</td>
                    <td rowSpan="2">7,289</td>
                    <td>5/5</td>
                </tr>
                <tr>
                    <td>August 9th</td>
                    <td>93</td>
                    <td>5/5</td>
                </tr>
                <tr>
                    <td>Why, AZ</td>
                    <td>August 18th</td>
                    <td>104</td>
                    <td>860 ft</td>
                    <td>480</td>
                    <td>3/5</td>
                </tr>

            </table>
        );
    }

}

export default Table;
