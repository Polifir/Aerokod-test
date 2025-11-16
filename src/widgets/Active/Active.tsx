import { ButtonTask } from "../../components/buttonTask/ButtonTask";
import { Status } from "../../components/status/Status";
import { Time } from "../../components/time/Time";
import { Title } from "../../components/title/Title";
import { useAppSelector } from "../../store/hooks";



export const ActiveTask = () => {
        const {activeTaskId, tasks} = useAppSelector((state) => state.tasks);
        const activeId = useAppSelector((state) => state.tasks.activeTaskId)
        
        const activeTask = activeTaskId ? tasks.find(e => e.id == activeTaskId) : null
    
    
        return(
             <>
             {
                activeTask ? (<div id={activeTask.id} className='border-solid border-2  rounded-2xl p-4 space-y-4 m-4'>
                    <Title text={activeTask.title}/>
                    <Status status={activeTask.id === activeId ? 'process' : activeTask.status}/>
                    <div>{activeTask.description ? activeTask.description : 'нет описания'}</div>
                    <Time time={activeTask.time} keepTime={activeTask.keepTime} passedTime={activeTask.passedTime} id={activeTask.id}/>
                    <ButtonTask id={activeTask.id} status={activeTask.status}/>
                </div>)
                 : <div className='border-solid border-2  rounded-2xl p-4 space-y-4 m-4'>Нет активных задач</div>
             }</>
    
        )
}