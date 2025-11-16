import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { deleteTask, editActiveTask } from "../../store/slices/taskSlice";
import type { TStatus } from '../../types/task';


export const ButtonTask = ({id, status}:{id: string, status: TStatus}) => {
    const activeId = useAppSelector((state) => state.tasks.activeTaskId)
    const dispatch = useAppDispatch();

    return (<div  className="flex gap-2">
        {status === 'expire' ? ' ': activeId === id ? 
        <button className="border-solid border-2 bg-orange-300 border-orange-400 hover:bg-orange-500 rounded-xl p-1" onClick={() => dispatch(editActiveTask(null))}>Пауза</button> : 
        <button className="border-solid border-2 bg-green-300 border-green-400 hover:bg-green-500  rounded-xl p-1" onClick={() => dispatch(editActiveTask(id))}>Начать</button>}
        <button className="border-solid border-2 bg-red-300 border-red-400 hover:bg-red-500 rounded-xl p-1" onClick={() => dispatch(deleteTask(id))}>Удалить</button>
    </div>)

}