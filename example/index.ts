import '../src/index.css'
import '../src/index.js'

document.body.innerHTML += `
   <text-input
        display-name="text input component"
        title="At least 3 letters, but less than 7"
        data-title="I bla bla"
        required=${true}
        minlength=${3}
        maxlength=${7}
        name=${'text-input'}
    ></text-input>
`
