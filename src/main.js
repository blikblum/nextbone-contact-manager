import './setup';
import { Router } from "nextbone-routing";
import ApplicationRoute from './application/route';
import { Contacts } from 'entities';
import { registerContactsRoute } from './contacts/register';

const router = new Router({outlet: '#app', log: true, logError: true});

const getContacts = () => {
  return new Contacts()
}

router.map(function (route) {
  route('application', {path: '/', class: ApplicationRoute}, function () {
    registerContactsRoute(route, getContacts)
  })
});

router.on('before:transition', function (transition) {
  if (transition.path === '/') {
    transition.redirectTo('contacts')
  }
});

router.listen();