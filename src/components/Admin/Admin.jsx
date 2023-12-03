import axios from "axios"
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector, useState } from "react-redux";
import { useEffect } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';



export default function Admin() {
    const [feedbackArray, setFeedbackArray] = React.useState([])
    useEffect(() => {
        console.log('in useEffect');
        refreshFeedback();
      }, []);
      
      const refreshFeedback = () => {
        axios({
            method: 'GET',
            url: '/feedback'
        }) .then((response) => {
            console.log(response.data)
            setFeedbackArray(response.data)
        }) .catch((error) => {
            console.error(error);
        })
      }
      const deleteRow = (id) => {
        console.log(id);
        axios({
            method: 'DELETE',
            url:`/feedback/${id}`
        }) .then ((response) => {
            refreshFeedback()
        }) .catch ((error) => {
            console.error(error);
        })
      }

      const flagUnflagRow = (id) => {
        axios({
            method: 'PUT',
            url: `/feedback/${id}`
        }) .then ((response) => {
            refreshFeedback()
        }) .catch ((error) => {
            console.error(error);
        })
      }
    
    return(
        <>
        <h1>This is the admin page!</h1>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell align="right">Feeling</TableCell>
            <TableCell align="right">Understanding</TableCell>
            <TableCell align="right">Support</TableCell>
            <TableCell align="right">Comments</TableCell>
            <TableCell align="right">Flagged</TableCell>
            <TableCell align="right">Flag</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {feedbackArray.map((row) => (
            <TableRow key={row.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">{row.id}
                </TableCell>
                <TableCell align="right">{row.feeling}</TableCell>
                <TableCell align="right">{row.understanding}</TableCell>
                <TableCell align="right">{row.support}</TableCell>
                <TableCell align="right">{row.comments}</TableCell>
                <TableCell align="right">{row.flagged}</TableCell>
                <TableCell align="right">
                    <Button variant="outlined" onClick={() => flagUnflagRow(row.id)}>Flag</Button>
                    </TableCell>
                <TableCell align="right">
                <Button variant="contained" onClick={() => deleteRow(row.id)}>Delete</Button>
                </TableCell>
            </TableRow>))}
        </TableBody>
        </Table>
        </TableContainer>




        </>
    )
}