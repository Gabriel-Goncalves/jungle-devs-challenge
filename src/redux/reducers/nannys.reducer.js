import ADD_NANNY from '../actions';

const INITIAL_STATE = [
  {
    nannyName: 'Sarah',
    local: 'North Sydney',
    daysWorking: ['Wednesday, Thursday, Friday'],
    workTimeStart: '7:30',
    workTimeFinish: '5:30',
  },
];

const nannys = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_NANNY:
      return [...state, action.payload]
    default:
      return state;
  }
}

export default nannys;