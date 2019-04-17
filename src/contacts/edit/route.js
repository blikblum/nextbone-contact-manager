import {Route, elEvent} from "nextbone-routing";
import _ from 'underscore';
import ContactEditView from './view';

export default class extends Route {
  static component = ContactEditView;

  activate(transition) {
    let contacts = this.context.contacts;
    this.contact = contacts.find(model => model.id == transition.params.contactid);
    if (!this.contact) {
      throw new Error('Unable to resolve contact with id', transition.params.contactid);
    }
  }

  prepareEl(el) {
    super.prepareEl(el)
    el.model = this.contact
  }


  @elEvent('save:model')
  onSaveModel(e) {
    const model = e.detail.model
    const attributes = _.clone(model.attributes);
    this.contact.save(attributes);    
  }

  @elEvent('delete:model')
  onDeleteModel() {  
    this.contact.destroy().then(()=> this.$router.transitionTo('contacts'));    
  }
};
