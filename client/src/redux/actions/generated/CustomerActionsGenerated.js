/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://app.skaffolder.com/#!/register?friend=5e85fd0c8763035aac7a57d0
*
* You will get 10% discount for each one of your friends
* 
*/
/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  TO CUSTOMIZE FUNCTIONS IN CustomerActionsGenerated.js PLEASE EDIT ../CustomerActions.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */

import * as types from "../../actionTypes";
import CustomerApi from "../../../api/CustomerApi";

let actionsFunction = {

  //CRUD METHODS

  // Create customer
  createCustomer: function(customer) {
    return function(dispatch) {
      return CustomerApi
        .createCustomer(customer)
        .then(customer => {
          dispatch(actionsFunction.createCustomerSuccess(customer));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  createCustomerSuccess: function(customer) {
    return { type: types.CREATE_CUSTOMER_SUCCESS, payload: customer };
  },


  // Delete customer
  deleteCustomer: function(id) {
    return function(dispatch) {
      return CustomerApi
        .deleteCustomer(id)
        .then(customer => {
          dispatch(actionsFunction.deleteCustomerSuccess(customer));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  deleteCustomerSuccess: function(customer) {
    return { type: types.DELETE_CUSTOMER_SUCCESS, payload: customer };
  },


  // Get customer
  loadCustomer: function(id) {
    return function(dispatch) {
      return CustomerApi
        .getOneCustomer(id)
        .then(customer => {
          dispatch(actionsFunction.loadCustomerSuccess(customer));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadCustomerSuccess: function(customer) {
    return { type: types.GET_CUSTOMER_SUCCESS, payload: customer };
  },

  // Load  list
  loadCustomerList: function() {
    return function(dispatch) {
      return CustomerApi
        .getCustomerList()
        .then(list => {
          dispatch(actionsFunction.loadCustomerListSuccess(list));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadCustomerListSuccess: function(list) {
    return { type: types.LIST_CUSTOMER_SUCCESS, payload: list };
  },

	
  // Save customer
  saveCustomer: function(customer) {
    return function(dispatch) {
      return CustomerApi
        .saveCustomer(customer)
        .then(customer => {
          dispatch(actionsFunction.saveCustomerSuccess(customer));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  saveCustomerSuccess: function(customer) {
    return { type: types.UPDATE_CUSTOMER_SUCCESS, payload: customer };
  },


};

export default actionsFunction;