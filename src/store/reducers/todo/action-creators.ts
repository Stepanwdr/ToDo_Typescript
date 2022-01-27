import {CreateToDoAction,DeleteToDoAction, ToDoActionEnum,FilterToDoAction,SetIsCompletedToDoAction} from "./types";

import {ItoDo} from "../../../models/ItoDo";

export const ToDoActionCreators = {
    createToDo: (toDoData: ItoDo): CreateToDoAction=> ({type: ToDoActionEnum.CREATE_TO_DO, payload:toDoData}),
    deleteToDo: (id: number): DeleteToDoAction=> ({type: ToDoActionEnum.DELETE_TO_DO, payload:id}),
    filterToDo:(filterValue: string): FilterToDoAction=> ({type: ToDoActionEnum.FILTER_TO_DO, payload:filterValue}),
    setIsCompletedToDo:(id: number): SetIsCompletedToDoAction=> ({type: ToDoActionEnum.SET_IS_COMPLETED_TO_DO, payload:id}),
}

