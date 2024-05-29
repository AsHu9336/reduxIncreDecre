import { legacy_createStore as createStore } from "redux"

import { rootReducer } from "./Reducer/index"

export const store = createStore(rootReducer)