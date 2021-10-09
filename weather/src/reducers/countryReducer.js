import { createStore } from 'redux'

function countryReducer(state = { value: "" }, action) {

}

let store = createStore(countryReducer)

store.subscribe(() => console.log(store.getState()))

store.dispatch({ type: 'country/query' })

