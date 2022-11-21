import { IUserProps } from './IUserProps';
import { Model } from '../../base/Model';
import { UserAttributes } from './UserAttributes';
import { Eventing } from '../../base/Eventing';
import { ApiSync } from './ApiSync';
import { Collection } from '../../base/Collection';

const rootUrl = 'http://localhost:3000/users';

export class User extends Model<IUserProps> {
  static BuildUser(attrs: IUserProps): User {
    return new User(
      new UserAttributes<IUserProps>(attrs),
      new Eventing(),
      new ApiSync<IUserProps>(rootUrl)
    );
  }

  static BuildUserCollection(): Collection<User, IUserProps> {
    return new Collection<User, IUserProps>(rootUrl, (json: IUserProps) =>
      User.BuildUser(json)
    );
  }

  setRandomAge(): void {
    const age = Math.round(Math.random() * 100);
    this.set({ age });
  }
}
