import _ from "lodash";
import { denormalize } from "normalizr";
import { createSelector } from "reselect";

import { auth } from "../constants/schemas";
import { getEntities } from "./commonSelectors";

export const getAuthUserId = state => state.auth && state.auth.auth.id;

export const getUserId = createSelector(
  getEntities,
  getAuthUserId,
  (entities, id) => {
    const res = denormalize(id, [auth], entities);
    return res;
  }
);

export const getAuthUserName = state => {
  const name = state.auth && state.auth.auth.user ? state.auth.auth.user.first_name + ' ' + state.auth.auth.user.last_name : '';
  return name.length > 15 ? name.substr(0, 15) + '...' : name;
}

export const getUserName = createSelector(
  getEntities,
  getAuthUserName,
  (entities, name) => {
    return denormalize(name, [auth], entities);
  }
);

export const getAuthUser = state => state.auth && state.auth.auth.user;

export const getUser = createSelector(
  getEntities,
  getAuthUser,
  (entities, user) => {
    return denormalize(user, auth, entities);
  }
);

export const getAuthUserRoles = state => {
  return state.auth && state.auth.auth.user ? state.auth.auth.user.roles : [];
}

export const getUserRoles = createSelector(
  getEntities,
  getAuthUserRoles,
  (entities, roles) => {
    return roles;
  }
);
