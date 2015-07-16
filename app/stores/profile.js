import {findIndex, isEmpty} from 'lodash';

class ProfileStore {

  constructor() {
    this.bindActions(this.alt.getActions('profile'));
    this.store = [];
  }

  static getBySeed() {
    const store = this.getState().store;
    return {store: store};
  }


  onFetchSuccess(store) {
    if (isEmpty(this.store)) {
      return this.setState({store});
    }

    return this.setState({store: store});
  }

  onFetchBySeedSuccess(user) {
    const users = this.users.slice();
    const index = findIndex(users, {seed: user.seed});
    if (index > -1) {
      users[index] = user;
    } else {
      users.push(user);
    }

    return this.setState({users});
  }

}

export default ProfileStore;
