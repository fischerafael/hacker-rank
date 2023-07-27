import React from "react";

export const PageDiagonalDifference = () => {
  const input = [[3], [11, 2, 4], [4, 5, 6], [10, 8, -12]];

  const result = diagonalDifference(input);

  return <div>{result}</div>;
};

const diagonalDifference = (array: number[][]): number => {
  const [firstRow, ...rest] = array;
  const [rowsAndCollumnsSize] = firstRow;
  const actualArray = rest;

  const sumLTR = getDiagonalValue(actualArray, "ltr");
  const sumRTL = getDiagonalValue(actualArray, "rtl", rowsAndCollumnsSize);

  return Math.abs(sumLTR.total - sumRTL.total);
};

const getDiagonalValue = (
  array: number[][],
  direction: "ltr" | "rtl" = "ltr",
  initialValue: number = 0
) => {
  const cols = direction === "ltr" ? 0 : initialValue - 1;

  return array.reduce(
    (total, current) => {
      const currentVal = current[total.col];
      const currentCol = direction === "ltr" ? total.col + 1 : total.col - 1;

      return {
        total: total.total + currentVal,
        col: currentCol,
      };
    },
    {
      total: 0,
      col: cols,
    }
  );
};
