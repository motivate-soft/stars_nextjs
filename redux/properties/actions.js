import { propertys } from "./reducer";

function ascendingSort(property1, property2) {
  const name1 = property1.name ? property1.name.toUpperCase() : "~";
  const name2 = property2.name ? property2.name.toUpperCase() : "~";
  return name1 > name2 ? 1 : name1 === name2 ? 0 : -1;
}

const propertyActions = {
  GET_ALL_PROPERTIES_REQUEST: "GET_ALL_PROPERTIES_REQUEST",
  GET_ALL_PROPERTIES_SUCCESS: "GET_ALL_PROPERTIES_SUCCESS",
  GET_ALL_PROPERTIES_FAILURE: "GET_ALL_PROPERTIES_FAILURE",
  GET_PROPERTY_REQUEST: "GET_PROPERTY_REQUEST",
  GET_PROPERTY_SUCCESS: "GET_PROPERTY_SUCCESS",
  GET_PROPERTY_FAILURE: "GET_PROPERTY_FAILURE",
  ADD_PROPERTY_REQUEST: "ADD_PROPERTY_REQUEST",
  ADD_PROPERTY_SUCCESS: "ADD_PROPERTY_SUCCESS",
  ADD_PROPERTY_FAILURE: "ADD_PROPERTY_FAILURE",
  UPDATE_PROPERTY_REQUEST: "UPDATE_PROPERTY_REQUEST",
  UPDATE_PROPERTY_SUCCESS: "UPDATE_PROPERTY_SUCCESS",
  UPDATE_PROPERTY_FAILURE: "UPDATE_PROPERTY_FAILURE",
  DELETE_PROPERTY_REQUEST: "DELETE_PROPERTY_REQUEST",
  DELETE_PROPERTY_SUCCESS: "DELETE_PROPERTY_SUCCESS",
  DELETE_PROPERTY_FAILURE: "DELETE_PROPERTY_FAILURE",

  GET_PRICE_ITEMS_REQUEST: "GET_PRICE_ITEMS_REQUEST",
  GET_PRICE_ITEMS_SUCCESS: "GET_PRICE_ITEMS_SUCCESS",
  GET_PRICE_ITEMS_FAILURE: "GET_PRICE_ITEMS_FAILURE",

  CREATE_PRICE_ITEM_REQUEST: "CREATE_PRICE_ITEM_REQUEST",
  CREATE_PRICE_ITEM_SUCCESS: "CREATE_PRICE_ITEM_SUCCESS",
  CREATE_PRICE_ITEM_FAILURE: "CREATE_PRICE_ITEM_FAILURE",

  getAllProperties: () => ({
    type: propertyActions.GET_ALL_PROPERTIES_REQUEST,
  }),
  getProperty: (propertyId) => ({
    type: propertyActions.GET_PROPERTY_REQUEST,
    propertyId,
  }),
  addProperty: (newProperty) => ({
    type: propertyActions.ADD_PROPERTY_REQUEST,
    property: newProperty,
  }),
  updateProperty: (newProperty) => ({
    type: propertyActions.UPDATE_PROPERTY_REQUEST,
    property: newProperty,
  }),
  deleteProperty: (propertyId) => ({
    type: propertyActions.DELETE_PROPERTY_REQUEST,
    propertyId,
  }),
  getPriceItems: (propertyId) => ({
    type: propertyActions.GET_PRICE_ITEMS_REQUEST,
    propertyId,
  }),
  createPriceItem: (pricing, dispatch) => ({
    type: propertyActions.CREATE_PRICE_ITEM_REQUEST,
    pricing,
  }),
};
export default propertyActions;
