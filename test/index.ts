import { test } from '@bicycle-codes/tapzero'
import { waitFor } from '@bicycle-codes/dom'
import '../src/index.js'

test('text input', async t => {
    document.body.innerHTML += `
        <text-input class="test">
        </text-input>

        <text-input
            display-name="Example"
            name="example"
            disabled
            minlength="4"
            test="foo"
        >
        </text-input>
    `

    const el = await waitFor('text-input input')

    t.ok(el, 'should find an input element')

    const example = await waitFor('#example')
    t.ok(example, 'should find element by ID given a name')
    t.ok(example?.getAttribute('disabled') !== null, 'should be disabled')
    t.equal(example?.getAttribute('test'), 'foo',
        'should render any arbitrary attributes')
    t.ok(!(example?.getAttribute('display-name')),
        'should filter "display-name" attribute')
})
