import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useHistory } from "react-router-dom"

export default function Feeling() {
    const getFeelingElement = useSelector(store => store.feelingReducer)
    let [feelingRating, setFeelingRating] = useState(getFeelingElement)
    
    const dispatch = useDispatch();
    const history = useHistory();

    const handleFeelingRating = (event) => {
        setFeelingRating (event.target.value)
    }

    const postFeelingRating = (event) => {
        event.preventDefault();
        if(feelingRating < 1 || feelingRating > 5){
            alert("Please enter a valid number between 1 and 5")
        } else{
        dispatch({
            type: 'ADD_FEELING',
            payload: feelingRating
          })    
        history.push('/understanding')};

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