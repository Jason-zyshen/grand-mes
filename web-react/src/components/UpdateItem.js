import React from 'react'
import { useMutation, gql } from '@apollo/client'
import FormDialog from './FormDialog'

const UPDATE_DATA = gql`
  mutation UpdateMaterial($currentValue: String!, $newValue: String!) {
    UpdateMaterial(where: { name: $currentValue }, data: { name: $newValue }) {
      id
      name
    }
  }
`

const DELETE_DATA = gql`
  mutation DeleteMaterial($currentValue: String!) {
    DeleteMaterial(where: { name: $currentValue }) {
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

export default function UpdateItem(props) {
  const [updateData] = useMutation(UPDATE_DATA)
  const [deleteData] = useMutation(DELETE_DATA, {
    update(cache) {
      const newData = cache.readQuery({ query: QUERY_DATA })
      cache.writeQuery({ query: QUERY_DATA, data: { Material: newData } })
    },
  })

  return (
    <div>
      <FormDialog
        buttonName="Update"
        dialogName="UpdateMaterial"
        row={props.row}
        submit={updateData}
        delete={deleteData}
      />
    </div>
  )
}
