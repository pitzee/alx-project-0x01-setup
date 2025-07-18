import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  name,
  email,
  phone,
  website,
  address,
  company,
}) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
      <h2 className="text-xl font-bold mb-2 text-blue-700">{name}</h2>
      <p className="text-sm text-gray-600">@{name}</p>
      <p className="text-gray-800 mt-2">{email}</p>
      <p className="text-gray-600">{phone}</p>
      <p className="text-gray-600">{website}</p>

      <div className="mt-4">
        <h3 className="font-semibold text-gray-700">Address</h3>
        <p className="text-sm text-gray-500">
          {address.street}, {address.suite}, {address.city}, {address.zipcode}
        </p>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold text-gray-700">Company</h3>
        <p className="text-sm text-gray-500">{company.name}</p>
        <p className="text-xs italic text-gray-400">"{company.catchPhrase}"</p>
      </div>
    </div>
  );
};

export default UserCard;
