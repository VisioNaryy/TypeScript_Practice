import { IUserProps } from '../models/user/IUserProps';
import { User } from '../models/user/User';
import { UserForm } from './UserForm';
import { UserShow } from './UserShow';
import { View } from './View';

export class UserEdit extends View<User, IUserProps> {
  regionsMap(): { [key: string]: string } {
    return {
      userShow: '.user-show',
      userForm: '.user-form',
    };
  }

  onRender(): void {
    //do nesting
    const userShow = new UserShow(this.regions.userShow, this.model);
    userShow.render();

    const userForm = new UserForm(this.regions.userForm, this.model);
    userForm.render();
  }

  template(): string {
    return `
          <div>
            <div class ="user-show"></div>
            <div class ="user-form"></div>
          </div>
          `;
  }
}
