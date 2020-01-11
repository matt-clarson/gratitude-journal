import React from "react";
import PropTypes from "prop-types";
import Table from "./Table";
import TableBody from "./TableBody";
import TableData from "./TableData";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const AutoTable = ({ title, headers, data, rowKey = "id", ...baseProps }) => {
  return (
    <Table {...{ title, ...baseProps }}>
      <TableHeader>
        <TableRow>
          {headers.map(({ name, key, ...props }) => (
            <TableData tag="th" key={key} {...props}>
              {name}
            </TableData>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map(({ id, ...dataEntry }) => (
          <TableRow key={id.value}>
            {headers.map(({ key }) => {
              const { value, display, ...props } = dataEntry[key];
              return (
                <TableData key={value} {...props}>
                  {display?.(value) ?? value}
                </TableData>
              );
            })}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

AutoTable.propTypes = {
  title: PropTypes.node.isRequired,
  headers: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string.isRequired })
  ).isRequired,
  data: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.shape({ value: PropTypes.node.isRequired }))
  ),
  rowKey: PropTypes.string
};

export default AutoTable;
