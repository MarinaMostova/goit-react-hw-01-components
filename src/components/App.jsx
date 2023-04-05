import React from 'react';
import PageTitle from 'components/PageTitle/PageTitle';
import Profile from 'components/Profile/Profile';

import user from 'utils/user.json';
import data from 'utils/data.json';
import Statistics from './Statistics/Statistics';

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
    </div>
  );
};
