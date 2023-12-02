import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link, useHistory } from "react-router-dom"

export default function Support() {
    let [supportRating, setSupportRating] = useState('')
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSupportRating = (event) => {
        setSupportRating (event.target.value)
    }

    const postSupportRating = (event) => {
        event.preventDefault();
        console.log("we are posting an Support item to store");
        dispatch({
            type: 'ADD_SUPPORT',
            payload: supportRating
          })        
        history.push('/comments');

    }


    return(
        <div>
            <h3>How well are you being supported?</h3>
            <form onSubmit={(event) => postSupportRating(event)}>
                <input
                onChange={handleSupportRating}
                type='number'
                value={supportRating}
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