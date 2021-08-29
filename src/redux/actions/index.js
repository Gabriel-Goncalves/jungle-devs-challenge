export const ADD_NANNY = 'ADD_NANNY';

export const addNanny = (nanny) => ({
  type: ADD_NANNY,
  payload: {
    nannyName: nanny.nannyName ,
    local: nanny.local ,
    daysWorking: nanny.daysWorking ,
    workTimeStart: nanny.workTimeStart ,
    workTimeFinish: nanny.workTimeFinish ,
  }
});