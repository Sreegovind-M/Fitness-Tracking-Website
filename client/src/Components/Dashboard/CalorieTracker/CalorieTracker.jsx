import React, { useState } from 'react';
import './CalorieTracker.css';

const CalorieTracker = () => {
  const [foodEntry, setFoodEntry] = useState({ food: '', quantity: '', calories: '', mealType: '' });
  const [meals, setMeals] = useState({
    breakfast: [],
    morningSnack: [],
    lunch: [],
    eveningSnack: [],
    dinner: []
  });
  const [isEditing, setIsEditing] = useState({ status: false, mealType: '', itemId: null });

  const handleInputChange = (e) => {
    setFoodEntry({ ...foodEntry, [e.target.name]: e.target.value });
  };

  const handleAddFood = () => {
    const { food, quantity, calories, mealType } = foodEntry;
    if (food && quantity && calories && mealType) {
      if (isEditing.status) {
        // Edit the existing entry
        setMeals({
          ...meals,
          [isEditing.mealType]: meals[isEditing.mealType].map((item) =>
            item.id === isEditing.itemId ? { ...foodEntry, id: item.id } : item
          )
        });
        setIsEditing({ status: false, mealType: '', itemId: null });
      } else {
        // Add a new entry
        setMeals({
          ...meals,
          [mealType]: [...meals[mealType], { ...foodEntry, id: Date.now() }]
        });
      }
      // Reset input fields
      setFoodEntry({ food: '', quantity: '', calories: '', mealType: '' });
    } else {
      alert('Please fill in all fields and select a meal type.');
    }
  };

  const handleEditFood = (mealType, item) => {
    setFoodEntry({ food: item.food, quantity: item.quantity, calories: item.calories, mealType });
    setIsEditing({ status: true, mealType, itemId: item.id });
  };

  const handleRemoveFood = (mealType, id) => {
    setMeals({
      ...meals,
      [mealType]: meals[mealType].filter((item) => item.id !== id)
    });
  };

  return (
    <div className="calorie-tracker-container">
      <h1>Calorie Tracker</h1>
      <div className="calorie-tracker-input-section">
        <input
          type="text"
          name="food"
          placeholder="Food Item"
          value={foodEntry.food}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="quantity"
          placeholder="Quantity"
          value={foodEntry.quantity}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="calories"
          placeholder="Calories"
          value={foodEntry.calories}
          onChange={handleInputChange}
        />
        <select
          name="mealType"
          value={foodEntry.mealType}
          onChange={handleInputChange}
        >
          <option value="">Select Meal</option>
          <option value="breakfast">Breakfast</option>
          <option value="morningSnack">Morning Snack</option>
          <option value="lunch">Lunch</option>
          <option value="eveningSnack">Evening Snack</option>
          <option value="dinner">Dinner</option>
        </select>
        <button onClick={handleAddFood}>
          {isEditing.status ? 'Update' : 'Add'}
        </button>
      </div>

      <div className="calorie-tracker-entries-section">
        {Object.keys(meals).map((mealType) => (
          <div key={mealType} className="meal-section">
            <h2>{mealType.charAt(0).toUpperCase() + mealType.slice(1)}</h2>
            <ul>
              {meals[mealType].map((item) => (
                <li key={item.id}>
                  {item.food} - {item.quantity} - {item.calories} calories
                  <button
                    onClick={() => handleEditFood(mealType, item)}
                    className="edit-button"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleRemoveFood(mealType, item.id)}
                    className="remove-button"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalorieTracker;
