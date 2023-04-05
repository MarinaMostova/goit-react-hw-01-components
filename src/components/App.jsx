import React from 'react';
import PageTitle from 'components/PageTitle/PageTitle';
import Profile from 'components/Profile/Profile';

import Statistics from 'components/Statistics/Statistics';
import FriendList from 'components/FriendList/FriendList';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';

import user from 'assets/user.json';
import data from 'assets/data.json';
import friends from 'assets/friends.json';
import transactions from 'assets/transactions.json';

export const App = () => {
  return (
    <div>
      <PageTitle title="Profile" />
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <PageTitle title="Statistics" />
      <Statistics text="Upload stats" data={data} />

      <PageTitle title="Friend list" />
      <FriendList friends={friends} />

      <PageTitle title="Transaction history" />
      <TransactionHistory items={transactions} />
    </div>
  );
};
