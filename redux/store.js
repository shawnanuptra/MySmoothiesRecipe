import smoothieReducer from "./smoothieSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favouritesReducer from "./favouritesSlice";
import themeReducer from './themeSlice'
import persistReducer from "redux-persist/es/persistReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import persistStore from "redux-persist/es/persistStore";
import thunk from 'redux-thunk'


const persistConfig = {
    key: 'root',
    storage: AsyncStorage
}

// combine reducers from slices into one, to pass to persistReducer
const rootReducer = combineReducers({
    smoothie: smoothieReducer,
    favourites: favouritesReducer,
    theme: themeReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})

export default store

export const persistor = persistStore(store)