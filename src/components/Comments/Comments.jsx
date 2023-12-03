import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"

export default function Comments() {
    const getCommentElement = useSelector(store => store.commentsReducer)
    let [commentsRating, setCommentsRating] = useState(getCommentElement)
    const dispatch = useDispatch();
    const history = useHistory();

    const handleCommentsRating = (event) => {
        setCommentsRating (
            event.target.value)
    }

    const postCommentsRating = (event) => {
        event.preventDefault();
        console.log("we are posting an Comments item to store");
        dispatch({
            type: 'ADD_COMMENTS',
            payload: commentsRating
          })     
        history.push('/review')   

    }


    return(
        <div>
            <h3>Any comments you want to leave?</h3>
            <form onSubmit={(event) => postCommentsRating(event)}>
                <input
                onChange={handleCommentsRating}
                type='text'
                value={commentsRating}
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