import React from 'react';

const TableRow = ({file, text, number, hex}) => {
    return (
        <tr>
            <td>{file}</td>
            <td>{text}</td>
            <td>{number}</td>
            <td>{hex}</td>
        </tr>
    );
}

export default TableRow;