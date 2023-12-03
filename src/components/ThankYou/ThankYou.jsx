import { Link } from "react-router-dom";

export default function ThankYou(){
    return(
        <>
            <h1>Thank you for taking the time to leave feedback!</h1>
        
            <Link to='/'>
            <button data-testid="next">Leave New Feedback</button>
            </Link>
        </>
    )
}