import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

import { SPACE, COLORS } from '@skycoin/config';
import Container from '@skycoin/container';
import { media } from '@skycoin/utils';

import * as images from './images';

const Wrapper = styled.div`
  text-align: center;
  background-color: white;
  border-top: 2px solid ${COLORS.gray[1]};
  padding: ${rem(SPACE[4])} 0;
`;

const Logo = styled.img`
  vertical-align: middle;
  height: ${props => (props.square ? rem(50) : rem(35))};
  padding: ${rem(SPACE[4])} ${rem(SPACE[4])};

  ${media.md.css`
    height: ${props => (props.square ? rem(60) : rem(40))};
    padding: ${rem(SPACE[6])} ${rem(SPACE[4])};
  `}
`;

export default () => (
  <Wrapper>
    <Container>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alphabit.fund/"
      >
        <Logo src={images.alphabit} />
      </a>

      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.forbes.com/sites/laurashin/2017/07/12/crypto-boom-15-new-hedge-funds-want-in-on-84000-returns/"
      >
        <Logo src={images.forbes} />
      </a>

      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.the-blockchain.com/2017/08/01/skycoin-launches-vision-new-internet/"
      >
        <Logo src={images.blockchainNews} square />
      </a>
    </Container>
  </Wrapper>
);
