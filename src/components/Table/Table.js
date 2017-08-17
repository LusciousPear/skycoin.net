import styled from 'styled-components';
import { rem } from 'polished';
import media from 'utils/media';

import Text from '@skycoin/text';
import { COLORS, SPACE } from '@skycoin/config';

// TODO: move to @skycoin/table
export const TableWrapper = styled(Text).attrs({
  as: 'div',
  color: 'black',
  fontSize: [1, 2],
  heavy: true,
})`
  overflow-x: auto;
  margin-right: -${rem(SPACE[4])};
  padding-right: ${rem(SPACE[4])};
  margin-left: -${rem(SPACE[4])};
  padding-left: ${rem(SPACE[4])};
  margin-bottom: ${rem(SPACE[4])};
`;

export default styled.table`
  width: 100%;
  border-bottom: 1px solid ${COLORS.gray[1]};
  min-width: ${rem(800)};

  td, th {
    border-top: 1px solid ${COLORS.gray[1]};
    height: ${rem(40)};

    ${media.sm.css`
      height: ${rem(50)};
    `}
  }

  a {
    color: ${COLORS.base};
  }
`;
