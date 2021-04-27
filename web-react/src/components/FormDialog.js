import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Grid from '@material-ui/core/Grid'
import { DynamicTable } from './DynamicTable'
import { SliceObject } from './ObjectHandler'

function DynamicTextField(props) {
  const { rows } = props
  console.log(rows)
  const entries = Object.entries(rows)

  return (
    <div>
      <Grid container>
        {/* justify="space-between" */}
        {entries.map((entry) => (
          <Grid key={entry[0]}>
            <TextField key={entry[0]} label={entry[0]} value={entry[1]} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default function FormDialog(props) {
  const { row } = props
  console.log(row)

  const rowValue = SliceObject(row || [])
  const rowArray = row?.boms || []
  const [open, setOpen] = React.useState(false)

  const currentValue = props.row?.name || ''
  // const [name, setName] = React.useState(currentValue)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  // const handleChange = (e) => {
  //   setName(e.target.value)
  // }

  const handleSubmit = (e) => {
    e.preventDefault()
    e.stopPropagation()
    props.submit({ variables: { currentValue: currentValue, newValue: name } })
    setOpen(false)
  }

  const handleDelete = () => {
    props.delete({ variables: { currentValue: currentValue } })
    setOpen(false)
  }

  const disableDelete = props.delete == undefined
  const disableSubmit = props.submit == undefined

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        {props.buttonName}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle id="form-dialog-title">{props.dialogName}</DialogTitle>
        <DialogContent>
          <DynamicTextField rows={rowValue} />
          <DynamicTable rows={rowArray} collapsible={false} />
        </DialogContent>
        <DialogActions>
          <Grid container justify="space-between">
            <Grid>
              <Button
                onClick={handleDelete}
                color="secondary"
                disabled={disableDelete}
              >
                Delete
              </Button>
            </Grid>
            <Grid>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button
                onClick={handleSubmit}
                color="primary"
                disabled={disableSubmit}
              >
                {props.buttonName}
              </Button>
            </Grid>
          </Grid>
        </DialogActions>
      </Dialog>
    </div>
  )
}
