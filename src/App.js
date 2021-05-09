
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { useEffect, useState } from 'react';

function App() {
  const [likeColor, setLikeColor] = useState('');
  const [users, setUser] = useState([]);
  const [singleUser, setSingleUser] = useState({});
  const [randomUser, setRandomUser] = useState({});
  useState(() => {
    // Users
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json ())
    .then(data => {
      // console.log(data);
      setUser(data)
    })

    // Single User
    fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(data => {
      // console.log(data);
      setSingleUser(data)
    })

    //Random Users
    fetch('https://randomuser.me/api/')
    .then(response => response.json ())
    .then(data => {
      // console.log(data);
      setRandomUser(data.results[0])
    })
  },[])

 
  const handleLike = () => {
    const color = likeColor ? '' : 'primary';
    setLikeColor(color);
    // setLikeColor(likeColor ? '' : 'primary');
  }
  return (
    <div className="App">
        <AccessAlarmIcon></AccessAlarmIcon>
        <ThumbUpAltIcon style={{color: 'blue'}}></ThumbUpAltIcon>
        <ThumbUpAltIcon color="primary"></ThumbUpAltIcon>
        <ThumbUpAltIcon onClick={handleLike} color={likeColor}></ThumbUpAltIcon>
        <ThumbUpAltIcon onClick={() => setLikeColor(likeColor ? '' : 'primary')} color={likeColor}></ThumbUpAltIcon>
        <h1>Name: {singleUser.name}</h1>
        <h2>Random User Gender: {randomUser.gender}</h2>

        {/* ************************************************************************************************
        ********************************important */}
        <h2>Random Name 1: {randomUser.name && randomUser.name.first}</h2>
        <h2>Random Name 2: {randomUser.name?.first}</h2>

        
        {
          users.map(user => <li>{user.name}</li>)
        }
        
    </div>
  );
}

export default App;
