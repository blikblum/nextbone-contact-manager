import {Route, elEvent, elProperty} from "nextbone-routing";
import _ from 'underscore';
import ContactEditView from './contact-edit-view';

export default class extends Route {
  static component = ContactEditView;

  @elProperty('model')
  contact

  activate(transition) {
    let contacts = this.context.contacts;
    this.contact = contacts.find(model => model.id == transition.params.contactid);
    if (!this.contact) {
      throw new Error('Unable to resolve contact with id', transition.params.contactid);
    }
  }

  deactivate(transition) {
    if (!this.el.model.id || !_.isEqual(this.contact.attributes, this.el.model.attributes)) {
      return this.context.modals.confirm({
        title: 'Contact has unsaved changes',
        text: 'Do you want to exit anyway?'
      }).then((result) => {
        if (!result) transition.cancel()
      })
    }
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
