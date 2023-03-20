import { combineReducers } from 'redux'

import cart from "./cart"
import items from "./items"
import authAdmin from "./authAdmin"
import authUser from './authUser'

export default combineReducers({ cart, items, authAdmin, authUser })