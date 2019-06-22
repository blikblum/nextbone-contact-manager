import { Model, Collection } from "nextbone";
import { computed } from 'nextbone/computed'
import { localStorage } from 'nextbone/localStorage'
import { getContactsSample } from "./sample-data";


export 
@computed({
  fullName: ['firstName', 'lastName', ({firstName, lastName}) => `${firstName} ${lastName}`]
})
class Contact extends Model {
  static defaults = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
  };
}

export 
@localStorage('Contacts', {initialData: getContactsSample})
class Contacts extends Collection {
  static model = Contact;
}