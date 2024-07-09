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

        const classes = (this.getAttribute('class') ?? '').split(' ')
            .concat([
                'input',
                name
            ])
            .filter(Boolean)
            .join(' ')

        this.innerHTML = `<div class="${classes}">
            <input
                id=${name}
                name=${name}
                type=${type || 'text'}
                placeholder=" "
                ${getProps(this)}
                title="${this.getAttribute('title')}"
            />

            <label for=${name}>${displayName}</label>
        </div>`
    }
}

customElements.define('text-input', TextInput)

function getProps (el:HTMLElement) {
    const props = ([
        'required',
        'minlength',
        'maxlength',
        'autocomplete',
        'value',
        'disabled'
    ]).reduce((acc, prop) => {
        const attrValue = el.getAttribute(prop)
        if (attrValue === null) return acc
        // wonky b/c `required` and `disabled` have no value
        // null means it is absent, empty string means it exists
        return acc + ` ${prop}${attrValue ? `=${attrValue}` : ''}`
    }, '')

    return props
}

