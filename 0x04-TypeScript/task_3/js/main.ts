/// <reference path="./crud.d.ts" />
import { RowID, RowElement } from "./interface";
import * as CRUDE from "./crud";

const row: RowElement = { firstName: "Guillaume", lastName: "Salva" };

const newRowID: RowID = CRUDE.insertRow(row);

const updateRow: RowElement = { ...row, age: 23 };

CRUDE.updateRow(newRowID, updateRow);
CRUDE.deleteRow(newRowID);
