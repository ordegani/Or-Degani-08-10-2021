import { createStore } from 'redux'

function countryReducer(state = { value: "" }, action) {
  switch (action.type) {
    case 'country/query':
      return { value: {query} }

  }
}

let store = createStore(countryReducer)

store.subscribe(() => console.log(store.getState()))

store.dispatch({ type: 'country/query' })

