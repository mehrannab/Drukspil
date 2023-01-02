import { useNavigate } from "react-router-dom";
import "./pagesStyles/home.css";
import clinkingbeer from '../images/clinkingbeer.gif';
import Grid from '@mui/material/Grid';
import overskrift from '../images/overskrift.png';
import { Button, createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import step1 from '../images/step1.png';
import step2 from '../images/step2.png';
import step3 from '../images/step3.png';

const Home = () => {
    const buttonTheme = createTheme({palette: {primary: {main: '#99CC66'}}})

    const navigate = useNavigate();

    const navigateToCustom = () => {
        navigate('/customdesign');
    };

    const navigatoToPre = () => {
        navigate('/predesign')
    }


    return(
        <Grid container direction="column" alignItems="center" justifyContent="center">
            <Grid item xs={12}>
                <img src={overskrift} style={{width: 550, height: 150, marginTop: '4%'}}/>
            </Grid>
            <Grid item xs={12}>
                <img style={{width: 250, height: 200, marginTop: '-20%' }} src={clinkingbeer}/>
            </Grid>
            <Grid item xs={12} justifyContent='center' style={{marginTop: '2%'}}>
                <ThemeProvider theme={buttonTheme}>
                <Button style={{marginRight: '10px'}}variant="contained" color="primary" size="medium" sx={{fontWeight: 'bold', fontStyle: 'italic', color: 'darkgreen', border: 1}} onClick={navigateToCustom}>
                   Design dit eget drukspil</Button>
                <Button style={{marginLeft: '10px'}} variant="contained" color="primary" size="medium" sx={{fontWeight: 'bold', fontStyle: 'italic', color: 'darkgreen', border: 1}} onClick={navigatoToPre}>
                    Design dit drukspil med os</Button>
                </ThemeProvider>
            </Grid>
            <Grid item xs={12} direction="row" style={{marginTop: '5%'}}>
                <img src={step1} style={{width: 350, height: 350}}/>
                <img src={step2} style={{width: 350, height: 350}}/>
                <img src={step3} style={{width: 350, height: 350}}/>
            </Grid>
        </Grid>
    )
}

export default Home;