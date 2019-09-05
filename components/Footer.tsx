import * as React from 'react';
import styled from 'styled-components';
import theme from '@totallymoney/ui/theme';

const FooterWrapper = styled.iframe`
  width: 100%;
  height: 1214px;

  ${theme.mediaMediumPlus`
    height: 750px;
  `}
  ${theme.mediaLargePlus`
    height: 600px;
  `}
`;

const Footer: React.SFC = () => {
  return (
    <FooterWrapper title="Footer" src="https://totallymoney.s3-eu-west-1.amazonaws.com/footers/tm-global-footer.html" />
  );
};

export default Footer;
