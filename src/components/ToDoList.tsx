import React, {FC, useEffect, useState} from 'react';
import styled from 'styled-components';
import Button,{} from './Button';
import {AiOutlineDelete} from "react-icons/ai";
import {HiOutlineClipboardCheck,HiClipboardCheck} from "react-icons/hi";
import {RiFileList3Line} from "react-icons/ri";
import {useTypedSelector} from "../hooks/useTypedSelectors";
import { useActions } from '../hooks/useActions';
import {ItoDo} from "../models/ItoDo";
interface styleProps {
    isCompleted?:boolean
}
const ToDoList: FC = () => {
    const {toDoList,filterValue,filteredList} = useTypedSelector(state => state.todo)
    const [toDoData,setToDoData]=useState<ItoDo>({
        id:new Date().getMilliseconds(),
        isCompleted:false,
        text:""
    } as ItoDo )
    const [allList,setallList]=useState<ItoDo[]>(toDoList)
    const {createToDo,deleteToDo,filterToDo,setIsCompletedToDo}=useActions()
 
    const handleCreate=()=>{
        if(toDoData.text){
            createToDo(toDoData)
            setToDoData({
                id:1,
                isCompleted:false,
                text:""
            } )
        }
    }
    const handleChange=(value:string,field:string)=>{
        setToDoData({
            ...toDoData,
            [field]:value,
            id:new Date().getMilliseconds()
        })
        filterToDo(toDoData.text)
    }
    useEffect(()=>{
if(filteredList.length){
    setallList(filteredList)
}
if(!toDoData.text.length){
    setallList(toDoList)
}
    },[toDoList,filterValue])
    return (
        <ToDoListContainer >
            <ToDoListHeader>
                <InputContainer>
                    <RiFileList3Line/>
                    <Input type="text"
                     value={toDoData.text} 
                     onChange={(ev:any)=>handleChange(ev.target.value,"text")}/>
                </InputContainer>
                <Button primary onClick={handleCreate}>
                    Add todo
                </Button>
            </ToDoListHeader>
            <ToDoLists>
                {allList.map(({id,isCompleted,text})=>(
                    <ToDoData key={id} isCompleted={isCompleted}>
                    <Text>
                    {text}
                    </Text>
                    <Actions>
                        { isCompleted
                            ? 
                            (<HiClipboardCheck className={"check"} onClick={()=>setIsCompletedToDo(id)}/>) 
                            : 
                            (<HiOutlineClipboardCheck className={"check"} onClick={()=>setIsCompletedToDo(id)}/>)}
                    <AiOutlineDelete className={"del"} onClick={()=> deleteToDo(id)} />
                    </Actions>
                    </ToDoData>
                ))}
                
            </ToDoLists>
        </ToDoListContainer>
    );
};

const InputContainer = styled.div`
width:100%;
display:flex;
gap:1rem;
align-items:center;
svg{
font-size: 2rem;
color:white;
}
`


const ToDoListHeader = styled.header`
margin-bottom: 2rem;
display: flex;
gap:1rem;
`

const ToDoListContainer = styled.div`
width:100%;
display: flex;
flex-direction:column;
padding:1rem;
background-color:#9dffd0;
border-radius:1rem;
`
const Input = styled.input`
font-weight:800;
padding:1rem;
color:#109354;
border-radius: 1rem;
border:none;
outline:none;
width:100%;
&:active{
border:none;
}
`
const ToDoData = styled.div<styleProps>`
display:flex;
gap:1rem;
justify-content: space-between;
align-items: center;
border-radius:1rem;
padding:0.5rem;
box-shadow: 0 0 20px rgba(0,0,0,0.4);
width:100%;
background-color: ${(props)=>props.isCompleted ? "#9dffd0" : "white"};
text-decoration:${(props)=>props.isCompleted && "line-through"};
padding-left:1rem;
`
const ToDoLists = styled.div`
display: flex;
flex-direction: column;
gap:1.5rem;

`

const Text = styled.div`
width:60%;
color:#109354;
font-weight:600;
`
const  Actions=styled.div`
display:flex;
gap:1rem;
align-items:center;
.check{
color:#109354;
}
.del{
color:crimson;
}
`
export default ToDoList;
