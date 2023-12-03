import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import HorizontalLinearStepper from "../Stepper/Stepper"
import {styled} from "@mui/material/styles"
import { Box } from "@mui/material"
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material"


const Div = styled('div')(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  }));

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
        <Div>
            <HorizontalLinearStepper activeStepProp={1}/>
            <h3>How well are you understanding the content?</h3>
            <Box component="form" onSubmit={(event) => postUnderstandingRating(event)}>
                <TextField
                variant="filled"
                onChange={handleUnderstandingRating}
                type='number'
                value={understandingRating}
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