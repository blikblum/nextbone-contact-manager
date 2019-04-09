import {Route, elEvent} from "nextbone-routing";
import _ from 'underscore';
import ContactDetailView from './view';

export default class extends Route {
  static component = ContactDetailView;

  activate(transition) {
    let contacts = this.context.contacts;
    this.contact = contacts.findWhere({id: +transition.params.contactid});
    if (!this.contact) {
      throw new Error('Unable to resolve contact with id', transition.params.contactid);
    }
  }

  prepareEl(el) {
    super.prepareEl(el)
    el.model = this.contact.clone()
  }


  @elEvent('save:model')
  onSaveModel(e) {
    const model = e.detail.model
    const attributes = _.clone(model.attributes);
    this.contact.set(attributes, {reset:true});
  }
};
