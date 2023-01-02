import { useEffect, useState } from 'react';
import brætspilbane from '../images/brætspilbane.png';
import "./pagesStyles/customdesign.css";
import { ChangeEvent } from 'react';
import { IQuestion } from '../models/QuestionRule';
import QuestionAndRule from '../components/QuestionAndRule';
import Button from '@mui/material/Button';
import { Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';



const Customdesign = () => {
    const [field, setField] = useState<number>(1);
    const [question, setQuestion] = useState<string>("");
    const [questionList, setQuestionList] = useState<IQuestion[]>([]);
    const [reload, setReload] = useState<boolean>(false);

    useEffect(() => {
      questionList.sort((a, b) => {
        return a.fieldNumber - b.fieldNumber;
      })
    }, [questionList, reload]);

    if(questionList.length === 45){
      questionList.sort((a, b) => {
        return a.fieldNumber - b.fieldNumber;
      })
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (event.target.name === "question") {
        setQuestion(event.target.value)
      } else {
        setField(Number(event.target.value));
      }
    }

    const addQuestion = (): void => {
      const newQuestion = {fieldNumber: field, questionName: question};
      let fieldNumbers = questionList.map(a => a.fieldNumber);
      if (fieldNumbers.includes(field)) {
        alert("Du har allerede indtastet et spørgsmål for dette felt");
      } else {
        setQuestionList([...questionList, newQuestion]);
        setQuestion("");
      }

      if (field > 0 && field < 45) {
        setField(field + 1);
      } else {
        setField(1)
      }
    }

    const incNum = (): void => {
      if(field < 45){
        setField(field+1);
      }
    };

    const decNum = (): void => {
      if(field > 1) {
        setField(field-1);
      }
    }


    const deleteQuestion = (questionNameToDelete: string): void => {
      setQuestionList(questionList.filter((question) => {
        return question.questionName != questionNameToDelete
      }));
    }

    const doneQuestion = () => {
      setReload(true);
      if (questionList.length === 45){
        console.log(questionList)
        alert("Produktet er tilføjet til kurven")
      } else {
        alert("Du mangler at udfylde nogle felter! Tjek om du har feltplads fra 1 til 45")
        return null;
      }}

    
    const DoneQuestionList = () => {
      if (questionList.length === 45) {
        return <Typography variant="h3" style={{marginLeft: "6%", marginRight: '14%', marginTop: '5%', fontWeight: "bold",  fontFamily:"fantasy", textAlign: "center"}}>
          Sådan! Du har nu udfyldt alle 45 felter i brætspillet og kan nu tilføje den i kurven</Typography> 
      }
      else {
        return null;
      }
    }



    return(
      <Grid container direction="column" alignItems="center" justifyContent="center">

        <Grid container direction="row">
        <Grid item xs={6} justifyContent="center">
          <Typography variant="h5" style={{marginLeft: "6%", marginTop: '12%', fontWeight: "bold",  fontFamily:"fantasy"}}>Design dit eget drukspil!</Typography>
          <Typography style={{marginLeft: "6%", marginRight: "14%", fontFamily: "unset"}}>Nedenfor vælger du det nummerede felt og indtaster, eller vælger
            det indhold som brikken skal have. Dette bliver du ved med, indtil du har 
            udfyldt alle 45 felter. Når dette er gjort, kan du tilføje dit brætspil til indkøbskurven.
          </Typography>
          <Typography style={{marginLeft: "6%", marginTop: "2%", fontWeight: "lighter", fontFamily:"fantasy"}}>
            Indtast spørgsmål/regel:
          </Typography>
          
          <Box style={{marginLeft: "6%"}}>
          <Button sx={{height: 50, fontSize: 30, fontWeight: 'bold'}} variant="contained" onClick={incNum} style={{backgroundColor: "#330000", textAlign: "center"}}>+</Button>
          <TextField variant="standard" InputProps={{readOnly: true, disableUnderline: true}} placeholder="Felt nummer" inputProps={{min: 1, max: 45}} value={field} name="field"
          onChange={event => {handleChange(event)}}  sx={{height: 0, input: {fontWeight: "bold", color: 'black', fontSize: 30, textAlign: 'center', backgroundColor: "#deb887"}}} style={{width: "10%" }}/>
          <Button size="small" sx={{height: 50, fontSize: 30, fontWeight: 'bold'}} variant="contained" onClick={decNum} style={{backgroundColor: "#330000", textAlign: "center" }}>-</Button>
          <TextField size="small" variant="filled" placeholder='Dit spørgsmål' type="text" value={question} name="question" 
          disabled={questionList.length == 45} onChange={handleChange} style={{backgroundColor: "white", width: "50%"}} />
          <Button sx={{height: 50}} size="large" variant="contained" onClick={addQuestion} disabled={questionList.length == 45} style={{backgroundColor: "#330000"}}>Tilføj</Button>
          </Box>

          <DoneQuestionList/>

        </Grid>
        <Grid item xs={6}>
          <img src={brætspilbane} style={{width: 500, height: 500, marginTop: '4%'}}/>
        <Box style={{justifyContent: 'center', display: "revert", flexDirection: 'column'}}>
        <Typography style={{fontWeight: 'bold', fontSize: 20, fontFamily:"fantasy"}}>Eget design</Typography>
          <Typography style={{fontFamily: "unset"}}>Brætspil</Typography>
          <Typography style={{fontFamily: "unset"}}>Pris 49 kr. </Typography>
          <Button size="small" variant="contained" style={{backgroundColor: "#330000"}} onClick={doneQuestion}>Tilføj til kurven</Button>
        </Box>
        </Grid>
        </Grid>

        <Grid container alignItems="center" direction="column" marginTop="3%">
          <Grid item xs={12} >
            <Box>
              {questionList.map((question: IQuestion, key: number) => {
                return <QuestionAndRule key={key} question={question} deleteQuestion={deleteQuestion}/>
              })}
            </Box>
          </Grid>
        </Grid>

      </Grid>
    )
}

export default Customdesign