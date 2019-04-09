import {Route} from "nextbone-routing";
import {WebAPI} from '../web-api';

export default class extends Route {
  static providedContexts = {
    api: {property: 'api'}
  }

  activate() {
    this.api = this.api || new WebAPI();
  }  
};
