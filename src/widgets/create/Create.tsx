import { useState } from "react";
import { Title } from "../../components/title/Title"
import { useAppDispatch } from "../../store/hooks";
import { addTask } from "../../store/slices/taskSlice";


interface TaskForm {
  title: string;
  description: string;
  hours: string;
  minutes: string;
  status: string;
}


export const Create = () => {
    const dispatch = useAppDispatch()
      const [formData, setFormData] = useState<TaskForm>({
        title: '',
        description: '',
        status: 'new',
        hours: '',
        minutes: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
        ...prev,
        [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title.trim()) {
        alert('Введите название задачи');
        return;
    }

    const hours = parseInt(formData.hours) || 0;
    const minutes = parseInt(formData.minutes) || 0;
    const totalMinets = (hours * 60 ) + minutes;

    if (totalMinets === 0) {
        alert('Укажите время на выполнение');
        return;
    }

    const newTask = {
        id: Date.now().toString(),
        title: formData.title.trim(),
        description: formData.description.trim(),
        time: totalMinets,
        passedTime: 0,
        keepTime: totalMinets,
        status: 'new',
    }

    dispatch(addTask(newTask));
    
    setFormData({
        title: '',
        description: '',
        status: 'new',
        hours: '',
        minutes: ''
    });
}; 

    return (
        <div className="border-solid space-y-4  rounded-2xl border-2 p-4 m-4">
            <Title text="Создать задачу"/>
            <form className="flex gap-4" onSubmit={handleSubmit}>
            <label className="border-solid rounded-2xl border-2 p-2 flex flex-col">
                <span>Имя задачи:</span>
                <input 
                    name="title" 
                    placeholder="Введите имя"
                    value={formData.title}
                    onChange={handleChange}

                    />
            </label>
            <label className="border-solid rounded-2xl border-2 p-2 flex flex-col">
                <span>Описание</span>
                <input 
                    name="description" 
                    placeholder="Введите описание"
                    value={formData.description}
                    onChange={handleChange}
                    />
            </label>
           <label className="border-solid rounded-2xl border-2 p-2 flex flex-col">
          <span className="font-medium mb-2">Время на выполнение (часы : минуты)</span>
          <div className="flex items-center gap-2">
            <input 
              name="hours"
              value={formData.hours}
              onChange={handleChange}
              className="w-12 text-center border rounded p-1"
              type="number" 
              placeholder="Ч"
              min="0"
              max="24"
            />
            <span>:</span>
            <input 
              name="minutes"
              value={formData.minutes}
              onChange={handleChange}
              className="w-12 text-center border rounded p-1"
              type="number" 
              placeholder="М"
              min="0"
              max="59"
            />
          </div>
        </label>
            
             <button 
          type="submit"
          className="border-solid rounded-2xl border-2 p-4 border-green-500 bg-green-400 hover:bg-green-600 transition-colors duration-200 font-medium"
        >
          Создать
        </button>
        </form>
        </div>
    )
}