import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white space-y-2">
      <h2 className="text-xl font-semibold">{user.name}</h2>
      <p className="text-gray-600">@{user.username}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: <a href={`http://${user.website}`} target="_blank" rel="noreferrer">{user.website}</a></p>
      <p>Company: {user.company.name}</p>
      <p>Address: {user.address.city}, {user.address.street}</p>
    </div>
  );
};

export default UserCard;
