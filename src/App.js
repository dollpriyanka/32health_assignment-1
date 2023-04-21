import React from 'react';
import { useState, useEffect } from "react";
import { Button } from 'antd';
import 'antd/dist/reset.css';
import './App.css';
import Usercard from "./components/userCard.js";
import UserList from "./components/userList.js";

async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
}
export default function App() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setLoading(true);
    getUsers()
      .then((res) => {
        console.log(res);
        setUsers(res);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div>Loading....</div>
      ) : users.length > 0 ? (
        <UserList users={users} />
      ) : (
        <div>NO users</div>
      )}
    </div>
  );
}
