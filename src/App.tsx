import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar"
import Customdesign from "./pages/Customdesign";
import Home from "./pages/Home";
import Information from "./pages/Information";
import Predesign from "./pages/Predesign";
import './App.css';
import Payment from "./pages/Payment";
import { createTheme, ThemeProvider } from '@mui/material'
import back from './images/back.png';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = () => {
const theme = createTheme({
})

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Sidebar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="predesign" element={<Predesign/>}/>
          <Route path="customdesign" element={<Customdesign/>}/>
          <Route path="information" element={<Information/>}/>
          <Route path="payment" element={<Payment/>}/>
        </Routes>
      </BrowserRouter>
      </ThemeProvider>
  );
};

export default App;
