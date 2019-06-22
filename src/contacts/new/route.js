import {Route, elEvent} from 'nextbone-routing';
import _ from 'underscore';
import ContactEditView from '../edit/contact-edit-view';

export default class extends Route {
  static component = ContactEditView;

  deactivate(transition) {
    if (!this.contactSaved) {
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
    const contact = this.context.contacts.add(attributes)    
    contact.save().then(() => {
      this.contactSaved = true
      this.$router.transitionTo('contacts')
    })
  }
};
