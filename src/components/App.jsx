import { Profile } from './Profile/Profile.jsx';
import { Statistics } from './Statistics/Statistics.jsx';
import { FriendList } from './FriendList/FriendList.jsx';
import { TransactionHistory } from './TransactionHistory/TransactionHistory.jsx';
import user from '../data/user.json';
import statistics from '../data/statistics.json';
import friends from '../data/friends.json';
import transaction from '../data/transactions.json';

const { username, tag, location, avatar, stats } = user;
const { followers, views, likes } = stats;

export const App = () => {
  return (
    <div
      style={{
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        gap: '10rem',
        overflow: 'scroll',
        paddingTop: 30,
      }}
    >
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={{ followers: followers, views: views, likes: likes }}
      />
      <Statistics title="STATISTICS" stats={statistics} />
      <FriendList friends={friends} />
      <TransactionHistory items={transaction} />
    </div>
  );
};
