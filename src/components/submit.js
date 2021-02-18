import React, { Component } from "react"

import { withRouter } from "react-router-dom" // <--- import `withRouter`. We will use this in the bottom of our file.

class FormSubmit extends Component {
  submitForm(e) {
    e.preventDefault()
    this.props.history.push("/page-2") // <--- The page you want to redirect your user to.
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitForm.bind(this)}>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default withRouter(FormSubmit) // <--- make sure to wrap your component with `withRouter()`
