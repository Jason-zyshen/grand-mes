import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import TableCell from '@material-ui/core/TableCell'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'

export default function ExpandButton(props) {
  const { setOpen, open, label, disabled } = props
  return (
    <TableCell>
      <IconButton
        aria-label={label}
        size="small"
        onClick={() => setOpen(!open)}
        disabled={disabled}
      >
        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </IconButton>
    </TableCell>
  )
}
