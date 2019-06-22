# nextbone-contact-manager

A contact manager example built with nextbone, based on an [Aurelia tutorial](https://aurelia.io/docs/tutorials/creating-a-contact-manager)

It requires a modern browser

Check the [live demo](https://blikblum.github.io/nextbone-contact-manager/build/)

## Application build

Clone repository and, in terminal, change current directory to the repository one  

```
npm install

npm run prod

// or

npm run dev
```

## Package usage

In the project where will be used

```
npm install nextbone-contact-manager
```

```js
import { Router } from "nextbone-routing";
import { bindLocalStorage } from 'nextbone/localStorage'
import { Contacts, registerContactsRoute, getContactsSample } from 'nextbone-contact-manager'
import ApplicationRoute from './application/route';

const router = new Router({outlet: '#app', log: true, logError: true});

const getContacts = () => {
  const contacts = new Contacts()
  bindLocalStorage(contacts, 'Contacts', {initialData: getContactsSample})
  return contacts
}

router.map(function (route) {
  route('application', {path: '/', class: ApplicationRoute}, function () {
    registerContactsRoute(route, getContacts)
  })
});
```