import {Route} from "nextbone-routing";
import {Contacts} from '../entities';
import ContactsView from './view';

export default class extends Route {  
  static component = ContactsView;

  static providedContexts = {
    contacts: {property: 'contacts'}
  }

  activate() {
    const contactsPromise = this.context.api.getContactList();
    return contactsPromise.then(contactsData => {
      this.contacts = new Contacts(contactsData)
    });
  }

  prepareEl(el) {
    super.prepareEl(el)
    el.contacts = this.contacts
  }  
};
