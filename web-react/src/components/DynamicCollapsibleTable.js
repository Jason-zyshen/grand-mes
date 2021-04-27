import React from 'react'
import Box from '@material-ui/core/Box'
import Collapse from '@material-ui/core/Collapse'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Typography from '@material-ui/core/Typography'
import { SliceObject, GetCleanKeys } from './ObjectHandler'
import ExpandButton from './ExpandButton'
import { BasicRow, DynamicTable } from './DynamicTable'

export default function DynamicCollapsibleTable(props) {
  const { rows } = props
  const disable = rows.length == 0
  if (disable) {
    return null
  }
  const head = GetCleanKeys(rows[0], true)

  return (
    <Table aria-label="dynamic table">
      <TableHead>
        <BasicRow row={head}>
          <TableCell />
        </BasicRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <CollapsibleRow key={row.name} row={row} />
        ))}
      </TableBody>
    </Table>
  )
}

function CollapsibleRow(props) {
  const [open, setOpen] = React.useState(false)

  const { row, subHeaders } = props
  const rowValue = SliceObject(row)
  const rowArray = SliceObject(row, true)
  const detailName = Object.keys(rowArray)[0]
  const rowDetail = rowArray[detailName] || []
  const disable = rowDetail.l

  return (
    <React.Fragment>
      <BasicRow row={rowValue}>
        <ExpandButton
          setOpen={setOpen}
          open={open}
          label="expand row"
          disabled={disable}
        />
      </BasicRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                {detailName}
              </Typography>
              <DynamicTable rows={rowDetail} headers={subHeaders} />
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  )
}
