/*
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
import { put, select } from "redux-saga/effects";
//Redux
import {
  EXPIRED_ACTIVITY_TOKEN_ERROR,
  INVALID_COOKIE_ERROR_CODE,
  INVALID_COOKIE_ERROR_KEY,
  PASSWORD_EXPIRED_ERR_CODE,
  PASSWORD_EXPIRED,
} from "../../../constants/errors";
import {
  HANDLE_SESSION_ERROR_ACTION,
  RESET_ERROR_SUCCESS_ACTION,
  VALIDATION_ERROR_ACTION,
  RESET_SESSION_POPUP_LOGON_ERROR_ACTION,
} from "../../actions/error";
import { defaultStates } from "../../reducers/initStates";
import { seessionErrorSelector } from "../../selectors/error";

let handlingError = false;
/**
 * Saga worker to invoke get orders API
 */
export function* handleAxiosErrors(action: any) {
  const { payload: error } = action;
  const isLogoff =
    error.config &&
    error.config.url.endsWith("loginidentity/@self") &&
    error.config.method.toLowerCase() === "delete";
  //ignore logoff error
  if (error.isAxiosError && !handlingError && !isLogoff) {
    handlingError = true;
    const errorResponse = error.response;
    if (errorResponse && errorResponse.data && errorResponse.data.errors) {
      const e = errorResponse.data.errors[0];
      // handle expired session
      if (
        e.errorCode === EXPIRED_ACTIVITY_TOKEN_ERROR ||
        e.errorKey === EXPIRED_ACTIVITY_TOKEN_ERROR
      ) {
        const payload = {
          ...e,
          handled: false,
          errorTitleKey: "SessionError.TimeoutTitle",
          errorMsgKey: "SessionError.TimeoutMsg",
        };

        yield put(HANDLE_SESSION_ERROR_ACTION(payload));
      }
      // handle invalid session where another user logged in from different location
      else if (
        e.errorCode === INVALID_COOKIE_ERROR_CODE &&
        e.errorKey === INVALID_COOKIE_ERROR_KEY
      ) {
        const payload = {
          ...e,
          handled: false,
          errorTitleKey: "SessionError.InvalidTitle",
          errorMsgKey: "SessionError.InvalidMsg",
        };
        yield put(HANDLE_SESSION_ERROR_ACTION(payload));
      }
      // handle password expired issue.
      else if (
        e.errorCode === PASSWORD_EXPIRED_ERR_CODE ||
        e.errorKey === PASSWORD_EXPIRED
      ) {
        //reset password dialog
        const payload = {
          ...e,
          handled: false,
          errorTitleKey: "reset.title",
          errorMsgKey: "reset.errorMsg",
        };
      } else {
        //other errors
        const payload = {
          ...e,
          handled: false,
          errorTitleKey: "SessionError.GenericTitle",
        };
        yield put(HANDLE_SESSION_ERROR_ACTION(payload));
      }
    } else {
      const payload = {
        errorMessage: error.toLocaleString(),
        handled: false,
      };
      yield put(HANDLE_SESSION_ERROR_ACTION(payload));
    }
    setTimeout(() => {
      if (handlingError) {
        handlingError = false;
      }
    }, 1000);
  }
}

export function* resetError() {
  const sessionErrorObject = yield select(seessionErrorSelector);
  if (!sessionErrorObject.errorKey && !sessionErrorObject.errorCode) {
    //do not reset session error
    const sessionError = { ...defaultStates.error };
    yield put(RESET_ERROR_SUCCESS_ACTION(sessionError));
  } else {
    yield put(RESET_SESSION_POPUP_LOGON_ERROR_ACTION());
  }
}

export function* resetSessionError() {
  const sessionErrorObject = yield select(seessionErrorSelector);
  if (sessionErrorObject.errorKey || sessionErrorObject.errorCode) {
    //reset session error
    const sessionError = { ...defaultStates.error };
    yield put(RESET_ERROR_SUCCESS_ACTION(sessionError));
  }
}

export function* handleValidationError(action: any) {
  const payload = action.payload;
  yield put(VALIDATION_ERROR_ACTION(payload));
}