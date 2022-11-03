import React, { useState } from 'react';
import { BsFillPinAngleFill } from 'react-icons/bs';

const CreateTodoField = ({ setTodos }) => {
    const [title, setTitle] = useState('');

    const addTodo = (title) => {
        if (title.length < 3) {
            return
        } else {
            setTodos(prev => [
                {
                    id: new Date(),
                    title,
                    isCompleted: false,
                },
                ...prev,])
            setTitle('')
        }
    }

    return (
        <div className='flex items-center justify-between mb-4 rounded-2xl border-slate-800 border-2 px-5 py-3 w-full mt-20'>
            <input type="text"
                onChange={e => setTitle(e.target.value)}
                value={title}
                onKeyPress={e => e.key === 'Enter' && addTodo(title)}
                className='bg-transparent w-full border-none outline-none'
                placeholder='Enter your goal'
            />
            <BsFillPinAngleFill size={22}
                className='text-gray-600 hover:text-red-700 transition-colors easy-in-out duration-300'
                onClick={() => addTodo(title)} />
        </div>
    );
};

export default CreateTodoField;