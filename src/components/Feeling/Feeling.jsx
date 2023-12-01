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
        dispatch({
            type: 'ADD_FEELING',
            payload: feelingRating
          })
        // add the router to next page
        

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
                <Link to='/understanding'>
                <button>
                    Next
                </button>
                </Link>
            </form>
        </div>
    )
}