import * as React from 'react';
import styled from 'styled-components';
import theme from '@totallymoney/ui/theme';
import Hero from '@totallymoney/ui/components/Hero';
import Grid from '@totallymoney/ui/components/Grid';
import Text from '@totallymoney/ui/components/Text';

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
    switch (e.currentTarget.id) {
      case 'both':
        console.log('🌩️');
        break;
      case 'gas':
        console.log('💨');
        break;
      case 'electricity':
        console.log('⚡');
        break;
      default:
        console.log('🤷');
    }
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
