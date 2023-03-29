import styled from 'styled-components';

export const ContactFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 5px;
`;

export const ContactName = styled.label`
  color: #596a70;
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-weight: 500;
`;

export const ContactInput = styled.input`
  padding: 5px;
  border-radius: 4px;
  border: none;
  box-shadow: 0px 0px 5px 2px lightblue;
`;

export const AddContactButton = styled.button`
  margin-top: 15px;
  padding: 5px;
  font-size: 15px;
  font-style: inherit;
  background-color: #fff;
  color: #596a70;
  cursor: pointer;
  border-radius: 4px;
  border: none;
  box-shadow: 0px 0px 5px 2px lightblue;
  font-weight: 500;
`;
