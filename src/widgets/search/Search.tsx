import { useEffect, useState } from 'react';
import { Title } from '../../components/title/Title';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { searchTask } from '../../store/slices/taskSlice';

export const Search = () => {
    const search = useAppSelector((state) => state.tasks.search)
    const [searchValue, setSearchValue] = useState(search);
    const dispatch = useAppDispatch();
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    }


    useEffect(() => {
        dispatch(searchTask(searchValue))
    }, [searchValue])



    return (
        <div className="border-solid space-y-4  rounded-2xl border-2 p-4 m-4">
            <Title text='Поиск'/>
             <div className="space-y-2">
            <input 
                className="border-solid border-2  rounded-2xl p-2"
                placeholder="Поиск"
                value={searchValue}
                onChange={handleSearchChange}
            />
        </div>

        </div>
       
    );
}