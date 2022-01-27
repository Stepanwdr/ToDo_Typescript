import { log } from 'console';
import { ItoDo } from './../../../models/ItoDo';
import {ToDoActionEnum, ToDoAction, ToDoState} from "./types";

const initialState: ToDoState = {
    toDoList: [
        {
            id: 1,
            isCompleted: false,
            text: "Create React App"
        },
        {
            id: 2,
            isCompleted: false,
            text: "Add Packages"
        },
        {
            id: 3,
            isCompleted: false,
            text: "Buid App"
        },
        {
            id: 4,
            isCompleted: false,
            text: "Push Git"
        },

    ],
    filteredList: [] as ItoDo[],
    filterValue:undefined,
}
export default function ToDoReducer(state = initialState, action: ToDoAction): ToDoState {
    switch (action.type) {
        case ToDoActionEnum.CREATE_TO_DO:{
            let {toDoList}=state
       const newToDoData=action.payload
            toDoList=[...toDoList,newToDoData]
            return {
                ...state,
                filterValue:undefined,
                toDoList,
                filteredList:[]
               
            }
        }
            case ToDoActionEnum.DELETE_TO_DO:{
                const id=action.payload
                const filteredList = [...state.toDoList.filter((list)=>list.id !== id)]
              return {
                ...state,
                filteredList,
                toDoList:filteredList,
                filterValue:undefined
            }
        }
            case ToDoActionEnum.FILTER_TO_DO:{
                const filterValue = action.payload
                const {toDoList}=state
                let filtList=toDoList
                let filteredList = []
              const getFilteredTodo=(arr:any,value:string)=>{
               return arr.filter(
                   (list:any) => list.text.toLowerCase().indexOf(value.toLocaleLowerCase()) !== -1)
              }
            filteredList=getFilteredTodo(filtList,filterValue)
              return {
                ...state,
                filteredList,
                filterValue,
                toDoList
            }
        }
        case ToDoActionEnum.SET_IS_COMPLETED_TO_DO:{
            const id=action.payload
             let completedToDo = {...state.toDoList.find((list)=>list.id === id) } as  ItoDo
            const allToDos=[...state.toDoList.filter((list)=>list.id !== id)] as  ItoDo[]
            completedToDo = {...completedToDo ,isCompleted:!completedToDo.isCompleted}
              return {
                ...state,
                filterValue:undefined,
                toDoList:[...allToDos,completedToDo],
                filteredList:[...allToDos,completedToDo]
            }
    }
    default:
        return state;
          
}}

