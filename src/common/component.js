import { LitElement, html, customElement, property } from 'lit-element'
import { classMap } from 'lit-html/directives/class-map'

class Component extends LitElement {
  createRenderRoot () {
    return this
  }
}

export { Component, customElement, html, property, classMap }
