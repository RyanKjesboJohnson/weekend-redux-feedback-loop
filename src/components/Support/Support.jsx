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
        <Div>
            <HorizontalLinearStepper activeStepProp={2}/>
            <h3>How well are you being supported?</h3>
            <Box component="form" onSubmit={(event) => postSupportRating(event)}>
                <TextField
                variant="filled"
                onChange={handleSupportRating}
                type='number'
                value={supportRating}
                data-testid="input"
                />
                <div>
                <Button variant="contained" data-testid="next" type="submit"> Next
                </Button>
                </div>
            </Box >
        </Div>
    )
}