// components/common/UserModal.tsx

import React, { useState } from "react";
import { UserData, UserModalProps } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState<UserData>({
    id: Date.now(),
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: { lat: "", lng: "" },
    },
    phone: "",
    website: "",
    company: { name: "", catchPhrase: "", bs: "" },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    onSubmit?.(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-2xl">
        <h2 className="text-xl font-bold mb-4 text-center text-blue-700">
          Add New User
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <input
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            name="website"
            placeholder="Website"
            value={formData.website}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            name="company.name"
            placeholder="Company Name"
            value={formData.company.name}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>
        <div className="flex justify-end mt-6">
          <button
            onClick={onClose}
            className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded mr-2"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            Add User
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
