import ContactsRoute from './route';
import ContactEditRoute from './edit/route';
import ContactNewRoute from './new/route';
import ContactNoSelectionView from './noselection/contact-noselection-view';

export function registerContactsRoute (route, getContacts, modals) {
  route('contacts', {class: ContactsRoute, getContacts, modals, abstract: true}, function () {
    route('contacts.noselection', {path: '', component: ContactNoSelectionView,
      properties: {message: 'Please Select a Contact.'}})
    route('contacts.new', {class: ContactNewRoute})  
    route('contacts.edit', {path: ':contactid', class: ContactEditRoute})      
  })
}