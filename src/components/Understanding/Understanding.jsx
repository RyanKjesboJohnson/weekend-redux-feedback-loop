import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"

export default function Understanding() {
    let [understandingRating, setUnderstandingRating] = useState('')
    const dispatch = useDispatch();

    const handleUnderstandingRating = (event) => {
        setUnderstandingRating (event.target.value)
    }

    const postUnderstandingRating = (event) => {
        event.preventDefault();
        console.log("we are posting an understanding item to store");
        dispatch({
            type: 'ADD_UNDERSTANDING',
            payload: understandingRating
          })        

    }


    return(
        <div>
            <h3>How well are you understanding the content?</h3>
            <form onSubmit={(event) => postUnderstandingRating(event)}>
                <input
                onChange={handleUnderstandingRating}
                type='number'
                value={understandingRating}
                />
                <div>
                    <Link to='/support'></Link>
                    <button type="submit"> Next
                    </button>
                </div>
            </form>
        </div>
    )
}