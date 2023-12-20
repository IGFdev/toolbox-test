import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import useFetch from '../hooks/useFetch';
import TableRow from './TableRow';

const FileTable = ({filesData, isLoading}) => {
    return (
        <Table striped bordered hover>
            <thead>
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