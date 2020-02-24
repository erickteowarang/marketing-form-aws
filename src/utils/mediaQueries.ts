import { ThemedCssFunction, css } from 'styled-components'

interface IBreakpoints {
  xs: string
  s: string
  m: string
  l: string
  xl: string
}

interface ISizeProps {
  xs: number 
  s: number
  m: number
  l: number
  xl: number
}

// Object containing all the breakpoints for the site
const sizes: ISizeProps = {
  xs: 375,
  s: 520,
  m: 768,
  l: 1024,
  xl: 1441,
}


// Iterate through the sizes and create a media template
// Usage example: ${maxMQ.m`
//                   ... css here ...
//                `}
export const maxMQ = (Object.keys(sizes) as Array<string>).reduce(
  (acc, label) => {
    acc[label] = (first: any, ...interpolations: any[]) => css`
      @media (max-width: ${sizes[label] - 1}px) {
        ${css(first, ...interpolations)}
      }
    `

    return acc
  },
  {} as {[key in keyof typeof sizes]: ThemedCssFunction<IBreakpoints>},
)

// Iterate through the sizes and create a media template
// Usage example: ${minMQ.m`
//                   ... css here ...
//                `}
export const minMQ = (Object.keys(sizes) as Array<string>).reduce(
  (acc, label) => {
    acc[label] = (first: any, ...interpolations: any[]) => css`
      @media (min-width: ${sizes[label]}px) {
        ${css(first, ...interpolations)}
      }
    `

    return acc
  },
  {} as { [key in keyof typeof sizes]: ThemedCssFunction<IBreakpoints>},
)

// Iterate through the sizes and create a media template
// Usage example: ${betweenMQ('m', 'l')`
//                   ... css here ...
//                `}
export const betweenMQ = (firstSize: string, secondSize: string) => (
  ...args: any
) => css`
  ${minMQ[firstSize]`
    ${maxMQ[secondSize]`
        ${css({}, ...args)}
    `}
  `}
`
