import React from 'react';
import { UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({ id, name, username, email, address, phone, website, company }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
      {/* add more fields */}
    </div>
  );
};

export default UserCard;
