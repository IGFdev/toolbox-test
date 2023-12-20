import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import useFetch from '../hooks/useFetch';
import TableRow from './TableRow';

const FileTable = ({ filesData, isLoading }) => {
    return (
        <Table striped bordered hover responsive size="sm" style={{ width: "90%", marginLeft: "5%" }}>
            <thead style={{borderBottom: "2px solid black"}}>
                <tr>
                    <th>File Name</th>
                    <th>Text</th>
                    <th>Number</th>
                    <th>Hex</th>
                </tr>
            </thead>
            <tbody>
                {
                    !isLoading &&
                    filesData.map((currentFile, i) => (
                        currentFile.lines.map((line, j) => (
                            <TableRow
                                file={currentFile.file}
                                text={line.text}
                                number={line.number}
                                hex={line.hex}
                                key={`${i}${j}`}
                            />
                        ))
                    ))
                }

            </tbody>
        </Table>
    );
}

export default FileTable;