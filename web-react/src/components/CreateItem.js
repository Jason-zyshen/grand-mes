import React from 'react'
import { useMutation, gql } from '@apollo/client'
import FormDialog from './FormDialog'

const CREATE_DATA = gql`
  mutation CreateMaterial($newValue: String!) {
    CreateMaterial(data: { name: $newValue }) {
      id
      name
    }
  }
`

const QUERY_DATA = gql`
  {
    Material {
      id
      name
    }
  }
`

export default function CreateItem(props) {
  const [createData] = useMutation(CREATE_DATA, {
    update(cache) {
      const newData = cache.readQuery({ query: QUERY_DATA })
      cache.writeQuery({ query: QUERY_DATA, data: { Material: newData } })
    },
  })

  return (
    <div>
      <FormDialog
        buttonName="Create"
        dialogName="CreateMaterial"
        row={props.row}
        submit={createData}
      />
    </div>
  )
}
