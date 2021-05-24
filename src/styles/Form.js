import styled from 'styled-components'
import Card from './Card'

const Form = styled(Card)`
    label {
        display: flex;
        flex-flow: column;
        margin-bottom: 15px;
    }

    input,
    textarea {
        font-size: 17px;
        font-family: inherit;
        font-weight: 500;
        padding: 5px;

        border: 1px solid #83818c;
        border-radius: 3px;
        margin-top: 5px;
    }

    textarea {
        resize: none;
    }
`

export default Form
