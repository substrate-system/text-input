// import { createDebug } from '@bicycle-codes/debug'
// const debug = createDebug()

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

    // connectedCallback () {
    //     debug('connected')

    //     const observer = new MutationObserver(function (mutations) {
    //         mutations.forEach((mutation) => {
    //             if (mutation.addedNodes.length) {
    //                 debug('Node added: ', mutation.addedNodes)
    //             }
    //         })
    //     })

    //     observer.observe(this, { childList: true })
    // }
}

customElements.define('text-input', TextInput)

function getProps (el:HTMLElement) {
    const props = ([
        'required',
        'minlength',
        'maxlength',
    ]).reduce((acc, prop) => {
        const attrValue = el.getAttribute(prop)
        if (attrValue === null) return acc
        // wonky b/c `required` has no value
        // null means it is absent, empty string means it exists
        return acc + ` ${prop}${attrValue ? `=${attrValue}` : ''}`
    }, '')

    return props
}

