# - Create a product or material
mutation CreateMaterial {
  CreateMaterial(data: { name: "new_table" }) {
    id
    name
  }
}

# - List all the materials
query ListMaterial {
  Material {
    id
    name
  }
}

# - Create a craft with several procedures
mutation CreateCraft {
  CreateCraft(data: { name: "TwoProcess" }) {
    id
    name
  }
}

# - List all the Crafts
query ListCraft {
  Craft {
    id
    name
    has_procedure {
      id
      name
    }
  }
}

# - Link a craft to a product
mutation AddCraftToMaterial {
  AddMaterialHas_craft(
    from: { id: "48ca4caa-305b-457b-9b9b-763bbcce9d70" }
    to: { id: "636aa475-115e-4707-9c6b-a4ad7317e5d5" }
  ) {
    from {
      id
      name
    }
    to {
      id
      name
    }
  }
}

# - Create a BOM
mutation CreateBOM {
  CreateBOM(
    productName: "table"
    BOMName: "TableBOM"
    bomDetail: [{name: "leg", amount: 4}, {name: "board", amount: 1}]
  ) {
    id
    name
    USES_MATERIAL_rel{
      amount
      Material{
        id
        name
      }
    }
  }
}

# - Link certain amount of materials to a BOM
mutation AddMaterialToBOM {
  AddBOMUSES_MATERIAL_rel(
    from: { id: "fb98bf8b-8cc1-4825-8df8-c996b2139aaf" }
    to: { id: "a06aa219-c846-433e-858e-37f6b5a657e3" }
    data: { amount: 4 }
  ) {
    from {
      id
      name
    }
    to {
      id
      name
    }
    amount
  }
}

# - List all the BOMs
query ListBOM {
  BOM {
    id
    name
    USES_MATERIAL_rel {
      Material {
        id
        name
      }
      amount
    }
    crafts {
      id
      name
      materials {
        id
        name
      }
    }
  }
}

# - Link a BOM to a craft
mutation AddBOMToCraft {
  AddCraftUses_bom(
    from: { id: "636aa475-115e-4707-9c6b-a4ad7317e5d5" }
    to: { id: "fb98bf8b-8cc1-4825-8df8-c996b2139aaf" }
  ) {
    from {
      id
      name
    }
    to {
      id
      name
    }
  }
}

# - Create a procedure
mutation CreateProcedure {
  CreateProcedure(data: { name: "p0" }) {
    id
    name
  }
}

# - List procedures
query ListProcedure {
  Procedure {
    id
    name
  }
}

# - Link a procedure to a craft
mutation AddProcedureToCraft {
  AddCraftHas_procedure(
    from: { id: "fd5079db-e33d-4c2f-a18a-bb02a87253b9" }
    to: { id: "2cff4a43-00a4-4311-8243-25224d246e12" }
  ) {
    from {
      id
      name
    }
    to {
      id
      name
    }
  }
}

mutation AddNextProcedure {
  addProceduresNEXT(from_name: "p1", to_name: "p2")
}

# - Link a BOM to a procedure

# - List the craft and BOM of a product
query ProductCraftAndBOM {
  Material(filter: { name: "table" }) {
    id
    name
    has_craft {
      id
      name
      uses_bom {
        id
        name
        USES_MATERIAL_rel {
          amount
          Material {
            id
            name
          }
        }
      }
      first_procedure {
        name
      }
      last_procedure {
        name
      }
    }
  }
}

# - Create an order of a product with certain amount and deadline
# mutation CreateWorkOrder {
#   CreateWorkOrder(
#     data: {
#       is_completed: false
#       schedule_date: { year: 2021, month: 11, day: 11 }
#     }
#   ) {
#     id
#     is_completed
#     schedule_date {
#       year
#       month
#       day
#     }
#     HAS_PRODUCT_rel {
#       amount
#       Material {
#         id
#         name
#       }
#     }
#   }
# }

# - List orders
query ListWorkOrder {
  WorkOrder {
    id
    is_completed
    schedule_date {
      year
      month
      day
    }
    has_task {
      id
      is_completed
      uses_procedure {
        id
        name
      }
    }
  }
}

# - Link a product to this order
# mutation AddProductToOrder {
#   AddWorkOrderHAS_PRODUCT_rel(
#     from: { id: "774d45e1-d6b0-4c8b-919c-697039f85f92" }
#     to: { id: "6be3f997-661f-4180-9cd1-32e010147ee8" }
#     data: { amount: 2 }
#   ) {
#     from {
#       id
#       schedule_date {
#         year
#         month
#         day
#       }
#     }
#     to {
#       id
#       name
#     }
#     amount
#   }
# }

# - Select an available craft and BOM for this order
query ListCraftAndBOMOfOrder {
  WorkOrder(filter: { id: "774d45e1-d6b0-4c8b-919c-697039f85f92" }) {
    id
    has_product {
      id
      name
      has_craft {
        id
        name
        uses_bom {
          id
          name
          USES_MATERIAL_rel {
            amount
            Material {
              id
              name
            }
          }
        }
      }
    }
  }
}

# - Auto-create the procedures tasks of an order according to the craft
mutation CreateProcedureTask {
  CreateProcedureTask(data: { is_completed: false }) {
    id
    uses_procedure {
      id
      name
    }
  }
}

mutation AddProcedureToTask {
  AddProcedureTaskUses_procedure(from: { id: "" }, to: { id: "" }) {
    from {
      id
    }
    to {
      id
      name
    }
  }
}



# - List all the tasks that need to be completed

# - Execute a task
# - Show the current tasks of an order
# - Show the completed amount of production with required
