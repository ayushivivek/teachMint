import React from "react";
import UserCard from "./UserCard";
import "./App.css";

const Landingpage = () => {
  const users = [
    {
      id: 1,
      name: "Vivek Jha",
      username: "Vivek@123",
      email: "Vivek.jhae@example.com",
      phone: "170-332-3334",
      address: "23/9 ajay bawan",
      catchPhrase: "Just do it!",
      posts: [
        { title: "Post 1", content: "Content for post 1" },
        { title: "Post 2", content: "Content for post 2" },
        { title: "Post 3", content: "Content for post 3" },
        { title: "Post 4", content: "Content for post 4" },
      ],
    },
    {
      id: 2,
      name: "Rohit Sharma",
      username: "johndoe",
      email: "Rohit.sharma@example.com",
      phone: "123-456-7890",
      address: "123 Main St",
      catchPhrase: "lets do it!",
      posts: [
        { title: "Post 1", content: "Content for post 1" },
        { title: "Post 2", content: "Content for post 2" },
        { title: "Post 3", content: "Content for post 3" },
      ],
    },
  ];

  return (
    <div className="App">
      <UserCard user={users} />
    </div>
  );
};

export default Landingpage;
