import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React from 'react'
import { IQuestion } from '../models/QuestionRule'

interface Props {
  question: IQuestion;
  deleteQuestion(questionNameToDelete: any): void;
}

const QuestionAndRule = ({question, deleteQuestion}: Props) => {


  return (
    <Box sx={{marginTop: "1%", marginBottom: "3%"}} justifyContent="center" alignItems="center" display="flex">
      <TextField variant="standard" InputProps={{readOnly: true, disableUnderline: true}} sx={{input: {border: 2, borderColor: "#330000", textAlign: "center",
        backgroundColor: "white", fontWeight: 'bold', fontSize: 16 }}} style={{width: "10%" }} value={question.fieldNumber}/>
      <TextField variant="standard" InputProps={{readOnly: true, disableUnderline: true}} sx={{input: {border: 2, borderColor: "#330000", textAlign: "left", 
        fontWeight: 'bold', fontSize: 16, paddingLeft: "1%"}}} style={{width: "100%"}} value={question.questionName}/>
      <Button style={{backgroundColor: "#330000"}} variant="contained" onClick={() => {
          deleteQuestion(question.questionName)
        }}>Slet</Button>
    </Box>
  )
}

export default QuestionAndRule