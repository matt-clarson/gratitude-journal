import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import Icon from "./Icon";
import Table from "./Table";
import TableBody from "./TableBody";
import TableData from "./TableData";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

export const actionColumnPositions = { LEADING: Symbol(), TRAILING: Symbol() };

const ActionColumnCell = ({ actionColumn, actionColumnAction }) =>
  actionColumn ? (
    <TableData>
      <Button transparent onClick={actionColumnAction}>
        <Icon icon={actionColumn} />
      </Button>
    </TableData>
  ) : null;

const NO_OP = () => {};

const AutoTable = ({
  title,
  emptyMessage,
  headers,
  data,
  rowKey = "id",
  actionColumn,
  actionColumnAction = NO_OP,
  actionColumnPosition = actionColumnPositions.TRAILING,
  ...baseProps
}) => {
  return (
    <Table {...{ title, ...baseProps }}>
      <TableHeader>
        <TableRow>
          {actionColumn &&
            actionColumnPosition === actionColumnPositions.LEADING && (
              <TableData tag="th" />
            )}
          {headers.map(({ name, key, ...props }) => (
            <TableData tag="th" key={key} {...props}>
              {name}
            </TableData>
          ))}
          {actionColumn &&
            actionColumnPosition === actionColumnPositions.TRAILING && (
              <TableData tag="th" />
            )}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.length > 0 ? (
          data.map(({ id, ...dataEntry }) => (
            <TableRow key={id.value}>
              {actionColumnPosition === actionColumnPositions.LEADING && (
                <ActionColumnCell {...{ actionColumn, actionColumnAction }} />
              )}
              {headers.map(({ key }) => {
                const { value, display, ...props } = dataEntry[key];
                return (
                  <TableData key={value} {...props}>
                    {display?.(value) ?? value}
                  </TableData>
                );
              })}
              {actionColumnPosition === actionColumnPositions.TRAILING && (
                <ActionColumnCell {...{ actionColumn, actionColumnAction }} />
              )}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableData colspan={headers.length}>{emptyMessage}</TableData>
          </TableRow>
        )}
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
  rowKey: PropTypes.string,
  emptyMessage: PropTypes.node,
  actionColumn: PropTypes.string,
  actionColumnAction: PropTypes.func,
  actionColumnPosition: PropTypes.oneOf(Object.keys(actionColumnPositions))
};

export default AutoTable;
