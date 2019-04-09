import { Model, Collection } from "nextbone";
import { computed } from 'nextbone/computed'


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

export class Contacts extends Collection {
  static model = Contact;
}