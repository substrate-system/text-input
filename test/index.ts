import { test } from '@bicycle-codes/tapzero'
import { waitFor } from '@bicycle-codes/dom'
import '../src/index.js'

test('text input', async t => {
    document.body.innerHTML += `
        <text-input class="test">
        </text-input>
    `

    const el = await waitFor('text-input input')

    t.ok(el, 'should find an input element')
})
