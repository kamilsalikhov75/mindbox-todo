import { expect, test } from "vitest";
import { getItemsLeftString } from "./getItemsLeftString";


test("test empty array", () => {
    expect(getItemsLeftString([])).toEqual('Create new task');
  });
  
  test("test 1 length array", () => {
    expect(getItemsLeftString([1])).toEqual('1 item left');
  });
  
  test("test 5 length array", () => {
    expect(getItemsLeftString([1,2,4,3,5])).toEqual('5 items left');
  });
  
  