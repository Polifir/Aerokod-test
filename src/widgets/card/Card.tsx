import { ButtonTask } from "../../components/buttonTask/ButtonTask"
import { Status } from "../../components/status/Status"
import { Time } from "../../components/time/Time"
import { Title } from "../../components/title/Title"
import { useAppSelector } from "../../store/hooks"



export const Card = () => {
    const {filterTasks, tasks, search} = useAppSelector((state) => state.tasks);
    const activeId = useAppSelector((state) => state.tasks.activeTaskId)
    


    const activeData = search === '' ? tasks : filterTasks

    return(
         <>
         {
            activeData.length > 0 ? activeData.map(task => {
            return (<div id={task.id} className='border-solid border-2  rounded-2xl p-4 space-y-4 m-4'>
                <Title text={task.title}/>
                <Status status={task.id === activeId ? 'process' : task.status}/>
                <div>{task.description ? task.description : 'нет описания'}</div>
                <Time time={task.time} keepTime={task.keepTime} passedTime={task.passedTime} id={task.id}/>
                <ButtonTask id={task.id} status={task.status}/>
            </div>)
            }) : <div className='border-solid border-2  rounded-2xl p-4 space-y-4 m-4'>Нет задач</div>
         }</>

    )
}