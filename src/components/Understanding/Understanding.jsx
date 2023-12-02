import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link, useHistory } from "react-router-dom"

export default function Understanding() {
    let [understandingRating, setUnderstandingRating] = useState('')
    const dispatch = useDispatch();
    const history = useHistory();

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
        history.push('/support')

    }


    return(
        <div>
            <h3>How well are you understanding the content?</h3>
            <form onSubmit={(event) => postUnderstandingRating(event)}>
                <input
                onChange={handleUnderstandingRating}
                type='number'
                value={understandingRating}
                data-testid="input"
                />
                <div>
                    <button data-testid="next" type="submit"> Next
                    </button>
                </div>
            </form>
        </div>
    )
}