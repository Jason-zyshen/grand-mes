import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { DataGrid } from '@material-ui/data-grid'
import UpdateItem from './UpdateItem'
import TableToolBar from './TableToolBar'
// import { GetCleanKeys } from './ObjectHandler'

const QUERY = gql`
  {
    Material {
      id
      name
      boms {
        name
      }
    }
  }
`

const columns = [
  { field: 'id', headerName: 'ID', flex: 1 },
  { field: 'name', headerName: 'Name', flex: 1 },
  {
    field: '',
    headerName: '',
    flex: 0.5,
    sortable: false,
    renderCell: UpdateItem,
  },
]

export default function DataTable() {
  const { data } = useQuery(QUERY)
  // const key = GetCleanKeys(data)[0]
  return (
    <div style={{ display: 'flex' }}>
      <DataGrid
        rows={data?.Material || []}
        columns={columns}
        autoPageSize
        autoHeight
        disableColumnMenu
        disableSelectionOnClick
        components={{ Toolbar: TableToolBar }}
      />
    </div>
  )
}

// loading
// {...data}
// onRowDoubleClick={FormDialog}
