import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"

export default function Feeling() {
    let [feelingRating, setFeelingRating] = useState('')
    const dispatch = useDispatch();

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

    }


    return(
        <div>
            <h3>How are you feeling today?</h3>
                <form onSubmit={(event) => postFeelingRating(event)}>
                <input
                onChange={handleFeelingRating}
                type='number'
                value={feelingRating}
                />
                <div>
                    <Link to='/understanding'></Link>
                    <button type="submit"> Next
                    </button>
                </div>
            </form>
        </div>
    )
}