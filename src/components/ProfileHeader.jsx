import React from 'react'
import { useSelector } from 'react-redux';

function ProfileHeader() {

  const email = useSelector((state) => state.email);

    return (
        <div className="bg-blue-500 text-white p-4">
          <div className="flex items-center">
            <div className="flex-grow">
              <h1 className="text-2xl font-bold">Pourush Kashyap</h1>
              <p>7986355170 · {email}</p>
            </div>
            <button className="bg-white text-blue-500 py-1 px-4 rounded">Edit Profile</button>
          </div>
        </div>
      );
}

export default ProfileHeader