import React, { useState } from "react";

export default function Todo({ item, onDelete, onEdit }) {
  const [editTitle, setEditTitle] = useState(item.title);
  const [isEditing, setIsEditing] = useState(false);

  // Handle the click on the Delete button
  const handleDeleteClick = () => {
    onDelete(item.id);
  };

  // Toggle editing mode
  const handleEditClick = () => {
    setIsEditing(true);
  };

  // Handle the save action
  const handleSave = () => {
    onEdit(item.id, editTitle); // Pass the new title back up to the parent component
    setIsEditing(false); // Exit editing mode
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-4 hover:bg-blue-100 transition duration-150 ease-in-out cursor-pointer flex justify-between items-center">
      {isEditing ? (
        <input
          type="text"
          className="form-input px-4 py-2 rounded-md flex-grow"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
        />
      ) : (
        <p className="text-lg flex-grow break-words mr-4">{item.title}</p>
      )}
      <div className="flex gap-2">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-lg shadow px-4 py-2 text-sm"
          >
            Save
          </button>
        ) : (
          <>
            <button
              onClick={handleEditClick}
              className="text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-lg shadow px-4 py-2 text-sm"
            >
              Edit
            </button>
            <button
              onClick={handleDeleteClick}
              className="text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 rounded-lg shadow px-4 py-2 text-sm"
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
};

