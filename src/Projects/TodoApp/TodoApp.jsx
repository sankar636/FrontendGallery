import React, { useState } from 'react';

function TodoApp() {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState("");

    const addTask = () => {
        if (input.trim()) {
            setTasks([...tasks, input]);
            setInput("");
        }
    };

    const removeTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
                <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">📝 To-Do List</h1>

                <div className="flex gap-2 mb-4">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Add a task..."
                        className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                    <button
                        onClick={addTask}
                        className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
                    >
                        Add
                    </button>
                </div>

                <ul className="space-y-3 max-h-60 overflow-y-auto">
                    {tasks.length === 0 ? (
                        <p className="text-gray-400 text-center">No tasks yet</p>
                    ) : (
                        tasks.map((task, index) => (
                            <li
                                key={index}
                                className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-lg shadow-sm"
                            >
                                <span className="text-gray-800">{task}</span>
                                <button
                                    onClick={() => removeTask(index)}
                                    className="text-red-500 hover:text-red-700 font-semibold"
                                >
                                    Remove
                                </button>
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </div>
    );
}

export default TodoApp;
