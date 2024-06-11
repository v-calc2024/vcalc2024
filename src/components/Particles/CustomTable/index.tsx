import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import Link from "next/link";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "var(--cuaternary-color)",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const linkStyles = {
  color: "inherit",
  textDecoration: "none",
};

export default function CustomTable({
  headersArr,
  lang,
}: {
  headersArr: any;
  lang?: any;
}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 100 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {headersArr?.headers?.map((elem: any) => {
              return (
                <StyledTableCell key={elem} sx={{ fontWeight: 700 }}>
                  {elem}
                </StyledTableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {headersArr?.rows?.map((elem: any) => {
            return (
              <StyledTableRow key={elem}>
                {elem?.map((value: string, index: number) => {
                  return (
                    <StyledTableCell
                      key={index}
                      component="th"
                      scope="row"
                      sx={{ textTransform: "capitalize" }}
                    >
                      {headersArr?.headers?.includes("Edit") &&
                      index === elem.length - 1 ? (
                        /*
                        href={`${
                            lang !== undefined && lang?.toLowerCase() !== "en"
                              ? `/language/${lang?.toLowerCase()}/${
                            headersArr?.headers?.length > 6
                              ? "edit_activity"
                              : "edit_programme"
                          }/${value}`
                              : `/${
                            headersArr?.headers?.length > 6
                              ? "edit_activity"
                              : "edit_programme"
                          }/${value}`
                          }`}
                        */
                        <Link
                          style={linkStyles}
                          href={`${
                            lang !== undefined && lang?.toLowerCase() !== "en"
                              ? `/language/${lang?.toLowerCase()}/${
                                  headersArr?.headers?.length > 6
                                    ? "edit_activity"
                                    : "edit_programme"
                                }/${value}`
                              : `/${
                                  headersArr?.headers?.length > 6
                                    ? "edit_activity"
                                    : "edit_programme"
                                }/${value}`
                          }`}
                        >
                          <EditIcon />
                        </Link>
                      ) : (
                        value
                      )}
                    </StyledTableCell>
                  );
                })}
              </StyledTableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
