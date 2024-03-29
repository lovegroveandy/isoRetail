import debug from 'debug';

class PageTitleStore {

  constructor() {
    this.bindActions(this.alt.getActions('page-title'));

    this.baseTitle = 'Booodl';
    this.delimeter = '|';

    // Defaut title
    this.title = `${this.baseTitle}`;
  }

  onSet(title) {
    debug('dev')(`update page title to '${title}'`);
    return this.setState({title: `${this.baseTitle} ${this.delimeter} ${title}`});
  }

}

export default PageTitleStore;
