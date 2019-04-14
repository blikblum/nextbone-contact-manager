import { Component, html, customElement } from "component";
import {routerLinks} from 'nextbone-routing'
import {state} from 'nextbone'

@customElement('contacts-view')
@routerLinks
class ContactsView extends Component {
  static outlet = '.contact-outlet'

  @state
  contacts

  render() {
    return html`
      <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top" role="navigation">
          <a class="navbar-brand" href="#">
              Contacts
          </a>          
      </nav>

      <div class="container">
          <div class="row mb-2">
            <div class="col-md-4">
              <button class="btn btn-secondary btn-block">Add Contact</button>
            </div>            
          </div>
          <div class="row">
              <div class="col-md-4">              
                  <div class="contact-list">
                    <ul class="list-group" routerlinks>
                    ${
                      this.contacts.map(contact => html`                      
                      <a class="list-group-item list-group-item-action" route="contacts.edit" param-contactid=${contact.get('id')}>
                        <h4>${contact.get('fullName')}</h4>
                        <p class="mb-0">${contact.get('email')}</p>
                      </a>                      
                      `)                      
                    }
                    </ul>
                  </div>
              </div>
              <div class="col-md-8 contact-outlet"></div>
          </div>
      </div>
    `
  }
};

export default ContactsView
