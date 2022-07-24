import { StyledInterface } from 'styled-components'

declare const styledPx2vw: StyledInterface

export default styledPx2vw

export const px2vw: (px: string) => string | 0

export const initStyledConfig: (config: { viewportWidth?: number; ignoreAttrs?: (string | RegExp)[] }) => void

export * from 'styled-components'
