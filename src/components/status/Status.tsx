import type { TStatus } from "../../types/task"


export const Status = ({status}: {status: TStatus}) =>{
    switch(status){
        case 'expire':
            return <span className=" border-2 font-medium border-solid p-2 rounded-2xl ml-2 bg-red-400 border-red-700 text-red-900">Просорчен</span>
        case 'paused':
            return <span className=" border-2 font-medium border-solid p-2 rounded-2xl ml-2 bg-yellow-400 border-yellow-700 text-yellow-900">На паузе</span>
        case 'new':
            return <span className=" border-2 font-medium border-solid p-2 rounded-2xl ml-2 bg-blue-400 border-blue-700 text-blue-900">Новый</span>
        case 'process':
            return <span className=" border-2 font-medium border-solid p-2 rounded-2xl ml-2 bg-green-400 border-green-700 text-green-900">В процессе</span>
    }

}