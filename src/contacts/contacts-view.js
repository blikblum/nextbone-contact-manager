import { Component, html, customElement } from "component";
import { withRouterLinks } from 'nextbone-routing'
import { state } from 'nextbone'

@customElement('contacts-view')
@withRouterLinks
class ContactsView extends Component {
  static outlet = '.contact-outlet'

  @state
  contacts

  render() {
    return html`
      <div class="container">
          <div class="row mb-2">
            <div class="col-md-4" routerlinks>
              <button class="btn btn-secondary btn-block" route="contacts.new">Add Contact</button>
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
