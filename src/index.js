const reducer = (state = 0, action) => {

  switch (action.type) {
    case 'INC':
      return state + 1

    default:
      return state
  }
}

let stete = reducer(undefined, {})

state = reducer(state, { type: 'INC' })
console.log(state)
state = reducer(state, { type: "INC" });
console.log(state)