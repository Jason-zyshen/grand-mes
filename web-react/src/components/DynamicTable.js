import React from 'react'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import { SliceObject, GetCleanKeys } from './ObjectHandler'

export function BasicRow(props) {
  const { row } = props
  const rowValue = SliceObject(row)
  const entries = Object.entries(rowValue)
  return (
    <React.Fragment>
      <TableRow>
        {props.children}
        {entries.map((entry) => (
          <TableCell key={entry[0]}>{entry[1]}</TableCell>
        ))}
      </TableRow>
    </React.Fragment>
  )
}

export function DynamicTable(props) {
  const { rows } = props
  const disable = rows.length == 0
  if (disable) {
    return null
  }
  const head = GetCleanKeys(rows[0], true)

  return (
    <Table aria-label="dynamic table">
      <TableHead>
        <BasicRow row={head}></BasicRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <BasicRow key={row.name} row={row} />
        ))}
      </TableBody>
    </Table>
  )
}
