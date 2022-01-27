import React, {FC} from 'react';
import ToDoList from './components/ToDoList';
import styled from "styled-components";
const App: FC = () => {
    return <Section>
        <ToDoList/>
    </Section>;
};
const Section=styled.section`
max-width:720px;
height:100vh;
margin: 0 auto;
padding:20px;
`
export default App;