import {Route, elProperty} from "nextbone-routing";
import {Contacts} from 'entities';
import ContactsView from './view';

export default class extends Route {  
  static component = ContactsView;

  static providedContexts = {
    contacts: {property: 'contacts'}
  }

  @elProperty
  contacts

  activate() {
    if (!this.contacts) {
      this.contacts = new Contacts()
      return this.contacts.fetch() 
    }
  }
};
