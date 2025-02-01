import styled from '@emotion/styled';
import React from "react";

interface Props {
   name: string;
   color?: string; /// optional props
}

interface ContainerProps {
   color: string;
}


const Container = styled.div<ContainerProps>`
   color: ${(props) => props.color};
`

const Hello2 = ({ name, color = "green" }: Props) => {
   return (
      <Container color={color}>
         <h1>Hello {name}</h1>
      </Container>
   );
}

export default Hello2;