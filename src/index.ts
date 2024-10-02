// for docuement.querySelector
declare global {
    interface HTMLElementTagNameMap {
        'text-input': TextInput;
    }
}

export class TextInput extends HTMLElement {
    static tag:string = 'text-input'
    static observedAttributes:string[] = ['disabled']

    /**
     * Only watching for 'disabled'.
     */
    attributeChangedCallback (_name, _oldValue, newValue) {
        const remove = (
            newValue === 'false' ||
            newValue === 'null'
        )

        if (remove) {
            this.querySelector('input')?.removeAttribute('disabled')
        } else {
            this.querySelector('input')?.setAttribute('disabled', '')
        }
    }

    connectedCallback () {
        const name = this.getAttribute('name')!
        if (this.querySelector('input#' + name)) return

        const type = this.getAttribute('type')!
        const displayName = this.getAttribute('display-name')!

        const attrs = Array.from(this.attributes)
            .filter(attr => !attr.name.includes('display-name'))
            .map(attr => attr.name + (attr.value === '' ? '' : '=' +
                `"${attr.value}"`))
            .join(' ')

        const classes = (this.getAttribute('class') ?? '').split(' ')
            .concat([
                'input',
                name
            ])
            .filter(Boolean)
            .join(' ')

        this.innerHTML = `<div class="${classes}">
            <input
                ${attrs}
                id=${name}
                name=${name}
                type=${type || 'text'}
                placeholder=" "
            />

            <label for=${name}>${displayName}</label>
        </div>`
    }
}

customElements.define('text-input', TextInput)
