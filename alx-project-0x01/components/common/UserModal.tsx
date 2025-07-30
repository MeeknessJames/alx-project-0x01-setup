import React, { useState } from 'react';
import { UserData, UserModalProps } from '@/interfaces';

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState<UserData>({
    id: Date.now(),
    name: '',
    username: '',
    email: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      geo: {
        lat: '',
        lng: '',
      },
    },
    phone: '',
    website: '',
    company: {
      name: '',
      catchPhrase: '',
      bs: '',
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name.startsWith('address.')) {
      const key = name.split('.')[1];
      setFormData((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          [key]: value,
        },
      }));
    } else if (name.startsWith('geo.')) {
      const key = name.split('.')[1];
      setFormData((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          geo: {
            ...prev.address.geo,
            [key]: value,
          },
        },
      }));
    } else if (name.startsWith('company.')) {
      const key = name.split('.')[1];
      setFormData((prev) => ({
        ...prev,
        company: {
          ...prev.company,
          [key]: value,
        },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = () => {
    onSubmit(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white p-6 rounded-lg w-full max-w-2xl">
        <h2 className="text-xl font-semibold mb-4">Add New User</h2>
        
        <div className="grid grid-cols-2 gap-4">
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="border p-2" />
          <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} className="border p-2" />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="border p-2" />
          <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} className="border p-2" />
          <input type="text" name="website" placeholder="Website" value={formData.website} onChange={handleChange} className="border p-2" />
          
          { }
          <input type="text" name="address.street" placeholder="Street" value={formData.address.street} onChange={handleChange} className="border p-2" />
          <input type="text" name="address.suite" placeholder="Suite" value={formData.address.suite} onChange={handleChange} className="border p-2" />
          <input type="text" name="address.city" placeholder="City" value={formData.address.city} onChange={handleChange} className="border p-2" />
          <input type="text" name="address.zipcode" placeholder="Zipcode" value={formData.address.zipcode} onChange={handleChange} className="border p-2" />
          <input type="text" name="geo.lat" placeholder="Latitude" value={formData.address.geo.lat} onChange={handleChange} className="border p-2" />
          <input type="text" name="geo.lng" placeholder="Longitude" value={formData.address.geo.lng} onChange={handleChange} className="border p-2" />

          { }
          <input type="text" name="company.name" placeholder="Company Name" value={formData.company.name} onChange={handleChange} className="border p-2" />
          <input type="text" name="company.catchPhrase" placeholder="Catch Phrase" value={formData.company.catchPhrase} onChange={handleChange} className="border p-2" />
          <input type="text" name="company.bs" placeholder="BS" value={formData.company.bs} onChange={handleChange} className="border p-2" />
        </div>

        <div className="flex justify-end mt-6 space-x-4">
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400">Cancel</button>
          <button onClick={handleSubmit} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Add User</button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
