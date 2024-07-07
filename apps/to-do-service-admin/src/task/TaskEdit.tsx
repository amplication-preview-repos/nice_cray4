import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ColumnTitle } from "../column/ColumnTitle";

export const TaskEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <NumberInput step={1} label="order" source="order" />
        <TextInput label="title" source="title" />
        <ReferenceInput source="column.id" reference="Column" label="column">
          <SelectInput optionText={ColumnTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
