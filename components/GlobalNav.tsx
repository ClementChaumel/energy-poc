import * as React from 'react';
import styled from 'styled-components';
import theme from '@totallymoney/ui/theme';

const GlobalNavWrapper = styled.iframe`
  width: 100%;
  height: 49px;

  ${theme.mediaMediumPlus`
    height: 63px;
  `}
`;

const GlobalNav: React.SFC = () => {
  return (
    <GlobalNavWrapper
      title="GlobalNav"
      src="https://s3-eu-west-1.amazonaws.com/totallymoney/headers/tm-global-nav.html"
    />
  );
};

export default GlobalNav;
