
import { createStore, applyMiddleware } from 'redux';
import manageStore from '@reducers/mainReducer'
import AsyncDispatchMiddleware from '@middlewares/asyncDispatchMiddleware'


const middleware = applyMiddleware(AsyncDispatchMiddleware);

export default createStore(manageStore, middleware)