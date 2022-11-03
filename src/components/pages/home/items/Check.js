import React from 'react';
import { BsFillHandThumbsUpFill } from 'react-icons/bs';

const Check = ({ isCompleted }) => {
    return (
        <div className={`border-2 rounded-lg border-pink-400 ${isCompleted ? 'bg-pink-400' : ''}
        w-7 h-7 mr-3 flex items-center justify-center`}>
            {isCompleted && <BsFillHandThumbsUpFill size={24} className='text-slate-800' />}
        </div>
    );
};

export default Check;