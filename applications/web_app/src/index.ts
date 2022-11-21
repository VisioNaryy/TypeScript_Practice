import { Collection } from './base/Collection';
import { IUserProps } from './models/user/IUserProps';
import { User } from './models/user/User';
import { UserList } from './views/UserList';

const users = new Collection(
  'http://localhost:3000/users',
  (json: IUserProps) => {
    return User.BuildUser(json);
  }
);

users.on('change', () => {
  const root = document.getElementById('root');

  if (root) {
    new UserList(root, users).render();
  }
});

users.fetch();
