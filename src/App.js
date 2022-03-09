import './App.css';
import styled  from 'styled-components';
import React,{useState} from 'react'
import { Modal } from './components/Modal';
const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    min-height: 100vh;
`;
const Button = styled.button`
    padding: 0.8rem;
    background: #18cc18;;
    font-family: poppins;
    font-size: 1rem;
    border: 1px solid transparent;
    color: #fff;
    cursor:pointer;
`;


const App = () => {
    let [modal, setModal] = useState(false);
  return (
      <>
         <Container>
            <Button onClick={()=>{setModal(prev=> !prev)}}>Modal Open</Button>
            <Modal modal={modal} setModal={setModal} />
        </Container>
      </>
  );
}

export default App;
