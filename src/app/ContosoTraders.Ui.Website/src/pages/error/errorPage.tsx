import './errorPage.scss'

import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import errorpic from "../../assets/images/original/Contoso_Assets/404_page_assets/404_image.svg";

const ErrorPage = () => {
    const history = useNavigate();
    const redirectTo = (path:string) => {
        history(path)
    }
    return (
        <>
            <div className='ErrorSection'>
                <img src={errorpic} className='errorpic' alt="error404"></img>
                <h1 className='errorsecHeading'>Something wrong here…</h1>
                <h5 className='errorsecContent'>Sorry, We’re having some technical issues (as you can see) <br /> Try to refresh the page, something work.</h5>
                <div className="ButtonSection">
                    <Button className='RefreshButton' variant="outlined" onClick={() => window.location.reload()} >Refresh page</Button>
                    <Button className='GoHomeButton' onClick={() => redirectTo('/')} > Go back to homepage</Button>
                </div>
            </div>
            <hr />
        </>
    )
}

export default ErrorPage;