import logo from './logo.svg';
import './app.css';
import { Users } from './users';
import { useState } from 'react'
import Table from "./Table"


function App() {
  const [query, setQuery] = useState("");
  const keys = ["first_name", "last_name", "email"];

  const search = (data) => {
    // return data.filter(item => item.first_name.toLowerCase().includes(query) || item.last_name.toLowerCase().includes(query) || item.email.toLowerCase().includes(query))

    // The some() method returns true (and stops) if the function returns true for one of the array elements
    return data.filter(item => keys.some(key => item[key].toLowerCase().includes(query)))
  }

  return (
    <div className="App">
      <input type="text" placeholder="Serach...." className="search" onChange={e => setQuery(e.target.value)} />
      {/* <ul className="list">
        {Users.filter(user => user.first_name.toLowerCase().includes(query)).map((user) => {
          return (<li key={user.id} className="listItem">{user.first_name}</li>)
        })}
      </ul> */}

      <Table data={search(Users)} />
    </div>
  );
}

export default App;
