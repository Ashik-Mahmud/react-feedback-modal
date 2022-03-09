import { animated, useSpring } from '@react-spring/web';
import React, {useRef, useCallback, useEffect} from 'react'
import { BiCheckCircle, BiX } from 'react-icons/bi';
import styled from 'styled-components';
import './Modal.css';
const CloseButton = styled.button`
    background: #18cc18;;
    color: #fff;
    position: absolute;
    right: -10px;
    top: -10px;
    width: 30px;
    height: 30px;
    text-align:center;
    display:grid;
    place-items:center;
    font-size: 1.5rem;
    border:none;
    border-radius: 50%;
    cursor:pointer;
`;

export const Modal = ({modal, setModal}) => {
    const myModalRef = useRef();

    const animate = useSpring({
        config:{
            duration: 250
        },
        opacity: modal ? 1 : 0,
        transform: modal ? 'scale(1)' : 'scale(5)'
    })

    const closeMyModal = (event) =>{
        if(myModalRef.current === event.target){
            setModal(false);
        }
    }

    const keyPress = useCallback((e)=>{
        if(e.key === 'Escape' && modal){
            setModal(false)
        }
    },[setModal, modal])

    useEffect(()=>{
        document.addEventListener("keydown", keyPress);
        return () => document.removeEventListener("keydown", keyPress)
    },[keyPress])

  return (
     <>
        {modal ? (
           <div className="modal-wrapper" ref={myModalRef} onClick={closeMyModal}>
               <animated.div style={animate}>
                <div className="modal-content">
                    <CloseButton onClick={()=> setModal(prev=> !prev)}><BiX /></CloseButton>
                    <div className="modal-body">
                        <div className="icon"><BiCheckCircle /></div>
                        <p>Thanks for your Feedback.</p>
                    </div>
                </div>
                </animated.div>
             </div>
        ) : null}
     </>   
  )
}
