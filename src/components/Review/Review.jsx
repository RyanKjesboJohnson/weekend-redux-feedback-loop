import React from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import HorizontalLinearStepper from "../Stepper/Stepper"
import {styled} from "@mui/material/styles"
import { Button, Box } from "@mui/material";
import { Typography } from "@mui/material";

const Div = styled('div')(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  }));

export default function Review() {
    // const [storeElements, setStoreElements] = useState('');
    const getStoreElements = useSelector(store => store)
    
    const history = useHistory();
    const dispatch = useDispatch();

    const postFeedback = () => {
        axios({
            method: 'POST',
            url: '/feedback',
            data: getStoreElements
        }).then((response) => {
            console.log("post request at /feedback received")
            history.push('/thankyou')
            dispatch({
                type: 'CLEAR',
              })
        }).catch((error) => {
            console.log("Error in POST request:", error);
        })
    }

    return(
        <>
        <HorizontalLinearStepper activeStepProp={4}/>
        <h3>Review your feedback!</h3>
        <Box>
            <p>
            How are you feeling today?
            </p>
            {getStoreElements.feelingReducer}
            <Link to='/'>
                <Button className="editButton" >Edit</Button>
            </Link>
        </Box>
        <Div>
            <p>How well are you understanding the content?</p>
            {getStoreElements.understandingReducer}
            <Link to='/understanding'>
                <Button className="editButton">Edit</Button>
            </Link>
        </Div>
        <Div>
            <p>How well are you being supported?</p>
            {getStoreElements.supportReducer}
            <Link to='/support'>
                <Button className="editButton">Edit</Button>
            </Link>
        </Div>
        <Div>
            <p>Any comments to leave?</p>
            {getStoreElements.commentsReducer}
            <Link to='/comments'>
                <Button className="editButton">Edit</Button>
            </Link>
        </Div>
        <p></p>
        <p></p>
        <p></p>
        <Button variant="contained" onClick={postFeedback} data-testid="next">Submit All Feedback</Button>
        </>
    )
}