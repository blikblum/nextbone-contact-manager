import { Component, html, customElement, classMap } from "component";
import {event, state} from 'nextbone'
import {formBind} from 'nextbone/formbind'
import { Contact } from '../../common/entities'

@customElement('contact-edit-view')
@formBind
class ContactEditView extends Component {
  @state({copy: true})
  model = new Contact()
  
  render () {
    const {firstName, lastName, email, phoneNumber, fullName} = this.model.attributes
    const isNew = this.model.isNew()
    return html`
        <div class="card">
          <div class="card-header text-white bg-primary">
              <h4 class="mb-0">${ isNew ? (fullName.trim() || 'New Contact') : fullName } Profile</h4>
          </div>
          <div class="card-body">
              <form role="form">
                  <div class="form-group">
                      <label for="contact-first-name">First Name</label>
                      <input id="contact-first-name" name="firstName" placeholder="first name" class="form-control" .value=${firstName}>                    
                  </div>

                  <div class="form-group">
                      <label for="contact-last-name">Last Name</label>
                      <input id="contact-last-name" name="lastName" placeholder="last name" class="form-control" .value=${lastName}>
                  </div>

                  <div class="form-group">
                      <label for="contact-email">Email</label>                  
                      <input id="contact-email" name="email" placeholder="email" class="form-control" .value=${email}>
                  </div>

                  <div class="form-group">
                    <label for="contact-phone-number">Phone Number</label>                    
                    <input id="contact-phone-number" name="phoneNumber" placeholder="phone number" class="form-control" .value=${phoneNumber}>
                  </div>
              </form>
          </div>
      </div>


      <div class="d-flex justify-content-between mt-4">
        <button id="delete-contact" action="delete" class="btn btn-danger pr-5 pl-5 ${classMap({invisible: this.model.isNew()})}">Delete</button>
        <button id="save-contact" action="save" class="btn btn-primary pr-5 pl-5">Save</button>
      </div>
    `
  };

  @event('click', 'button[action]')
  actionClick(e) {
    e.preventDefault()
    const action = e.selectorTarget.getAttribute('action')
    this.dispatchEvent(new CustomEvent(`${action}:model`, {detail: {model: this.model}}))
  }
};

export default ContactEditView