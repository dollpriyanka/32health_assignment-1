import React from 'react';
import { Button } from 'antd';
import 'antd/dist/reset.css';
import './App.css';
import Usercard from "./components/userCard.js";

const App = () => (
  <div className="App">

    <Usercard
      username="Leanne Graham"
      email="Sincere@april.biz"
      phone="1-770-736-8031 x56442"
      company="Romaguera-Crona"
      website="hildegard.org"
      address=" Kulas Light, Apt. 556, Gwenborough, 92998-3874"
      avatar="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
  </div>
);

export default App;