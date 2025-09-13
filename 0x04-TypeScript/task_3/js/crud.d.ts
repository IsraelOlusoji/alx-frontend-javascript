import { RowID, RowElement } from "./interface";

declare function insertRow(row: RowElement): number;
declare function deleteRow(rowId: RowID): void;
declare function updatedRow(rowId: RowID, row: RowElement): number;
