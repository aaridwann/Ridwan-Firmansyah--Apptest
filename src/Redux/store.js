import {
  configureStore, createSerializableStateInvariantMiddleware,
  isPlain,
} from '@reduxjs/toolkit'
import contactSlice from './slice.js'


const isSerializable = (value) => Iterable.isIterable(value) || isPlain(value)

const getEntries = (value) =>
  Iterable.isIterable(value) ? value.entries() : Object.entries(value)

const serializableMiddleware = createSerializableStateInvariantMiddleware({
  isSerializable,
  getEntries,
})

export default configureStore({
  reducer: {
    contact: contactSlice,
    middleware: [serializableMiddleware]
  },
})