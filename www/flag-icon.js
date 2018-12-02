class FlagIcon extends HTMLElement {

    constructor() {
        super();
        this._countryCode = null;
    }

    static get observedAttributes() {
        return ["country"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        // name is always "country"
        this._countryCode = newValue;
        this._updateRendering();
    }

    connectedCallback() {
        console.info("flag-icon connected");
        this._updateRendering();
    }

    get country() {
        return this._countryCode;
    }

    set country(v) {
        this.setAttribute("country", v);
    }

    _updateRendering() {
        console.info("Rendering flag-icon");
        var p = this.ownerDocument.createElement("p");
        p.innerText = this._countryCode;

        while (this.firstChild) {
            this.removeChild(this.firstChild);
        }
        
        this.appendChild(p);
    }

}

window.customElements.define("flag-icon", FlagIcon);
console.info("flag-icon loaded");