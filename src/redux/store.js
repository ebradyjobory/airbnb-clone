import { compose, createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import reducers from './reducers'

const loggedMiddleware = createLogger({
  predicate: (getState, action) => __DEV__
})

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggedMiddleware
    )
  )
  return createStore(reducers, initialState, enhancer)
}

export default configureStore({})
