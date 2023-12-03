import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import HorizontalLinearStepper from "../Stepper/Stepper"
import {styled} from "@mui/material/styles"
import { Box } from "@mui/material"
import TextField from '@mui/material/TextField';
import {Button} from '@mui/material'

const Div = styled('div')(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  }));

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
        <Div>
            <HorizontalLinearStepper activeStepProp={3}/>
            <h3>Any comments you want to leave?</h3>
            <Box component="form" onSubmit={(event) => postCommentsRating(event)}>
                <TextField
                id="filled-multiline-static"
                multiline
                rows={6}
                variant="filled"
                onChange={handleCommentsRating}
                type='text'
                value={commentsRating}
                data-testid="input"
                />
                <div>
                <Button variant="contained" data-testid="next" type="submit"> Next
                </Button>
                </div>
            </Box>
        </Div>
    )
}