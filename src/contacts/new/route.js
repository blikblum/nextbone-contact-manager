import {Route, elEvent} from "nextbone-routing";
import _ from 'underscore';
import ContactEditView from '../edit/view';

export default class extends Route {
  static component = ContactEditView;

  @elEvent('save:model')
  onSaveModel(e) {
    const model = e.detail.model
    const attributes = _.clone(model.attributes);
    const contact = this.context.contacts.add(attributes)
    contact.save().then(() => {
      this.$router.transitionTo('contacts')
    })
  }
};
