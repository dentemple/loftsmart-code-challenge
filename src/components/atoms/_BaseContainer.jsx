import { css } from 'styled-components'

const BaseContainer = css`
  /* display */
  display: flex;
  flex-direction: column;

  /* box */
  box-shadow: ${props => props.theme.colors.boxShadow};
  padding: 0 16px;

  /* content */
  background-color: ${props => props.theme.colors.white};
`

export default BaseContainer
