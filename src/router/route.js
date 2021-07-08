import React, {useEffect} from "react"
import PropTypes from 'prop-types'
import { Route, Redirect } from "react-router-dom"


const AppRoute = ({
  component: Component,
  ...rest
}) => {


  return (
    <Route
    {...rest}
    render={props => {
      return (
          <Component  {...props} />
      )
    }}
  />
  )
}


export default AppRoute
