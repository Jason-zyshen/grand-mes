import React from 'react'
import { useQuery, gql } from '@apollo/client'
import TableContainer from '@material-ui/core/TableContainer'
import Paper from '@material-ui/core/Paper'
import DynamicCollapsibleTable from './DynamicCollapsibleTable'
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

export default function CollapsibleTable() {
  const { data } = useQuery(QUERY)
  // const key = GetCleanKeys(data)[0]
  return (
    <div>
      <TableContainer component={Paper}>
        <TableToolBar />
        <DynamicCollapsibleTable rows={data?.Material || []} />
      </TableContainer>
    </div>
  )
}
