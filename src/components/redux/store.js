import { configureStore } from '@reduxjs/toolkit'
import searchSectionSlice from './slice/searchSectionSlice'
import drawerSlice from './slice/drawerSlice'
import filterSectionSlice from './slice/filterSectionSlice'
import shoppingCartSlice from './slice/shoppingCartSlice'

export default configureStore({
  reducer: {
    searchSection:searchSectionSlice,
    drawerState: drawerSlice,
    filterSection: filterSectionSlice,
    shoppingCart: shoppingCartSlice
  }
})