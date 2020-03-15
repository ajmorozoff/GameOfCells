import React, { useState, useEffect } from 'react';
import { Cell } from '../../definitions/interfaces';
import TableCell from './TableCell';

const PageGrid = ({ grid }: { grid: Cell[][]; }) => {
    return (
        <table>
            <tbody>
                {
                    grid.map((row, rowIdx) =>
                            <tr key={rowIdx}>
                                {
                                    row.map((cell, colIdx) =>
                                        <TableCell key={colIdx} cellColor={cell.color} />
                                    )
                                }
                            </tr>
                    )
                }
            </tbody>
        </table>
    )
}

export default PageGrid;