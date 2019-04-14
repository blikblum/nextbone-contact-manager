import { Component, html, customElement } from "component";
import {event, state} from 'nextbone'
import {formBind} from 'nextbone/formbind'

@customElement('contact-edit-view')
@formBind
class ContactEditView extends Component {
  @state
  model
  
  render () {
    const {firstName, lastName, email, phoneNumber} = this.model.attributes
    return html`
        <div class="card">
          <div class="card-header text-white bg-primary">
              <h4 class="mb-0">Profile</h4>
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


      <div class="button-bar">
        <button id="save-contact" class="btn btn-success pr-5 pl-5">Save</button>
      </div>
    `
  };

  @event('click', '#save-contact')
  saveContactClick(e) {
    e.preventDefault()
    this.dispatchEvent(new CustomEvent('save:model', {detail: {model: this.model}}))
  }
};

export default ContactEditView