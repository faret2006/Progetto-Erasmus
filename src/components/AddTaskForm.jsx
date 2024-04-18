import React, { useState } from 'react';
import { DatePicker } from '@mui/lab';
import { TextField } from '@mui/material';
import { red } from '@mui/material/colors';

const AddTaskForm = ({ onAddTask }) => {
  const [task, setTask] = useState({
    nameTask: '',
    typeTask: '',
    startTimeTask: '',
    endTimeTask: '',
  });

  const handleTaskChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask(task);
    setTask({
      nameTask: '',
      typeTask: '',
      startTimeTask: '',
      endTimeTask: '',
    });
    console.log(task);
  };

  return (
    <div className='absolute md:top-28 md:left-96 z-10 bg-white dark:bg-gray-950 shadow-lg p-4'>
      <form onSubmit={handleSubmit} className='flex flex-col space-y-2 dark:text-white'>
        <label>
          <p className='text-sm -mb-2.5'>Name:</p>
          <textarea className='rounded-md border dark:bg-gray-950 mt-2 size-full'   
            type='text'
            name='nameTask'
            value={task.nameTask}
            onChange={handleTaskChange}
          />
        </label>
        <label>
          <p className='text-sm -mb-2.5'>Priority:</p>
          <select
            className='rounded-md border dark:bg-gray-950 mt-2 size-full'
            name='typeTask'
            value={task.typeTask}
            onChange={handleTaskChange}
          >
            <option value='green' className='text-green-500'>Low</option>
            <option value='yellow' className='text-yellow-500'>Mid</option>
            <option value='red' className='text-red-500'>High</option>
          </select>
        </label>

        <label>
          <p className='text-sm -mb-2.5'>Start:</p>
          <input className='rounded-md border dark:bg-gray-950 mt-2'
            type='datetime-local'
            name='startTimeTask'
            value={task.startTimeTask}
            onChange={handleTaskChange}
          />
        </label>
        <label>
          <p className='text-sm -mb-2.5'>End:</p>
          <input className='rounded-md border dark:bg-gray-950 mt-2'
            type='datetime-local'
            name='endTimeTask'
            value={task.endTimeTask}
            onChange={handleTaskChange}
          />
        </label>
        
        
        <div className='text-center '>
          <button type='submit' className='rounded-md p-1 bg-blue-500'>Add Task</button>
        </div>
      </form>
    </div>
  );
};

export default AddTaskForm;
