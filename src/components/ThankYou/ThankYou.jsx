import { Link } from "react-router-dom";
import { Typography, Button, Box, Container } from "@mui/material";

export default function ThankYou(){
    return(
        <Container>
            <Typography variant="h6">Thank you for taking the time to leave feedback!</Typography>
        <br></br>
        <Box>
            <Link to='/'>
            <Button variant="contained" data-testid="next">Leave New Feedback</Button>
            </Link>
        </Box>
        </Container>
    )
}