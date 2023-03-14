import { combineReducers } from 'redux'

import cart from "./cart"
import items from "./items"
import authAdmin from "./authAdmin"

export default combineReducers({ cart, items, authAdmin })