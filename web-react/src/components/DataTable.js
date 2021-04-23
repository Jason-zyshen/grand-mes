import React from 'react'
import { useQuery, gql } from '@apollo/client'
// import Button from '@material-ui/core/Button'
// import { withStyles } from '@material-ui/core/styles'
import { DataGrid, GridToolbar } from '@material-ui/data-grid'
import FormDialog from './FormDialog'

const Query = gql`
  {
    Material {
      id
      name
    }
  }
`

// const clickButton = (params) => {
//   const onClick = () => {
//     const fields = params.api
//       .getAllColumns()
//       .map((c) => c.field)
//       .filter((c) => c !== '__check__' && !!c)
//     const thisRow = {}

//     fields.forEach((f) => {
//       thisRow[f] = params.getValue(f)
//     })

//     return alert(JSON.stringify(thisRow, null, 4))
//   }
//   return <Button onClick={onClick}>Click</Button>
// }

const columns = [
  { field: 'id', headerName: 'ID', flex: 1, editable: true },
  { field: 'name', headerName: 'Name', flex: 1, editable: true },
  {
    field: '',
    headerName: 'Button',
    sortable: false,
    renderCell: FormDialog,
  },
]

export default function Material() {
  const { data } = useQuery(Query)
  return (
    <div style={{ display: 'flex' }}>
      <DataGrid
        // loading
        // {...data}
        rows={data?.Material || []}
        columns={columns}
        autoPageSize
        autoHeight
        disableColumnMenu
        disableSelectionOnClick
        checkboxSelection
        components={{ Toolbar: GridToolbar }}
      />
    </div>
  )
}
