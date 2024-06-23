import React, { Component } from 'react';

class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [
                { id: 1, text: 'Приклад завдання 1', completed: false },
                { id: 2, text: 'Приклад завдання 2', completed: true },
                { id: 3, text: 'Приклад завдання 3', completed: false },
            ],
            filter: 'Всі',
            newTaskText: '',
        };
    }

    componentDidMount() {
        console.log('Компонент TodoApp був доданий на сторінку.');
    }

    componentDidUpdate(prevState) {
        if (prevState.tasks !== this.state.tasks || prevState.filter !== this.state.filter) {
            console.log('Список завдань або обраний фільтр змінились.');
        }
    }

    handleInputChange = (e) => {
        this.setState({ newTaskText: e.target.value });
    };

    addTask = () => {
        if (this.state.newTaskText.trim() === '') return;
        const newTask = {
            id: Date.now(),
            text: this.state.newTaskText,
            completed: false,
        };
        this.setState((prevState) => ({
            tasks: [...prevState.tasks, newTask],
            newTaskText: '',
        }));
    };

    toggleTaskCompletion = (taskId) => {
        this.setState((prevState) => ({
            tasks: prevState.tasks.map((task) =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            ),
        }));
    };

    deleteTask = (taskId) => {
        this.setState((prevState) => ({
            tasks: prevState.tasks.filter((task) => task.id !== taskId),
        }));
    };

    setFilter = (filter) => {
        this.setState({ filter });
    };

    render() {
        const { tasks, filter, newTaskText } = this.state;

        let filteredTasks = tasks;
        if (filter === 'Виконані') {
            filteredTasks = tasks.filter(task => task.completed);
        } else if (filter === 'Не виконані') {
            filteredTasks = tasks.filter(task => !task.completed);
        }

        return (
            <div>
                <h1>Todo List</h1>

                <div>
                    <input
                        type="text"
                        value={newTaskText}
                        onChange={this.handleInputChange}
                        placeholder="Введіть нове завдання"
                    />
                    <button onClick={this.addTask}>Додати</button>
                </div>

                <div>
                    <h3>Фільтр:</h3>
                    <button onClick={() => this.setFilter('Всі')}>Всі</button>
                    <button onClick={() => this.setFilter('Виконані')}>Виконані</button>
                    <button onClick={() => this.setFilter('Не виконані')}>Не виконані</button>
                </div>

                <ul>
                    {filteredTasks.map((task) => (
                        <li key={task.id}>
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => this.toggleTaskCompletion(task.id)}
                            />
                            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.text}
              </span>
                            <button onClick={() => this.deleteTask(task.id)}>Видалити</button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default TodoApp;
