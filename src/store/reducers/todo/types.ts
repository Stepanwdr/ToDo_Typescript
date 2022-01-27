import { ItoDo } from "../../../models/ItoDo";


export interface ToDoState {
    toDoList:ItoDo[]
    filteredList:ItoDo[],
    filterValue:undefined | string
}

export enum ToDoActionEnum {
    CREATE_TO_DO = "CREATE_TO_DO",
    DELETE_TO_DO="DELETE_TO_DO",
    FILTER_TO_DO="FILTER_TO_DO",
    SET_IS_COMPLETED_TO_DO="SET_IS_COMPLETED_TO_DO"
}
export interface CreateToDoAction {
    type: ToDoActionEnum.CREATE_TO_DO;
    payload: ItoDo
}
export interface SetIsCompletedToDoAction {
    type: ToDoActionEnum. SET_IS_COMPLETED_TO_DO;
    payload: number
}
export interface DeleteToDoAction {
    type: ToDoActionEnum.DELETE_TO_DO;
    payload:number
}
export interface FilterToDoAction {
    type: ToDoActionEnum.FILTER_TO_DO;
    payload:string
}
export type ToDoAction =
    CreateToDoAction |
    DeleteToDoAction |
    FilterToDoAction |
    SetIsCompletedToDoAction