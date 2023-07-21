import Image from "next/image";
import React from "react";
import { MdArrowBackIosNew } from "react-icons/md";

const Profile = () => {
  const userProfile = {
    name: "Sharon Ibanga",
    email: "ibsharon19@gmail.com",
    age: 12,
    address: "10 Montgomery rd, Lagos, Nigeria",
    profilePicture:
      "https://media.istockphoto.com/id/1421038415/photo/woman-stretching-in-the-morning.webp?b=1&s=170667a&w=0&k=20&c=GItKf0xfPlSllUfaZo7n9dGe-5SXfMea7tDJeMGlYGM=",
  };

  return (
    <div className="p-5">
      <MdArrowBackIosNew />
      <h1 className="font-bold text-3xl mb-3">Profile</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-1">
          <Image
            src={userProfile.profilePicture}
            width={100}
            height={100}
            alt="Profile Picture"
            className="w-32 h-32 rounded-full object-cover"
          />
        </div>
        <div className="col-span-1">
          <p>
            <strong>Name:</strong> {userProfile.name}
          </p>
          <p>
            <strong>Email:</strong> {userProfile.email}
          </p>
          <p>
            <strong>Age:</strong> {userProfile.age}
          </p>
          <p>
            <strong>Address:</strong> {userProfile.address}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
