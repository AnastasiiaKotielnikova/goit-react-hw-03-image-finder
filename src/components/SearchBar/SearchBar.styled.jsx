import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const SearchBarHeader = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background: rgba(218, 242, 4, 0.802);
  background: linear-gradient(
    to right,
    rgba(34, 193, 195, 0.7539390756302521) 25%,
    rgba(218, 242, 4, 0.802) 75%
  );
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const SearchForm = styled(Form)`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 300px;
  height: 50px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const Button = styled.button`
  display: inline-block;
  width: 60px;
  height: 60px;
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  box-shadow: 28px 27px 9px -20px rgba(0,0,0,0.41) inset;
-webkit-box-shadow: 28px 27px 9px -20px rgba(0,0,0,0.41) inset;
-moz-box-shadow: 28px 27px 9px -20px rgba(0,0,0,0.41) inset;
  }
  &:hover {
    opacity: 1;
`;

export const Input = styled(Field)`
  display: inline-block;
  width: 100%;
  height: 30px;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding: 5px 12px;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
