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
//Custom libraries
import { AccountReducerState } from "../../../../redux/reducers";

interface EditAddressTestState {
  account: AccountReducerState;
}
/**
 * Default AccountReducerState for addressDetails useSelector redux state
 */
export const inistatesWithAddress: EditAddressTestState = {
  account: {
    orders: null,
    address: {
      lastName: "lastname",
      registrationStatus: "RegisteredPerson",
      preferredLanguage: "en_US",
      resourceId:
        "https://localhost:443/wcs/resources/store/11/person/@self?responseFormat=application%2Fjson&langId=-1",
      preferredCurrency: "USD",
      distinguishedName: "uid=b2cshopper1@mailinator.com,o=default organization,o=root organization",
      orgizationId: "-2000",
      addressId: "3074457354533579480",
      accountStatus: "Enabled",
      email1: "b2cshopper1@mailinator.com",
      profileType: "Consumer",
      contactList: [
        {
          firstName: "John",
          lastName: "Doe",
          zipCode: "12345",
          country: "US",
          email1: "billing@mailinator.com",
          city: "Schenectady",
          nickName: "billing-joe",
          addressType: "Billing",
          state: "NY",
          addressLine: ["1 Sesame Street", "", ""],
          addressId: "3074457354534345997",
          primary: "false",
        },
        {
          lastName: "Smith",
          zipCode: "54321",
          country: "US",
          city: "NYC",
          nickName: "shipping-jane",
          addressType: "Shipping",
          addressLine: ["1 Main Street", "Unit #2", ""],
          addressId: "3074457354535646440",
          phone1: "4161234567",
          firstName: "Jane",
          email1: "shipping@mailinator.com",
          state: "NV",
          primary: "false",
        },
      ],
      challengeQuestion: "-",
      nickName: "b2cshopper1@mailinator.com",
      addressType: "ShippingAndBilling",
      resourceName: "person",
      userId: "2",
      registrationDateTime: "2020-04-30T18:33:52.680Z",
      organizationDistinguishedName: "o=default organization,o=root organization",
      firstName: "firstname",
      logonId: "b2cshopper1@mailinator.com",
      lastUpdate: "2020-04-30T18:33:52.680Z",
      registrationApprovalStatus: "Approved",
      passwordExpired: "false",
      primary: "true",
    },
  },
};
