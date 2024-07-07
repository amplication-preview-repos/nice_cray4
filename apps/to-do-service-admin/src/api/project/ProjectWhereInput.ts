import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ColumnListRelationFilter } from "../column/ColumnListRelationFilter";

export type ProjectWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  description?: StringNullableFilter;
  owner?: StringNullableFilter;
  columns?: ColumnListRelationFilter;
};
