import styled from 'styled-components'

export const CheckboxContainer = styled.div`
    display:flex;
`

export const Icon = styled.svg`
  fill: none;
  stroke: ${({theme: {theme}}) => ( theme.background.shade1 )};
  stroke-width: 6px;
  position: absolute;
`

// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
export const HiddenCheckbox = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 0px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 0px;
`

export const StyledCheckbox = styled.div<{size?:number, checked: boolean}>`
  display: inline-block;
  width: ${({size})=> (size || 20)}px;
  height: ${({size})=> (size || 20)}px;
  background: ${({checked, theme: {theme}}) => (checked ? 
    theme.primary.shade3 : 
    `transparent`
  )};
  border-radius: 3px;
  border: 2px solid ${({theme: {theme}})=> theme.primary.base};
  transition: all 150ms;
  position:relative;

  ${Icon} {
    visibility: ${({checked}) => (checked  ? 'visible' : 'hidden')}
  }
`