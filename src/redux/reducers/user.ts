/**
 *==================================================
 * Licensed Materials - Property of HCL Technologies
 *
 * HCL Commerce
 *
 * (C) Copyright HCL Technologies Limited 2020
 *
 *==================================================
 */
//Standard libraries
import { createReducer, AnyAction } from "@reduxjs/toolkit";
//Foundation libraries
import {
  sessionStorageUtil,
  localStorageUtil,
} from "../../_foundation/utils/storageUtil";
import {
  CURRENT_USER,
  PERSONALIZATION_ID,
  INITIATED_FROM_STORAGE,
} from "../../_foundation/constants/user";
//Custom libraries
import { PERMANENT_STORE_DAYS } from "../../configs/common";
//Redux
import initStates from "./initStates";
import { UserReducerState } from "./reducerStateInterface";
import {
  LOGIN_SUCCESS_ACTION,
  LOGOUT_SUCCESS_ACTION,
  GUEST_LOGIN_SUCCESS_ACTION,
  loginErrorAction,
  REGISTRATION_SUCCESS_ACTION,
  registrationErrorAction,
  INIT_USER_FROM_STORAGE_SUCCESS_ACTION,
  FETCH_USER_DETAILS_SUCCESS_ACTION,
} from "../actions/user";

const clearUserState = (userState: any) => {
  for (var variableKey in userState) {
    if (
      variableKey !== PERSONALIZATION_ID &&
      variableKey != INITIATED_FROM_STORAGE &&
      userState.hasOwnProperty(variableKey)
    ) {
      delete userState[variableKey];
    }
  }
};
/**
 * User reducer
 * handles states used by user related components
 * @param state State object managed by user reducer
 * @param action The dispatched action
 */
const userReducer = createReducer(initStates.user, (builder) => {
  builder.addCase(
    LOGIN_SUCCESS_ACTION,
    (state: UserReducerState | any, action: AnyAction) => {
      Object.assign(state, action.payload, {
        userLoggedIn: true,
        isGuest: false,
      });
      sessionStorageUtil.set(CURRENT_USER, state);
      //set personalizationID to localStorage
      const { personalizationID } = action.payload;
      localStorageUtil.set(
        PERSONALIZATION_ID,
        personalizationID,
        PERMANENT_STORE_DAYS
      );
    }
  );

  builder.addCase(
    INIT_USER_FROM_STORAGE_SUCCESS_ACTION,
    (state: UserReducerState | any, action: AnyAction) => {
      clearUserState(state);
      if (action.payload !== null) {
        Object.assign(state, action.payload, {
          [INITIATED_FROM_STORAGE]: true,
        });
      } else {
        Object.assign(state, {
          [INITIATED_FROM_STORAGE]: true,
        });
      }
    }
  );

  builder.addCase(
    loginErrorAction,
    (state: UserReducerState | any, action: AnyAction) => {
      // state.userLoginErrorMsg = Object.assign({}, action.error.response);
      Object.assign(state, { userLoggedIn: false, isGuest: false });
      return state;
    }
  );

  builder.addCase(
    LOGOUT_SUCCESS_ACTION,
    (state: UserReducerState | any, action: AnyAction) => {
      clearUserState(state);
      sessionStorageUtil.remove(CURRENT_USER);
    }
  );
  builder.addCase(
    GUEST_LOGIN_SUCCESS_ACTION,
    (state: UserReducerState | any, action: AnyAction) => {
      Object.assign(state, action.payload);
      state.userLoggedIn = false;
      state.isGuest = true;
      const { personalizationID } = action.payload;
      localStorageUtil.set(
        PERSONALIZATION_ID,
        personalizationID,
        PERMANENT_STORE_DAYS
      );
      sessionStorageUtil.set(CURRENT_USER, state);
    }
  );
  builder.addCase(
    REGISTRATION_SUCCESS_ACTION,
    (state: UserReducerState | any, action: AnyAction) => {
      Object.assign(state, action.payload);
      state.userRegistration = true;
      state.userLoggedIn = true;
      state.isGuest = false;
      sessionStorageUtil.set(CURRENT_USER, state);
      const { personalizationID } = state;
      localStorageUtil.set(
        PERSONALIZATION_ID,
        personalizationID,
        PERMANENT_STORE_DAYS
      );
    }
  );

  builder.addCase(
    registrationErrorAction,
    (state: UserReducerState | any, action: AnyAction) => {
      // state.userRegistrationErrorMsg = Object.assign({}, action.error.response);
      state.userRegistration = false;
      state.isGuest = true;
      return state;
    }
  );
  builder.addCase(
    FETCH_USER_DETAILS_SUCCESS_ACTION,
    (state: UserReducerState | any, action: AnyAction) => {
      Object.assign(state, { details: action.payload });
      sessionStorageUtil.set(CURRENT_USER, state);
    }
  );
});

export default userReducer;