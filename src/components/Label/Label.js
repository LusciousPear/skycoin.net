import styled from 'styled-components';
import { rem } from 'polished';

import {
  COLORS,
  FONT_SIZES,
  FONT_FAMILIES,
  BOX_SHADOWS,
  SPACE,
  BORDER_RADIUS,
} from '@skycoin/config';

// TODO: move to @skycoin/label
export default styled.span`
  background-color: ${COLORS.indigo[4]};
  border-radius: ${BORDER_RADIUS.base};
  box-shadow: ${BOX_SHADOWS.base};
  font-family: ${FONT_FAMILIES.mono};
  font-size: ${rem(FONT_SIZES[0])};
  padding: ${rem(SPACE[2])} ${rem(SPACE[3])};

  color: white;
  display: inline-block;
  font-weight: 600;
  text-transform: uppercase;
`;
