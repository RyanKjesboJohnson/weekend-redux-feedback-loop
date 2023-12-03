import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useHistory } from "react-router-dom"

export default function Support() {
    const getSupportElement = useSelector(store => store.supportReducer)
    let [supportRating, setSupportRating] = useState(getSupportElement)
    
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSupportRating = (event) => {
        setSupportRating (event.target.value)
    }

    const postSupportRating = (event) => {
        event.preventDefault();
        if(supportRating < 1 || supportRating > 5){
            alert("Please enter a valid number between 1 and 5")
        }else{
        dispatch({
            type: 'ADD_SUPPORT',
            payload: supportRating
          })        
        history.push('/comments')};

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