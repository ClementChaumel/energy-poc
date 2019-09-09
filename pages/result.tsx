import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import theme from '@totallymoney/ui/theme';
import Hero from '@totallymoney/ui/components/Hero';
import Grid from '@totallymoney/ui/components/Grid';
import Text from '@totallymoney/ui/components/Text';
import LoadingSpinner from '@totallymoney/ui/components/LoadingSpinner';
import fetch from 'isomorphic-unfetch';

import GlobalNav from '../components/GlobalNav';
import Footer from '../components/Footer';

const FormContainer = styled.div`
  background-color: ${theme.neutral};
`;

const ContentWrapper = styled.div`
  grid-column: 1 / 13;
  display: flex;
  flex-direction: column;
  padding: ${theme.spacingXL} 0;

  > * + * {
    margin-top: ${theme.spacingS};
  }
`;

const Index: React.SFC = () => {
  const [isLoading, setLoading] = useState(true);
  const [energyType, setEnergyType] = useState('');

  const onDataReceived = data => {
    setLoading(false);
    setEnergyType(data.comparisonType);

    switch (data.comparisonType) {
      case 'DUAL_FUEL':
        setEnergyType('💨⚡Both⚡💨');
        break;
      case 'GAS':
        setEnergyType('💨Gas💨');
        break;
      case 'ELECTRICITY':
        setEnergyType('⚡Electricity⚡');
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    // DO NOT DO THIS (async in useEffect = bad)
    fetch(`${process.env.API_URL}/customerID`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'x-api-key': process.env.API_KEY,
      }),
    })
      .then(res => res.json())
      .then(data => onDataReceived(data));
  });

  return (
    <>
      <GlobalNav />
      <Hero headline="Your energy profile" subtitle="Complete your details to spend less" swishDisplay="none" />
      <FormContainer>
        <Grid>
          <ContentWrapper>
            {isLoading ? <LoadingSpinner bg="light" /> : <Text>You chose {energyType}</Text>}
          </ContentWrapper>
        </Grid>
      </FormContainer>
      <Footer />
    </>
  );
};

export default Index;
