import * as React from 'react';
import styled from 'styled-components';
import theme from '@totallymoney/ui/theme';

const RButton = styled.button`
  background-color: white;
  border: solid 1px ${theme.indigo120};
  border-radius: 5px;
  padding: ${theme.spacingS};
  font-size: 1.6rem;
  cursor: pointer;
  text-align: left;
  display: flex;
  align-items: center;

  &:before {
    content: '';
    display: block;
    height: 15px;
    width: 15px;
    background: white;
    border: 1px solid ${theme.indigo120};
    border-radius: 50%;
    margin-right: ${theme.spacingS};
  }

  &:focus:before {
    background-color: ${theme.indigo120};
    box-shadow: inset 0px 0px 0 2px white;
  }
`;
interface RadioButtonTypes {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  label: string;
  id: string;
}

const RadioButton: React.SFC<RadioButtonTypes> = props => {
  const { onClick, label, id } = props;
  return (
    <RButton type="button" onClick={onClick} id={id}>
      {label}
    </RButton>
  );
};

export default RadioButton;
