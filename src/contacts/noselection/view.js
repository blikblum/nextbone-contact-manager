import { Component, html, customElement } from "component";

@customElement('contact-noselection-view')
class ContactNoSelectionView extends Component {
  render() {
    return html`
    <div class="no-selection text-center">
      <h2>${this.message}</h2>
    </div>
    `
  }
};

export default ContactNoSelectionView