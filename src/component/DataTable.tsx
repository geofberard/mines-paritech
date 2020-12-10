import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import * as React from "react";

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
  tableContainer: {
    marginTop: 15,
  },
});

interface DataTableProps {
  data: string[][];
}

export const DataTable = ({ data }: DataTableProps) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {data[0].map(col => (
              <TableCell align="center">{col}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data
            .filter((val, index) => index !== 0)
            .map((row, index) => (
              <TableRow>
                {row.map(col => (
                  <TableCell align="center">{col}</TableCell>
                ))}
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
