import request from 'superagent';

class ProfileActions {

  constructor() {
    this.generateActions(
      'remove', 'fetchSuccess', 'addSuccess',
      'fetchBySeedSuccess'
    );
  }


  fetch() {
    const promise = (resolve) => {
      this.alt.getActions('requests').start();
      request
        .get('https://api-test.booodl.com/v1/retail/stores/54694f37b4f086180039a498')
        .end((err, res) => {
          this.actions.fetchSuccess(JSON.parse(res.text).data);
          this.alt.getActions('requests').success();
          return resolve();
        });
    };
    this.alt.resolve(promise);
  }

}

export default ProfileActions;
