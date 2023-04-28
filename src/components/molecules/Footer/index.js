import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../utils';
import { customMedia } from '../../Layouting/BreakPoints';

const Footer = () => {
  return (
    <StyledFooter>
      <div className="custom-container">
        <div className="left">
          <p className="text-light">2020 SKYwallet. All right reserved.</p>
        </div>
        <div className="right">
          <p className="text-regular">XXXXXXXXXXX</p>
          <p className="text-regular">contact@skywallet.com</p>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  background-color: ${colors.primary};
  padding: 20px 0;
  margin-top: 60px;
  .text-light {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;
  }
  .text-regular {
    font-weight: 600;
  }
  p {
    color: rgba(239, 239, 239, 0.9);
    margin: 0;
  }
  .custom-container {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    ${customMedia.lessThan('744px')`
      flex-direction: column; 
    `}
    .left {
    }
    .right {
      display: flex;
      ${customMedia.lessThan('447px')`
      flex-direction: column; 
      gap: 16px;
    `}
      gap: 40px;
    }
  }
`;
