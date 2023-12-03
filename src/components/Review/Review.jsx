import React from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router-dom";

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
        <h3>Review your feedback!</h3>
        <p>{getStoreElements.feelingReducer}</p>
        <p>{getStoreElements.understandingReducer}</p>
        <p>{getStoreElements.supportReducer}</p>
        <p>{getStoreElements.commentsReducer}</p>
        <button onClick={postFeedback} data-testid="next">Submit</button>
        </>
    )
}