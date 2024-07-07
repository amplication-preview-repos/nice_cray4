import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ColumnTitle } from "../column/ColumnTitle";

export const TaskCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <NumberInput step={1} label="order" source="order" />
        <TextInput label="title" source="title" />
        <ReferenceInput source="column.id" reference="Column" label="column">
          <SelectInput optionText={ColumnTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
