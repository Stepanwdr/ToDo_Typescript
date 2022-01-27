import styled, { css } from "styled-components";

import React, {FC, ReactChild} from 'react';

interface Props {
    children?: ReactChild,
    align?: string,
    primary?:boolean,
    onClick?:any
}

const Button: FC<Props> = (props: Props) => {
    return (
        <StyledButton primary={props.primary} onClick={props.onClick}>
            {props.children}
        </StyledButton>
    );
};
const StyledButton = styled.button<Props>`
border-radius:1rem;
border:none;
padding: 0.5rem 1rem;
cursor:pointer;
${({primary}) => primary && css`
    background-color: #64cddb;
    color: white;
`};
`

export default Button;