import React from 'react';

const HabitList = ({ habits, deleteHabit, updateHabit }) => {
  const handleEdit = (habit) => {
    const newText = window.prompt('Update habit:', habit.text);
    if (newText) {
      updateHabit(habit.id, newText);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">My Habits</h2>
      <ul>
        {habits.map((habit) => (
          <li
            key={habit.id}
            className="bg-gray-100 p-4 rounded-lg mb-2 flex justify-between items-center"
          >
            <span>{habit.text}</span>
            <div>
              <button
                onClick={() => handleEdit(habit)}
                className="bg-yellow-500 text-white px-2 py-1 rounded ml-2"
              >
                Edit
              </button>
              <button
                onClick={() => deleteHabit(habit.id)}
                className="bg-red-500 text-white px-2 py-1 rounded ml-2"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HabitList;
