import _ from "lodash";
import { denormalize } from "normalizr";
import { createSelector } from "reselect";

import { user } from "../constants/schemas";
import { getEntities } from "./commonSelectors";

export const getUsersIds = state => state.users && state.users.list.ids;
export const getUsersIsLoading = state =>
  state.users && state.users.list.isLoading;
export const getUsersError = state =>
  state.users && state.users.list.error;

export const getUsers = createSelector(
  getEntities,
  getUsersIds,
  (entities, ids) => {
    return denormalize(ids, [user], entities);
  }
);