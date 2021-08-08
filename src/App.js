// import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';

import user from './data/user.json';
import statisticalData from './data/statistical-data.json';
import friends from './data/friends.json';

function App() {
  return (
    <div className="App">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <div>
        <Statistics title="Upload stats" stats={statisticalData} />
      </div>
      <div>
        <Statistics stats={statisticalData} />
      </div>
      <FriendList friends={friends} />
    </div>
  );
}

export default App;
