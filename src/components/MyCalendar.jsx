import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import AddTaskForm from './AddTaskForm'; 

const MyCalendar = () => {
  const [events, setEvents] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const storedEvents = localStorage.getItem('events');
    if (storedEvents) {
      const parsedEvents = JSON.parse(storedEvents);
      setEvents(parsedEvents);
    }
  }, []);

  const handleAddTask = (newTask) => {
    const updatedEvents = [
      ...events, 
      {
        title: newTask.nameTask,    
        backgroundColor: newTask.typeTask,
        start: newTask.startTimeTask,
        end: newTask.endTimeTask,
      }
    ];  
    setEvents(updatedEvents);
    localStorage.setItem('events', JSON.stringify(updatedEvents));
  };

  return (
    <div style={{padding: '10px'}}>
      <style>
        {'.fc-toolbar-title{ color: white; background-color:#2C3E50; border-radius: 5px; padding:5px }'}
      </style>
      <FullCalendar
        viewClassNames={'dark:text-white'}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        events={events}
        height='525px'
        contentHeight="525px"
        windowResizeDelay={0}
        // selectable={true}
        // select={handleDateSelect}
        headerToolbar={{
          left: 'prev,next today addTask',
          center: 'title',
          right: 'timeGridWeek,timeGridDay',
        }}
        customButtons={{
          addTask: {
            text: 'Add Task',
            click: () => {
              setIsDropdownOpen(!isDropdownOpen);
            },
          },
        }}
      />
      {isDropdownOpen && <AddTaskForm onAddTask={handleAddTask}/>}
    </div>
  );
};

export default MyCalendar;

