import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { DataGrid, GridToolbar } from '@material-ui/data-grid'
import UpdateItem from './UpdateItem'
import CreateItem from './CreateItem'

const QUERY = gql`
  {
    Material {
      id
      name
    }
  }
`

const columns = [
  { field: 'id', headerName: 'ID', flex: 1 },
  { field: 'name', headerName: 'Name', flex: 1 },
  { field: '', headerName: '', sortable: false, renderCell: UpdateItem },
]

export default function Material() {
  const { data } = useQuery(QUERY)
  return (
    <div style={{ display: 'flex' }}>
      <CreateItem />
      <DataGrid
        rows={data?.Material || []}
        columns={columns}
        autoPageSize
        autoHeight
        disableColumnMenu
        disableSelectionOnClick
        components={{ Toolbar: GridToolbar }}
      />
    </div>
  )
}

// loading
// {...data}
// onRowDoubleClick={FormDialog}
