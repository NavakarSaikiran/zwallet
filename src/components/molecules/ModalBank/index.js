import React from 'react';
import styled from 'styled-components';
import { Cardwrapper } from '../../atoms';

const ModalBank = ({ children, showModal, closeModal }) => {
  if (!showModal) return null;
  return (
    <Styles>
      <Cardwrapper className="content-wrapper">
        <div className="header">
          <h3 className="text-heading">Select Bank Payment</h3>
          <svg
            onClick={closeModal}
            className="icon"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 7L7 21"
              stroke="#3A3D42"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 7L21 21"
              stroke="#3A3D42"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <p className="modal-description">
          Select your preferred bank for your <br /> payment method
        </p>
        <div className="body">{children}</div>
      </Cardwrapper>
      <div className="bg-layer" onClick={closeModal}></div>
    </Styles>
  );
};

export default ModalBank;
const Styles = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-top: 4rem;
  .content-wrapper {
    z-index: 1;
    padding: 30px;
    width: 550px;
    .header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
    }
    .modal-description {
      width: 302px;
    }
  }
  .bg-layer {
    background: #3a3d42;
    opacity: 0.5;
    width: 100vw;
    z-index: -1;
    height: 100vh;
    left: 0;
    top: 0;
    position: fixed;
  }
`;
