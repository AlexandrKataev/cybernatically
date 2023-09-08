import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { companyService } from '@services';

export const store = configureStore({
  reducer: { [companyService.reducerPath]: companyService.reducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(companyService.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
