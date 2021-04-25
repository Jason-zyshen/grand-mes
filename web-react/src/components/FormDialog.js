import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Grid from '@material-ui/core/Grid'

export default function FormDialog(props) {
  const currentValue = props?.row?.name || ''
  const [open, setOpen] = React.useState(false)
  const [name, setName] = React.useState(currentValue)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleChange = (e) => {
    setName(e.target.value)
  }

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
          <TextField
            id="name"
            label="Name"
            value={name}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Grid container justify="space-between">
            <Grid>
              <Button onClick={handleDelete} color="secondary">
                {/* TODO: Disable this button in create dialog */}
                Delete
              </Button>
            </Grid>
            <Grid>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={handleSubmit} color="primary">
                {props.buttonName}
              </Button>
            </Grid>
          </Grid>
        </DialogActions>
      </Dialog>
    </div>
  )
}
