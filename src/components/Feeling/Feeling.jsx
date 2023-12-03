import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import HorizontalLinearStepper from "../Stepper/Stepper"
import {styled} from "@mui/material/styles"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material"

const Div = styled('div')(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  }));

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
        <Div>
            <HorizontalLinearStepper activeStepProp={0}/>
            <h3>How are you feeling today?</h3>
                <Box component="form" onSubmit={(event) => postFeelingRating(event)}>
                <TextField
                variant="filled"
                onChange={handleFeelingRating}
                data-testid="input"
                type='number'
                value={feelingRating}
                />
                <div>
                    <Button variant="contained" data-testid="next" type="submit"> Next
                    </Button>
                </div>
            </Box>
        </Div>
    )
}