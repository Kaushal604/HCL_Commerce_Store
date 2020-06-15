/*
 *---------------------------------------------------
 * Licensed Materials - Property of HCL Technologies
 *
 * HCL Commerce
 *
 * (C) Copyright HCL Technologies Limited 2020
 *
 *---------------------------------------------------
 */
//Add item to cart
export const ITEM_ADD_REQUESTED = "ITEM_ADD_REQUESTED";
export const ITEM_ADD_SUCCESS = "ITEM_ADD_SUCCESS";
export const ITEM_ADD_ERROR = "ITEM_ADD_ERROR";
export const COPY_CART = "COPY_CART";
export const COPY_CART_ERROR = "COPY_CART_ERROR";
export const COPY_CART_SUCCESS = "COPY_CART_SUCCESS";

//Remove item to cart
export const ITEM_REMOVE_REQUESTED = "ITEM_REMOVE_REQUESTED";
export const ITEM_REMOVE_SUCCESS = "ITEM_REMOVE_SUCCESS";
export const ITEM_REMOVE_ERROR = "ITEM_REMOVE_ERROR";

//Update item in cart
export const ITEM_UPDATE_REQUESTED = "ITEM_UPDATE_REQUESTED";
export const ITEM_UPDATE_SUCCESS = "ITEM_UPDATE_SUCCESS";
export const ITEM_UPDATE_ERROR = "ITEM_UPDATE_ERROR";

//Get current user's cart
export const CART_GET_REQUESTED = "CART_GET_REQUESTED";
export const CART_GET_SUCCESS = "CART_GET_SUCCESS";
export const CART_GET_ERROR = "CART_GET_ERROR";

//Get current cart's usable shipping info
export const SHIPINFO_GET_REQUESTED = "SHIPINFO_GET_REQUESTED";
export const SHIPINFO_GET_SUCCESS = "SHIPINFO_GET_SUCCESS";
export const SHIPINFO_GET_ERROR = "SHIPINFO_GET_ERROR";

//update current cart's  shipping info
export const SHIPINFO_UPDATE_REQUESTED = "SHIPINFO_UPDATE_REQUESTED";
export const SHIPINFO_UPDATE_SUCCESS = "SHIPINFO_UPDATE_SUCCESS";
export const SHIPINFO_UPDATE_ERROR = "SHIPINFO_UPDATE_ERROR";

//Get current cart's usable shipping modes
export const SHIPMODES_GET_REQUESTED = "SHIPMODES_GET_REQUESTED";
export const SHIPMODES_GET_SUCCESS = "SHIPMODES_GET_SUCCESS";
export const SHIPMODES_GET_ERROR = "SHIPMODES_GET_ERROR";

//update current cart's shipping mode
export const SHIPMODE_UPDATE_REQUESTED = "SHIPMODE_UPDATE_REQUESTED";
export const SHIPMODE_UPDATE_SUCCESS = "SHIPMODE_UPDATE_SUCCESS";
export const SHIPMODE_UPDATE_ERROR = "SHIPMODE_UPDATE_ERROR";

//Get current cart's usable payment methods
export const PAYMETHODS_GET_REQUESTED = "PAYMETHODS_GET_REQUESTED";
export const PAYMETHODS_GET_SUCCESS = "PAYMETHODS_GET_SUCCESS";
export const PAYMETHODS_GET_ERROR = "PAYMETHODS_GET_ERROR";

//Add payment instruction to cart
export const PI_ADD_REQUESTED = "PI_ADD_REQUESTED";
export const PI_ADD_SUCCESS = "PI_ADD_SUCCESS";
export const PI_ADD_ERROR = "PI_ADD_ERROR";

//update current cart's shipping mode and add PI
export const SHIPMODE_UPDATE_AND_PI_ADD_REQUESTED =
  "SHIPMODE_UPDATE_AND_PI_ADD_REQUESTED";
export const SHIPMODE_UPDATE_AND_PI_ADD_SUCCESS =
  "SHIPMODE_UPDATE_AND_PI_ADD_SUCCESS";
export const SHIPMODE_UPDATE_AND_PI_ADD_ERROR =
  "SHIPMODE_UPDATE_AND_PI_ADD_ERROR";

//Place order
export const ORDER_PLACE_REQUESTED = "ORDER_PLACE_REQUESTED";
export const ORDER_PLACE_SUCCESS = "ORDER_PLACE_SUCCESS";
export const ORDER_PLACE_ERROR = "ORDER_PLACE_ERROR";

//Move to next Checkout step
export const CHECKOUTSTEP_NEXT_REQUESTED = "CHECKOUTSTEP_NEXT_REQUESTED";
export const CHECKOUTSTEP_NEXT_SUCCESS = "CHECKOUTSTEP_NEXT_SUCCESS";
export const CHECKOUTSTEP_NEXT_ERROR = "CHECKOUTSTEP_NEXT_ERROR";

//Move back to previous Checkout step
export const CHECKOUTSTEP_PREV_REQUESTED = "CHECKOUTSTEP_PREV_REQUESTED";
export const CHECKOUTSTEP_PREV_SUCCESS = "CHECKOUTSTEP_PREV_SUCCESS";
export const CHECKOUTSTEP_PREV_ERROR = "CHECKOUTSTEP_PREV_ERROR";

//Reset Checkout step
export const CHECKOUTSTEP_RESET_REQUESTED = "CHECKOUTSTEP_RESET_REQUESTED";
export const CHECKOUTSTEP_RESET_SUCCESS = "CHECKOUTSTEP_RESET_SUCCESS";
export const CHECKOUTSTEP_RESET_ERROR = "CHECKOUTSTEP_RESET_ERROR";

//Reset cart states
export const CART_RESET_REQUESTED = "CART_RESET_REQUESTED";
export const CART_RESET_SUCCESS = "CART_RESET_SUCCESS";
export const CART_RESET_ERROR = "CART_RESET_ERROR";

//Toggle recurring order
export const RECURRINGORDER_TOGGLE_REQUESTED =
  "RECURRINGORDER_TOGGLE_REQUESTED";
export const RECURRINGORDER_TOGGLE_SUCCESS = "RECURRINGORDER_TOGGLE_SUCCESS";
export const RECURRINGORDER_TOGGLE_ERROR = "RECURRINGORDER_TOGGLE_ERROR";

//Set recurring order frequency
export const RECURRINGORDER_FREQ_SET_REQUESTED =
  "RECURRINGORDER_FREQ_SET_REQUESTED";
export const RECURRINGORDER_FREQ_SET_SUCCESS =
  "RECURRINGORDER_FREQ_SET_SUCCESS";
export const RECURRINGORDER_FREQ_SET_ERROR = "RECURRINGORDER_FREQ_SET_ERROR";

//Set recurring order start date
export const RECURRINGORDER_STARTDATE_SET_REQUESTED =
  "RECURRINGORDER_STARTDATE_SET_REQUESTED";
export const RECURRINGORDER_STARTDATE_SET_SUCCESS =
  "RECURRINGORDER_STARTDATE_SET_SUCCESS";
export const RECURRINGORDER_STARTDATE_SET_ERROR =
  "RECURRINGORDER_STARTDATE_SET_ERROR";

//Submit recurring order
export const RECURRINGORDER_PLACE_REQUESTED = "RECURRINGORDER_PLACE_REQUESTED";
export const RECURRINGORDER_PLACE_SUCCESS = "RECURRINGORDER_PLACE_SUCCESS";
export const RECURRINGORDER_PLACE_ERROR = "RECURRINGORDER_PLACE_ERROR";
