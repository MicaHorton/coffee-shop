import styled from 'styled-components'

const Alert = styled.div`
    display: ${props => (props.display ? 'block' : 'none')};
`

export default Alert
