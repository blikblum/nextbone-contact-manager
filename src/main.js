import './setup';
import { Router } from "nextbone-routing";
import ApplicationRoute from './application/route';
import ContactsRoute from './contacts/route';
import ContactDetailRoute from './contactdetail/route';
import ContactNoSelectionView from './noselection/view';

const router = new Router({outlet: '#app', log: true, logError: true});

router.map(function (route) {
  route('application', {path: '/', class: ApplicationRoute}, function () {
    route('contacts', {class: ContactsRoute, abstract: true}, function () {
      route('contacts.default', {path: '', component: ContactNoSelectionView,
        properties: {message: 'Please Select a Contact.'}})
      route('contactdetail', {path: ':contactid', class: ContactDetailRoute})
    })
  })
});

router.on('before:transition', function (transition) {
  if (transition.path === '/') {
    transition.redirectTo('contacts.default')
  }
});

router.listen();