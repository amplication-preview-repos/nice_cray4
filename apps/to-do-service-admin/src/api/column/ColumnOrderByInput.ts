import { SortOrder } from "../../util/SortOrder";

export type ColumnOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  order?: SortOrder;
  projectId?: SortOrder;
};
