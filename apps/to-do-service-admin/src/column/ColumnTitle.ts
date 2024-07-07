import { Column as TColumn } from "../api/column/Column";

export const COLUMN_TITLE_FIELD = "title";

export const ColumnTitle = (record: TColumn): string => {
  return record.title?.toString() || String(record.id);
};
