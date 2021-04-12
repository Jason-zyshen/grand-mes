# Introduction

Here we are trying to develop a Manufacturing Executive System with GRANDstack architect.

# Road Map

## Setup Environment

1. Create a new neo4j database on [neo4j sandbox](https://sandbox.neo4j.com/). Copy the _Bolt URL_, _Username_ and _Password_ from the _Connection Details_ tag.
2. Create a new GRANDstack application with the starter.
   ```bash
   npx create-grandstack-app graph-mes
   ```

## Domain Modeling

### Step 1: Understanding the domain

Identify the **stakeholders** and the **users** of the application (people, systems). Enumerate the **use cases** that are agreed upon by all stakeholders where users are part of the use case.

**Stakeholders:**

- Factory Owner
- Production Director / Manager

**Users & Systems:**

- Manager
- Worker
- ERP
- WMS

**Use Cases:**

Suppose we are going to open a factory, we should first have a **product** to sell and the **craft** that tell us how to make it. We also need a list of raw **material** we need which called **Bill Of Materials**. Then we can sell our product to the market and get some **orders** which require certain amount of our product.

So here are some basic use cases we can list for our MES:

- User creates/edits products and other materials.
- System lists all the products and materials that is created.
- User creates/edits a craft of a product with several procedures.
- User creates/edits a BOM of a product.
- System lists the craft and BOM of a product.
- User adds details to a procedure of a craft.
- User creates/edits a sale order of a group of products.
- System lists all the sale orders.
- User creates/edits a work order of a group of products.
- User splits/merges orders to create a work order with specific deadline and certain amount of products.
- User assigns the work order to a role.
- System lists all the work orders.
- User execute a procedure of a work order.
- User draws materials according to BOM from warehouse/WIP.
- User completes certain amount of (intermediate) product with after scanning a barcode.
- System shows the procedures of current work order.
- User adds a material to warehouse.
- User sends the rest materials back to warehouse.
- User sends the completed products to warehouse.
- System lists the inventory of all materials.
- System lists the workload of every workers.
- User ships some stocks of several from one place to another.

### Step 2: Create high-level sample data

A brief description of data.

- 1 product
- Simple craft with 2 procedures to be executed one after another
- BOM has 3 raw materials which are needed on the first procedure
- 4 roles, admin, manager, worker of the 1st procedure, worker of the 2nd procedure

### Step 3: Define specific questions for the application

Questions for our MES:

- What is the available inventory of a certain material?
- How many products need to produce for a sale order?
- What is the BOM of a product?
- How to make a certain product?
- Which sale order is going to over due?
- How many orders are required to be completed before a certain date?
- For a certain sale order, how many products have been made/are making/haven't been made?

> TODO: Manufacture process needs to be reconsidered.

### Step 4 : Identify entities, relations and properties

### Step 5: Test questions and refactor the model

### Step 6: Test scalability and refactor the model

1. Avoid super node
