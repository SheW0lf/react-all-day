import * as Bluebird from "bluebird";
import { INCREMENT } from "../constants";
import { PayloadAction, ThunkAction } from "./interfaces";
// import { Server } from '../../Server';

export interface IncrementAction extends PayloadAction<number> {
  type: typeof INCREMENT;
}

// export interface GetStuffAction extends PayloadAction<number[]>{ 
//   type: typeof GETTING_STUFF;
// }

export type CounterAction = IncrementAction;

export const actionCreators = {
  delayIncrement(amount: number = 1): ThunkAction<Bluebird<void>> {
    return dispatch => {
      return Bluebird.delay(1000).then(() => {
        dispatch(actionCreators.increment(amount));
      });
    };
  },

  increment(amount: number = 1): IncrementAction {
    return { payload: amount, type: INCREMENT };
  },

//  I got it started, I believe it would look something along these lines, but I need to get better aquanted with Typescript to handle async redux actions
//
//   gettingStuff(): ThunkAction<void>{ //this is probably not the right type
//     return dispatch => {
//       return Server.getStuff().then(res => dispatch(actionCreators.gotStuff(res)))
//     } 
//   },

//   gotStuff(values: number[]): GetStuffAction{
//     return { payload: values, type: GETTING_STUFF}
//   }

 };
