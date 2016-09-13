interface ElementDefinitionOptions {
  extends: string;
}

interface CustomElementRegistry {
  define<T extends HTMLElement>(name: string, constructor: new () => T): void;
  define<T extends HTMLElement>(name: string, constructor: new () => T, options: ElementDefinitionOptions): void;
  get<T extends HTMLElement>(name: string): T | void;
  whenDefined(name: string): Promise<void>;
}

declare var customElements: CustomElementRegistry;

interface ICustomElement extends HTMLElement {
  /** Called when attached to document */
  connectedCallback?(): void;

  /** Called when removed from document */
  disconnectedCallback?(): void;

  /** Called when attribute changed */
  attributeChangedCallback?(attrName: string, oldVal: string, newVal: string): void;

  /** Called if the element has been moved into a new document */
  adoptedCallback?(): void;
}
