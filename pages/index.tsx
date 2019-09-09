import * as React from 'react';
import Router from 'next/router';
import styled from 'styled-components';
import theme from '@totallymoney/ui/theme';
import Hero from '@totallymoney/ui/components/Hero';
import Grid from '@totallymoney/ui/components/Grid';
import Text from '@totallymoney/ui/components/Text';
import fetch from 'isomorphic-unfetch';

import RadioButton from '../components/RadioButton';
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

const HintWrapper = styled.div`
  background-color: white;
  border: 1px solid ${theme.neutral140};
  padding: ${theme.spacingXS};
  margin-bottom: ${theme.spacingXS};
`;

const Index: React.SFC = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const body = {
      customerId: 'customerID',
      key: 'comparisonType',
      value: '',
    };
    switch (e.currentTarget.id) {
      case 'both':
        body.value = 'DUAL_FUEL';
        break;
      case 'gas':
        body.value = 'GAS';
        break;
      case 'electricity':
        body.value = 'ELECTRICITY';
        break;
      default:
        console.log('🤷');
    }
    fetch(process.env.API_URL, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        'x-api-key': process.env.API_KEY,
      }),
      body: JSON.stringify(body),
    });
    Router.push('/result');
  };

  return (
    <>
      <GlobalNav />
      <Hero headline="Your energy profile" subtitle="Complete your details to spend less" swishDisplay="none" />
      <FormContainer>
        <Grid>
          <ContentWrapper>
            <HintWrapper>
              <Text>
                Having your bill to hand will get you the most accurate results - but we can help you estimate if you
                don&apos;t.
              </Text>
            </HintWrapper>
            <Text weight="bold">What type of energy do you use?</Text>
            <RadioButton id="both" label="Both gas and electricity" onClick={handleClick} />
            <RadioButton id="gas" label="Gas only" onClick={handleClick} />
            <RadioButton id="electricity" label="Electricity only" onClick={handleClick} />
          </ContentWrapper>
        </Grid>
      </FormContainer>
      <Footer />
    </>
  );
};

export default Index;
