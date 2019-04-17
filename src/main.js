import './setup';
import { Router } from "nextbone-routing";
import ApplicationRoute from './application/route';
import ContactsRoute from './contacts/route';
import ContactEditRoute from './contacts/edit/route';
import ContactNewRoute from './contacts/new/route';
import ContactNoSelectionView from './contacts/noselection/view';

const router = new Router({outlet: '#app', log: true, logError: true});

router.map(function (route) {
  route('application', {path: '/', class: ApplicationRoute}, function () {
    route('contacts', {class: ContactsRoute, abstract: true}, function () {
      route('contacts.noselection', {path: '', component: ContactNoSelectionView,
        properties: {message: 'Please Select a Contact.'}})
      route('contacts.new', {class: ContactNewRoute})  
      route('contacts.edit', {path: ':contactid', class: ContactEditRoute})      
    })
  })
});

router.on('before:transition', function (transition) {
  if (transition.path === '/') {
    transition.redirectTo('contacts')
  }
});

router.listen();