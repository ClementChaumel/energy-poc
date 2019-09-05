import * as React from 'react';
import styled from 'styled-components';
import Button from '@totallymoney/ui/components/Button';

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

interface CountProps {
  count: number;
}

const Count: React.FunctionComponent<CountProps> = props => {
  const { count } = props;
  return (
    <>
      <Title>{count}</Title>
      <Button>Hi</Button>
    </>
  );
};

Count.defaultProps = {
  count: 5,
};

export default Count;
