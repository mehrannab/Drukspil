import { useEffect, useState } from 'react';
import drukspilbane from '../images/drukspilbane.png';
import "./pagesStyles/customdesign.css";
import { ChangeEvent } from 'react';
import { IQuestion } from '../models/QuestionRule';
import QuestionAndRule from '../components/QuestionAndRule';
import Button from '@mui/material/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';



const Customdesign = () => {
    const [field, setField] = useState<number>(1);
    const [question, setQuestion] = useState<string>("");
    const [questionList, setQuestionList] = useState<IQuestion[]>([]);
    const [reload, setReload] = useState<boolean>(false);
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
      questionList.sort((a, b) => {
        return a.fieldNumber - b.fieldNumber;
      })
    }, [questionList, reload]);

    const handleClose = (): void => {
      setShow(false);
    }

    const navigateToPayment = () => {
      console.log('payment');
      navigate('/payment')
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
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

      setReload(false)
    }


    const deleteQuestion = (questionNameToDelete: string): void => {
      setQuestionList(questionList.filter((question) => {
        return question.questionName != questionNameToDelete
      }));
    }

    const doneQuestion = () => {
      setReload(true);
      if (questionList.length === 45){
        setShow(true);
        console.log(questionList)
      } else {
        alert("Du mangler at udfylde nogle felter! Tjek om du har feltplads fra 1 til 45")
        return null;
      }}


    const validateNumber = (): void => {
      //MANGLER VALIDATION PÅ FIELDNUMBER
    }
    

    return(
        <div>
        <p className="regularText"><br></br>Drukspillets bane er vist i nedenstående figur. Banen består af 47 felter inkl. start- og slutfelt. <br></br> </p>
        <div className="titlePath">
            <img style={{width: 1300, height: 900}} src={drukspilbane} alt=""/>
        </div>
        <p className="regularText"> <br></br>Du skal nu udfylde, hvad der skal stå i hvert enkelt af de 45 felter for at designe dit eget drukspil.</p>
        <div className="inputFields">
            <input className="inputNumber" type="number" placeholder="Felt nummer" min={1} max={45} maxLength={2}
             value={field} onChange={event => {handleChange(event); validateNumber()}} name="field" disabled={questionList.length == 45}/>
            <input className="inputQuestion" type="text" placeholder="Dit spørgsmål" value={question}
             onChange={handleChange} name="question" maxLength={50} disabled={questionList.length == 45}/>
          <div className="addQuestion">
            <button onClick={addQuestion} disabled={questionList.length == 45}>Tilføj</button>
          </div>
        </div>
        <div className="questionList">
          {questionList.map((question: IQuestion, key: number) => {
            return <QuestionAndRule key={key} question={question} deleteQuestion={deleteQuestion}/>
          })}
        </div>
        <div className="doneQuestion">
            <Button variant="contained" onClick={doneQuestion}>Færdig</Button>

              <Modal size="xl" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title className='modal-title'>Du er næsten færdig!</Modal.Title>
                </Modal.Header>
                <Modal.Body className='modal-body'>Hvis du er glad for dine spørgsmål, så gå til betaling.</Modal.Body>
                <Modal.Footer>
                <Button onClick={handleClose}>
                Luk
                </Button>
                <Button onClick={navigateToPayment}>
                Gå til betaling
                </Button>
                </Modal.Footer>
              </Modal>
        </div>
        </div>
    )
}

export default Customdesign