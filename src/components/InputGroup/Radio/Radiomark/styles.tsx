import styled from 'styled-components'

export const RadioContainer = styled.div`
    display:flex;
`

export const Icon = styled.svg`
  fill: ${({theme: {theme}})=> theme.background.shade1};
  stroke: ${({theme: {theme}}) => ( theme.background.shade1 )};
  stroke-width: 5px;
  position: absolute;
`
// Hide Radio visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
export const HiddenRadio = styled.input`
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

export const StyledRadio = styled.div<{size?: number, checked: boolean}>`
  display: inline-block;
  width: ${({size})=> (size || 20)}px;
  height: ${({size})=> (size || 20)}px;
  background: ${({checked, theme: {theme}}) => (checked ? 
    theme.primary.shade3 : 
    `transparent`
  )};
  border-radius: 20px;
  border: 2px solid ${({checked, theme: {theme}}) => (checked ? 
    theme.primary.shade3 : 
    theme.primary.base
  )};
  transition: all 150ms;
  position:relative;

  ${Icon} {
    visibility: ${({checked}) => (checked  ? 'visible' : 'hidden')};
  }
`