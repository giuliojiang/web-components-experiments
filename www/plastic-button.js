class PlasticButton extends HTMLButtonElement {

    constructor() {
        super();

        this.addEventListener("click", () => {
            console.info("plastic-button clicked");
            var originalBackgroundColor = this.style.backgroundColor;
            this.style.backgroundColor = "yellow";
            setTimeout(() => {
                this.style.backgroundColor = originalBackgroundColor;
            }, 2000);
        });
    }

}

window.customElements.define("plastic-button", PlasticButton, {extends: "button"});
console.info("plastic-button loaded");