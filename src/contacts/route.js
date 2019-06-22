import {Route, elProperty} from "nextbone-routing";
import ContactsView from './contacts-view';

export default class extends Route {  
  static component = ContactsView;

  static providedContexts = {
    contacts: {property: 'contacts'},
    modals: {property: 'modals'}
  }

  @elProperty
  contacts

  get modals() {
    return this.$options.modals
  }

  activate() {
    if (!this.contacts) {
      const getContacts = this.$options.getContacts
      if (!getContacts) {
        throw new Error(`Contacts route: getContacts callback not defined`)
      }
      this.contacts = getContacts()
      return this.contacts.fetch() 
    }
  }
};
