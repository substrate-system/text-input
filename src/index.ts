import Debug from '@bicycle-codes/debug'
const debug = Debug()

// for docuement.querySelector
declare global {
    interface HTMLElementTagNameMap {
        'text-input': TextInput;
    }
}

export class TextInput extends HTMLElement {
    constructor () {
        super()
        const name = this.getAttribute('name')!
        const type = this.getAttribute('type')!
        const displayName = this.getAttribute('display-name')!

        debug(
            'attributes',
            Array.from(this.attributes)
                .map(attr => attr.name + '=' + attr.value)
        )

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
