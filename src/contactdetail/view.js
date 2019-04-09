import { Component, html, customElement } from "component";
import {event, state} from 'nextbone'
import {formBind} from 'nextbone/formbind'

@customElement('contact-edit-view')
@formBind
class ContactDetailView extends Component {
  @state
  model
  
  render () {
    const {firstName, lastName, email, phoneNumber} = this.model.attributes
    return html`
        <div class="panel panel-primary">
        <div class="panel-heading">
            <h3 class="panel-title">Profile</h3>
        </div>
        <div class="panel-body">
            <form role="form" class="form-horizontal">
                <div class="form-group">
                    <label class="col-sm-2 control-label">First Name</label>
                    <div class="col-sm-10">
                        <input name="firstName" type="text" placeholder="first name" class="form-control" .value=${firstName}>
                    </div>
                </div>

                <div class="form-group">
                    <label class="col-sm-2 control-label">Last Name</label>
                    <div class="col-sm-10">
                        <input name="lastName" type="text" placeholder="last name" class="form-control" .value=${lastName}>
                    </div>
                </div>

                <div class="form-group">
                    <label class="col-sm-2 control-label">Email</label>
                    <div class="col-sm-10">
                        <input name="email" type="text" placeholder="email" class="form-control" .value=${email}>
                    </div>
                </div>

                <div class="form-group">
                    <label class="col-sm-2 control-label">Phone Number</label>
                    <div class="col-sm-10">
                        <input name="phoneNumber" type="text" placeholder="phone number" class="form-control" .value=${phoneNumber}>
                    </div>
                </div>
            </form>
        </div>
      </div>

      <div class="button-bar">
        <button id="save-contact" class="btn btn-success">Save</button>
      </div>
    `
  };

  @event('click', '#save-contact')
  saveContactClick(e) {
    e.preventDefault()
    this.dispatchEvent(new CustomEvent('save:model', {detail: {model: this.model}}))
  }
};

export default ContactDetailView