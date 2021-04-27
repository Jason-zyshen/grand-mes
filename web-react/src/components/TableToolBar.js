import React from 'react'
import CreateItem from './CreateItem'
import Tooltip from '@material-ui/core/Tooltip'
import Toolbar from '@material-ui/core/Toolbar'

export default function TableToolBar() {
  return (
    <Toolbar>
      <Tooltip title="Tooltip Button">
        <CreateItem />
      </Tooltip>
    </Toolbar>
  )
}
