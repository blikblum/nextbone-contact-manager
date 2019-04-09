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
      <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
          <div class="navbar-header">
              <a class="navbar-brand" href="#">
                  Contacts
              </a>
          </div>
      </nav>

      <div class="container">
          <div class="row">
              <div class="col-md-4">
                  <div class="contact-list">
                    <ul class="list-group" routerlinks>
                    ${
                      this.contacts.map(contact => html`
                      <li class="list-group-item" route="contactdetail" param-contactid=${contact.get('id')}>
                      <a>
                        <h4 class="list-group-item-heading">${contact.get('fullName')}</h4>
                        <p class="list-group-item-text">${contact.get('email')}</p>
                      </a>
                      </li>                        
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
