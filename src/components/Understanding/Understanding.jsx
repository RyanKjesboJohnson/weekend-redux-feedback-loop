import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useHistory } from "react-router-dom"

export default function Understanding() {
    const getUnderstandingElement = useSelector(store => store.understandingReducer)
    let [understandingRating, setUnderstandingRating] = useState(getUnderstandingElement)
    
    const dispatch = useDispatch();
    const history = useHistory();

    const handleUnderstandingRating = (event) => {
        setUnderstandingRating (event.target.value)
    }

    const postUnderstandingRating = (event) => {
        event.preventDefault();
        if(understandingRating < 1 || understandingRating > 5){
            alert("Please enter a valid number between 1 and 5")
        }else{
        dispatch({
            type: 'ADD_UNDERSTANDING',
            payload: understandingRating
          })        
        history.push('/support')}

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