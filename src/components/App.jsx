import { Profile } from './profile/Profile';
import { Stats } from './stats/Stats.jsx';
import { Statistics } from './statistics/Statistics.jsx';
import { FriendList } from './friendList/FriendList.jsx';
import { TransactionHistory } from './transactionHistory/TransactionHistory.jsx';
import data from '../json/data.json';
import user from '../json/user.json';
import friends from '../json/friends.json';
import transactions from '../json/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <div
        className="profile"
        // style={{
        //   width: '500px',
        //   paddingBottom: '20px',
        //   backgroundColor: '#a9a9a9',
        // }}
      >
        <Profile
          key={user.tag}
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
        />
        <Stats
          followers={user.stats.followers}
          views={user.stats.views}
          likes={user.stats.likes}
        />
      </div>
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
};
