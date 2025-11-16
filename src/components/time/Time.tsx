import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { editActiveTask, editTimeTask } from "../../store/slices/taskSlice";


interface ITime {
    time: number,
     keepTime: number, 
     passedTime: number, 
     id: string
}

const formatTimeHoursMinutes = (min: number): string => {
    const hours = Math.floor(min / 60);
    const minTail = min % 60 
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minTail.toString().padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}`;
};

export const Time = ({time, keepTime, passedTime, id}: ITime) =>{
    const dispatch = useAppDispatch();
    const taskId =  useAppSelector(state => state.tasks.activeTaskId)
    const timerRef = useRef<number | null>(null);

    useEffect(() => {
        if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
    }
        if(taskId === id){
            timerRef.current = setInterval(() => {
            dispatch(editTimeTask({
                id: taskId,
                passedTime: passedTime + 1,
                keepTime: keepTime - 1,
                status: passedTime >= time ? 'expire' : 'active' 
            }));
            if(passedTime >= time){
                dispatch(editActiveTask(null))
            }
        }, 60000);
        }

        return () => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
        }
        }
    }, [taskId, id, keepTime, dispatch]);
    return (
   <div>
    <div>
        <span>Время на выполнение часы/минуты: </span>
        <span>{formatTimeHoursMinutes(time)}</span>
    </div>
    <div>
        <span>Оставшееся время часы/минуты: </span>
        <span>{formatTimeHoursMinutes(keepTime)}</span>
    </div>
    <div>
        <span>Затрачено времени часы/минуты: </span>
        <span>{formatTimeHoursMinutes(passedTime)}</span>
    </div>
   </div>
    )
}