import React from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

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
        <div>
            <p>How are you feeling today?</p>
            {getStoreElements.feelingReducer}
            <Link to='/'>
                <button className="editButton" >Edit</button>
            </Link>
        </div>
        <div>
            <p>How well are you understanding the content?</p>
            {getStoreElements.understandingReducer}
            <Link to='/understanding'>
                <button className="editButton">Edit</button>
            </Link>
        </div>
        <div>
            <p>How well are you being supported?</p>
            {getStoreElements.supportReducer}
            <Link to='/support'>
                <button className="editButton">Edit</button>
            </Link>
        </div>
        <div>
            <p>Any comments to leave?</p>
            {getStoreElements.commentsReducer}
            <Link to='/comments'>
                <button className="editButton">Edit</button>
            </Link>
        </div>
        <p></p>
        <p></p>
        <p></p>
        <button onClick={postFeedback} data-testid="next">Submit All Feedback</button>
        </>
    )
}