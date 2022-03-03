import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { profilesApi} from '../Redux-handler/ManageProfiles';
import { postApi } from './../Redux-handler/GovJobApiHandler';

export const store = configureStore({
  reducer: {
    
    [postApi.reducerPath]: postApi.reducer,
    [profilesApi.reducerPath]: profilesApi.reducer,
    
  },
  middleware: (getDefaultMiddleware,getDefaultMiddleware2) =>
    getDefaultMiddleware().concat([postApi.middleware,profilesApi.middleware]),
}
)
setupListeners(store.dispatch)
