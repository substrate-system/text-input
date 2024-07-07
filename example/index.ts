import '../src/index.css'
import '../src/index.js'
import './index.css'

document.body.innerHTML += `
    <h1>Text Input Demo</h1>

    <div class="input-demo">
        <text-input
            display-name="text input component"
            title="At least 3 letters, but less than 7"
            required
            minlength=3
            maxlength=7
            name="text-input"
        ></text-input>

        <text-input
            display-name="another input"
            required
            name="another-input"
        ></text-input>
    </div>
`
