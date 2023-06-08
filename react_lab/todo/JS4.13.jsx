import React, { useState } from 'react';
import './todo.css';

function App() {
    const [task, setTask] = useState('');
    const [group, setGroup] = useState('');
    const [tasksList, setTasksList] = useState([]);

    const handleTaskChange = (event) => {
        setTask(event.target.value);
    };

    const handleGroupChange = (event) => {
        setGroup(event.target.value);
    };

    const handleTaskAdd = () => {
        if (task.trim() !== '') {
            const newTask = { task, group };
            setTasksList([newTask, ...tasksList]);
            setTask('');
            setGroup('');
        }
    };

    const handleTaskDelete = (index) => {
        const updatedTasks = [...tasksList];
        updatedTasks.splice(index, 1);
        setTasksList(updatedTasks);
    };

    const getGroupedTasks = () => {
        const groupedTasks = {};

        tasksList.forEach((task, index) => {
            if (!groupedTasks[task.group]) {
                groupedTasks[task.group] = [];
            }
            groupedTasks[task.group].push(
                <div key={index} className='list'>
                    <span>{task.task}</span>
                    <button onClick={() => handleTaskDelete(index)}>✕</button>
                </div>
            );
        });

        return groupedTasks;
    };

    const renderTasks = () => {
        const groupedTasks = getGroupedTasks();

        return Object.entries(groupedTasks).map(([groupName, tasks]) => (
            <div key={groupName}>
                <h3>{groupName}</h3>
                {tasks}
            </div>
        ));
    };

    return (
        <div className="App">
            <div className="form">
                <h2>Список дел</h2>
                <div className="input-container">
                    <input
                        type="text"
                        placeholder="Задача"
                        value={task}
                        onChange={handleTaskChange}
                    />
                    <input
                        type="text"
                        placeholder="Группа"
                        value={group}
                        onChange={handleGroupChange}
                    />
                    <button onClick={handleTaskAdd}>Добавить</button>
                </div>
            </div>
            <div className="tasks">{renderTasks()}</div>
        </div>
    );
}

export default App;
