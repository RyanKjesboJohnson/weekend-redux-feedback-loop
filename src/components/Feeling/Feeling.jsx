import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link, useHistory } from "react-router-dom"

export default function Feeling() {
    let [feelingRating, setFeelingRating] = useState('')
    const dispatch = useDispatch();
    const history = useHistory();

    const handleFeelingRating = (event) => {
        setFeelingRating (event.target.value)
    }

    const postFeelingRating = (event) => {
        event.preventDefault();
        console.log("we are posting an feeling item to store");

        dispatch({
            type: 'ADD_FEELING',
            payload: feelingRating
          })    
        history.push('/understanding');

    }


    return(
        <div>
            <h3>How are you feeling today?</h3>
                <form onSubmit={(event) => postFeelingRating(event)}>
                <input
                onChange={handleFeelingRating}
                data-testid="input"
                type='number'
                value={feelingRating}
                />
                <div>
                    <button data-testid="next" type="submit"> Next
                    </button>
                </div>
            </form>
        </div>
    )
}