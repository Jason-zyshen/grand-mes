/**
 * GQLESS AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */

import { ScalarsEnumsHash } from 'gqless'

export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export interface _WorkOrderHAS_PRODUCTFilter {
  AND?: Maybe<Array<_WorkOrderHAS_PRODUCTFilter>>
  OR?: Maybe<Array<_WorkOrderHAS_PRODUCTFilter>>
  amount?: Maybe<Scalars['Int']>
  amount_not?: Maybe<Scalars['Int']>
  amount_in?: Maybe<Array<Scalars['Int']>>
  amount_not_in?: Maybe<Array<Scalars['Int']>>
  amount_lt?: Maybe<Scalars['Int']>
  amount_lte?: Maybe<Scalars['Int']>
  amount_gt?: Maybe<Scalars['Int']>
  amount_gte?: Maybe<Scalars['Int']>
  Material?: Maybe<_MaterialFilter>
}

export type _HAS_PRODUCTOrdering =
  | 'amount_asc'
  | 'amount_desc'
  | '_id_asc'
  | '_id_desc'

export interface _HAS_PRODUCTInput {
  amount: Scalars['Int']
}

export interface _WorkOrderCreate {
  id?: Maybe<Scalars['ID']>
  is_completed: Scalars['Boolean']
  schedule_date?: Maybe<Scalars['String']>
  deadline?: Maybe<Scalars['String']>
}

export interface _WorkOrderUpdate {
  id?: Maybe<Scalars['ID']>
  is_completed?: Maybe<Scalars['Boolean']>
  schedule_date?: Maybe<Scalars['String']>
  deadline?: Maybe<Scalars['String']>
}

export interface _WorkOrderWhere {
  AND?: Maybe<Array<_WorkOrderWhere>>
  OR?: Maybe<Array<_WorkOrderWhere>>
  id?: Maybe<Scalars['ID']>
  id_not?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  id_not_in?: Maybe<Array<Scalars['ID']>>
  id_regexp?: Maybe<Scalars['ID']>
  id_contains?: Maybe<Scalars['ID']>
  id_not_contains?: Maybe<Scalars['ID']>
  id_starts_with?: Maybe<Scalars['ID']>
  id_not_starts_with?: Maybe<Scalars['ID']>
  id_ends_with?: Maybe<Scalars['ID']>
  id_not_ends_with?: Maybe<Scalars['ID']>
}

export interface _WorkOrderKeys {
  id?: Maybe<Scalars['ID']>
}

export type _WorkOrderOrdering =
  | 'id_asc'
  | 'id_desc'
  | 'is_completed_asc'
  | 'is_completed_desc'
  | 'schedule_date_asc'
  | 'schedule_date_desc'
  | 'deadline_asc'
  | 'deadline_desc'
  | '_id_asc'
  | '_id_desc'

export interface _WorkOrderFilter {
  AND?: Maybe<Array<_WorkOrderFilter>>
  OR?: Maybe<Array<_WorkOrderFilter>>
  id?: Maybe<Scalars['ID']>
  id_not?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  id_not_in?: Maybe<Array<Scalars['ID']>>
  id_regexp?: Maybe<Scalars['ID']>
  id_contains?: Maybe<Scalars['ID']>
  id_not_contains?: Maybe<Scalars['ID']>
  id_starts_with?: Maybe<Scalars['ID']>
  id_not_starts_with?: Maybe<Scalars['ID']>
  id_ends_with?: Maybe<Scalars['ID']>
  id_not_ends_with?: Maybe<Scalars['ID']>
  is_completed?: Maybe<Scalars['Boolean']>
  is_completed_not?: Maybe<Scalars['Boolean']>
  schedule_date?: Maybe<Scalars['String']>
  schedule_date_not?: Maybe<Scalars['String']>
  schedule_date_in?: Maybe<Array<Scalars['String']>>
  schedule_date_not_in?: Maybe<Array<Scalars['String']>>
  schedule_date_regexp?: Maybe<Scalars['String']>
  schedule_date_contains?: Maybe<Scalars['String']>
  schedule_date_not_contains?: Maybe<Scalars['String']>
  schedule_date_starts_with?: Maybe<Scalars['String']>
  schedule_date_not_starts_with?: Maybe<Scalars['String']>
  schedule_date_ends_with?: Maybe<Scalars['String']>
  schedule_date_not_ends_with?: Maybe<Scalars['String']>
  deadline?: Maybe<Scalars['String']>
  deadline_not?: Maybe<Scalars['String']>
  deadline_in?: Maybe<Array<Scalars['String']>>
  deadline_not_in?: Maybe<Array<Scalars['String']>>
  deadline_regexp?: Maybe<Scalars['String']>
  deadline_contains?: Maybe<Scalars['String']>
  deadline_not_contains?: Maybe<Scalars['String']>
  deadline_starts_with?: Maybe<Scalars['String']>
  deadline_not_starts_with?: Maybe<Scalars['String']>
  deadline_ends_with?: Maybe<Scalars['String']>
  deadline_not_ends_with?: Maybe<Scalars['String']>
  has_product?: Maybe<_MaterialFilter>
  has_product_not?: Maybe<_MaterialFilter>
  has_product_in?: Maybe<Array<_MaterialFilter>>
  has_product_not_in?: Maybe<Array<_MaterialFilter>>
  has_product_some?: Maybe<_MaterialFilter>
  has_product_none?: Maybe<_MaterialFilter>
  has_product_single?: Maybe<_MaterialFilter>
  has_product_every?: Maybe<_MaterialFilter>
  HAS_PRODUCT_rel?: Maybe<_WorkOrderHAS_PRODUCTFilter>
  HAS_PRODUCT_rel_not?: Maybe<_WorkOrderHAS_PRODUCTFilter>
  HAS_PRODUCT_rel_in?: Maybe<Array<_WorkOrderHAS_PRODUCTFilter>>
  HAS_PRODUCT_rel_not_in?: Maybe<Array<_WorkOrderHAS_PRODUCTFilter>>
  HAS_PRODUCT_rel_some?: Maybe<_WorkOrderHAS_PRODUCTFilter>
  HAS_PRODUCT_rel_none?: Maybe<_WorkOrderHAS_PRODUCTFilter>
  HAS_PRODUCT_rel_single?: Maybe<_WorkOrderHAS_PRODUCTFilter>
  HAS_PRODUCT_rel_every?: Maybe<_WorkOrderHAS_PRODUCTFilter>
  has_task?: Maybe<_ProcedureTaskFilter>
  has_task_not?: Maybe<_ProcedureTaskFilter>
  has_task_in?: Maybe<Array<_ProcedureTaskFilter>>
  has_task_not_in?: Maybe<Array<_ProcedureTaskFilter>>
  has_task_some?: Maybe<_ProcedureTaskFilter>
  has_task_none?: Maybe<_ProcedureTaskFilter>
  has_task_single?: Maybe<_ProcedureTaskFilter>
  has_task_every?: Maybe<_ProcedureTaskFilter>
}

export interface _ProcedureTaskCreate {
  id?: Maybe<Scalars['ID']>
  name: Scalars['String']
  is_completed: Scalars['Boolean']
  amount: Scalars['Int']
}

export interface _ProcedureTaskUpdate {
  id?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
  is_completed?: Maybe<Scalars['Boolean']>
  amount?: Maybe<Scalars['Int']>
}

export interface _ProcedureTaskWhere {
  AND?: Maybe<Array<_ProcedureTaskWhere>>
  OR?: Maybe<Array<_ProcedureTaskWhere>>
  id?: Maybe<Scalars['ID']>
  id_not?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  id_not_in?: Maybe<Array<Scalars['ID']>>
  id_regexp?: Maybe<Scalars['ID']>
  id_contains?: Maybe<Scalars['ID']>
  id_not_contains?: Maybe<Scalars['ID']>
  id_starts_with?: Maybe<Scalars['ID']>
  id_not_starts_with?: Maybe<Scalars['ID']>
  id_ends_with?: Maybe<Scalars['ID']>
  id_not_ends_with?: Maybe<Scalars['ID']>
}

export interface _ProcedureTaskKeys {
  id?: Maybe<Scalars['ID']>
}

export type _ProcedureTaskOrdering =
  | 'id_asc'
  | 'id_desc'
  | 'name_asc'
  | 'name_desc'
  | 'is_completed_asc'
  | 'is_completed_desc'
  | 'amount_asc'
  | 'amount_desc'
  | '_id_asc'
  | '_id_desc'

export interface _ProcedureTaskFilter {
  AND?: Maybe<Array<_ProcedureTaskFilter>>
  OR?: Maybe<Array<_ProcedureTaskFilter>>
  id?: Maybe<Scalars['ID']>
  id_not?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  id_not_in?: Maybe<Array<Scalars['ID']>>
  id_regexp?: Maybe<Scalars['ID']>
  id_contains?: Maybe<Scalars['ID']>
  id_not_contains?: Maybe<Scalars['ID']>
  id_starts_with?: Maybe<Scalars['ID']>
  id_not_starts_with?: Maybe<Scalars['ID']>
  id_ends_with?: Maybe<Scalars['ID']>
  id_not_ends_with?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
  name_not?: Maybe<Scalars['String']>
  name_in?: Maybe<Array<Scalars['String']>>
  name_not_in?: Maybe<Array<Scalars['String']>>
  name_regexp?: Maybe<Scalars['String']>
  name_contains?: Maybe<Scalars['String']>
  name_not_contains?: Maybe<Scalars['String']>
  name_starts_with?: Maybe<Scalars['String']>
  name_not_starts_with?: Maybe<Scalars['String']>
  name_ends_with?: Maybe<Scalars['String']>
  name_not_ends_with?: Maybe<Scalars['String']>
  is_completed?: Maybe<Scalars['Boolean']>
  is_completed_not?: Maybe<Scalars['Boolean']>
  amount?: Maybe<Scalars['Int']>
  amount_not?: Maybe<Scalars['Int']>
  amount_in?: Maybe<Array<Scalars['Int']>>
  amount_not_in?: Maybe<Array<Scalars['Int']>>
  amount_lt?: Maybe<Scalars['Int']>
  amount_lte?: Maybe<Scalars['Int']>
  amount_gt?: Maybe<Scalars['Int']>
  amount_gte?: Maybe<Scalars['Int']>
  in_order?: Maybe<_WorkOrderFilter>
  in_order_not?: Maybe<_WorkOrderFilter>
  in_order_in?: Maybe<Array<_WorkOrderFilter>>
  in_order_not_in?: Maybe<Array<_WorkOrderFilter>>
  uses_procedure?: Maybe<_ProcedureFilter>
  uses_procedure_not?: Maybe<_ProcedureFilter>
  uses_procedure_in?: Maybe<Array<_ProcedureFilter>>
  uses_procedure_not_in?: Maybe<Array<_ProcedureFilter>>
  uses_procedure_some?: Maybe<_ProcedureFilter>
  uses_procedure_none?: Maybe<_ProcedureFilter>
  uses_procedure_single?: Maybe<_ProcedureFilter>
  uses_procedure_every?: Maybe<_ProcedureFilter>
  users?: Maybe<_UserFilter>
  users_not?: Maybe<_UserFilter>
  users_in?: Maybe<Array<_UserFilter>>
  users_not_in?: Maybe<Array<_UserFilter>>
  users_some?: Maybe<_UserFilter>
  users_none?: Maybe<_UserFilter>
  users_single?: Maybe<_UserFilter>
  users_every?: Maybe<_UserFilter>
}

export interface _UserEXECUTESFilter {
  AND?: Maybe<Array<_UserEXECUTESFilter>>
  OR?: Maybe<Array<_UserEXECUTESFilter>>
  at_time?: Maybe<Scalars['String']>
  at_time_not?: Maybe<Scalars['String']>
  at_time_in?: Maybe<Array<Scalars['String']>>
  at_time_not_in?: Maybe<Array<Scalars['String']>>
  at_time_regexp?: Maybe<Scalars['String']>
  at_time_contains?: Maybe<Scalars['String']>
  at_time_not_contains?: Maybe<Scalars['String']>
  at_time_starts_with?: Maybe<Scalars['String']>
  at_time_not_starts_with?: Maybe<Scalars['String']>
  at_time_ends_with?: Maybe<Scalars['String']>
  at_time_not_ends_with?: Maybe<Scalars['String']>
  amount?: Maybe<Scalars['Int']>
  amount_not?: Maybe<Scalars['Int']>
  amount_in?: Maybe<Array<Scalars['Int']>>
  amount_not_in?: Maybe<Array<Scalars['Int']>>
  amount_lt?: Maybe<Scalars['Int']>
  amount_lte?: Maybe<Scalars['Int']>
  amount_gt?: Maybe<Scalars['Int']>
  amount_gte?: Maybe<Scalars['Int']>
  ProcedureTask?: Maybe<_ProcedureTaskFilter>
}

export type _EXECUTESOrdering =
  | 'at_time_asc'
  | 'at_time_desc'
  | 'amount_asc'
  | 'amount_desc'
  | '_id_asc'
  | '_id_desc'

export interface _EXECUTESInput {
  at_time: Scalars['String']
  amount: Scalars['Int']
}

export interface _UserCreate {
  id?: Maybe<Scalars['ID']>
  name: Scalars['String']
}

export interface _UserUpdate {
  id?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
}

export interface _UserWhere {
  AND?: Maybe<Array<_UserWhere>>
  OR?: Maybe<Array<_UserWhere>>
  id?: Maybe<Scalars['ID']>
  id_not?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  id_not_in?: Maybe<Array<Scalars['ID']>>
  id_regexp?: Maybe<Scalars['ID']>
  id_contains?: Maybe<Scalars['ID']>
  id_not_contains?: Maybe<Scalars['ID']>
  id_starts_with?: Maybe<Scalars['ID']>
  id_not_starts_with?: Maybe<Scalars['ID']>
  id_ends_with?: Maybe<Scalars['ID']>
  id_not_ends_with?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
  name_not?: Maybe<Scalars['String']>
  name_in?: Maybe<Array<Scalars['String']>>
  name_not_in?: Maybe<Array<Scalars['String']>>
  name_regexp?: Maybe<Scalars['String']>
  name_contains?: Maybe<Scalars['String']>
  name_not_contains?: Maybe<Scalars['String']>
  name_starts_with?: Maybe<Scalars['String']>
  name_not_starts_with?: Maybe<Scalars['String']>
  name_ends_with?: Maybe<Scalars['String']>
  name_not_ends_with?: Maybe<Scalars['String']>
}

export interface _UserKeys {
  id?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
}

export type _UserOrdering =
  | 'id_asc'
  | 'id_desc'
  | 'name_asc'
  | 'name_desc'
  | '_id_asc'
  | '_id_desc'

export interface _UserFilter {
  AND?: Maybe<Array<_UserFilter>>
  OR?: Maybe<Array<_UserFilter>>
  id?: Maybe<Scalars['ID']>
  id_not?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  id_not_in?: Maybe<Array<Scalars['ID']>>
  id_regexp?: Maybe<Scalars['ID']>
  id_contains?: Maybe<Scalars['ID']>
  id_not_contains?: Maybe<Scalars['ID']>
  id_starts_with?: Maybe<Scalars['ID']>
  id_not_starts_with?: Maybe<Scalars['ID']>
  id_ends_with?: Maybe<Scalars['ID']>
  id_not_ends_with?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
  name_not?: Maybe<Scalars['String']>
  name_in?: Maybe<Array<Scalars['String']>>
  name_not_in?: Maybe<Array<Scalars['String']>>
  name_regexp?: Maybe<Scalars['String']>
  name_contains?: Maybe<Scalars['String']>
  name_not_contains?: Maybe<Scalars['String']>
  name_starts_with?: Maybe<Scalars['String']>
  name_not_starts_with?: Maybe<Scalars['String']>
  name_ends_with?: Maybe<Scalars['String']>
  name_not_ends_with?: Maybe<Scalars['String']>
  executes?: Maybe<_ProcedureTaskFilter>
  executes_not?: Maybe<_ProcedureTaskFilter>
  executes_in?: Maybe<Array<_ProcedureTaskFilter>>
  executes_not_in?: Maybe<Array<_ProcedureTaskFilter>>
  executes_some?: Maybe<_ProcedureTaskFilter>
  executes_none?: Maybe<_ProcedureTaskFilter>
  executes_single?: Maybe<_ProcedureTaskFilter>
  executes_every?: Maybe<_ProcedureTaskFilter>
  EXECUTES_rel?: Maybe<_UserEXECUTESFilter>
  EXECUTES_rel_not?: Maybe<_UserEXECUTESFilter>
  EXECUTES_rel_in?: Maybe<Array<_UserEXECUTESFilter>>
  EXECUTES_rel_not_in?: Maybe<Array<_UserEXECUTESFilter>>
  EXECUTES_rel_some?: Maybe<_UserEXECUTESFilter>
  EXECUTES_rel_none?: Maybe<_UserEXECUTESFilter>
  EXECUTES_rel_single?: Maybe<_UserEXECUTESFilter>
  EXECUTES_rel_every?: Maybe<_UserEXECUTESFilter>
}

export interface _CraftHAS_PROCEDUREFilter {
  AND?: Maybe<Array<_CraftHAS_PROCEDUREFilter>>
  OR?: Maybe<Array<_CraftHAS_PROCEDUREFilter>>
  type?: Maybe<Scalars['String']>
  type_not?: Maybe<Scalars['String']>
  type_in?: Maybe<Array<Scalars['String']>>
  type_not_in?: Maybe<Array<Scalars['String']>>
  type_regexp?: Maybe<Scalars['String']>
  type_contains?: Maybe<Scalars['String']>
  type_not_contains?: Maybe<Scalars['String']>
  type_starts_with?: Maybe<Scalars['String']>
  type_not_starts_with?: Maybe<Scalars['String']>
  type_ends_with?: Maybe<Scalars['String']>
  type_not_ends_with?: Maybe<Scalars['String']>
  Procedure?: Maybe<_ProcedureFilter>
}

export type _HAS_PROCEDUREOrdering =
  | 'type_asc'
  | 'type_desc'
  | '_id_asc'
  | '_id_desc'

export interface _HAS_PROCEDUREInput {
  type?: Maybe<Scalars['String']>
}

export interface _CraftCreate {
  id?: Maybe<Scalars['ID']>
  name: Scalars['String']
}

export interface _CraftUpdate {
  id?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
}

export interface _CraftWhere {
  AND?: Maybe<Array<_CraftWhere>>
  OR?: Maybe<Array<_CraftWhere>>
  id?: Maybe<Scalars['ID']>
  id_not?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  id_not_in?: Maybe<Array<Scalars['ID']>>
  id_regexp?: Maybe<Scalars['ID']>
  id_contains?: Maybe<Scalars['ID']>
  id_not_contains?: Maybe<Scalars['ID']>
  id_starts_with?: Maybe<Scalars['ID']>
  id_not_starts_with?: Maybe<Scalars['ID']>
  id_ends_with?: Maybe<Scalars['ID']>
  id_not_ends_with?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
  name_not?: Maybe<Scalars['String']>
  name_in?: Maybe<Array<Scalars['String']>>
  name_not_in?: Maybe<Array<Scalars['String']>>
  name_regexp?: Maybe<Scalars['String']>
  name_contains?: Maybe<Scalars['String']>
  name_not_contains?: Maybe<Scalars['String']>
  name_starts_with?: Maybe<Scalars['String']>
  name_not_starts_with?: Maybe<Scalars['String']>
  name_ends_with?: Maybe<Scalars['String']>
  name_not_ends_with?: Maybe<Scalars['String']>
}

export interface _CraftKeys {
  id?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
}

export type _CraftOrdering =
  | 'id_asc'
  | 'id_desc'
  | 'name_asc'
  | 'name_desc'
  | '_id_asc'
  | '_id_desc'

export interface _CraftFilter {
  AND?: Maybe<Array<_CraftFilter>>
  OR?: Maybe<Array<_CraftFilter>>
  id?: Maybe<Scalars['ID']>
  id_not?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  id_not_in?: Maybe<Array<Scalars['ID']>>
  id_regexp?: Maybe<Scalars['ID']>
  id_contains?: Maybe<Scalars['ID']>
  id_not_contains?: Maybe<Scalars['ID']>
  id_starts_with?: Maybe<Scalars['ID']>
  id_not_starts_with?: Maybe<Scalars['ID']>
  id_ends_with?: Maybe<Scalars['ID']>
  id_not_ends_with?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
  name_not?: Maybe<Scalars['String']>
  name_in?: Maybe<Array<Scalars['String']>>
  name_not_in?: Maybe<Array<Scalars['String']>>
  name_regexp?: Maybe<Scalars['String']>
  name_contains?: Maybe<Scalars['String']>
  name_not_contains?: Maybe<Scalars['String']>
  name_starts_with?: Maybe<Scalars['String']>
  name_not_starts_with?: Maybe<Scalars['String']>
  name_ends_with?: Maybe<Scalars['String']>
  name_not_ends_with?: Maybe<Scalars['String']>
  uses_bom?: Maybe<_BOMFilter>
  uses_bom_not?: Maybe<_BOMFilter>
  uses_bom_in?: Maybe<Array<_BOMFilter>>
  uses_bom_not_in?: Maybe<Array<_BOMFilter>>
  uses_bom_some?: Maybe<_BOMFilter>
  uses_bom_none?: Maybe<_BOMFilter>
  uses_bom_single?: Maybe<_BOMFilter>
  uses_bom_every?: Maybe<_BOMFilter>
  first_procedure?: Maybe<_ProcedureFilter>
  first_procedure_not?: Maybe<_ProcedureFilter>
  first_procedure_in?: Maybe<Array<_ProcedureFilter>>
  first_procedure_not_in?: Maybe<Array<_ProcedureFilter>>
  first_procedure_some?: Maybe<_ProcedureFilter>
  first_procedure_none?: Maybe<_ProcedureFilter>
  first_procedure_single?: Maybe<_ProcedureFilter>
  first_procedure_every?: Maybe<_ProcedureFilter>
  last_procedure?: Maybe<_ProcedureFilter>
  last_procedure_not?: Maybe<_ProcedureFilter>
  last_procedure_in?: Maybe<Array<_ProcedureFilter>>
  last_procedure_not_in?: Maybe<Array<_ProcedureFilter>>
  last_procedure_some?: Maybe<_ProcedureFilter>
  last_procedure_none?: Maybe<_ProcedureFilter>
  last_procedure_single?: Maybe<_ProcedureFilter>
  last_procedure_every?: Maybe<_ProcedureFilter>
  has_procedure?: Maybe<_ProcedureFilter>
  has_procedure_not?: Maybe<_ProcedureFilter>
  has_procedure_in?: Maybe<Array<_ProcedureFilter>>
  has_procedure_not_in?: Maybe<Array<_ProcedureFilter>>
  has_procedure_some?: Maybe<_ProcedureFilter>
  has_procedure_none?: Maybe<_ProcedureFilter>
  has_procedure_single?: Maybe<_ProcedureFilter>
  has_procedure_every?: Maybe<_ProcedureFilter>
  HAS_PROCEDURE_rel?: Maybe<_CraftHAS_PROCEDUREFilter>
  HAS_PROCEDURE_rel_not?: Maybe<_CraftHAS_PROCEDUREFilter>
  HAS_PROCEDURE_rel_in?: Maybe<Array<_CraftHAS_PROCEDUREFilter>>
  HAS_PROCEDURE_rel_not_in?: Maybe<Array<_CraftHAS_PROCEDUREFilter>>
  HAS_PROCEDURE_rel_some?: Maybe<_CraftHAS_PROCEDUREFilter>
  HAS_PROCEDURE_rel_none?: Maybe<_CraftHAS_PROCEDUREFilter>
  HAS_PROCEDURE_rel_single?: Maybe<_CraftHAS_PROCEDUREFilter>
  HAS_PROCEDURE_rel_every?: Maybe<_CraftHAS_PROCEDUREFilter>
  materials?: Maybe<_MaterialFilter>
  materials_not?: Maybe<_MaterialFilter>
  materials_in?: Maybe<Array<_MaterialFilter>>
  materials_not_in?: Maybe<Array<_MaterialFilter>>
  materials_some?: Maybe<_MaterialFilter>
  materials_none?: Maybe<_MaterialFilter>
  materials_single?: Maybe<_MaterialFilter>
  materials_every?: Maybe<_MaterialFilter>
}

export interface _CraftSearch {
  CraftSearch?: Maybe<Scalars['String']>
  threshold?: Maybe<Scalars['Float']>
}

export interface _ProcedureCreate {
  id?: Maybe<Scalars['ID']>
  name: Scalars['String']
}

export interface _ProcedureUpdate {
  id?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
}

export interface _ProcedureWhere {
  AND?: Maybe<Array<_ProcedureWhere>>
  OR?: Maybe<Array<_ProcedureWhere>>
  id?: Maybe<Scalars['ID']>
  id_not?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  id_not_in?: Maybe<Array<Scalars['ID']>>
  id_regexp?: Maybe<Scalars['ID']>
  id_contains?: Maybe<Scalars['ID']>
  id_not_contains?: Maybe<Scalars['ID']>
  id_starts_with?: Maybe<Scalars['ID']>
  id_not_starts_with?: Maybe<Scalars['ID']>
  id_ends_with?: Maybe<Scalars['ID']>
  id_not_ends_with?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
  name_not?: Maybe<Scalars['String']>
  name_in?: Maybe<Array<Scalars['String']>>
  name_not_in?: Maybe<Array<Scalars['String']>>
  name_regexp?: Maybe<Scalars['String']>
  name_contains?: Maybe<Scalars['String']>
  name_not_contains?: Maybe<Scalars['String']>
  name_starts_with?: Maybe<Scalars['String']>
  name_not_starts_with?: Maybe<Scalars['String']>
  name_ends_with?: Maybe<Scalars['String']>
  name_not_ends_with?: Maybe<Scalars['String']>
}

export interface _ProcedureKeys {
  id?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
}

export type _ProcedureOrdering =
  | 'id_asc'
  | 'id_desc'
  | 'name_asc'
  | 'name_desc'
  | '_id_asc'
  | '_id_desc'

export interface _ProcedureFilter {
  AND?: Maybe<Array<_ProcedureFilter>>
  OR?: Maybe<Array<_ProcedureFilter>>
  id?: Maybe<Scalars['ID']>
  id_not?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  id_not_in?: Maybe<Array<Scalars['ID']>>
  id_regexp?: Maybe<Scalars['ID']>
  id_contains?: Maybe<Scalars['ID']>
  id_not_contains?: Maybe<Scalars['ID']>
  id_starts_with?: Maybe<Scalars['ID']>
  id_not_starts_with?: Maybe<Scalars['ID']>
  id_ends_with?: Maybe<Scalars['ID']>
  id_not_ends_with?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
  name_not?: Maybe<Scalars['String']>
  name_in?: Maybe<Array<Scalars['String']>>
  name_not_in?: Maybe<Array<Scalars['String']>>
  name_regexp?: Maybe<Scalars['String']>
  name_contains?: Maybe<Scalars['String']>
  name_not_contains?: Maybe<Scalars['String']>
  name_starts_with?: Maybe<Scalars['String']>
  name_not_starts_with?: Maybe<Scalars['String']>
  name_ends_with?: Maybe<Scalars['String']>
  name_not_ends_with?: Maybe<Scalars['String']>
  next?: Maybe<_ProcedureFilter>
  next_not?: Maybe<_ProcedureFilter>
  next_in?: Maybe<Array<_ProcedureFilter>>
  next_not_in?: Maybe<Array<_ProcedureFilter>>
  next_some?: Maybe<_ProcedureFilter>
  next_none?: Maybe<_ProcedureFilter>
  next_single?: Maybe<_ProcedureFilter>
  next_every?: Maybe<_ProcedureFilter>
  crafts_first_procedure?: Maybe<_CraftFilter>
  crafts_first_procedure_not?: Maybe<_CraftFilter>
  crafts_first_procedure_in?: Maybe<Array<_CraftFilter>>
  crafts_first_procedure_not_in?: Maybe<Array<_CraftFilter>>
  crafts_first_procedure_some?: Maybe<_CraftFilter>
  crafts_first_procedure_none?: Maybe<_CraftFilter>
  crafts_first_procedure_single?: Maybe<_CraftFilter>
  crafts_first_procedure_every?: Maybe<_CraftFilter>
  crafts_last_procedure?: Maybe<_CraftFilter>
  crafts_last_procedure_not?: Maybe<_CraftFilter>
  crafts_last_procedure_in?: Maybe<Array<_CraftFilter>>
  crafts_last_procedure_not_in?: Maybe<Array<_CraftFilter>>
  crafts_last_procedure_some?: Maybe<_CraftFilter>
  crafts_last_procedure_none?: Maybe<_CraftFilter>
  crafts_last_procedure_single?: Maybe<_CraftFilter>
  crafts_last_procedure_every?: Maybe<_CraftFilter>
  proceduretasks_uses_procedure?: Maybe<_ProcedureTaskFilter>
  proceduretasks_uses_procedure_not?: Maybe<_ProcedureTaskFilter>
  proceduretasks_uses_procedure_in?: Maybe<Array<_ProcedureTaskFilter>>
  proceduretasks_uses_procedure_not_in?: Maybe<Array<_ProcedureTaskFilter>>
  proceduretasks_uses_procedure_some?: Maybe<_ProcedureTaskFilter>
  proceduretasks_uses_procedure_none?: Maybe<_ProcedureTaskFilter>
  proceduretasks_uses_procedure_single?: Maybe<_ProcedureTaskFilter>
  proceduretasks_uses_procedure_every?: Maybe<_ProcedureTaskFilter>
  crafts_has_procedure?: Maybe<_CraftFilter>
  crafts_has_procedure_not?: Maybe<_CraftFilter>
  crafts_has_procedure_in?: Maybe<Array<_CraftFilter>>
  crafts_has_procedure_not_in?: Maybe<Array<_CraftFilter>>
  crafts_has_procedure_some?: Maybe<_CraftFilter>
  crafts_has_procedure_none?: Maybe<_CraftFilter>
  crafts_has_procedure_single?: Maybe<_CraftFilter>
  crafts_has_procedure_every?: Maybe<_CraftFilter>
}

export interface _MaterialCreate {
  id?: Maybe<Scalars['ID']>
  name: Scalars['String']
}

export interface _MaterialUpdate {
  id?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
}

export interface _MaterialWhere {
  AND?: Maybe<Array<_MaterialWhere>>
  OR?: Maybe<Array<_MaterialWhere>>
  id?: Maybe<Scalars['ID']>
  id_not?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  id_not_in?: Maybe<Array<Scalars['ID']>>
  id_regexp?: Maybe<Scalars['ID']>
  id_contains?: Maybe<Scalars['ID']>
  id_not_contains?: Maybe<Scalars['ID']>
  id_starts_with?: Maybe<Scalars['ID']>
  id_not_starts_with?: Maybe<Scalars['ID']>
  id_ends_with?: Maybe<Scalars['ID']>
  id_not_ends_with?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
  name_not?: Maybe<Scalars['String']>
  name_in?: Maybe<Array<Scalars['String']>>
  name_not_in?: Maybe<Array<Scalars['String']>>
  name_regexp?: Maybe<Scalars['String']>
  name_contains?: Maybe<Scalars['String']>
  name_not_contains?: Maybe<Scalars['String']>
  name_starts_with?: Maybe<Scalars['String']>
  name_not_starts_with?: Maybe<Scalars['String']>
  name_ends_with?: Maybe<Scalars['String']>
  name_not_ends_with?: Maybe<Scalars['String']>
}

export interface _MaterialKeys {
  id?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
}

export type _MaterialOrdering =
  | 'id_asc'
  | 'id_desc'
  | 'name_asc'
  | 'name_desc'
  | '_id_asc'
  | '_id_desc'

export interface _MaterialFilter {
  AND?: Maybe<Array<_MaterialFilter>>
  OR?: Maybe<Array<_MaterialFilter>>
  id?: Maybe<Scalars['ID']>
  id_not?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  id_not_in?: Maybe<Array<Scalars['ID']>>
  id_regexp?: Maybe<Scalars['ID']>
  id_contains?: Maybe<Scalars['ID']>
  id_not_contains?: Maybe<Scalars['ID']>
  id_starts_with?: Maybe<Scalars['ID']>
  id_not_starts_with?: Maybe<Scalars['ID']>
  id_ends_with?: Maybe<Scalars['ID']>
  id_not_ends_with?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
  name_not?: Maybe<Scalars['String']>
  name_in?: Maybe<Array<Scalars['String']>>
  name_not_in?: Maybe<Array<Scalars['String']>>
  name_regexp?: Maybe<Scalars['String']>
  name_contains?: Maybe<Scalars['String']>
  name_not_contains?: Maybe<Scalars['String']>
  name_starts_with?: Maybe<Scalars['String']>
  name_not_starts_with?: Maybe<Scalars['String']>
  name_ends_with?: Maybe<Scalars['String']>
  name_not_ends_with?: Maybe<Scalars['String']>
  has_craft?: Maybe<_CraftFilter>
  has_craft_not?: Maybe<_CraftFilter>
  has_craft_in?: Maybe<Array<_CraftFilter>>
  has_craft_not_in?: Maybe<Array<_CraftFilter>>
  has_craft_some?: Maybe<_CraftFilter>
  has_craft_none?: Maybe<_CraftFilter>
  has_craft_single?: Maybe<_CraftFilter>
  has_craft_every?: Maybe<_CraftFilter>
  boms?: Maybe<_BOMFilter>
  boms_not?: Maybe<_BOMFilter>
  boms_in?: Maybe<Array<_BOMFilter>>
  boms_not_in?: Maybe<Array<_BOMFilter>>
  boms_some?: Maybe<_BOMFilter>
  boms_none?: Maybe<_BOMFilter>
  boms_single?: Maybe<_BOMFilter>
  boms_every?: Maybe<_BOMFilter>
  workorders?: Maybe<_WorkOrderFilter>
  workorders_not?: Maybe<_WorkOrderFilter>
  workorders_in?: Maybe<Array<_WorkOrderFilter>>
  workorders_not_in?: Maybe<Array<_WorkOrderFilter>>
  workorders_some?: Maybe<_WorkOrderFilter>
  workorders_none?: Maybe<_WorkOrderFilter>
  workorders_single?: Maybe<_WorkOrderFilter>
  workorders_every?: Maybe<_WorkOrderFilter>
}

export interface _BOMUSES_MATERIALFilter {
  AND?: Maybe<Array<_BOMUSES_MATERIALFilter>>
  OR?: Maybe<Array<_BOMUSES_MATERIALFilter>>
  amount?: Maybe<Scalars['Int']>
  amount_not?: Maybe<Scalars['Int']>
  amount_in?: Maybe<Array<Scalars['Int']>>
  amount_not_in?: Maybe<Array<Scalars['Int']>>
  amount_lt?: Maybe<Scalars['Int']>
  amount_lte?: Maybe<Scalars['Int']>
  amount_gt?: Maybe<Scalars['Int']>
  amount_gte?: Maybe<Scalars['Int']>
  Material?: Maybe<_MaterialFilter>
}

export type _USES_MATERIALOrdering =
  | 'amount_asc'
  | 'amount_desc'
  | '_id_asc'
  | '_id_desc'

export interface _USES_MATERIALInput {
  amount: Scalars['Int']
}

export interface _BOMCreate {
  id?: Maybe<Scalars['ID']>
  name: Scalars['String']
}

export interface _BOMUpdate {
  id?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
}

export interface _BOMWhere {
  AND?: Maybe<Array<_BOMWhere>>
  OR?: Maybe<Array<_BOMWhere>>
  id?: Maybe<Scalars['ID']>
  id_not?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  id_not_in?: Maybe<Array<Scalars['ID']>>
  id_regexp?: Maybe<Scalars['ID']>
  id_contains?: Maybe<Scalars['ID']>
  id_not_contains?: Maybe<Scalars['ID']>
  id_starts_with?: Maybe<Scalars['ID']>
  id_not_starts_with?: Maybe<Scalars['ID']>
  id_ends_with?: Maybe<Scalars['ID']>
  id_not_ends_with?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
  name_not?: Maybe<Scalars['String']>
  name_in?: Maybe<Array<Scalars['String']>>
  name_not_in?: Maybe<Array<Scalars['String']>>
  name_regexp?: Maybe<Scalars['String']>
  name_contains?: Maybe<Scalars['String']>
  name_not_contains?: Maybe<Scalars['String']>
  name_starts_with?: Maybe<Scalars['String']>
  name_not_starts_with?: Maybe<Scalars['String']>
  name_ends_with?: Maybe<Scalars['String']>
  name_not_ends_with?: Maybe<Scalars['String']>
}

export interface _BOMKeys {
  id?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
}

export type _BOMOrdering =
  | 'id_asc'
  | 'id_desc'
  | 'name_asc'
  | 'name_desc'
  | '_id_asc'
  | '_id_desc'

export interface _BOMFilter {
  AND?: Maybe<Array<_BOMFilter>>
  OR?: Maybe<Array<_BOMFilter>>
  id?: Maybe<Scalars['ID']>
  id_not?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  id_not_in?: Maybe<Array<Scalars['ID']>>
  id_regexp?: Maybe<Scalars['ID']>
  id_contains?: Maybe<Scalars['ID']>
  id_not_contains?: Maybe<Scalars['ID']>
  id_starts_with?: Maybe<Scalars['ID']>
  id_not_starts_with?: Maybe<Scalars['ID']>
  id_ends_with?: Maybe<Scalars['ID']>
  id_not_ends_with?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
  name_not?: Maybe<Scalars['String']>
  name_in?: Maybe<Array<Scalars['String']>>
  name_not_in?: Maybe<Array<Scalars['String']>>
  name_regexp?: Maybe<Scalars['String']>
  name_contains?: Maybe<Scalars['String']>
  name_not_contains?: Maybe<Scalars['String']>
  name_starts_with?: Maybe<Scalars['String']>
  name_not_starts_with?: Maybe<Scalars['String']>
  name_ends_with?: Maybe<Scalars['String']>
  name_not_ends_with?: Maybe<Scalars['String']>
  uses_material?: Maybe<_MaterialFilter>
  uses_material_not?: Maybe<_MaterialFilter>
  uses_material_in?: Maybe<Array<_MaterialFilter>>
  uses_material_not_in?: Maybe<Array<_MaterialFilter>>
  uses_material_some?: Maybe<_MaterialFilter>
  uses_material_none?: Maybe<_MaterialFilter>
  uses_material_single?: Maybe<_MaterialFilter>
  uses_material_every?: Maybe<_MaterialFilter>
  USES_MATERIAL_rel?: Maybe<_BOMUSES_MATERIALFilter>
  USES_MATERIAL_rel_not?: Maybe<_BOMUSES_MATERIALFilter>
  USES_MATERIAL_rel_in?: Maybe<Array<_BOMUSES_MATERIALFilter>>
  USES_MATERIAL_rel_not_in?: Maybe<Array<_BOMUSES_MATERIALFilter>>
  USES_MATERIAL_rel_some?: Maybe<_BOMUSES_MATERIALFilter>
  USES_MATERIAL_rel_none?: Maybe<_BOMUSES_MATERIALFilter>
  USES_MATERIAL_rel_single?: Maybe<_BOMUSES_MATERIALFilter>
  USES_MATERIAL_rel_every?: Maybe<_BOMUSES_MATERIALFilter>
  crafts?: Maybe<_CraftFilter>
  crafts_not?: Maybe<_CraftFilter>
  crafts_in?: Maybe<Array<_CraftFilter>>
  crafts_not_in?: Maybe<Array<_CraftFilter>>
  crafts_some?: Maybe<_CraftFilter>
  crafts_none?: Maybe<_CraftFilter>
  crafts_single?: Maybe<_CraftFilter>
  crafts_every?: Maybe<_CraftFilter>
}

export interface _BOMDetail {
  name: Scalars['String']
  amount: Scalars['Int']
}

export interface _craftDetail {
  name: Scalars['String']
  next?: Maybe<Scalars['String']>
}

/** Generated Time input object for Neo4j [Temporal field arguments](https://grandstack.io/docs/graphql-temporal-types-datetime/#temporal-query-arguments). */
export interface _Neo4jTimeInput {
  hour?: Maybe<Scalars['Int']>
  minute?: Maybe<Scalars['Int']>
  second?: Maybe<Scalars['Int']>
  millisecond?: Maybe<Scalars['Int']>
  microsecond?: Maybe<Scalars['Int']>
  nanosecond?: Maybe<Scalars['Int']>
  timezone?: Maybe<Scalars['String']>
  /** Creates a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime/#using-temporal-fields-in-mutations) Time value using a [String format](https://neo4j.com/docs/cypher-manual/current/functions/temporal/time/#functions-time-create-string). */
  formatted?: Maybe<Scalars['String']>
}

/** Generated Date input object for Neo4j [Temporal field arguments](https://grandstack.io/docs/graphql-temporal-types-datetime/#temporal-query-arguments). */
export interface _Neo4jDateInput {
  year?: Maybe<Scalars['Int']>
  month?: Maybe<Scalars['Int']>
  day?: Maybe<Scalars['Int']>
  /** Creates a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime/#using-temporal-fields-in-mutations) Date value using a [String format](https://neo4j.com/docs/cypher-manual/current/functions/temporal/date/#functions-date-create-string). */
  formatted?: Maybe<Scalars['String']>
}

/** Generated DateTime input object for Neo4j [Temporal field arguments](https://grandstack.io/docs/graphql-temporal-types-datetime/#temporal-query-arguments). */
export interface _Neo4jDateTimeInput {
  year?: Maybe<Scalars['Int']>
  month?: Maybe<Scalars['Int']>
  day?: Maybe<Scalars['Int']>
  hour?: Maybe<Scalars['Int']>
  minute?: Maybe<Scalars['Int']>
  second?: Maybe<Scalars['Int']>
  millisecond?: Maybe<Scalars['Int']>
  microsecond?: Maybe<Scalars['Int']>
  nanosecond?: Maybe<Scalars['Int']>
  timezone?: Maybe<Scalars['String']>
  /** Creates a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime/#using-temporal-fields-in-mutations) DateTime value using a [String format](https://neo4j.com/docs/cypher-manual/current/functions/temporal/datetime/#functions-datetime-create-string). */
  formatted?: Maybe<Scalars['String']>
}

/** Generated LocalTime input object for Neo4j [Temporal field arguments](https://grandstack.io/docs/graphql-temporal-types-datetime/#temporal-query-arguments). */
export interface _Neo4jLocalTimeInput {
  hour?: Maybe<Scalars['Int']>
  minute?: Maybe<Scalars['Int']>
  second?: Maybe<Scalars['Int']>
  millisecond?: Maybe<Scalars['Int']>
  microsecond?: Maybe<Scalars['Int']>
  nanosecond?: Maybe<Scalars['Int']>
  /** Creates a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime/#using-temporal-fields-in-mutations) LocalTime value using a [String format](https://neo4j.com/docs/cypher-manual/current/functions/temporal/localtime/#functions-localtime-create-string). */
  formatted?: Maybe<Scalars['String']>
}

/** Generated LocalDateTime input object for Neo4j [Temporal field arguments](https://grandstack.io/docs/graphql-temporal-types-datetime/#temporal-query-arguments). */
export interface _Neo4jLocalDateTimeInput {
  year?: Maybe<Scalars['Int']>
  month?: Maybe<Scalars['Int']>
  day?: Maybe<Scalars['Int']>
  hour?: Maybe<Scalars['Int']>
  minute?: Maybe<Scalars['Int']>
  second?: Maybe<Scalars['Int']>
  millisecond?: Maybe<Scalars['Int']>
  microsecond?: Maybe<Scalars['Int']>
  nanosecond?: Maybe<Scalars['Int']>
  /** Creates a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime/#using-temporal-fields-in-mutations) LocalDateTime value using a [String format](https://neo4j.com/docs/cypher-manual/current/functions/temporal/localdatetime/#functions-localdatetime-create-string). */
  formatted?: Maybe<Scalars['String']>
}

export interface _Neo4jPointDistanceFilter {
  point: _Neo4jPointInput
  distance: Scalars['Float']
}

/** Generated Point input object for Neo4j [Spatial field arguments](https://grandstack.io/docs/graphql-spatial-types/#point-query-arguments). */
export interface _Neo4jPointInput {
  x?: Maybe<Scalars['Float']>
  y?: Maybe<Scalars['Float']>
  z?: Maybe<Scalars['Float']>
  longitude?: Maybe<Scalars['Float']>
  latitude?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  crs?: Maybe<Scalars['String']>
  srid?: Maybe<Scalars['Int']>
}

export type _RelationDirections = 'IN' | 'OUT'

export declare const scalarsEnumsHash: ScalarsEnumsHash
export declare const generatedSchema: {
  query: {
    __typename: { __type: 'String!' }
    listNextTask: {
      __type: '[ProcedureTask!]!'
      __args: {
        first: 'Int'
        offset: 'Int'
        orderBy: '[_ProcedureTaskOrdering]'
      }
    }
    WorkOrder: {
      __type: '[WorkOrder]'
      __args: {
        id: 'ID'
        is_completed: 'Boolean'
        schedule_date: 'String'
        deadline: 'String'
        _id: 'String'
        first: 'Int'
        offset: 'Int'
        orderBy: '[_WorkOrderOrdering]'
        filter: '_WorkOrderFilter'
      }
    }
    ProcedureTask: {
      __type: '[ProcedureTask]'
      __args: {
        id: 'ID'
        name: 'String'
        is_completed: 'Boolean'
        amount: 'Int'
        _id: 'String'
        first: 'Int'
        offset: 'Int'
        orderBy: '[_ProcedureTaskOrdering]'
        filter: '_ProcedureTaskFilter'
      }
    }
    User: {
      __type: '[User]'
      __args: {
        id: 'ID'
        name: 'String'
        _id: 'String'
        first: 'Int'
        offset: 'Int'
        orderBy: '[_UserOrdering]'
        filter: '_UserFilter'
      }
    }
    Craft: {
      __type: '[Craft]'
      __args: {
        id: 'ID'
        name: 'String'
        _id: 'String'
        first: 'Int'
        offset: 'Int'
        orderBy: '[_CraftOrdering]'
        filter: '_CraftFilter'
        search: '_CraftSearch'
      }
    }
    Procedure: {
      __type: '[Procedure]'
      __args: {
        id: 'ID'
        name: 'String'
        _id: 'String'
        first: 'Int'
        offset: 'Int'
        orderBy: '[_ProcedureOrdering]'
        filter: '_ProcedureFilter'
      }
    }
    Material: {
      __type: '[Material]'
      __args: {
        id: 'ID'
        name: 'String'
        _id: 'String'
        first: 'Int'
        offset: 'Int'
        orderBy: '[_MaterialOrdering]'
        filter: '_MaterialFilter'
      }
    }
    BOM: {
      __type: '[BOM]'
      __args: {
        id: 'ID'
        name: 'String'
        _id: 'String'
        first: 'Int'
        offset: 'Int'
        orderBy: '[_BOMOrdering]'
        filter: '_BOMFilter'
      }
    }
  }
  mutation: {
    __typename: { __type: 'String!' }
    CreateBOM: {
      __type: 'BOM!'
      __args: {
        productName: 'String!'
        BOMName: 'String!'
        bomDetail: '[_BOMDetail]!'
      }
    }
    CreateCraft: {
      __type: 'Craft!'
      __args: {
        productName: 'String!'
        craftName: 'String!'
        craftDetail: '[_craftDetail!]!'
      }
    }
    CreateOrder: {
      __type: 'WorkOrder!'
      __args: {
        productName: 'String!'
        productAmount: 'Int!'
        deadline: 'String!'
        craftName: 'String!'
      }
    }
    ExecuteTask: {
      __type: 'Boolean'
      __args: {
        userName: 'String!'
        taskId: 'String!'
        amount: 'Int!'
        time: 'String!'
      }
    }
    AddWorkOrderHas_product: {
      __type: '_AddWorkOrderHas_productPayload'
      __args: { from: '_WorkOrderWhere!'; to: '_MaterialWhere!' }
    }
    RemoveWorkOrderHas_product: {
      __type: '_RemoveWorkOrderHas_productPayload'
      __args: { from: '_WorkOrderWhere!'; to: '_MaterialWhere!' }
    }
    MergeWorkOrderHas_product: {
      __type: '_MergeWorkOrderHas_productPayload'
      __args: { from: '_WorkOrderWhere!'; to: '_MaterialWhere!' }
    }
    AddWorkOrderHAS_PRODUCT_rel: {
      __type: '_AddWorkOrderHAS_PRODUCT_relPayload'
      __args: {
        from: '_WorkOrderWhere!'
        to: '_MaterialWhere!'
        data: '_HAS_PRODUCTInput!'
      }
    }
    RemoveWorkOrderHAS_PRODUCT_rel: {
      __type: '_RemoveWorkOrderHAS_PRODUCT_relPayload'
      __args: { from: '_WorkOrderWhere!'; to: '_MaterialWhere!' }
    }
    UpdateWorkOrderHAS_PRODUCT_rel: {
      __type: '_UpdateWorkOrderHAS_PRODUCT_relPayload'
      __args: {
        from: '_WorkOrderWhere!'
        to: '_MaterialWhere!'
        data: '_HAS_PRODUCTInput!'
      }
    }
    MergeWorkOrderHAS_PRODUCT_rel: {
      __type: '_MergeWorkOrderHAS_PRODUCT_relPayload'
      __args: {
        from: '_WorkOrderWhere!'
        to: '_MaterialWhere!'
        data: '_HAS_PRODUCTInput!'
      }
    }
    AddWorkOrderHas_task: {
      __type: '_AddWorkOrderHas_taskPayload'
      __args: { from: '_WorkOrderWhere!'; to: '_ProcedureTaskWhere!' }
    }
    RemoveWorkOrderHas_task: {
      __type: '_RemoveWorkOrderHas_taskPayload'
      __args: { from: '_WorkOrderWhere!'; to: '_ProcedureTaskWhere!' }
    }
    MergeWorkOrderHas_task: {
      __type: '_MergeWorkOrderHas_taskPayload'
      __args: { from: '_WorkOrderWhere!'; to: '_ProcedureTaskWhere!' }
    }
    CreateWorkOrder: {
      __type: 'WorkOrder'
      __args: { data: '_WorkOrderCreate!' }
    }
    UpdateWorkOrder: {
      __type: 'WorkOrder'
      __args: { where: '_WorkOrderWhere!'; data: '_WorkOrderUpdate!' }
    }
    DeleteWorkOrder: {
      __type: 'WorkOrder'
      __args: { where: '_WorkOrderWhere!' }
    }
    MergeWorkOrder: {
      __type: 'WorkOrder'
      __args: { where: '_WorkOrderKeys!'; data: '_WorkOrderCreate!' }
    }
    AddProcedureTaskIn_order: {
      __type: '_AddProcedureTaskIn_orderPayload'
      __args: { from: '_WorkOrderWhere!'; to: '_ProcedureTaskWhere!' }
    }
    RemoveProcedureTaskIn_order: {
      __type: '_RemoveProcedureTaskIn_orderPayload'
      __args: { from: '_WorkOrderWhere!'; to: '_ProcedureTaskWhere!' }
    }
    MergeProcedureTaskIn_order: {
      __type: '_MergeProcedureTaskIn_orderPayload'
      __args: { from: '_WorkOrderWhere!'; to: '_ProcedureTaskWhere!' }
    }
    AddProcedureTaskUses_procedure: {
      __type: '_AddProcedureTaskUses_procedurePayload'
      __args: { from: '_ProcedureTaskWhere!'; to: '_ProcedureWhere!' }
    }
    RemoveProcedureTaskUses_procedure: {
      __type: '_RemoveProcedureTaskUses_procedurePayload'
      __args: { from: '_ProcedureTaskWhere!'; to: '_ProcedureWhere!' }
    }
    MergeProcedureTaskUses_procedure: {
      __type: '_MergeProcedureTaskUses_procedurePayload'
      __args: { from: '_ProcedureTaskWhere!'; to: '_ProcedureWhere!' }
    }
    AddProcedureTaskUsers: {
      __type: '_AddProcedureTaskUsersPayload'
      __args: { from: '_UserWhere!'; to: '_ProcedureTaskWhere!' }
    }
    RemoveProcedureTaskUsers: {
      __type: '_RemoveProcedureTaskUsersPayload'
      __args: { from: '_UserWhere!'; to: '_ProcedureTaskWhere!' }
    }
    MergeProcedureTaskUsers: {
      __type: '_MergeProcedureTaskUsersPayload'
      __args: { from: '_UserWhere!'; to: '_ProcedureTaskWhere!' }
    }
    CreateProcedureTask: {
      __type: 'ProcedureTask'
      __args: { data: '_ProcedureTaskCreate!' }
    }
    UpdateProcedureTask: {
      __type: 'ProcedureTask'
      __args: { where: '_ProcedureTaskWhere!'; data: '_ProcedureTaskUpdate!' }
    }
    DeleteProcedureTask: {
      __type: 'ProcedureTask'
      __args: { where: '_ProcedureTaskWhere!' }
    }
    MergeProcedureTask: {
      __type: 'ProcedureTask'
      __args: { where: '_ProcedureTaskKeys!'; data: '_ProcedureTaskCreate!' }
    }
    AddUserExecutes: {
      __type: '_AddUserExecutesPayload'
      __args: { from: '_UserWhere!'; to: '_ProcedureTaskWhere!' }
    }
    RemoveUserExecutes: {
      __type: '_RemoveUserExecutesPayload'
      __args: { from: '_UserWhere!'; to: '_ProcedureTaskWhere!' }
    }
    MergeUserExecutes: {
      __type: '_MergeUserExecutesPayload'
      __args: { from: '_UserWhere!'; to: '_ProcedureTaskWhere!' }
    }
    AddUserEXECUTES_rel: {
      __type: '_AddUserEXECUTES_relPayload'
      __args: {
        from: '_UserWhere!'
        to: '_ProcedureTaskWhere!'
        data: '_EXECUTESInput!'
      }
    }
    RemoveUserEXECUTES_rel: {
      __type: '_RemoveUserEXECUTES_relPayload'
      __args: { from: '_UserWhere!'; to: '_ProcedureTaskWhere!' }
    }
    UpdateUserEXECUTES_rel: {
      __type: '_UpdateUserEXECUTES_relPayload'
      __args: {
        from: '_UserWhere!'
        to: '_ProcedureTaskWhere!'
        data: '_EXECUTESInput!'
      }
    }
    MergeUserEXECUTES_rel: {
      __type: '_MergeUserEXECUTES_relPayload'
      __args: {
        from: '_UserWhere!'
        to: '_ProcedureTaskWhere!'
        data: '_EXECUTESInput!'
      }
    }
    CreateUser: { __type: 'User'; __args: { data: '_UserCreate!' } }
    UpdateUser: {
      __type: 'User'
      __args: { where: '_UserWhere!'; data: '_UserUpdate!' }
    }
    DeleteUser: { __type: 'User'; __args: { where: '_UserWhere!' } }
    MergeUser: {
      __type: 'User'
      __args: { where: '_UserKeys!'; data: '_UserCreate!' }
    }
    AddCraftUses_bom: {
      __type: '_AddCraftUses_bomPayload'
      __args: { from: '_CraftWhere!'; to: '_BOMWhere!' }
    }
    RemoveCraftUses_bom: {
      __type: '_RemoveCraftUses_bomPayload'
      __args: { from: '_CraftWhere!'; to: '_BOMWhere!' }
    }
    MergeCraftUses_bom: {
      __type: '_MergeCraftUses_bomPayload'
      __args: { from: '_CraftWhere!'; to: '_BOMWhere!' }
    }
    AddCraftFirst_procedure: {
      __type: '_AddCraftFirst_procedurePayload'
      __args: { from: '_CraftWhere!'; to: '_ProcedureWhere!' }
    }
    RemoveCraftFirst_procedure: {
      __type: '_RemoveCraftFirst_procedurePayload'
      __args: { from: '_CraftWhere!'; to: '_ProcedureWhere!' }
    }
    MergeCraftFirst_procedure: {
      __type: '_MergeCraftFirst_procedurePayload'
      __args: { from: '_CraftWhere!'; to: '_ProcedureWhere!' }
    }
    AddCraftLast_procedure: {
      __type: '_AddCraftLast_procedurePayload'
      __args: { from: '_CraftWhere!'; to: '_ProcedureWhere!' }
    }
    RemoveCraftLast_procedure: {
      __type: '_RemoveCraftLast_procedurePayload'
      __args: { from: '_CraftWhere!'; to: '_ProcedureWhere!' }
    }
    MergeCraftLast_procedure: {
      __type: '_MergeCraftLast_procedurePayload'
      __args: { from: '_CraftWhere!'; to: '_ProcedureWhere!' }
    }
    AddCraftHas_procedure: {
      __type: '_AddCraftHas_procedurePayload'
      __args: { from: '_CraftWhere!'; to: '_ProcedureWhere!' }
    }
    RemoveCraftHas_procedure: {
      __type: '_RemoveCraftHas_procedurePayload'
      __args: { from: '_CraftWhere!'; to: '_ProcedureWhere!' }
    }
    MergeCraftHas_procedure: {
      __type: '_MergeCraftHas_procedurePayload'
      __args: { from: '_CraftWhere!'; to: '_ProcedureWhere!' }
    }
    AddCraftHAS_PROCEDURE_rel: {
      __type: '_AddCraftHAS_PROCEDURE_relPayload'
      __args: {
        from: '_CraftWhere!'
        to: '_ProcedureWhere!'
        data: '_HAS_PROCEDUREInput!'
      }
    }
    RemoveCraftHAS_PROCEDURE_rel: {
      __type: '_RemoveCraftHAS_PROCEDURE_relPayload'
      __args: { from: '_CraftWhere!'; to: '_ProcedureWhere!' }
    }
    UpdateCraftHAS_PROCEDURE_rel: {
      __type: '_UpdateCraftHAS_PROCEDURE_relPayload'
      __args: {
        from: '_CraftWhere!'
        to: '_ProcedureWhere!'
        data: '_HAS_PROCEDUREInput!'
      }
    }
    MergeCraftHAS_PROCEDURE_rel: {
      __type: '_MergeCraftHAS_PROCEDURE_relPayload'
      __args: {
        from: '_CraftWhere!'
        to: '_ProcedureWhere!'
        data: '_HAS_PROCEDUREInput!'
      }
    }
    AddCraftMaterials: {
      __type: '_AddCraftMaterialsPayload'
      __args: { from: '_MaterialWhere!'; to: '_CraftWhere!' }
    }
    RemoveCraftMaterials: {
      __type: '_RemoveCraftMaterialsPayload'
      __args: { from: '_MaterialWhere!'; to: '_CraftWhere!' }
    }
    MergeCraftMaterials: {
      __type: '_MergeCraftMaterialsPayload'
      __args: { from: '_MaterialWhere!'; to: '_CraftWhere!' }
    }
    UpdateCraft: {
      __type: 'Craft'
      __args: { where: '_CraftWhere!'; data: '_CraftUpdate!' }
    }
    DeleteCraft: { __type: 'Craft'; __args: { where: '_CraftWhere!' } }
    MergeCraft: {
      __type: 'Craft'
      __args: { where: '_CraftKeys!'; data: '_CraftCreate!' }
    }
    AddProcedureNext: {
      __type: '_AddProcedureNextPayload'
      __args: { from: '_ProcedureWhere!'; to: '_ProcedureWhere!' }
    }
    RemoveProcedureNext: {
      __type: '_RemoveProcedureNextPayload'
      __args: { from: '_ProcedureWhere!'; to: '_ProcedureWhere!' }
    }
    MergeProcedureNext: {
      __type: '_MergeProcedureNextPayload'
      __args: { from: '_ProcedureWhere!'; to: '_ProcedureWhere!' }
    }
    AddProcedureCrafts_first_procedure: {
      __type: '_AddProcedureCrafts_first_procedurePayload'
      __args: { from: '_CraftWhere!'; to: '_ProcedureWhere!' }
    }
    RemoveProcedureCrafts_first_procedure: {
      __type: '_RemoveProcedureCrafts_first_procedurePayload'
      __args: { from: '_CraftWhere!'; to: '_ProcedureWhere!' }
    }
    MergeProcedureCrafts_first_procedure: {
      __type: '_MergeProcedureCrafts_first_procedurePayload'
      __args: { from: '_CraftWhere!'; to: '_ProcedureWhere!' }
    }
    AddProcedureCrafts_last_procedure: {
      __type: '_AddProcedureCrafts_last_procedurePayload'
      __args: { from: '_CraftWhere!'; to: '_ProcedureWhere!' }
    }
    RemoveProcedureCrafts_last_procedure: {
      __type: '_RemoveProcedureCrafts_last_procedurePayload'
      __args: { from: '_CraftWhere!'; to: '_ProcedureWhere!' }
    }
    MergeProcedureCrafts_last_procedure: {
      __type: '_MergeProcedureCrafts_last_procedurePayload'
      __args: { from: '_CraftWhere!'; to: '_ProcedureWhere!' }
    }
    AddProcedureProceduretasks_uses_procedure: {
      __type: '_AddProcedureProceduretasks_uses_procedurePayload'
      __args: { from: '_ProcedureTaskWhere!'; to: '_ProcedureWhere!' }
    }
    RemoveProcedureProceduretasks_uses_procedure: {
      __type: '_RemoveProcedureProceduretasks_uses_procedurePayload'
      __args: { from: '_ProcedureTaskWhere!'; to: '_ProcedureWhere!' }
    }
    MergeProcedureProceduretasks_uses_procedure: {
      __type: '_MergeProcedureProceduretasks_uses_procedurePayload'
      __args: { from: '_ProcedureTaskWhere!'; to: '_ProcedureWhere!' }
    }
    AddProcedureCrafts_has_procedure: {
      __type: '_AddProcedureCrafts_has_procedurePayload'
      __args: { from: '_CraftWhere!'; to: '_ProcedureWhere!' }
    }
    RemoveProcedureCrafts_has_procedure: {
      __type: '_RemoveProcedureCrafts_has_procedurePayload'
      __args: { from: '_CraftWhere!'; to: '_ProcedureWhere!' }
    }
    MergeProcedureCrafts_has_procedure: {
      __type: '_MergeProcedureCrafts_has_procedurePayload'
      __args: { from: '_CraftWhere!'; to: '_ProcedureWhere!' }
    }
    CreateProcedure: {
      __type: 'Procedure'
      __args: { data: '_ProcedureCreate!' }
    }
    UpdateProcedure: {
      __type: 'Procedure'
      __args: { where: '_ProcedureWhere!'; data: '_ProcedureUpdate!' }
    }
    DeleteProcedure: {
      __type: 'Procedure'
      __args: { where: '_ProcedureWhere!' }
    }
    MergeProcedure: {
      __type: 'Procedure'
      __args: { where: '_ProcedureKeys!'; data: '_ProcedureCreate!' }
    }
    AddMaterialHas_craft: {
      __type: '_AddMaterialHas_craftPayload'
      __args: { from: '_MaterialWhere!'; to: '_CraftWhere!' }
    }
    RemoveMaterialHas_craft: {
      __type: '_RemoveMaterialHas_craftPayload'
      __args: { from: '_MaterialWhere!'; to: '_CraftWhere!' }
    }
    MergeMaterialHas_craft: {
      __type: '_MergeMaterialHas_craftPayload'
      __args: { from: '_MaterialWhere!'; to: '_CraftWhere!' }
    }
    AddMaterialBoms: {
      __type: '_AddMaterialBomsPayload'
      __args: { from: '_BOMWhere!'; to: '_MaterialWhere!' }
    }
    RemoveMaterialBoms: {
      __type: '_RemoveMaterialBomsPayload'
      __args: { from: '_BOMWhere!'; to: '_MaterialWhere!' }
    }
    MergeMaterialBoms: {
      __type: '_MergeMaterialBomsPayload'
      __args: { from: '_BOMWhere!'; to: '_MaterialWhere!' }
    }
    AddMaterialWorkorders: {
      __type: '_AddMaterialWorkordersPayload'
      __args: { from: '_WorkOrderWhere!'; to: '_MaterialWhere!' }
    }
    RemoveMaterialWorkorders: {
      __type: '_RemoveMaterialWorkordersPayload'
      __args: { from: '_WorkOrderWhere!'; to: '_MaterialWhere!' }
    }
    MergeMaterialWorkorders: {
      __type: '_MergeMaterialWorkordersPayload'
      __args: { from: '_WorkOrderWhere!'; to: '_MaterialWhere!' }
    }
    CreateMaterial: { __type: 'Material'; __args: { data: '_MaterialCreate!' } }
    UpdateMaterial: {
      __type: 'Material'
      __args: { where: '_MaterialWhere!'; data: '_MaterialUpdate!' }
    }
    DeleteMaterial: { __type: 'Material'; __args: { where: '_MaterialWhere!' } }
    MergeMaterial: {
      __type: 'Material'
      __args: { where: '_MaterialKeys!'; data: '_MaterialCreate!' }
    }
    AddBOMUses_material: {
      __type: '_AddBOMUses_materialPayload'
      __args: { from: '_BOMWhere!'; to: '_MaterialWhere!' }
    }
    RemoveBOMUses_material: {
      __type: '_RemoveBOMUses_materialPayload'
      __args: { from: '_BOMWhere!'; to: '_MaterialWhere!' }
    }
    MergeBOMUses_material: {
      __type: '_MergeBOMUses_materialPayload'
      __args: { from: '_BOMWhere!'; to: '_MaterialWhere!' }
    }
    AddBOMUSES_MATERIAL_rel: {
      __type: '_AddBOMUSES_MATERIAL_relPayload'
      __args: {
        from: '_BOMWhere!'
        to: '_MaterialWhere!'
        data: '_USES_MATERIALInput!'
      }
    }
    RemoveBOMUSES_MATERIAL_rel: {
      __type: '_RemoveBOMUSES_MATERIAL_relPayload'
      __args: { from: '_BOMWhere!'; to: '_MaterialWhere!' }
    }
    UpdateBOMUSES_MATERIAL_rel: {
      __type: '_UpdateBOMUSES_MATERIAL_relPayload'
      __args: {
        from: '_BOMWhere!'
        to: '_MaterialWhere!'
        data: '_USES_MATERIALInput!'
      }
    }
    MergeBOMUSES_MATERIAL_rel: {
      __type: '_MergeBOMUSES_MATERIAL_relPayload'
      __args: {
        from: '_BOMWhere!'
        to: '_MaterialWhere!'
        data: '_USES_MATERIALInput!'
      }
    }
    AddBOMCrafts: {
      __type: '_AddBOMCraftsPayload'
      __args: { from: '_CraftWhere!'; to: '_BOMWhere!' }
    }
    RemoveBOMCrafts: {
      __type: '_RemoveBOMCraftsPayload'
      __args: { from: '_CraftWhere!'; to: '_BOMWhere!' }
    }
    MergeBOMCrafts: {
      __type: '_MergeBOMCraftsPayload'
      __args: { from: '_CraftWhere!'; to: '_BOMWhere!' }
    }
    UpdateBOM: {
      __type: 'BOM'
      __args: { where: '_BOMWhere!'; data: '_BOMUpdate!' }
    }
    DeleteBOM: { __type: 'BOM'; __args: { where: '_BOMWhere!' } }
    MergeBOM: {
      __type: 'BOM'
      __args: { where: '_BOMKeys!'; data: '_BOMCreate!' }
    }
  }
  subscription: {}
  _AddWorkOrderHas_productPayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'WorkOrder' }
    to: { __type: 'Material' }
  }
  _RemoveWorkOrderHas_productPayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'WorkOrder' }
    to: { __type: 'Material' }
  }
  _MergeWorkOrderHas_productPayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'WorkOrder' }
    to: { __type: 'Material' }
  }
  _WorkOrderHAS_PRODUCT_rel: {
    __typename: { __type: 'String!' }
    amount: { __type: 'Int!' }
    _id: { __type: 'String' }
    Material: { __type: 'Material' }
  }
  _WorkOrderHAS_PRODUCTFilter: {
    AND: { __type: '[_WorkOrderHAS_PRODUCTFilter!]' }
    OR: { __type: '[_WorkOrderHAS_PRODUCTFilter!]' }
    amount: { __type: 'Int' }
    amount_not: { __type: 'Int' }
    amount_in: { __type: '[Int!]' }
    amount_not_in: { __type: '[Int!]' }
    amount_lt: { __type: 'Int' }
    amount_lte: { __type: 'Int' }
    amount_gt: { __type: 'Int' }
    amount_gte: { __type: 'Int' }
    Material: { __type: '_MaterialFilter' }
  }
  _HAS_PRODUCTInput: { amount: { __type: 'Int!' } }
  _AddWorkOrderHAS_PRODUCT_relPayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'WorkOrder' }
    to: { __type: 'Material' }
    amount: { __type: 'Int!' }
    _id: { __type: 'String' }
  }
  _RemoveWorkOrderHAS_PRODUCT_relPayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'WorkOrder' }
    to: { __type: 'Material' }
  }
  _UpdateWorkOrderHAS_PRODUCT_relPayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'WorkOrder' }
    to: { __type: 'Material' }
    amount: { __type: 'Int!' }
    _id: { __type: 'String' }
  }
  _MergeWorkOrderHAS_PRODUCT_relPayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'WorkOrder' }
    to: { __type: 'Material' }
    amount: { __type: 'Int!' }
    _id: { __type: 'String' }
  }
  _AddWorkOrderHas_taskPayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'WorkOrder' }
    to: { __type: 'ProcedureTask' }
  }
  _RemoveWorkOrderHas_taskPayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'WorkOrder' }
    to: { __type: 'ProcedureTask' }
  }
  _MergeWorkOrderHas_taskPayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'WorkOrder' }
    to: { __type: 'ProcedureTask' }
  }
  _WorkOrderCreate: {
    id: { __type: 'ID' }
    is_completed: { __type: 'Boolean!' }
    schedule_date: { __type: 'String' }
    deadline: { __type: 'String' }
  }
  _WorkOrderUpdate: {
    id: { __type: 'ID' }
    is_completed: { __type: 'Boolean' }
    schedule_date: { __type: 'String' }
    deadline: { __type: 'String' }
  }
  _WorkOrderWhere: {
    AND: { __type: '[_WorkOrderWhere!]' }
    OR: { __type: '[_WorkOrderWhere!]' }
    id: { __type: 'ID' }
    id_not: { __type: 'ID' }
    id_in: { __type: '[ID!]' }
    id_not_in: { __type: '[ID!]' }
    id_regexp: { __type: 'ID' }
    id_contains: { __type: 'ID' }
    id_not_contains: { __type: 'ID' }
    id_starts_with: { __type: 'ID' }
    id_not_starts_with: { __type: 'ID' }
    id_ends_with: { __type: 'ID' }
    id_not_ends_with: { __type: 'ID' }
  }
  _WorkOrderKeys: { id: { __type: 'ID' } }
  _WorkOrderFilter: {
    AND: { __type: '[_WorkOrderFilter!]' }
    OR: { __type: '[_WorkOrderFilter!]' }
    id: { __type: 'ID' }
    id_not: { __type: 'ID' }
    id_in: { __type: '[ID!]' }
    id_not_in: { __type: '[ID!]' }
    id_regexp: { __type: 'ID' }
    id_contains: { __type: 'ID' }
    id_not_contains: { __type: 'ID' }
    id_starts_with: { __type: 'ID' }
    id_not_starts_with: { __type: 'ID' }
    id_ends_with: { __type: 'ID' }
    id_not_ends_with: { __type: 'ID' }
    is_completed: { __type: 'Boolean' }
    is_completed_not: { __type: 'Boolean' }
    schedule_date: { __type: 'String' }
    schedule_date_not: { __type: 'String' }
    schedule_date_in: { __type: '[String!]' }
    schedule_date_not_in: { __type: '[String!]' }
    schedule_date_regexp: { __type: 'String' }
    schedule_date_contains: { __type: 'String' }
    schedule_date_not_contains: { __type: 'String' }
    schedule_date_starts_with: { __type: 'String' }
    schedule_date_not_starts_with: { __type: 'String' }
    schedule_date_ends_with: { __type: 'String' }
    schedule_date_not_ends_with: { __type: 'String' }
    deadline: { __type: 'String' }
    deadline_not: { __type: 'String' }
    deadline_in: { __type: '[String!]' }
    deadline_not_in: { __type: '[String!]' }
    deadline_regexp: { __type: 'String' }
    deadline_contains: { __type: 'String' }
    deadline_not_contains: { __type: 'String' }
    deadline_starts_with: { __type: 'String' }
    deadline_not_starts_with: { __type: 'String' }
    deadline_ends_with: { __type: 'String' }
    deadline_not_ends_with: { __type: 'String' }
    has_product: { __type: '_MaterialFilter' }
    has_product_not: { __type: '_MaterialFilter' }
    has_product_in: { __type: '[_MaterialFilter!]' }
    has_product_not_in: { __type: '[_MaterialFilter!]' }
    has_product_some: { __type: '_MaterialFilter' }
    has_product_none: { __type: '_MaterialFilter' }
    has_product_single: { __type: '_MaterialFilter' }
    has_product_every: { __type: '_MaterialFilter' }
    HAS_PRODUCT_rel: { __type: '_WorkOrderHAS_PRODUCTFilter' }
    HAS_PRODUCT_rel_not: { __type: '_WorkOrderHAS_PRODUCTFilter' }
    HAS_PRODUCT_rel_in: { __type: '[_WorkOrderHAS_PRODUCTFilter!]' }
    HAS_PRODUCT_rel_not_in: { __type: '[_WorkOrderHAS_PRODUCTFilter!]' }
    HAS_PRODUCT_rel_some: { __type: '_WorkOrderHAS_PRODUCTFilter' }
    HAS_PRODUCT_rel_none: { __type: '_WorkOrderHAS_PRODUCTFilter' }
    HAS_PRODUCT_rel_single: { __type: '_WorkOrderHAS_PRODUCTFilter' }
    HAS_PRODUCT_rel_every: { __type: '_WorkOrderHAS_PRODUCTFilter' }
    has_task: { __type: '_ProcedureTaskFilter' }
    has_task_not: { __type: '_ProcedureTaskFilter' }
    has_task_in: { __type: '[_ProcedureTaskFilter!]' }
    has_task_not_in: { __type: '[_ProcedureTaskFilter!]' }
    has_task_some: { __type: '_ProcedureTaskFilter' }
    has_task_none: { __type: '_ProcedureTaskFilter' }
    has_task_single: { __type: '_ProcedureTaskFilter' }
    has_task_every: { __type: '_ProcedureTaskFilter' }
  }
  WorkOrder: {
    __typename: { __type: 'String!' }
    id: { __type: 'ID!' }
    is_completed: { __type: 'Boolean!' }
    schedule_date: { __type: 'String' }
    deadline: { __type: 'String' }
    has_product: {
      __type: '[Material]'
      __args: {
        first: 'Int'
        offset: 'Int'
        orderBy: '[_MaterialOrdering]'
        filter: '_MaterialFilter'
      }
    }
    HAS_PRODUCT_rel: {
      __type: '[_WorkOrderHAS_PRODUCT_rel]'
      __args: {
        first: 'Int'
        offset: 'Int'
        orderBy: '[_HAS_PRODUCTOrdering]'
        filter: '_WorkOrderHAS_PRODUCTFilter'
      }
    }
    has_task: {
      __type: '[ProcedureTask]'
      __args: {
        first: 'Int'
        offset: 'Int'
        orderBy: '[_ProcedureTaskOrdering]'
        filter: '_ProcedureTaskFilter'
      }
    }
    _id: { __type: 'String' }
  }
  _AddProcedureTaskIn_orderPayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'WorkOrder' }
    to: { __type: 'ProcedureTask' }
  }
  _RemoveProcedureTaskIn_orderPayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'WorkOrder' }
    to: { __type: 'ProcedureTask' }
  }
  _MergeProcedureTaskIn_orderPayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'WorkOrder' }
    to: { __type: 'ProcedureTask' }
  }
  _AddProcedureTaskUses_procedurePayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'ProcedureTask' }
    to: { __type: 'Procedure' }
  }
  _RemoveProcedureTaskUses_procedurePayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'ProcedureTask' }
    to: { __type: 'Procedure' }
  }
  _MergeProcedureTaskUses_procedurePayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'ProcedureTask' }
    to: { __type: 'Procedure' }
  }
  _AddProcedureTaskUsersPayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'User' }
    to: { __type: 'ProcedureTask' }
  }
  _RemoveProcedureTaskUsersPayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'User' }
    to: { __type: 'ProcedureTask' }
  }
  _MergeProcedureTaskUsersPayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'User' }
    to: { __type: 'ProcedureTask' }
  }
  _ProcedureTaskCreate: {
    id: { __type: 'ID' }
    name: { __type: 'String!' }
    is_completed: { __type: 'Boolean!' }
    amount: { __type: 'Int!' }
  }
  _ProcedureTaskUpdate: {
    id: { __type: 'ID' }
    name: { __type: 'String' }
    is_completed: { __type: 'Boolean' }
    amount: { __type: 'Int' }
  }
  _ProcedureTaskWhere: {
    AND: { __type: '[_ProcedureTaskWhere!]' }
    OR: { __type: '[_ProcedureTaskWhere!]' }
    id: { __type: 'ID' }
    id_not: { __type: 'ID' }
    id_in: { __type: '[ID!]' }
    id_not_in: { __type: '[ID!]' }
    id_regexp: { __type: 'ID' }
    id_contains: { __type: 'ID' }
    id_not_contains: { __type: 'ID' }
    id_starts_with: { __type: 'ID' }
    id_not_starts_with: { __type: 'ID' }
    id_ends_with: { __type: 'ID' }
    id_not_ends_with: { __type: 'ID' }
  }
  _ProcedureTaskKeys: { id: { __type: 'ID' } }
  _ProcedureTaskFilter: {
    AND: { __type: '[_ProcedureTaskFilter!]' }
    OR: { __type: '[_ProcedureTaskFilter!]' }
    id: { __type: 'ID' }
    id_not: { __type: 'ID' }
    id_in: { __type: '[ID!]' }
    id_not_in: { __type: '[ID!]' }
    id_regexp: { __type: 'ID' }
    id_contains: { __type: 'ID' }
    id_not_contains: { __type: 'ID' }
    id_starts_with: { __type: 'ID' }
    id_not_starts_with: { __type: 'ID' }
    id_ends_with: { __type: 'ID' }
    id_not_ends_with: { __type: 'ID' }
    name: { __type: 'String' }
    name_not: { __type: 'String' }
    name_in: { __type: '[String!]' }
    name_not_in: { __type: '[String!]' }
    name_regexp: { __type: 'String' }
    name_contains: { __type: 'String' }
    name_not_contains: { __type: 'String' }
    name_starts_with: { __type: 'String' }
    name_not_starts_with: { __type: 'String' }
    name_ends_with: { __type: 'String' }
    name_not_ends_with: { __type: 'String' }
    is_completed: { __type: 'Boolean' }
    is_completed_not: { __type: 'Boolean' }
    amount: { __type: 'Int' }
    amount_not: { __type: 'Int' }
    amount_in: { __type: '[Int!]' }
    amount_not_in: { __type: '[Int!]' }
    amount_lt: { __type: 'Int' }
    amount_lte: { __type: 'Int' }
    amount_gt: { __type: 'Int' }
    amount_gte: { __type: 'Int' }
    in_order: { __type: '_WorkOrderFilter' }
    in_order_not: { __type: '_WorkOrderFilter' }
    in_order_in: { __type: '[_WorkOrderFilter!]' }
    in_order_not_in: { __type: '[_WorkOrderFilter!]' }
    uses_procedure: { __type: '_ProcedureFilter' }
    uses_procedure_not: { __type: '_ProcedureFilter' }
    uses_procedure_in: { __type: '[_ProcedureFilter!]' }
    uses_procedure_not_in: { __type: '[_ProcedureFilter!]' }
    uses_procedure_some: { __type: '_ProcedureFilter' }
    uses_procedure_none: { __type: '_ProcedureFilter' }
    uses_procedure_single: { __type: '_ProcedureFilter' }
    uses_procedure_every: { __type: '_ProcedureFilter' }
    users: { __type: '_UserFilter' }
    users_not: { __type: '_UserFilter' }
    users_in: { __type: '[_UserFilter!]' }
    users_not_in: { __type: '[_UserFilter!]' }
    users_some: { __type: '_UserFilter' }
    users_none: { __type: '_UserFilter' }
    users_single: { __type: '_UserFilter' }
    users_every: { __type: '_UserFilter' }
  }
  ProcedureTask: {
    __typename: { __type: 'String!' }
    id: { __type: 'ID!' }
    name: { __type: 'String!' }
    is_completed: { __type: 'Boolean!' }
    amount: { __type: 'Int!' }
    in_order: { __type: 'WorkOrder!'; __args: { filter: '_WorkOrderFilter' } }
    uses_procedure: {
      __type: '[Procedure]'
      __args: {
        first: 'Int'
        offset: 'Int'
        orderBy: '[_ProcedureOrdering]'
        filter: '_ProcedureFilter'
      }
    }
    users: {
      __type: '[User]'
      __args: {
        first: 'Int'
        offset: 'Int'
        orderBy: '[_UserOrdering]'
        filter: '_UserFilter'
      }
    }
    _id: { __type: 'String' }
  }
  _AddUserExecutesPayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'User' }
    to: { __type: 'ProcedureTask' }
  }
  _RemoveUserExecutesPayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'User' }
    to: { __type: 'ProcedureTask' }
  }
  _MergeUserExecutesPayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'User' }
    to: { __type: 'ProcedureTask' }
  }
  _UserEXECUTES_rel: {
    __typename: { __type: 'String!' }
    at_time: { __type: 'String!' }
    amount: { __type: 'Int!' }
    _id: { __type: 'String' }
    ProcedureTask: { __type: 'ProcedureTask' }
  }
  _UserEXECUTESFilter: {
    AND: { __type: '[_UserEXECUTESFilter!]' }
    OR: { __type: '[_UserEXECUTESFilter!]' }
    at_time: { __type: 'String' }
    at_time_not: { __type: 'String' }
    at_time_in: { __type: '[String!]' }
    at_time_not_in: { __type: '[String!]' }
    at_time_regexp: { __type: 'String' }
    at_time_contains: { __type: 'String' }
    at_time_not_contains: { __type: 'String' }
    at_time_starts_with: { __type: 'String' }
    at_time_not_starts_with: { __type: 'String' }
    at_time_ends_with: { __type: 'String' }
    at_time_not_ends_with: { __type: 'String' }
    amount: { __type: 'Int' }
    amount_not: { __type: 'Int' }
    amount_in: { __type: '[Int!]' }
    amount_not_in: { __type: '[Int!]' }
    amount_lt: { __type: 'Int' }
    amount_lte: { __type: 'Int' }
    amount_gt: { __type: 'Int' }
    amount_gte: { __type: 'Int' }
    ProcedureTask: { __type: '_ProcedureTaskFilter' }
  }
  _EXECUTESInput: { at_time: { __type: 'String!' }; amount: { __type: 'Int!' } }
  _AddUserEXECUTES_relPayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'User' }
    to: { __type: 'ProcedureTask' }
    at_time: { __type: 'String!' }
    amount: { __type: 'Int!' }
    _id: { __type: 'String' }
  }
  _RemoveUserEXECUTES_relPayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'User' }
    to: { __type: 'ProcedureTask' }
  }
  _UpdateUserEXECUTES_relPayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'User' }
    to: { __type: 'ProcedureTask' }
    at_time: { __type: 'String!' }
    amount: { __type: 'Int!' }
    _id: { __type: 'String' }
  }
  _MergeUserEXECUTES_relPayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'User' }
    to: { __type: 'ProcedureTask' }
    at_time: { __type: 'String!' }
    amount: { __type: 'Int!' }
    _id: { __type: 'String' }
  }
  _UserCreate: { id: { __type: 'ID' }; name: { __type: 'String!' } }
  _UserUpdate: { id: { __type: 'ID' }; name: { __type: 'String' } }
  _UserWhere: {
    AND: { __type: '[_UserWhere!]' }
    OR: { __type: '[_UserWhere!]' }
    id: { __type: 'ID' }
    id_not: { __type: 'ID' }
    id_in: { __type: '[ID!]' }
    id_not_in: { __type: '[ID!]' }
    id_regexp: { __type: 'ID' }
    id_contains: { __type: 'ID' }
    id_not_contains: { __type: 'ID' }
    id_starts_with: { __type: 'ID' }
    id_not_starts_with: { __type: 'ID' }
    id_ends_with: { __type: 'ID' }
    id_not_ends_with: { __type: 'ID' }
    name: { __type: 'String' }
    name_not: { __type: 'String' }
    name_in: { __type: '[String!]' }
    name_not_in: { __type: '[String!]' }
    name_regexp: { __type: 'String' }
    name_contains: { __type: 'String' }
    name_not_contains: { __type: 'String' }
    name_starts_with: { __type: 'String' }
    name_not_starts_with: { __type: 'String' }
    name_ends_with: { __type: 'String' }
    name_not_ends_with: { __type: 'String' }
  }
  _UserKeys: { id: { __type: 'ID' }; name: { __type: 'String' } }
  _UserFilter: {
    AND: { __type: '[_UserFilter!]' }
    OR: { __type: '[_UserFilter!]' }
    id: { __type: 'ID' }
    id_not: { __type: 'ID' }
    id_in: { __type: '[ID!]' }
    id_not_in: { __type: '[ID!]' }
    id_regexp: { __type: 'ID' }
    id_contains: { __type: 'ID' }
    id_not_contains: { __type: 'ID' }
    id_starts_with: { __type: 'ID' }
    id_not_starts_with: { __type: 'ID' }
    id_ends_with: { __type: 'ID' }
    id_not_ends_with: { __type: 'ID' }
    name: { __type: 'String' }
    name_not: { __type: 'String' }
    name_in: { __type: '[String!]' }
    name_not_in: { __type: '[String!]' }
    name_regexp: { __type: 'String' }
    name_contains: { __type: 'String' }
    name_not_contains: { __type: 'String' }
    name_starts_with: { __type: 'String' }
    name_not_starts_with: { __type: 'String' }
    name_ends_with: { __type: 'String' }
    name_not_ends_with: { __type: 'String' }
    executes: { __type: '_ProcedureTaskFilter' }
    executes_not: { __type: '_ProcedureTaskFilter' }
    executes_in: { __type: '[_ProcedureTaskFilter!]' }
    executes_not_in: { __type: '[_ProcedureTaskFilter!]' }
    executes_some: { __type: '_ProcedureTaskFilter' }
    executes_none: { __type: '_ProcedureTaskFilter' }
    executes_single: { __type: '_ProcedureTaskFilter' }
    executes_every: { __type: '_ProcedureTaskFilter' }
    EXECUTES_rel: { __type: '_UserEXECUTESFilter' }
    EXECUTES_rel_not: { __type: '_UserEXECUTESFilter' }
    EXECUTES_rel_in: { __type: '[_UserEXECUTESFilter!]' }
    EXECUTES_rel_not_in: { __type: '[_UserEXECUTESFilter!]' }
    EXECUTES_rel_some: { __type: '_UserEXECUTESFilter' }
    EXECUTES_rel_none: { __type: '_UserEXECUTESFilter' }
    EXECUTES_rel_single: { __type: '_UserEXECUTESFilter' }
    EXECUTES_rel_every: { __type: '_UserEXECUTESFilter' }
  }
  User: {
    __typename: { __type: 'String!' }
    id: { __type: 'ID!' }
    name: { __type: 'String!' }
    executes: {
      __type: '[ProcedureTask]'
      __args: {
        first: 'Int'
        offset: 'Int'
        orderBy: '[_ProcedureTaskOrdering]'
        filter: '_ProcedureTaskFilter'
      }
    }
    EXECUTES_rel: {
      __type: '[_UserEXECUTES_rel]'
      __args: {
        first: 'Int'
        offset: 'Int'
        orderBy: '[_EXECUTESOrdering]'
        filter: '_UserEXECUTESFilter'
      }
    }
    _id: { __type: 'String' }
  }
  _AddCraftUses_bomPayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'Craft' }
    to: { __type: 'BOM' }
  }
  _RemoveCraftUses_bomPayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'Craft' }
    to: { __type: 'BOM' }
  }
  _MergeCraftUses_bomPayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'Craft' }
    to: { __type: 'BOM' }
  }
  _AddCraftFirst_procedurePayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'Craft' }
    to: { __type: 'Procedure' }
  }
  _RemoveCraftFirst_procedurePayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'Craft' }
    to: { __type: 'Procedure' }
  }
  _MergeCraftFirst_procedurePayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'Craft' }
    to: { __type: 'Procedure' }
  }
  _AddCraftLast_procedurePayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'Craft' }
    to: { __type: 'Procedure' }
  }
  _RemoveCraftLast_procedurePayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'Craft' }
    to: { __type: 'Procedure' }
  }
  _MergeCraftLast_procedurePayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'Craft' }
    to: { __type: 'Procedure' }
  }
  _AddCraftHas_procedurePayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'Craft' }
    to: { __type: 'Procedure' }
  }
  _RemoveCraftHas_procedurePayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'Craft' }
    to: { __type: 'Procedure' }
  }
  _MergeCraftHas_procedurePayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'Craft' }
    to: { __type: 'Procedure' }
  }
  _CraftHAS_PROCEDURE_rel: {
    __typename: { __type: 'String!' }
    type: { __type: 'String' }
    _id: { __type: 'String' }
    Procedure: { __type: 'Procedure' }
  }
  _CraftHAS_PROCEDUREFilter: {
    AND: { __type: '[_CraftHAS_PROCEDUREFilter!]' }
    OR: { __type: '[_CraftHAS_PROCEDUREFilter!]' }
    type: { __type: 'String' }
    type_not: { __type: 'String' }
    type_in: { __type: '[String!]' }
    type_not_in: { __type: '[String!]' }
    type_regexp: { __type: 'String' }
    type_contains: { __type: 'String' }
    type_not_contains: { __type: 'String' }
    type_starts_with: { __type: 'String' }
    type_not_starts_with: { __type: 'String' }
    type_ends_with: { __type: 'String' }
    type_not_ends_with: { __type: 'String' }
    Procedure: { __type: '_ProcedureFilter' }
  }
  _HAS_PROCEDUREInput: { type: { __type: 'String' } }
  _AddCraftHAS_PROCEDURE_relPayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'Craft' }
    to: { __type: 'Procedure' }
    type: { __type: 'String' }
    _id: { __type: 'String' }
  }
  _RemoveCraftHAS_PROCEDURE_relPayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'Craft' }
    to: { __type: 'Procedure' }
  }
  _UpdateCraftHAS_PROCEDURE_relPayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'Craft' }
    to: { __type: 'Procedure' }
    type: { __type: 'String' }
    _id: { __type: 'String' }
  }
  _MergeCraftHAS_PROCEDURE_relPayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'Craft' }
    to: { __type: 'Procedure' }
    type: { __type: 'String' }
    _id: { __type: 'String' }
  }
  _AddCraftMaterialsPayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'Material' }
    to: { __type: 'Craft' }
  }
  _RemoveCraftMaterialsPayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'Material' }
    to: { __type: 'Craft' }
  }
  _MergeCraftMaterialsPayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'Material' }
    to: { __type: 'Craft' }
  }
  _CraftCreate: { id: { __type: 'ID' }; name: { __type: 'String!' } }
  _CraftUpdate: { id: { __type: 'ID' }; name: { __type: 'String' } }
  _CraftWhere: {
    AND: { __type: '[_CraftWhere!]' }
    OR: { __type: '[_CraftWhere!]' }
    id: { __type: 'ID' }
    id_not: { __type: 'ID' }
    id_in: { __type: '[ID!]' }
    id_not_in: { __type: '[ID!]' }
    id_regexp: { __type: 'ID' }
    id_contains: { __type: 'ID' }
    id_not_contains: { __type: 'ID' }
    id_starts_with: { __type: 'ID' }
    id_not_starts_with: { __type: 'ID' }
    id_ends_with: { __type: 'ID' }
    id_not_ends_with: { __type: 'ID' }
    name: { __type: 'String' }
    name_not: { __type: 'String' }
    name_in: { __type: '[String!]' }
    name_not_in: { __type: '[String!]' }
    name_regexp: { __type: 'String' }
    name_contains: { __type: 'String' }
    name_not_contains: { __type: 'String' }
    name_starts_with: { __type: 'String' }
    name_not_starts_with: { __type: 'String' }
    name_ends_with: { __type: 'String' }
    name_not_ends_with: { __type: 'String' }
  }
  _CraftKeys: { id: { __type: 'ID' }; name: { __type: 'String' } }
  _CraftFilter: {
    AND: { __type: '[_CraftFilter!]' }
    OR: { __type: '[_CraftFilter!]' }
    id: { __type: 'ID' }
    id_not: { __type: 'ID' }
    id_in: { __type: '[ID!]' }
    id_not_in: { __type: '[ID!]' }
    id_regexp: { __type: 'ID' }
    id_contains: { __type: 'ID' }
    id_not_contains: { __type: 'ID' }
    id_starts_with: { __type: 'ID' }
    id_not_starts_with: { __type: 'ID' }
    id_ends_with: { __type: 'ID' }
    id_not_ends_with: { __type: 'ID' }
    name: { __type: 'String' }
    name_not: { __type: 'String' }
    name_in: { __type: '[String!]' }
    name_not_in: { __type: '[String!]' }
    name_regexp: { __type: 'String' }
    name_contains: { __type: 'String' }
    name_not_contains: { __type: 'String' }
    name_starts_with: { __type: 'String' }
    name_not_starts_with: { __type: 'String' }
    name_ends_with: { __type: 'String' }
    name_not_ends_with: { __type: 'String' }
    uses_bom: { __type: '_BOMFilter' }
    uses_bom_not: { __type: '_BOMFilter' }
    uses_bom_in: { __type: '[_BOMFilter!]' }
    uses_bom_not_in: { __type: '[_BOMFilter!]' }
    uses_bom_some: { __type: '_BOMFilter' }
    uses_bom_none: { __type: '_BOMFilter' }
    uses_bom_single: { __type: '_BOMFilter' }
    uses_bom_every: { __type: '_BOMFilter' }
    first_procedure: { __type: '_ProcedureFilter' }
    first_procedure_not: { __type: '_ProcedureFilter' }
    first_procedure_in: { __type: '[_ProcedureFilter!]' }
    first_procedure_not_in: { __type: '[_ProcedureFilter!]' }
    first_procedure_some: { __type: '_ProcedureFilter' }
    first_procedure_none: { __type: '_ProcedureFilter' }
    first_procedure_single: { __type: '_ProcedureFilter' }
    first_procedure_every: { __type: '_ProcedureFilter' }
    last_procedure: { __type: '_ProcedureFilter' }
    last_procedure_not: { __type: '_ProcedureFilter' }
    last_procedure_in: { __type: '[_ProcedureFilter!]' }
    last_procedure_not_in: { __type: '[_ProcedureFilter!]' }
    last_procedure_some: { __type: '_ProcedureFilter' }
    last_procedure_none: { __type: '_ProcedureFilter' }
    last_procedure_single: { __type: '_ProcedureFilter' }
    last_procedure_every: { __type: '_ProcedureFilter' }
    has_procedure: { __type: '_ProcedureFilter' }
    has_procedure_not: { __type: '_ProcedureFilter' }
    has_procedure_in: { __type: '[_ProcedureFilter!]' }
    has_procedure_not_in: { __type: '[_ProcedureFilter!]' }
    has_procedure_some: { __type: '_ProcedureFilter' }
    has_procedure_none: { __type: '_ProcedureFilter' }
    has_procedure_single: { __type: '_ProcedureFilter' }
    has_procedure_every: { __type: '_ProcedureFilter' }
    HAS_PROCEDURE_rel: { __type: '_CraftHAS_PROCEDUREFilter' }
    HAS_PROCEDURE_rel_not: { __type: '_CraftHAS_PROCEDUREFilter' }
    HAS_PROCEDURE_rel_in: { __type: '[_CraftHAS_PROCEDUREFilter!]' }
    HAS_PROCEDURE_rel_not_in: { __type: '[_CraftHAS_PROCEDUREFilter!]' }
    HAS_PROCEDURE_rel_some: { __type: '_CraftHAS_PROCEDUREFilter' }
    HAS_PROCEDURE_rel_none: { __type: '_CraftHAS_PROCEDUREFilter' }
    HAS_PROCEDURE_rel_single: { __type: '_CraftHAS_PROCEDUREFilter' }
    HAS_PROCEDURE_rel_every: { __type: '_CraftHAS_PROCEDUREFilter' }
    materials: { __type: '_MaterialFilter' }
    materials_not: { __type: '_MaterialFilter' }
    materials_in: { __type: '[_MaterialFilter!]' }
    materials_not_in: { __type: '[_MaterialFilter!]' }
    materials_some: { __type: '_MaterialFilter' }
    materials_none: { __type: '_MaterialFilter' }
    materials_single: { __type: '_MaterialFilter' }
    materials_every: { __type: '_MaterialFilter' }
  }
  _CraftSearch: {
    CraftSearch: { __type: 'String' }
    threshold: { __type: 'Float' }
  }
  Craft: {
    __typename: { __type: 'String!' }
    id: { __type: 'ID!' }
    name: { __type: 'String!' }
    uses_bom: {
      __type: '[BOM]'
      __args: {
        first: 'Int'
        offset: 'Int'
        orderBy: '[_BOMOrdering]'
        filter: '_BOMFilter'
      }
    }
    first_procedure: {
      __type: '[Procedure]'
      __args: {
        first: 'Int'
        offset: 'Int'
        orderBy: '[_ProcedureOrdering]'
        filter: '_ProcedureFilter'
      }
    }
    last_procedure: {
      __type: '[Procedure]'
      __args: {
        first: 'Int'
        offset: 'Int'
        orderBy: '[_ProcedureOrdering]'
        filter: '_ProcedureFilter'
      }
    }
    has_procedure: {
      __type: '[Procedure]'
      __args: {
        first: 'Int'
        offset: 'Int'
        orderBy: '[_ProcedureOrdering]'
        filter: '_ProcedureFilter'
      }
    }
    HAS_PROCEDURE_rel: {
      __type: '[_CraftHAS_PROCEDURE_rel]'
      __args: {
        first: 'Int'
        offset: 'Int'
        orderBy: '[_HAS_PROCEDUREOrdering]'
        filter: '_CraftHAS_PROCEDUREFilter'
      }
    }
    materials: {
      __type: '[Material]'
      __args: {
        first: 'Int'
        offset: 'Int'
        orderBy: '[_MaterialOrdering]'
        filter: '_MaterialFilter'
      }
    }
    _id: { __type: 'String' }
  }
  _AddProcedureNextPayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'Procedure' }
    to: { __type: 'Procedure' }
  }
  _RemoveProcedureNextPayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'Procedure' }
    to: { __type: 'Procedure' }
  }
  _MergeProcedureNextPayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'Procedure' }
    to: { __type: 'Procedure' }
  }
  _AddProcedureCrafts_first_procedurePayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'Craft' }
    to: { __type: 'Procedure' }
  }
  _RemoveProcedureCrafts_first_procedurePayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'Craft' }
    to: { __type: 'Procedure' }
  }
  _MergeProcedureCrafts_first_procedurePayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'Craft' }
    to: { __type: 'Procedure' }
  }
  _AddProcedureCrafts_last_procedurePayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'Craft' }
    to: { __type: 'Procedure' }
  }
  _RemoveProcedureCrafts_last_procedurePayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'Craft' }
    to: { __type: 'Procedure' }
  }
  _MergeProcedureCrafts_last_procedurePayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'Craft' }
    to: { __type: 'Procedure' }
  }
  _AddProcedureProceduretasks_uses_procedurePayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'ProcedureTask' }
    to: { __type: 'Procedure' }
  }
  _RemoveProcedureProceduretasks_uses_procedurePayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'ProcedureTask' }
    to: { __type: 'Procedure' }
  }
  _MergeProcedureProceduretasks_uses_procedurePayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'ProcedureTask' }
    to: { __type: 'Procedure' }
  }
  _AddProcedureCrafts_has_procedurePayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'Craft' }
    to: { __type: 'Procedure' }
  }
  _RemoveProcedureCrafts_has_procedurePayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'Craft' }
    to: { __type: 'Procedure' }
  }
  _MergeProcedureCrafts_has_procedurePayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'Craft' }
    to: { __type: 'Procedure' }
  }
  _ProcedureCreate: { id: { __type: 'ID' }; name: { __type: 'String!' } }
  _ProcedureUpdate: { id: { __type: 'ID' }; name: { __type: 'String' } }
  _ProcedureWhere: {
    AND: { __type: '[_ProcedureWhere!]' }
    OR: { __type: '[_ProcedureWhere!]' }
    id: { __type: 'ID' }
    id_not: { __type: 'ID' }
    id_in: { __type: '[ID!]' }
    id_not_in: { __type: '[ID!]' }
    id_regexp: { __type: 'ID' }
    id_contains: { __type: 'ID' }
    id_not_contains: { __type: 'ID' }
    id_starts_with: { __type: 'ID' }
    id_not_starts_with: { __type: 'ID' }
    id_ends_with: { __type: 'ID' }
    id_not_ends_with: { __type: 'ID' }
    name: { __type: 'String' }
    name_not: { __type: 'String' }
    name_in: { __type: '[String!]' }
    name_not_in: { __type: '[String!]' }
    name_regexp: { __type: 'String' }
    name_contains: { __type: 'String' }
    name_not_contains: { __type: 'String' }
    name_starts_with: { __type: 'String' }
    name_not_starts_with: { __type: 'String' }
    name_ends_with: { __type: 'String' }
    name_not_ends_with: { __type: 'String' }
  }
  _ProcedureKeys: { id: { __type: 'ID' }; name: { __type: 'String' } }
  _ProcedureFilter: {
    AND: { __type: '[_ProcedureFilter!]' }
    OR: { __type: '[_ProcedureFilter!]' }
    id: { __type: 'ID' }
    id_not: { __type: 'ID' }
    id_in: { __type: '[ID!]' }
    id_not_in: { __type: '[ID!]' }
    id_regexp: { __type: 'ID' }
    id_contains: { __type: 'ID' }
    id_not_contains: { __type: 'ID' }
    id_starts_with: { __type: 'ID' }
    id_not_starts_with: { __type: 'ID' }
    id_ends_with: { __type: 'ID' }
    id_not_ends_with: { __type: 'ID' }
    name: { __type: 'String' }
    name_not: { __type: 'String' }
    name_in: { __type: '[String!]' }
    name_not_in: { __type: '[String!]' }
    name_regexp: { __type: 'String' }
    name_contains: { __type: 'String' }
    name_not_contains: { __type: 'String' }
    name_starts_with: { __type: 'String' }
    name_not_starts_with: { __type: 'String' }
    name_ends_with: { __type: 'String' }
    name_not_ends_with: { __type: 'String' }
    next: { __type: '_ProcedureFilter' }
    next_not: { __type: '_ProcedureFilter' }
    next_in: { __type: '[_ProcedureFilter!]' }
    next_not_in: { __type: '[_ProcedureFilter!]' }
    next_some: { __type: '_ProcedureFilter' }
    next_none: { __type: '_ProcedureFilter' }
    next_single: { __type: '_ProcedureFilter' }
    next_every: { __type: '_ProcedureFilter' }
    crafts_first_procedure: { __type: '_CraftFilter' }
    crafts_first_procedure_not: { __type: '_CraftFilter' }
    crafts_first_procedure_in: { __type: '[_CraftFilter!]' }
    crafts_first_procedure_not_in: { __type: '[_CraftFilter!]' }
    crafts_first_procedure_some: { __type: '_CraftFilter' }
    crafts_first_procedure_none: { __type: '_CraftFilter' }
    crafts_first_procedure_single: { __type: '_CraftFilter' }
    crafts_first_procedure_every: { __type: '_CraftFilter' }
    crafts_last_procedure: { __type: '_CraftFilter' }
    crafts_last_procedure_not: { __type: '_CraftFilter' }
    crafts_last_procedure_in: { __type: '[_CraftFilter!]' }
    crafts_last_procedure_not_in: { __type: '[_CraftFilter!]' }
    crafts_last_procedure_some: { __type: '_CraftFilter' }
    crafts_last_procedure_none: { __type: '_CraftFilter' }
    crafts_last_procedure_single: { __type: '_CraftFilter' }
    crafts_last_procedure_every: { __type: '_CraftFilter' }
    proceduretasks_uses_procedure: { __type: '_ProcedureTaskFilter' }
    proceduretasks_uses_procedure_not: { __type: '_ProcedureTaskFilter' }
    proceduretasks_uses_procedure_in: { __type: '[_ProcedureTaskFilter!]' }
    proceduretasks_uses_procedure_not_in: { __type: '[_ProcedureTaskFilter!]' }
    proceduretasks_uses_procedure_some: { __type: '_ProcedureTaskFilter' }
    proceduretasks_uses_procedure_none: { __type: '_ProcedureTaskFilter' }
    proceduretasks_uses_procedure_single: { __type: '_ProcedureTaskFilter' }
    proceduretasks_uses_procedure_every: { __type: '_ProcedureTaskFilter' }
    crafts_has_procedure: { __type: '_CraftFilter' }
    crafts_has_procedure_not: { __type: '_CraftFilter' }
    crafts_has_procedure_in: { __type: '[_CraftFilter!]' }
    crafts_has_procedure_not_in: { __type: '[_CraftFilter!]' }
    crafts_has_procedure_some: { __type: '_CraftFilter' }
    crafts_has_procedure_none: { __type: '_CraftFilter' }
    crafts_has_procedure_single: { __type: '_CraftFilter' }
    crafts_has_procedure_every: { __type: '_CraftFilter' }
  }
  Procedure: {
    __typename: { __type: 'String!' }
    id: { __type: 'ID!' }
    name: { __type: 'String!' }
    next: {
      __type: '[Procedure]'
      __args: {
        first: 'Int'
        offset: 'Int'
        orderBy: '[_ProcedureOrdering]'
        filter: '_ProcedureFilter'
      }
    }
    crafts_first_procedure: {
      __type: '[Craft]'
      __args: {
        first: 'Int'
        offset: 'Int'
        orderBy: '[_CraftOrdering]'
        filter: '_CraftFilter'
      }
    }
    crafts_last_procedure: {
      __type: '[Craft]'
      __args: {
        first: 'Int'
        offset: 'Int'
        orderBy: '[_CraftOrdering]'
        filter: '_CraftFilter'
      }
    }
    proceduretasks_uses_procedure: {
      __type: '[ProcedureTask]'
      __args: {
        first: 'Int'
        offset: 'Int'
        orderBy: '[_ProcedureTaskOrdering]'
        filter: '_ProcedureTaskFilter'
      }
    }
    crafts_has_procedure: {
      __type: '[Craft]'
      __args: {
        first: 'Int'
        offset: 'Int'
        orderBy: '[_CraftOrdering]'
        filter: '_CraftFilter'
      }
    }
    _id: { __type: 'String' }
  }
  _AddMaterialHas_craftPayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'Material' }
    to: { __type: 'Craft' }
  }
  _RemoveMaterialHas_craftPayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'Material' }
    to: { __type: 'Craft' }
  }
  _MergeMaterialHas_craftPayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'Material' }
    to: { __type: 'Craft' }
  }
  _AddMaterialBomsPayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'BOM' }
    to: { __type: 'Material' }
  }
  _RemoveMaterialBomsPayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'BOM' }
    to: { __type: 'Material' }
  }
  _MergeMaterialBomsPayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'BOM' }
    to: { __type: 'Material' }
  }
  _AddMaterialWorkordersPayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'WorkOrder' }
    to: { __type: 'Material' }
  }
  _RemoveMaterialWorkordersPayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'WorkOrder' }
    to: { __type: 'Material' }
  }
  _MergeMaterialWorkordersPayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'WorkOrder' }
    to: { __type: 'Material' }
  }
  _MaterialCreate: { id: { __type: 'ID' }; name: { __type: 'String!' } }
  _MaterialUpdate: { id: { __type: 'ID' }; name: { __type: 'String' } }
  _MaterialWhere: {
    AND: { __type: '[_MaterialWhere!]' }
    OR: { __type: '[_MaterialWhere!]' }
    id: { __type: 'ID' }
    id_not: { __type: 'ID' }
    id_in: { __type: '[ID!]' }
    id_not_in: { __type: '[ID!]' }
    id_regexp: { __type: 'ID' }
    id_contains: { __type: 'ID' }
    id_not_contains: { __type: 'ID' }
    id_starts_with: { __type: 'ID' }
    id_not_starts_with: { __type: 'ID' }
    id_ends_with: { __type: 'ID' }
    id_not_ends_with: { __type: 'ID' }
    name: { __type: 'String' }
    name_not: { __type: 'String' }
    name_in: { __type: '[String!]' }
    name_not_in: { __type: '[String!]' }
    name_regexp: { __type: 'String' }
    name_contains: { __type: 'String' }
    name_not_contains: { __type: 'String' }
    name_starts_with: { __type: 'String' }
    name_not_starts_with: { __type: 'String' }
    name_ends_with: { __type: 'String' }
    name_not_ends_with: { __type: 'String' }
  }
  _MaterialKeys: { id: { __type: 'ID' }; name: { __type: 'String' } }
  _MaterialFilter: {
    AND: { __type: '[_MaterialFilter!]' }
    OR: { __type: '[_MaterialFilter!]' }
    id: { __type: 'ID' }
    id_not: { __type: 'ID' }
    id_in: { __type: '[ID!]' }
    id_not_in: { __type: '[ID!]' }
    id_regexp: { __type: 'ID' }
    id_contains: { __type: 'ID' }
    id_not_contains: { __type: 'ID' }
    id_starts_with: { __type: 'ID' }
    id_not_starts_with: { __type: 'ID' }
    id_ends_with: { __type: 'ID' }
    id_not_ends_with: { __type: 'ID' }
    name: { __type: 'String' }
    name_not: { __type: 'String' }
    name_in: { __type: '[String!]' }
    name_not_in: { __type: '[String!]' }
    name_regexp: { __type: 'String' }
    name_contains: { __type: 'String' }
    name_not_contains: { __type: 'String' }
    name_starts_with: { __type: 'String' }
    name_not_starts_with: { __type: 'String' }
    name_ends_with: { __type: 'String' }
    name_not_ends_with: { __type: 'String' }
    has_craft: { __type: '_CraftFilter' }
    has_craft_not: { __type: '_CraftFilter' }
    has_craft_in: { __type: '[_CraftFilter!]' }
    has_craft_not_in: { __type: '[_CraftFilter!]' }
    has_craft_some: { __type: '_CraftFilter' }
    has_craft_none: { __type: '_CraftFilter' }
    has_craft_single: { __type: '_CraftFilter' }
    has_craft_every: { __type: '_CraftFilter' }
    boms: { __type: '_BOMFilter' }
    boms_not: { __type: '_BOMFilter' }
    boms_in: { __type: '[_BOMFilter!]' }
    boms_not_in: { __type: '[_BOMFilter!]' }
    boms_some: { __type: '_BOMFilter' }
    boms_none: { __type: '_BOMFilter' }
    boms_single: { __type: '_BOMFilter' }
    boms_every: { __type: '_BOMFilter' }
    workorders: { __type: '_WorkOrderFilter' }
    workorders_not: { __type: '_WorkOrderFilter' }
    workorders_in: { __type: '[_WorkOrderFilter!]' }
    workorders_not_in: { __type: '[_WorkOrderFilter!]' }
    workorders_some: { __type: '_WorkOrderFilter' }
    workorders_none: { __type: '_WorkOrderFilter' }
    workorders_single: { __type: '_WorkOrderFilter' }
    workorders_every: { __type: '_WorkOrderFilter' }
  }
  Material: {
    __typename: { __type: 'String!' }
    id: { __type: 'ID!' }
    name: { __type: 'String!' }
    has_craft: {
      __type: '[Craft]'
      __args: {
        first: 'Int'
        offset: 'Int'
        orderBy: '[_CraftOrdering]'
        filter: '_CraftFilter'
      }
    }
    boms: {
      __type: '[BOM]'
      __args: {
        first: 'Int'
        offset: 'Int'
        orderBy: '[_BOMOrdering]'
        filter: '_BOMFilter'
      }
    }
    workorders: {
      __type: '[WorkOrder]'
      __args: {
        first: 'Int'
        offset: 'Int'
        orderBy: '[_WorkOrderOrdering]'
        filter: '_WorkOrderFilter'
      }
    }
    _id: { __type: 'String' }
  }
  _AddBOMUses_materialPayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'BOM' }
    to: { __type: 'Material' }
  }
  _RemoveBOMUses_materialPayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'BOM' }
    to: { __type: 'Material' }
  }
  _MergeBOMUses_materialPayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'BOM' }
    to: { __type: 'Material' }
  }
  _BOMUSES_MATERIAL_rel: {
    __typename: { __type: 'String!' }
    amount: { __type: 'Int!' }
    _id: { __type: 'String' }
    Material: { __type: 'Material' }
  }
  _BOMUSES_MATERIALFilter: {
    AND: { __type: '[_BOMUSES_MATERIALFilter!]' }
    OR: { __type: '[_BOMUSES_MATERIALFilter!]' }
    amount: { __type: 'Int' }
    amount_not: { __type: 'Int' }
    amount_in: { __type: '[Int!]' }
    amount_not_in: { __type: '[Int!]' }
    amount_lt: { __type: 'Int' }
    amount_lte: { __type: 'Int' }
    amount_gt: { __type: 'Int' }
    amount_gte: { __type: 'Int' }
    Material: { __type: '_MaterialFilter' }
  }
  _USES_MATERIALInput: { amount: { __type: 'Int!' } }
  _AddBOMUSES_MATERIAL_relPayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'BOM' }
    to: { __type: 'Material' }
    amount: { __type: 'Int!' }
    _id: { __type: 'String' }
  }
  _RemoveBOMUSES_MATERIAL_relPayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'BOM' }
    to: { __type: 'Material' }
  }
  _UpdateBOMUSES_MATERIAL_relPayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'BOM' }
    to: { __type: 'Material' }
    amount: { __type: 'Int!' }
    _id: { __type: 'String' }
  }
  _MergeBOMUSES_MATERIAL_relPayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'BOM' }
    to: { __type: 'Material' }
    amount: { __type: 'Int!' }
    _id: { __type: 'String' }
  }
  _AddBOMCraftsPayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'Craft' }
    to: { __type: 'BOM' }
  }
  _RemoveBOMCraftsPayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'Craft' }
    to: { __type: 'BOM' }
  }
  _MergeBOMCraftsPayload: {
    __typename: { __type: 'String!' }
    from: { __type: 'Craft' }
    to: { __type: 'BOM' }
  }
  _BOMCreate: { id: { __type: 'ID' }; name: { __type: 'String!' } }
  _BOMUpdate: { id: { __type: 'ID' }; name: { __type: 'String' } }
  _BOMWhere: {
    AND: { __type: '[_BOMWhere!]' }
    OR: { __type: '[_BOMWhere!]' }
    id: { __type: 'ID' }
    id_not: { __type: 'ID' }
    id_in: { __type: '[ID!]' }
    id_not_in: { __type: '[ID!]' }
    id_regexp: { __type: 'ID' }
    id_contains: { __type: 'ID' }
    id_not_contains: { __type: 'ID' }
    id_starts_with: { __type: 'ID' }
    id_not_starts_with: { __type: 'ID' }
    id_ends_with: { __type: 'ID' }
    id_not_ends_with: { __type: 'ID' }
    name: { __type: 'String' }
    name_not: { __type: 'String' }
    name_in: { __type: '[String!]' }
    name_not_in: { __type: '[String!]' }
    name_regexp: { __type: 'String' }
    name_contains: { __type: 'String' }
    name_not_contains: { __type: 'String' }
    name_starts_with: { __type: 'String' }
    name_not_starts_with: { __type: 'String' }
    name_ends_with: { __type: 'String' }
    name_not_ends_with: { __type: 'String' }
  }
  _BOMKeys: { id: { __type: 'ID' }; name: { __type: 'String' } }
  _BOMFilter: {
    AND: { __type: '[_BOMFilter!]' }
    OR: { __type: '[_BOMFilter!]' }
    id: { __type: 'ID' }
    id_not: { __type: 'ID' }
    id_in: { __type: '[ID!]' }
    id_not_in: { __type: '[ID!]' }
    id_regexp: { __type: 'ID' }
    id_contains: { __type: 'ID' }
    id_not_contains: { __type: 'ID' }
    id_starts_with: { __type: 'ID' }
    id_not_starts_with: { __type: 'ID' }
    id_ends_with: { __type: 'ID' }
    id_not_ends_with: { __type: 'ID' }
    name: { __type: 'String' }
    name_not: { __type: 'String' }
    name_in: { __type: '[String!]' }
    name_not_in: { __type: '[String!]' }
    name_regexp: { __type: 'String' }
    name_contains: { __type: 'String' }
    name_not_contains: { __type: 'String' }
    name_starts_with: { __type: 'String' }
    name_not_starts_with: { __type: 'String' }
    name_ends_with: { __type: 'String' }
    name_not_ends_with: { __type: 'String' }
    uses_material: { __type: '_MaterialFilter' }
    uses_material_not: { __type: '_MaterialFilter' }
    uses_material_in: { __type: '[_MaterialFilter!]' }
    uses_material_not_in: { __type: '[_MaterialFilter!]' }
    uses_material_some: { __type: '_MaterialFilter' }
    uses_material_none: { __type: '_MaterialFilter' }
    uses_material_single: { __type: '_MaterialFilter' }
    uses_material_every: { __type: '_MaterialFilter' }
    USES_MATERIAL_rel: { __type: '_BOMUSES_MATERIALFilter' }
    USES_MATERIAL_rel_not: { __type: '_BOMUSES_MATERIALFilter' }
    USES_MATERIAL_rel_in: { __type: '[_BOMUSES_MATERIALFilter!]' }
    USES_MATERIAL_rel_not_in: { __type: '[_BOMUSES_MATERIALFilter!]' }
    USES_MATERIAL_rel_some: { __type: '_BOMUSES_MATERIALFilter' }
    USES_MATERIAL_rel_none: { __type: '_BOMUSES_MATERIALFilter' }
    USES_MATERIAL_rel_single: { __type: '_BOMUSES_MATERIALFilter' }
    USES_MATERIAL_rel_every: { __type: '_BOMUSES_MATERIALFilter' }
    crafts: { __type: '_CraftFilter' }
    crafts_not: { __type: '_CraftFilter' }
    crafts_in: { __type: '[_CraftFilter!]' }
    crafts_not_in: { __type: '[_CraftFilter!]' }
    crafts_some: { __type: '_CraftFilter' }
    crafts_none: { __type: '_CraftFilter' }
    crafts_single: { __type: '_CraftFilter' }
    crafts_every: { __type: '_CraftFilter' }
  }
  BOM: {
    __typename: { __type: 'String!' }
    id: { __type: 'ID!' }
    name: { __type: 'String!' }
    uses_material: {
      __type: '[Material]'
      __args: {
        first: 'Int'
        offset: 'Int'
        orderBy: '[_MaterialOrdering]'
        filter: '_MaterialFilter'
      }
    }
    USES_MATERIAL_rel: {
      __type: '[_BOMUSES_MATERIAL_rel]'
      __args: {
        first: 'Int'
        offset: 'Int'
        orderBy: '[_USES_MATERIALOrdering]'
        filter: '_BOMUSES_MATERIALFilter'
      }
    }
    crafts: {
      __type: '[Craft]'
      __args: {
        first: 'Int'
        offset: 'Int'
        orderBy: '[_CraftOrdering]'
        filter: '_CraftFilter'
      }
    }
    _id: { __type: 'String' }
  }
  USES_MATERIAL: {
    __typename: { __type: 'String!' }
    from: { __type: 'BOM!' }
    to: { __type: 'Material!' }
    amount: { __type: 'Int!' }
  }
  HAS_PRODUCT: {
    __typename: { __type: 'String!' }
    from: { __type: 'WorkOrder!' }
    to: { __type: 'Material!' }
    amount: { __type: 'Int!' }
  }
  EXECUTES: {
    __typename: { __type: 'String!' }
    from: { __type: 'User!' }
    to: { __type: 'ProcedureTask!' }
    at_time: { __type: 'String!' }
    amount: { __type: 'Int!' }
  }
  HAS_PROCEDURE: {
    __typename: { __type: 'String!' }
    from: { __type: 'Craft!' }
    to: { __type: 'Procedure!' }
    type: { __type: 'String' }
  }
  _BOMDetail: { name: { __type: 'String!' }; amount: { __type: 'Int!' } }
  _craftDetail: { name: { __type: 'String!' }; next: { __type: 'String' } }
  _Neo4jTimeInput: {
    hour: { __type: 'Int' }
    minute: { __type: 'Int' }
    second: { __type: 'Int' }
    millisecond: { __type: 'Int' }
    microsecond: { __type: 'Int' }
    nanosecond: { __type: 'Int' }
    timezone: { __type: 'String' }
    formatted: { __type: 'String' }
  }
  _Neo4jTime: {
    __typename: { __type: 'String!' }
    hour: { __type: 'Int' }
    minute: { __type: 'Int' }
    second: { __type: 'Int' }
    millisecond: { __type: 'Int' }
    microsecond: { __type: 'Int' }
    nanosecond: { __type: 'Int' }
    timezone: { __type: 'String' }
    formatted: { __type: 'String' }
  }
  _Neo4jDateInput: {
    year: { __type: 'Int' }
    month: { __type: 'Int' }
    day: { __type: 'Int' }
    formatted: { __type: 'String' }
  }
  _Neo4jDate: {
    __typename: { __type: 'String!' }
    year: { __type: 'Int' }
    month: { __type: 'Int' }
    day: { __type: 'Int' }
    formatted: { __type: 'String' }
  }
  _Neo4jDateTimeInput: {
    year: { __type: 'Int' }
    month: { __type: 'Int' }
    day: { __type: 'Int' }
    hour: { __type: 'Int' }
    minute: { __type: 'Int' }
    second: { __type: 'Int' }
    millisecond: { __type: 'Int' }
    microsecond: { __type: 'Int' }
    nanosecond: { __type: 'Int' }
    timezone: { __type: 'String' }
    formatted: { __type: 'String' }
  }
  _Neo4jDateTime: {
    __typename: { __type: 'String!' }
    year: { __type: 'Int' }
    month: { __type: 'Int' }
    day: { __type: 'Int' }
    hour: { __type: 'Int' }
    minute: { __type: 'Int' }
    second: { __type: 'Int' }
    millisecond: { __type: 'Int' }
    microsecond: { __type: 'Int' }
    nanosecond: { __type: 'Int' }
    timezone: { __type: 'String' }
    formatted: { __type: 'String' }
  }
  _Neo4jLocalTimeInput: {
    hour: { __type: 'Int' }
    minute: { __type: 'Int' }
    second: { __type: 'Int' }
    millisecond: { __type: 'Int' }
    microsecond: { __type: 'Int' }
    nanosecond: { __type: 'Int' }
    formatted: { __type: 'String' }
  }
  _Neo4jLocalTime: {
    __typename: { __type: 'String!' }
    hour: { __type: 'Int' }
    minute: { __type: 'Int' }
    second: { __type: 'Int' }
    millisecond: { __type: 'Int' }
    microsecond: { __type: 'Int' }
    nanosecond: { __type: 'Int' }
    formatted: { __type: 'String' }
  }
  _Neo4jLocalDateTimeInput: {
    year: { __type: 'Int' }
    month: { __type: 'Int' }
    day: { __type: 'Int' }
    hour: { __type: 'Int' }
    minute: { __type: 'Int' }
    second: { __type: 'Int' }
    millisecond: { __type: 'Int' }
    microsecond: { __type: 'Int' }
    nanosecond: { __type: 'Int' }
    formatted: { __type: 'String' }
  }
  _Neo4jLocalDateTime: {
    __typename: { __type: 'String!' }
    year: { __type: 'Int' }
    month: { __type: 'Int' }
    day: { __type: 'Int' }
    hour: { __type: 'Int' }
    minute: { __type: 'Int' }
    second: { __type: 'Int' }
    millisecond: { __type: 'Int' }
    microsecond: { __type: 'Int' }
    nanosecond: { __type: 'Int' }
    formatted: { __type: 'String' }
  }
  _Neo4jPointDistanceFilter: {
    point: { __type: '_Neo4jPointInput!' }
    distance: { __type: 'Float!' }
  }
  _Neo4jPointInput: {
    x: { __type: 'Float' }
    y: { __type: 'Float' }
    z: { __type: 'Float' }
    longitude: { __type: 'Float' }
    latitude: { __type: 'Float' }
    height: { __type: 'Float' }
    crs: { __type: 'String' }
    srid: { __type: 'Int' }
  }
  _Neo4jPoint: {
    __typename: { __type: 'String!' }
    x: { __type: 'Float' }
    y: { __type: 'Float' }
    z: { __type: 'Float' }
    longitude: { __type: 'Float' }
    latitude: { __type: 'Float' }
    height: { __type: 'Float' }
    crs: { __type: 'String' }
    srid: { __type: 'Int' }
  }
}

export interface Query {
  __typename: 'Query' | undefined
  listNextTask: (args?: {
    first?: Maybe<Scalars['Int']>
    offset?: Maybe<Scalars['Int']>
    orderBy?: Maybe<Array<Maybe<_ProcedureTaskOrdering>>>
  }) => Array<ProcedureTask>
  /**
   * [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for WorkOrder type nodes.
   */
  WorkOrder: (args?: {
    id?: Maybe<Scalars['ID']>
    is_completed?: Maybe<Scalars['Boolean']>
    schedule_date?: Maybe<Scalars['String']>
    deadline?: Maybe<Scalars['String']>
    _id?: Maybe<Scalars['String']>
    first?: Maybe<Scalars['Int']>
    offset?: Maybe<Scalars['Int']>
    orderBy?: Maybe<Array<Maybe<_WorkOrderOrdering>>>
    filter?: Maybe<_WorkOrderFilter>
  }) => Maybe<Array<Maybe<WorkOrder>>>
  /**
   * [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for ProcedureTask type nodes.
   */
  ProcedureTask: (args?: {
    id?: Maybe<Scalars['ID']>
    name?: Maybe<Scalars['String']>
    is_completed?: Maybe<Scalars['Boolean']>
    amount?: Maybe<Scalars['Int']>
    _id?: Maybe<Scalars['String']>
    first?: Maybe<Scalars['Int']>
    offset?: Maybe<Scalars['Int']>
    orderBy?: Maybe<Array<Maybe<_ProcedureTaskOrdering>>>
    filter?: Maybe<_ProcedureTaskFilter>
  }) => Maybe<Array<Maybe<ProcedureTask>>>
  /**
   * [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for User type nodes.
   */
  User: (args?: {
    id?: Maybe<Scalars['ID']>
    name?: Maybe<Scalars['String']>
    _id?: Maybe<Scalars['String']>
    first?: Maybe<Scalars['Int']>
    offset?: Maybe<Scalars['Int']>
    orderBy?: Maybe<Array<Maybe<_UserOrdering>>>
    filter?: Maybe<_UserFilter>
  }) => Maybe<Array<Maybe<User>>>
  /**
   * [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Craft type nodes.
   */
  Craft: (args?: {
    id?: Maybe<Scalars['ID']>
    name?: Maybe<Scalars['String']>
    _id?: Maybe<Scalars['String']>
    first?: Maybe<Scalars['Int']>
    offset?: Maybe<Scalars['Int']>
    orderBy?: Maybe<Array<Maybe<_CraftOrdering>>>
    filter?: Maybe<_CraftFilter>
    search?: Maybe<_CraftSearch>
  }) => Maybe<Array<Maybe<Craft>>>
  /**
   * [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Procedure type nodes.
   */
  Procedure: (args?: {
    id?: Maybe<Scalars['ID']>
    name?: Maybe<Scalars['String']>
    _id?: Maybe<Scalars['String']>
    first?: Maybe<Scalars['Int']>
    offset?: Maybe<Scalars['Int']>
    orderBy?: Maybe<Array<Maybe<_ProcedureOrdering>>>
    filter?: Maybe<_ProcedureFilter>
  }) => Maybe<Array<Maybe<Procedure>>>
  /**
   * [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Material type nodes.
   */
  Material: (args?: {
    id?: Maybe<Scalars['ID']>
    name?: Maybe<Scalars['String']>
    _id?: Maybe<Scalars['String']>
    first?: Maybe<Scalars['Int']>
    offset?: Maybe<Scalars['Int']>
    orderBy?: Maybe<Array<Maybe<_MaterialOrdering>>>
    filter?: Maybe<_MaterialFilter>
  }) => Maybe<Array<Maybe<Material>>>
  /**
   * [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for BOM type nodes.
   */
  BOM: (args?: {
    id?: Maybe<Scalars['ID']>
    name?: Maybe<Scalars['String']>
    _id?: Maybe<Scalars['String']>
    first?: Maybe<Scalars['Int']>
    offset?: Maybe<Scalars['Int']>
    orderBy?: Maybe<Array<Maybe<_BOMOrdering>>>
    filter?: Maybe<_BOMFilter>
  }) => Maybe<Array<Maybe<BOM>>>
}

export interface Mutation {
  __typename: 'Mutation' | undefined
  CreateBOM: (args: {
    productName: Scalars['String']
    BOMName: Scalars['String']
    bomDetail: Array<Maybe<_BOMDetail>>
  }) => BOM
  CreateCraft: (args: {
    productName: Scalars['String']
    craftName: Scalars['String']
    craftDetail: Array<_craftDetail>
  }) => Craft
  CreateOrder: (args: {
    productName: Scalars['String']
    productAmount: Scalars['Int']
    deadline: Scalars['String']
    craftName: Scalars['String']
  }) => WorkOrder
  ExecuteTask: (args: {
    userName: Scalars['String']
    taskId: Scalars['String']
    amount: Scalars['Int']
    time: Scalars['String']
  }) => Maybe<ScalarsEnums['Boolean']>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the HAS_PRODUCT relationship.
   */
  AddWorkOrderHas_product: (args: {
    from: _WorkOrderWhere
    to: _MaterialWhere
  }) => Maybe<_AddWorkOrderHas_productPayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the HAS_PRODUCT relationship.
   */
  RemoveWorkOrderHas_product: (args: {
    from: _WorkOrderWhere
    to: _MaterialWhere
  }) => Maybe<_RemoveWorkOrderHas_productPayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the HAS_PRODUCT relationship.
   */
  MergeWorkOrderHas_product: (args: {
    from: _WorkOrderWhere
    to: _MaterialWhere
  }) => Maybe<_MergeWorkOrderHas_productPayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the HAS_PRODUCT relationship.
   */
  AddWorkOrderHAS_PRODUCT_rel: (args: {
    from: _WorkOrderWhere
    to: _MaterialWhere
    data: _HAS_PRODUCTInput
  }) => Maybe<_AddWorkOrderHAS_PRODUCT_relPayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the HAS_PRODUCT relationship.
   */
  RemoveWorkOrderHAS_PRODUCT_rel: (args: {
    from: _WorkOrderWhere
    to: _MaterialWhere
  }) => Maybe<_RemoveWorkOrderHAS_PRODUCT_relPayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##update-relationship) for [updating](https://neo4j.com/docs/cypher-manual/4.1/clauses/set/#set-update-a-property) the HAS_PRODUCT relationship.
   */
  UpdateWorkOrderHAS_PRODUCT_rel: (args: {
    from: _WorkOrderWhere
    to: _MaterialWhere
    data: _HAS_PRODUCTInput
  }) => Maybe<_UpdateWorkOrderHAS_PRODUCT_relPayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the HAS_PRODUCT relationship.
   */
  MergeWorkOrderHAS_PRODUCT_rel: (args: {
    from: _WorkOrderWhere
    to: _MaterialWhere
    data: _HAS_PRODUCTInput
  }) => Maybe<_MergeWorkOrderHAS_PRODUCT_relPayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the HAS_TASK relationship.
   */
  AddWorkOrderHas_task: (args: {
    from: _WorkOrderWhere
    to: _ProcedureTaskWhere
  }) => Maybe<_AddWorkOrderHas_taskPayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the HAS_TASK relationship.
   */
  RemoveWorkOrderHas_task: (args: {
    from: _WorkOrderWhere
    to: _ProcedureTaskWhere
  }) => Maybe<_RemoveWorkOrderHas_taskPayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the HAS_TASK relationship.
   */
  MergeWorkOrderHas_task: (args: {
    from: _WorkOrderWhere
    to: _ProcedureTaskWhere
  }) => Maybe<_MergeWorkOrderHas_taskPayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#create) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-nodes) a WorkOrder node.
   */
  CreateWorkOrder: (args: { data: _WorkOrderCreate }) => Maybe<WorkOrder>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#update) for [updating](https://neo4j.com/docs/cypher-manual/4.1/clauses/set/#set-update-a-property) a WorkOrder node.
   */
  UpdateWorkOrder: (args: {
    where: _WorkOrderWhere
    data: _WorkOrderUpdate
  }) => Maybe<WorkOrder>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#delete) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-single-node) a WorkOrder node.
   */
  DeleteWorkOrder: (args: { where: _WorkOrderWhere }) => Maybe<WorkOrder>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#merge) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-node-derived) a WorkOrder node.
   */
  MergeWorkOrder: (args: {
    where: _WorkOrderKeys
    data: _WorkOrderCreate
  }) => Maybe<WorkOrder>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the HAS_TASK relationship.
   */
  AddProcedureTaskIn_order: (args: {
    from: _WorkOrderWhere
    to: _ProcedureTaskWhere
  }) => Maybe<_AddProcedureTaskIn_orderPayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the HAS_TASK relationship.
   */
  RemoveProcedureTaskIn_order: (args: {
    from: _WorkOrderWhere
    to: _ProcedureTaskWhere
  }) => Maybe<_RemoveProcedureTaskIn_orderPayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the HAS_TASK relationship.
   */
  MergeProcedureTaskIn_order: (args: {
    from: _WorkOrderWhere
    to: _ProcedureTaskWhere
  }) => Maybe<_MergeProcedureTaskIn_orderPayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the USES_PROCEDURE relationship.
   */
  AddProcedureTaskUses_procedure: (args: {
    from: _ProcedureTaskWhere
    to: _ProcedureWhere
  }) => Maybe<_AddProcedureTaskUses_procedurePayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the USES_PROCEDURE relationship.
   */
  RemoveProcedureTaskUses_procedure: (args: {
    from: _ProcedureTaskWhere
    to: _ProcedureWhere
  }) => Maybe<_RemoveProcedureTaskUses_procedurePayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the USES_PROCEDURE relationship.
   */
  MergeProcedureTaskUses_procedure: (args: {
    from: _ProcedureTaskWhere
    to: _ProcedureWhere
  }) => Maybe<_MergeProcedureTaskUses_procedurePayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the EXECUTES relationship.
   */
  AddProcedureTaskUsers: (args: {
    from: _UserWhere
    to: _ProcedureTaskWhere
  }) => Maybe<_AddProcedureTaskUsersPayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the EXECUTES relationship.
   */
  RemoveProcedureTaskUsers: (args: {
    from: _UserWhere
    to: _ProcedureTaskWhere
  }) => Maybe<_RemoveProcedureTaskUsersPayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the EXECUTES relationship.
   */
  MergeProcedureTaskUsers: (args: {
    from: _UserWhere
    to: _ProcedureTaskWhere
  }) => Maybe<_MergeProcedureTaskUsersPayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#create) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-nodes) a ProcedureTask node.
   */
  CreateProcedureTask: (args: {
    data: _ProcedureTaskCreate
  }) => Maybe<ProcedureTask>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#update) for [updating](https://neo4j.com/docs/cypher-manual/4.1/clauses/set/#set-update-a-property) a ProcedureTask node.
   */
  UpdateProcedureTask: (args: {
    where: _ProcedureTaskWhere
    data: _ProcedureTaskUpdate
  }) => Maybe<ProcedureTask>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#delete) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-single-node) a ProcedureTask node.
   */
  DeleteProcedureTask: (args: {
    where: _ProcedureTaskWhere
  }) => Maybe<ProcedureTask>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#merge) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-node-derived) a ProcedureTask node.
   */
  MergeProcedureTask: (args: {
    where: _ProcedureTaskKeys
    data: _ProcedureTaskCreate
  }) => Maybe<ProcedureTask>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the EXECUTES relationship.
   */
  AddUserExecutes: (args: {
    from: _UserWhere
    to: _ProcedureTaskWhere
  }) => Maybe<_AddUserExecutesPayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the EXECUTES relationship.
   */
  RemoveUserExecutes: (args: {
    from: _UserWhere
    to: _ProcedureTaskWhere
  }) => Maybe<_RemoveUserExecutesPayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the EXECUTES relationship.
   */
  MergeUserExecutes: (args: {
    from: _UserWhere
    to: _ProcedureTaskWhere
  }) => Maybe<_MergeUserExecutesPayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the EXECUTES relationship.
   */
  AddUserEXECUTES_rel: (args: {
    from: _UserWhere
    to: _ProcedureTaskWhere
    data: _EXECUTESInput
  }) => Maybe<_AddUserEXECUTES_relPayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the EXECUTES relationship.
   */
  RemoveUserEXECUTES_rel: (args: {
    from: _UserWhere
    to: _ProcedureTaskWhere
  }) => Maybe<_RemoveUserEXECUTES_relPayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##update-relationship) for [updating](https://neo4j.com/docs/cypher-manual/4.1/clauses/set/#set-update-a-property) the EXECUTES relationship.
   */
  UpdateUserEXECUTES_rel: (args: {
    from: _UserWhere
    to: _ProcedureTaskWhere
    data: _EXECUTESInput
  }) => Maybe<_UpdateUserEXECUTES_relPayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the EXECUTES relationship.
   */
  MergeUserEXECUTES_rel: (args: {
    from: _UserWhere
    to: _ProcedureTaskWhere
    data: _EXECUTESInput
  }) => Maybe<_MergeUserEXECUTES_relPayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#create) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-nodes) a User node.
   */
  CreateUser: (args: { data: _UserCreate }) => Maybe<User>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#update) for [updating](https://neo4j.com/docs/cypher-manual/4.1/clauses/set/#set-update-a-property) a User node.
   */
  UpdateUser: (args: { where: _UserWhere; data: _UserUpdate }) => Maybe<User>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#delete) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-single-node) a User node.
   */
  DeleteUser: (args: { where: _UserWhere }) => Maybe<User>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#merge) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-node-derived) a User node.
   */
  MergeUser: (args: { where: _UserKeys; data: _UserCreate }) => Maybe<User>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the USES_BOM relationship.
   */
  AddCraftUses_bom: (args: {
    from: _CraftWhere
    to: _BOMWhere
  }) => Maybe<_AddCraftUses_bomPayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the USES_BOM relationship.
   */
  RemoveCraftUses_bom: (args: {
    from: _CraftWhere
    to: _BOMWhere
  }) => Maybe<_RemoveCraftUses_bomPayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the USES_BOM relationship.
   */
  MergeCraftUses_bom: (args: {
    from: _CraftWhere
    to: _BOMWhere
  }) => Maybe<_MergeCraftUses_bomPayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the FIRST_PROCEDURE relationship.
   */
  AddCraftFirst_procedure: (args: {
    from: _CraftWhere
    to: _ProcedureWhere
  }) => Maybe<_AddCraftFirst_procedurePayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the FIRST_PROCEDURE relationship.
   */
  RemoveCraftFirst_procedure: (args: {
    from: _CraftWhere
    to: _ProcedureWhere
  }) => Maybe<_RemoveCraftFirst_procedurePayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the FIRST_PROCEDURE relationship.
   */
  MergeCraftFirst_procedure: (args: {
    from: _CraftWhere
    to: _ProcedureWhere
  }) => Maybe<_MergeCraftFirst_procedurePayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the LAST_PROCEDURE relationship.
   */
  AddCraftLast_procedure: (args: {
    from: _CraftWhere
    to: _ProcedureWhere
  }) => Maybe<_AddCraftLast_procedurePayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the LAST_PROCEDURE relationship.
   */
  RemoveCraftLast_procedure: (args: {
    from: _CraftWhere
    to: _ProcedureWhere
  }) => Maybe<_RemoveCraftLast_procedurePayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the LAST_PROCEDURE relationship.
   */
  MergeCraftLast_procedure: (args: {
    from: _CraftWhere
    to: _ProcedureWhere
  }) => Maybe<_MergeCraftLast_procedurePayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the HAS_PROCEDURE relationship.
   */
  AddCraftHas_procedure: (args: {
    from: _CraftWhere
    to: _ProcedureWhere
  }) => Maybe<_AddCraftHas_procedurePayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the HAS_PROCEDURE relationship.
   */
  RemoveCraftHas_procedure: (args: {
    from: _CraftWhere
    to: _ProcedureWhere
  }) => Maybe<_RemoveCraftHas_procedurePayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the HAS_PROCEDURE relationship.
   */
  MergeCraftHas_procedure: (args: {
    from: _CraftWhere
    to: _ProcedureWhere
  }) => Maybe<_MergeCraftHas_procedurePayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the HAS_PROCEDURE relationship.
   */
  AddCraftHAS_PROCEDURE_rel: (args: {
    from: _CraftWhere
    to: _ProcedureWhere
    data: _HAS_PROCEDUREInput
  }) => Maybe<_AddCraftHAS_PROCEDURE_relPayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the HAS_PROCEDURE relationship.
   */
  RemoveCraftHAS_PROCEDURE_rel: (args: {
    from: _CraftWhere
    to: _ProcedureWhere
  }) => Maybe<_RemoveCraftHAS_PROCEDURE_relPayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##update-relationship) for [updating](https://neo4j.com/docs/cypher-manual/4.1/clauses/set/#set-update-a-property) the HAS_PROCEDURE relationship.
   */
  UpdateCraftHAS_PROCEDURE_rel: (args: {
    from: _CraftWhere
    to: _ProcedureWhere
    data: _HAS_PROCEDUREInput
  }) => Maybe<_UpdateCraftHAS_PROCEDURE_relPayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the HAS_PROCEDURE relationship.
   */
  MergeCraftHAS_PROCEDURE_rel: (args: {
    from: _CraftWhere
    to: _ProcedureWhere
    data: _HAS_PROCEDUREInput
  }) => Maybe<_MergeCraftHAS_PROCEDURE_relPayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the HAS_CRAFT relationship.
   */
  AddCraftMaterials: (args: {
    from: _MaterialWhere
    to: _CraftWhere
  }) => Maybe<_AddCraftMaterialsPayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the HAS_CRAFT relationship.
   */
  RemoveCraftMaterials: (args: {
    from: _MaterialWhere
    to: _CraftWhere
  }) => Maybe<_RemoveCraftMaterialsPayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the HAS_CRAFT relationship.
   */
  MergeCraftMaterials: (args: {
    from: _MaterialWhere
    to: _CraftWhere
  }) => Maybe<_MergeCraftMaterialsPayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#update) for [updating](https://neo4j.com/docs/cypher-manual/4.1/clauses/set/#set-update-a-property) a Craft node.
   */
  UpdateCraft: (args: {
    where: _CraftWhere
    data: _CraftUpdate
  }) => Maybe<Craft>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#delete) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-single-node) a Craft node.
   */
  DeleteCraft: (args: { where: _CraftWhere }) => Maybe<Craft>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#merge) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-node-derived) a Craft node.
   */
  MergeCraft: (args: { where: _CraftKeys; data: _CraftCreate }) => Maybe<Craft>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the NEXT relationship.
   */
  AddProcedureNext: (args: {
    from: _ProcedureWhere
    to: _ProcedureWhere
  }) => Maybe<_AddProcedureNextPayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the NEXT relationship.
   */
  RemoveProcedureNext: (args: {
    from: _ProcedureWhere
    to: _ProcedureWhere
  }) => Maybe<_RemoveProcedureNextPayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the NEXT relationship.
   */
  MergeProcedureNext: (args: {
    from: _ProcedureWhere
    to: _ProcedureWhere
  }) => Maybe<_MergeProcedureNextPayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the FIRST_PROCEDURE relationship.
   */
  AddProcedureCrafts_first_procedure: (args: {
    from: _CraftWhere
    to: _ProcedureWhere
  }) => Maybe<_AddProcedureCrafts_first_procedurePayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the FIRST_PROCEDURE relationship.
   */
  RemoveProcedureCrafts_first_procedure: (args: {
    from: _CraftWhere
    to: _ProcedureWhere
  }) => Maybe<_RemoveProcedureCrafts_first_procedurePayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the FIRST_PROCEDURE relationship.
   */
  MergeProcedureCrafts_first_procedure: (args: {
    from: _CraftWhere
    to: _ProcedureWhere
  }) => Maybe<_MergeProcedureCrafts_first_procedurePayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the LAST_PROCEDURE relationship.
   */
  AddProcedureCrafts_last_procedure: (args: {
    from: _CraftWhere
    to: _ProcedureWhere
  }) => Maybe<_AddProcedureCrafts_last_procedurePayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the LAST_PROCEDURE relationship.
   */
  RemoveProcedureCrafts_last_procedure: (args: {
    from: _CraftWhere
    to: _ProcedureWhere
  }) => Maybe<_RemoveProcedureCrafts_last_procedurePayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the LAST_PROCEDURE relationship.
   */
  MergeProcedureCrafts_last_procedure: (args: {
    from: _CraftWhere
    to: _ProcedureWhere
  }) => Maybe<_MergeProcedureCrafts_last_procedurePayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the USES_PROCEDURE relationship.
   */
  AddProcedureProceduretasks_uses_procedure: (args: {
    from: _ProcedureTaskWhere
    to: _ProcedureWhere
  }) => Maybe<_AddProcedureProceduretasks_uses_procedurePayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the USES_PROCEDURE relationship.
   */
  RemoveProcedureProceduretasks_uses_procedure: (args: {
    from: _ProcedureTaskWhere
    to: _ProcedureWhere
  }) => Maybe<_RemoveProcedureProceduretasks_uses_procedurePayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the USES_PROCEDURE relationship.
   */
  MergeProcedureProceduretasks_uses_procedure: (args: {
    from: _ProcedureTaskWhere
    to: _ProcedureWhere
  }) => Maybe<_MergeProcedureProceduretasks_uses_procedurePayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the HAS_PROCEDURE relationship.
   */
  AddProcedureCrafts_has_procedure: (args: {
    from: _CraftWhere
    to: _ProcedureWhere
  }) => Maybe<_AddProcedureCrafts_has_procedurePayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the HAS_PROCEDURE relationship.
   */
  RemoveProcedureCrafts_has_procedure: (args: {
    from: _CraftWhere
    to: _ProcedureWhere
  }) => Maybe<_RemoveProcedureCrafts_has_procedurePayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the HAS_PROCEDURE relationship.
   */
  MergeProcedureCrafts_has_procedure: (args: {
    from: _CraftWhere
    to: _ProcedureWhere
  }) => Maybe<_MergeProcedureCrafts_has_procedurePayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#create) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-nodes) a Procedure node.
   */
  CreateProcedure: (args: { data: _ProcedureCreate }) => Maybe<Procedure>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#update) for [updating](https://neo4j.com/docs/cypher-manual/4.1/clauses/set/#set-update-a-property) a Procedure node.
   */
  UpdateProcedure: (args: {
    where: _ProcedureWhere
    data: _ProcedureUpdate
  }) => Maybe<Procedure>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#delete) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-single-node) a Procedure node.
   */
  DeleteProcedure: (args: { where: _ProcedureWhere }) => Maybe<Procedure>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#merge) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-node-derived) a Procedure node.
   */
  MergeProcedure: (args: {
    where: _ProcedureKeys
    data: _ProcedureCreate
  }) => Maybe<Procedure>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the HAS_CRAFT relationship.
   */
  AddMaterialHas_craft: (args: {
    from: _MaterialWhere
    to: _CraftWhere
  }) => Maybe<_AddMaterialHas_craftPayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the HAS_CRAFT relationship.
   */
  RemoveMaterialHas_craft: (args: {
    from: _MaterialWhere
    to: _CraftWhere
  }) => Maybe<_RemoveMaterialHas_craftPayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the HAS_CRAFT relationship.
   */
  MergeMaterialHas_craft: (args: {
    from: _MaterialWhere
    to: _CraftWhere
  }) => Maybe<_MergeMaterialHas_craftPayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the USES_MATERIAL relationship.
   */
  AddMaterialBoms: (args: {
    from: _BOMWhere
    to: _MaterialWhere
  }) => Maybe<_AddMaterialBomsPayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the USES_MATERIAL relationship.
   */
  RemoveMaterialBoms: (args: {
    from: _BOMWhere
    to: _MaterialWhere
  }) => Maybe<_RemoveMaterialBomsPayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the USES_MATERIAL relationship.
   */
  MergeMaterialBoms: (args: {
    from: _BOMWhere
    to: _MaterialWhere
  }) => Maybe<_MergeMaterialBomsPayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the HAS_PRODUCT relationship.
   */
  AddMaterialWorkorders: (args: {
    from: _WorkOrderWhere
    to: _MaterialWhere
  }) => Maybe<_AddMaterialWorkordersPayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the HAS_PRODUCT relationship.
   */
  RemoveMaterialWorkorders: (args: {
    from: _WorkOrderWhere
    to: _MaterialWhere
  }) => Maybe<_RemoveMaterialWorkordersPayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the HAS_PRODUCT relationship.
   */
  MergeMaterialWorkorders: (args: {
    from: _WorkOrderWhere
    to: _MaterialWhere
  }) => Maybe<_MergeMaterialWorkordersPayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#create) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-nodes) a Material node.
   */
  CreateMaterial: (args: { data: _MaterialCreate }) => Maybe<Material>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#update) for [updating](https://neo4j.com/docs/cypher-manual/4.1/clauses/set/#set-update-a-property) a Material node.
   */
  UpdateMaterial: (args: {
    where: _MaterialWhere
    data: _MaterialUpdate
  }) => Maybe<Material>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#delete) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-single-node) a Material node.
   */
  DeleteMaterial: (args: { where: _MaterialWhere }) => Maybe<Material>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#merge) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-node-derived) a Material node.
   */
  MergeMaterial: (args: {
    where: _MaterialKeys
    data: _MaterialCreate
  }) => Maybe<Material>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the USES_MATERIAL relationship.
   */
  AddBOMUses_material: (args: {
    from: _BOMWhere
    to: _MaterialWhere
  }) => Maybe<_AddBOMUses_materialPayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the USES_MATERIAL relationship.
   */
  RemoveBOMUses_material: (args: {
    from: _BOMWhere
    to: _MaterialWhere
  }) => Maybe<_RemoveBOMUses_materialPayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the USES_MATERIAL relationship.
   */
  MergeBOMUses_material: (args: {
    from: _BOMWhere
    to: _MaterialWhere
  }) => Maybe<_MergeBOMUses_materialPayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the USES_MATERIAL relationship.
   */
  AddBOMUSES_MATERIAL_rel: (args: {
    from: _BOMWhere
    to: _MaterialWhere
    data: _USES_MATERIALInput
  }) => Maybe<_AddBOMUSES_MATERIAL_relPayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the USES_MATERIAL relationship.
   */
  RemoveBOMUSES_MATERIAL_rel: (args: {
    from: _BOMWhere
    to: _MaterialWhere
  }) => Maybe<_RemoveBOMUSES_MATERIAL_relPayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##update-relationship) for [updating](https://neo4j.com/docs/cypher-manual/4.1/clauses/set/#set-update-a-property) the USES_MATERIAL relationship.
   */
  UpdateBOMUSES_MATERIAL_rel: (args: {
    from: _BOMWhere
    to: _MaterialWhere
    data: _USES_MATERIALInput
  }) => Maybe<_UpdateBOMUSES_MATERIAL_relPayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the USES_MATERIAL relationship.
   */
  MergeBOMUSES_MATERIAL_rel: (args: {
    from: _BOMWhere
    to: _MaterialWhere
    data: _USES_MATERIALInput
  }) => Maybe<_MergeBOMUSES_MATERIAL_relPayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the USES_BOM relationship.
   */
  AddBOMCrafts: (args: {
    from: _CraftWhere
    to: _BOMWhere
  }) => Maybe<_AddBOMCraftsPayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the USES_BOM relationship.
   */
  RemoveBOMCrafts: (args: {
    from: _CraftWhere
    to: _BOMWhere
  }) => Maybe<_RemoveBOMCraftsPayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the USES_BOM relationship.
   */
  MergeBOMCrafts: (args: {
    from: _CraftWhere
    to: _BOMWhere
  }) => Maybe<_MergeBOMCraftsPayload>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#update) for [updating](https://neo4j.com/docs/cypher-manual/4.1/clauses/set/#set-update-a-property) a BOM node.
   */
  UpdateBOM: (args: { where: _BOMWhere; data: _BOMUpdate }) => Maybe<BOM>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#delete) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-single-node) a BOM node.
   */
  DeleteBOM: (args: { where: _BOMWhere }) => Maybe<BOM>
  /**
   * [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#merge) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-node-derived) a BOM node.
   */
  MergeBOM: (args: { where: _BOMKeys; data: _BOMCreate }) => Maybe<BOM>
}

export interface Subscription {
  __typename: 'Subscription' | undefined
}

export interface _AddWorkOrderHas_productPayload {
  __typename: '_AddWorkOrderHas_productPayload' | undefined
  /**
   * Field for the WorkOrder node this HAS_PRODUCT [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<WorkOrder>
  /**
   * Field for the Material node this HAS_PRODUCT [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<Material>
}

export interface _RemoveWorkOrderHas_productPayload {
  __typename: '_RemoveWorkOrderHas_productPayload' | undefined
  /**
   * Field for the WorkOrder node this HAS_PRODUCT [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<WorkOrder>
  /**
   * Field for the Material node this HAS_PRODUCT [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<Material>
}

export interface _MergeWorkOrderHas_productPayload {
  __typename: '_MergeWorkOrderHas_productPayload' | undefined
  /**
   * Field for the WorkOrder node this HAS_PRODUCT [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<WorkOrder>
  /**
   * Field for the Material node this HAS_PRODUCT [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<Material>
}

export interface _WorkOrderHAS_PRODUCT_rel {
  __typename: '_WorkOrderHAS_PRODUCT_rel' | undefined
  amount: ScalarsEnums['Int']
  /**
   * Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship.
   */
  _id?: Maybe<ScalarsEnums['String']>
  /**
   * Field for the Material node this HAS_PRODUCT [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  Material?: Maybe<Material>
}

export interface _AddWorkOrderHAS_PRODUCT_relPayload {
  __typename: '_AddWorkOrderHAS_PRODUCT_relPayload' | undefined
  /**
   * Field for the WorkOrder node this HAS_PRODUCT [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<WorkOrder>
  /**
   * Field for the Material node this HAS_PRODUCT [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<Material>
  amount: ScalarsEnums['Int']
  /**
   * Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship.
   */
  _id?: Maybe<ScalarsEnums['String']>
}

export interface _RemoveWorkOrderHAS_PRODUCT_relPayload {
  __typename: '_RemoveWorkOrderHAS_PRODUCT_relPayload' | undefined
  /**
   * Field for the WorkOrder node this HAS_PRODUCT [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<WorkOrder>
  /**
   * Field for the Material node this HAS_PRODUCT [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<Material>
}

export interface _UpdateWorkOrderHAS_PRODUCT_relPayload {
  __typename: '_UpdateWorkOrderHAS_PRODUCT_relPayload' | undefined
  /**
   * Field for the WorkOrder node this HAS_PRODUCT [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<WorkOrder>
  /**
   * Field for the Material node this HAS_PRODUCT [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<Material>
  amount: ScalarsEnums['Int']
  /**
   * Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship.
   */
  _id?: Maybe<ScalarsEnums['String']>
}

export interface _MergeWorkOrderHAS_PRODUCT_relPayload {
  __typename: '_MergeWorkOrderHAS_PRODUCT_relPayload' | undefined
  /**
   * Field for the WorkOrder node this HAS_PRODUCT [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<WorkOrder>
  /**
   * Field for the Material node this HAS_PRODUCT [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<Material>
  amount: ScalarsEnums['Int']
  /**
   * Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship.
   */
  _id?: Maybe<ScalarsEnums['String']>
}

export interface _AddWorkOrderHas_taskPayload {
  __typename: '_AddWorkOrderHas_taskPayload' | undefined
  /**
   * Field for the WorkOrder node this HAS_TASK [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<WorkOrder>
  /**
   * Field for the ProcedureTask node this HAS_TASK [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<ProcedureTask>
}

export interface _RemoveWorkOrderHas_taskPayload {
  __typename: '_RemoveWorkOrderHas_taskPayload' | undefined
  /**
   * Field for the WorkOrder node this HAS_TASK [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<WorkOrder>
  /**
   * Field for the ProcedureTask node this HAS_TASK [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<ProcedureTask>
}

export interface _MergeWorkOrderHas_taskPayload {
  __typename: '_MergeWorkOrderHas_taskPayload' | undefined
  /**
   * Field for the WorkOrder node this HAS_TASK [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<WorkOrder>
  /**
   * Field for the ProcedureTask node this HAS_TASK [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<ProcedureTask>
}

export interface WorkOrder {
  __typename: 'WorkOrder' | undefined
  id: ScalarsEnums['ID']
  is_completed: ScalarsEnums['Boolean']
  schedule_date?: Maybe<ScalarsEnums['String']>
  deadline?: Maybe<ScalarsEnums['String']>
  has_product: (args?: {
    first?: Maybe<Scalars['Int']>
    offset?: Maybe<Scalars['Int']>
    orderBy?: Maybe<Array<Maybe<_MaterialOrdering>>>
    filter?: Maybe<_MaterialFilter>
  }) => Maybe<Array<Maybe<Material>>>
  HAS_PRODUCT_rel: (args?: {
    first?: Maybe<Scalars['Int']>
    offset?: Maybe<Scalars['Int']>
    orderBy?: Maybe<Array<Maybe<_HAS_PRODUCTOrdering>>>
    filter?: Maybe<_WorkOrderHAS_PRODUCTFilter>
  }) => Maybe<Array<Maybe<_WorkOrderHAS_PRODUCT_rel>>>
  has_task: (args?: {
    first?: Maybe<Scalars['Int']>
    offset?: Maybe<Scalars['Int']>
    orderBy?: Maybe<Array<Maybe<_ProcedureTaskOrdering>>>
    filter?: Maybe<_ProcedureTaskFilter>
  }) => Maybe<Array<Maybe<ProcedureTask>>>
  /**
   * Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node.
   */
  _id?: Maybe<ScalarsEnums['String']>
}

export interface _AddProcedureTaskIn_orderPayload {
  __typename: '_AddProcedureTaskIn_orderPayload' | undefined
  /**
   * Field for the WorkOrder node this HAS_TASK [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<WorkOrder>
  /**
   * Field for the ProcedureTask node this HAS_TASK [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<ProcedureTask>
}

export interface _RemoveProcedureTaskIn_orderPayload {
  __typename: '_RemoveProcedureTaskIn_orderPayload' | undefined
  /**
   * Field for the WorkOrder node this HAS_TASK [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<WorkOrder>
  /**
   * Field for the ProcedureTask node this HAS_TASK [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<ProcedureTask>
}

export interface _MergeProcedureTaskIn_orderPayload {
  __typename: '_MergeProcedureTaskIn_orderPayload' | undefined
  /**
   * Field for the WorkOrder node this HAS_TASK [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<WorkOrder>
  /**
   * Field for the ProcedureTask node this HAS_TASK [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<ProcedureTask>
}

export interface _AddProcedureTaskUses_procedurePayload {
  __typename: '_AddProcedureTaskUses_procedurePayload' | undefined
  /**
   * Field for the ProcedureTask node this USES_PROCEDURE [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<ProcedureTask>
  /**
   * Field for the Procedure node this USES_PROCEDURE [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<Procedure>
}

export interface _RemoveProcedureTaskUses_procedurePayload {
  __typename: '_RemoveProcedureTaskUses_procedurePayload' | undefined
  /**
   * Field for the ProcedureTask node this USES_PROCEDURE [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<ProcedureTask>
  /**
   * Field for the Procedure node this USES_PROCEDURE [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<Procedure>
}

export interface _MergeProcedureTaskUses_procedurePayload {
  __typename: '_MergeProcedureTaskUses_procedurePayload' | undefined
  /**
   * Field for the ProcedureTask node this USES_PROCEDURE [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<ProcedureTask>
  /**
   * Field for the Procedure node this USES_PROCEDURE [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<Procedure>
}

export interface _AddProcedureTaskUsersPayload {
  __typename: '_AddProcedureTaskUsersPayload' | undefined
  /**
   * Field for the User node this EXECUTES [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<User>
  /**
   * Field for the ProcedureTask node this EXECUTES [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<ProcedureTask>
}

export interface _RemoveProcedureTaskUsersPayload {
  __typename: '_RemoveProcedureTaskUsersPayload' | undefined
  /**
   * Field for the User node this EXECUTES [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<User>
  /**
   * Field for the ProcedureTask node this EXECUTES [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<ProcedureTask>
}

export interface _MergeProcedureTaskUsersPayload {
  __typename: '_MergeProcedureTaskUsersPayload' | undefined
  /**
   * Field for the User node this EXECUTES [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<User>
  /**
   * Field for the ProcedureTask node this EXECUTES [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<ProcedureTask>
}

export interface ProcedureTask {
  __typename: 'ProcedureTask' | undefined
  id: ScalarsEnums['ID']
  name: ScalarsEnums['String']
  is_completed: ScalarsEnums['Boolean']
  amount: ScalarsEnums['Int']
  in_order: (args?: { filter?: Maybe<_WorkOrderFilter> }) => WorkOrder
  uses_procedure: (args?: {
    first?: Maybe<Scalars['Int']>
    offset?: Maybe<Scalars['Int']>
    orderBy?: Maybe<Array<Maybe<_ProcedureOrdering>>>
    filter?: Maybe<_ProcedureFilter>
  }) => Maybe<Array<Maybe<Procedure>>>
  users: (args?: {
    first?: Maybe<Scalars['Int']>
    offset?: Maybe<Scalars['Int']>
    orderBy?: Maybe<Array<Maybe<_UserOrdering>>>
    filter?: Maybe<_UserFilter>
  }) => Maybe<Array<Maybe<User>>>
  /**
   * Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node.
   */
  _id?: Maybe<ScalarsEnums['String']>
}

export interface _AddUserExecutesPayload {
  __typename: '_AddUserExecutesPayload' | undefined
  /**
   * Field for the User node this EXECUTES [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<User>
  /**
   * Field for the ProcedureTask node this EXECUTES [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<ProcedureTask>
}

export interface _RemoveUserExecutesPayload {
  __typename: '_RemoveUserExecutesPayload' | undefined
  /**
   * Field for the User node this EXECUTES [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<User>
  /**
   * Field for the ProcedureTask node this EXECUTES [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<ProcedureTask>
}

export interface _MergeUserExecutesPayload {
  __typename: '_MergeUserExecutesPayload' | undefined
  /**
   * Field for the User node this EXECUTES [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<User>
  /**
   * Field for the ProcedureTask node this EXECUTES [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<ProcedureTask>
}

export interface _UserEXECUTES_rel {
  __typename: '_UserEXECUTES_rel' | undefined
  at_time: ScalarsEnums['String']
  amount: ScalarsEnums['Int']
  /**
   * Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship.
   */
  _id?: Maybe<ScalarsEnums['String']>
  /**
   * Field for the ProcedureTask node this EXECUTES [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  ProcedureTask?: Maybe<ProcedureTask>
}

export interface _AddUserEXECUTES_relPayload {
  __typename: '_AddUserEXECUTES_relPayload' | undefined
  /**
   * Field for the User node this EXECUTES [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<User>
  /**
   * Field for the ProcedureTask node this EXECUTES [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<ProcedureTask>
  at_time: ScalarsEnums['String']
  amount: ScalarsEnums['Int']
  /**
   * Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship.
   */
  _id?: Maybe<ScalarsEnums['String']>
}

export interface _RemoveUserEXECUTES_relPayload {
  __typename: '_RemoveUserEXECUTES_relPayload' | undefined
  /**
   * Field for the User node this EXECUTES [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<User>
  /**
   * Field for the ProcedureTask node this EXECUTES [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<ProcedureTask>
}

export interface _UpdateUserEXECUTES_relPayload {
  __typename: '_UpdateUserEXECUTES_relPayload' | undefined
  /**
   * Field for the User node this EXECUTES [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<User>
  /**
   * Field for the ProcedureTask node this EXECUTES [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<ProcedureTask>
  at_time: ScalarsEnums['String']
  amount: ScalarsEnums['Int']
  /**
   * Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship.
   */
  _id?: Maybe<ScalarsEnums['String']>
}

export interface _MergeUserEXECUTES_relPayload {
  __typename: '_MergeUserEXECUTES_relPayload' | undefined
  /**
   * Field for the User node this EXECUTES [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<User>
  /**
   * Field for the ProcedureTask node this EXECUTES [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<ProcedureTask>
  at_time: ScalarsEnums['String']
  amount: ScalarsEnums['Int']
  /**
   * Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship.
   */
  _id?: Maybe<ScalarsEnums['String']>
}

export interface User {
  __typename: 'User' | undefined
  id: ScalarsEnums['ID']
  name: ScalarsEnums['String']
  executes: (args?: {
    first?: Maybe<Scalars['Int']>
    offset?: Maybe<Scalars['Int']>
    orderBy?: Maybe<Array<Maybe<_ProcedureTaskOrdering>>>
    filter?: Maybe<_ProcedureTaskFilter>
  }) => Maybe<Array<Maybe<ProcedureTask>>>
  EXECUTES_rel: (args?: {
    first?: Maybe<Scalars['Int']>
    offset?: Maybe<Scalars['Int']>
    orderBy?: Maybe<Array<Maybe<_EXECUTESOrdering>>>
    filter?: Maybe<_UserEXECUTESFilter>
  }) => Maybe<Array<Maybe<_UserEXECUTES_rel>>>
  /**
   * Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node.
   */
  _id?: Maybe<ScalarsEnums['String']>
}

export interface _AddCraftUses_bomPayload {
  __typename: '_AddCraftUses_bomPayload' | undefined
  /**
   * Field for the Craft node this USES_BOM [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<Craft>
  /**
   * Field for the BOM node this USES_BOM [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<BOM>
}

export interface _RemoveCraftUses_bomPayload {
  __typename: '_RemoveCraftUses_bomPayload' | undefined
  /**
   * Field for the Craft node this USES_BOM [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<Craft>
  /**
   * Field for the BOM node this USES_BOM [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<BOM>
}

export interface _MergeCraftUses_bomPayload {
  __typename: '_MergeCraftUses_bomPayload' | undefined
  /**
   * Field for the Craft node this USES_BOM [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<Craft>
  /**
   * Field for the BOM node this USES_BOM [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<BOM>
}

export interface _AddCraftFirst_procedurePayload {
  __typename: '_AddCraftFirst_procedurePayload' | undefined
  /**
   * Field for the Craft node this FIRST_PROCEDURE [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<Craft>
  /**
   * Field for the Procedure node this FIRST_PROCEDURE [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<Procedure>
}

export interface _RemoveCraftFirst_procedurePayload {
  __typename: '_RemoveCraftFirst_procedurePayload' | undefined
  /**
   * Field for the Craft node this FIRST_PROCEDURE [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<Craft>
  /**
   * Field for the Procedure node this FIRST_PROCEDURE [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<Procedure>
}

export interface _MergeCraftFirst_procedurePayload {
  __typename: '_MergeCraftFirst_procedurePayload' | undefined
  /**
   * Field for the Craft node this FIRST_PROCEDURE [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<Craft>
  /**
   * Field for the Procedure node this FIRST_PROCEDURE [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<Procedure>
}

export interface _AddCraftLast_procedurePayload {
  __typename: '_AddCraftLast_procedurePayload' | undefined
  /**
   * Field for the Craft node this LAST_PROCEDURE [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<Craft>
  /**
   * Field for the Procedure node this LAST_PROCEDURE [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<Procedure>
}

export interface _RemoveCraftLast_procedurePayload {
  __typename: '_RemoveCraftLast_procedurePayload' | undefined
  /**
   * Field for the Craft node this LAST_PROCEDURE [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<Craft>
  /**
   * Field for the Procedure node this LAST_PROCEDURE [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<Procedure>
}

export interface _MergeCraftLast_procedurePayload {
  __typename: '_MergeCraftLast_procedurePayload' | undefined
  /**
   * Field for the Craft node this LAST_PROCEDURE [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<Craft>
  /**
   * Field for the Procedure node this LAST_PROCEDURE [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<Procedure>
}

export interface _AddCraftHas_procedurePayload {
  __typename: '_AddCraftHas_procedurePayload' | undefined
  /**
   * Field for the Craft node this HAS_PROCEDURE [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<Craft>
  /**
   * Field for the Procedure node this HAS_PROCEDURE [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<Procedure>
}

export interface _RemoveCraftHas_procedurePayload {
  __typename: '_RemoveCraftHas_procedurePayload' | undefined
  /**
   * Field for the Craft node this HAS_PROCEDURE [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<Craft>
  /**
   * Field for the Procedure node this HAS_PROCEDURE [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<Procedure>
}

export interface _MergeCraftHas_procedurePayload {
  __typename: '_MergeCraftHas_procedurePayload' | undefined
  /**
   * Field for the Craft node this HAS_PROCEDURE [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<Craft>
  /**
   * Field for the Procedure node this HAS_PROCEDURE [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<Procedure>
}

export interface _CraftHAS_PROCEDURE_rel {
  __typename: '_CraftHAS_PROCEDURE_rel' | undefined
  type?: Maybe<ScalarsEnums['String']>
  /**
   * Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship.
   */
  _id?: Maybe<ScalarsEnums['String']>
  /**
   * Field for the Procedure node this HAS_PROCEDURE [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  Procedure?: Maybe<Procedure>
}

export interface _AddCraftHAS_PROCEDURE_relPayload {
  __typename: '_AddCraftHAS_PROCEDURE_relPayload' | undefined
  /**
   * Field for the Craft node this HAS_PROCEDURE [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<Craft>
  /**
   * Field for the Procedure node this HAS_PROCEDURE [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<Procedure>
  type?: Maybe<ScalarsEnums['String']>
  /**
   * Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship.
   */
  _id?: Maybe<ScalarsEnums['String']>
}

export interface _RemoveCraftHAS_PROCEDURE_relPayload {
  __typename: '_RemoveCraftHAS_PROCEDURE_relPayload' | undefined
  /**
   * Field for the Craft node this HAS_PROCEDURE [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<Craft>
  /**
   * Field for the Procedure node this HAS_PROCEDURE [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<Procedure>
}

export interface _UpdateCraftHAS_PROCEDURE_relPayload {
  __typename: '_UpdateCraftHAS_PROCEDURE_relPayload' | undefined
  /**
   * Field for the Craft node this HAS_PROCEDURE [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<Craft>
  /**
   * Field for the Procedure node this HAS_PROCEDURE [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<Procedure>
  type?: Maybe<ScalarsEnums['String']>
  /**
   * Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship.
   */
  _id?: Maybe<ScalarsEnums['String']>
}

export interface _MergeCraftHAS_PROCEDURE_relPayload {
  __typename: '_MergeCraftHAS_PROCEDURE_relPayload' | undefined
  /**
   * Field for the Craft node this HAS_PROCEDURE [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<Craft>
  /**
   * Field for the Procedure node this HAS_PROCEDURE [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<Procedure>
  type?: Maybe<ScalarsEnums['String']>
  /**
   * Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship.
   */
  _id?: Maybe<ScalarsEnums['String']>
}

export interface _AddCraftMaterialsPayload {
  __typename: '_AddCraftMaterialsPayload' | undefined
  /**
   * Field for the Material node this HAS_CRAFT [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<Material>
  /**
   * Field for the Craft node this HAS_CRAFT [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<Craft>
}

export interface _RemoveCraftMaterialsPayload {
  __typename: '_RemoveCraftMaterialsPayload' | undefined
  /**
   * Field for the Material node this HAS_CRAFT [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<Material>
  /**
   * Field for the Craft node this HAS_CRAFT [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<Craft>
}

export interface _MergeCraftMaterialsPayload {
  __typename: '_MergeCraftMaterialsPayload' | undefined
  /**
   * Field for the Material node this HAS_CRAFT [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<Material>
  /**
   * Field for the Craft node this HAS_CRAFT [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<Craft>
}

export interface Craft {
  __typename: 'Craft' | undefined
  id: ScalarsEnums['ID']
  name: ScalarsEnums['String']
  uses_bom: (args?: {
    first?: Maybe<Scalars['Int']>
    offset?: Maybe<Scalars['Int']>
    orderBy?: Maybe<Array<Maybe<_BOMOrdering>>>
    filter?: Maybe<_BOMFilter>
  }) => Maybe<Array<Maybe<BOM>>>
  first_procedure: (args?: {
    first?: Maybe<Scalars['Int']>
    offset?: Maybe<Scalars['Int']>
    orderBy?: Maybe<Array<Maybe<_ProcedureOrdering>>>
    filter?: Maybe<_ProcedureFilter>
  }) => Maybe<Array<Maybe<Procedure>>>
  last_procedure: (args?: {
    first?: Maybe<Scalars['Int']>
    offset?: Maybe<Scalars['Int']>
    orderBy?: Maybe<Array<Maybe<_ProcedureOrdering>>>
    filter?: Maybe<_ProcedureFilter>
  }) => Maybe<Array<Maybe<Procedure>>>
  has_procedure: (args?: {
    first?: Maybe<Scalars['Int']>
    offset?: Maybe<Scalars['Int']>
    orderBy?: Maybe<Array<Maybe<_ProcedureOrdering>>>
    filter?: Maybe<_ProcedureFilter>
  }) => Maybe<Array<Maybe<Procedure>>>
  HAS_PROCEDURE_rel: (args?: {
    first?: Maybe<Scalars['Int']>
    offset?: Maybe<Scalars['Int']>
    orderBy?: Maybe<Array<Maybe<_HAS_PROCEDUREOrdering>>>
    filter?: Maybe<_CraftHAS_PROCEDUREFilter>
  }) => Maybe<Array<Maybe<_CraftHAS_PROCEDURE_rel>>>
  materials: (args?: {
    first?: Maybe<Scalars['Int']>
    offset?: Maybe<Scalars['Int']>
    orderBy?: Maybe<Array<Maybe<_MaterialOrdering>>>
    filter?: Maybe<_MaterialFilter>
  }) => Maybe<Array<Maybe<Material>>>
  /**
   * Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node.
   */
  _id?: Maybe<ScalarsEnums['String']>
}

export interface _AddProcedureNextPayload {
  __typename: '_AddProcedureNextPayload' | undefined
  /**
   * Field for the Procedure node this NEXT [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<Procedure>
  /**
   * Field for the Procedure node this NEXT [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<Procedure>
}

export interface _RemoveProcedureNextPayload {
  __typename: '_RemoveProcedureNextPayload' | undefined
  /**
   * Field for the Procedure node this NEXT [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<Procedure>
  /**
   * Field for the Procedure node this NEXT [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<Procedure>
}

export interface _MergeProcedureNextPayload {
  __typename: '_MergeProcedureNextPayload' | undefined
  /**
   * Field for the Procedure node this NEXT [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<Procedure>
  /**
   * Field for the Procedure node this NEXT [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<Procedure>
}

export interface _AddProcedureCrafts_first_procedurePayload {
  __typename: '_AddProcedureCrafts_first_procedurePayload' | undefined
  /**
   * Field for the Craft node this FIRST_PROCEDURE [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<Craft>
  /**
   * Field for the Procedure node this FIRST_PROCEDURE [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<Procedure>
}

export interface _RemoveProcedureCrafts_first_procedurePayload {
  __typename: '_RemoveProcedureCrafts_first_procedurePayload' | undefined
  /**
   * Field for the Craft node this FIRST_PROCEDURE [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<Craft>
  /**
   * Field for the Procedure node this FIRST_PROCEDURE [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<Procedure>
}

export interface _MergeProcedureCrafts_first_procedurePayload {
  __typename: '_MergeProcedureCrafts_first_procedurePayload' | undefined
  /**
   * Field for the Craft node this FIRST_PROCEDURE [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<Craft>
  /**
   * Field for the Procedure node this FIRST_PROCEDURE [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<Procedure>
}

export interface _AddProcedureCrafts_last_procedurePayload {
  __typename: '_AddProcedureCrafts_last_procedurePayload' | undefined
  /**
   * Field for the Craft node this LAST_PROCEDURE [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<Craft>
  /**
   * Field for the Procedure node this LAST_PROCEDURE [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<Procedure>
}

export interface _RemoveProcedureCrafts_last_procedurePayload {
  __typename: '_RemoveProcedureCrafts_last_procedurePayload' | undefined
  /**
   * Field for the Craft node this LAST_PROCEDURE [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<Craft>
  /**
   * Field for the Procedure node this LAST_PROCEDURE [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<Procedure>
}

export interface _MergeProcedureCrafts_last_procedurePayload {
  __typename: '_MergeProcedureCrafts_last_procedurePayload' | undefined
  /**
   * Field for the Craft node this LAST_PROCEDURE [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<Craft>
  /**
   * Field for the Procedure node this LAST_PROCEDURE [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<Procedure>
}

export interface _AddProcedureProceduretasks_uses_procedurePayload {
  __typename: '_AddProcedureProceduretasks_uses_procedurePayload' | undefined
  /**
   * Field for the ProcedureTask node this USES_PROCEDURE [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<ProcedureTask>
  /**
   * Field for the Procedure node this USES_PROCEDURE [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<Procedure>
}

export interface _RemoveProcedureProceduretasks_uses_procedurePayload {
  __typename: '_RemoveProcedureProceduretasks_uses_procedurePayload' | undefined
  /**
   * Field for the ProcedureTask node this USES_PROCEDURE [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<ProcedureTask>
  /**
   * Field for the Procedure node this USES_PROCEDURE [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<Procedure>
}

export interface _MergeProcedureProceduretasks_uses_procedurePayload {
  __typename: '_MergeProcedureProceduretasks_uses_procedurePayload' | undefined
  /**
   * Field for the ProcedureTask node this USES_PROCEDURE [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<ProcedureTask>
  /**
   * Field for the Procedure node this USES_PROCEDURE [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<Procedure>
}

export interface _AddProcedureCrafts_has_procedurePayload {
  __typename: '_AddProcedureCrafts_has_procedurePayload' | undefined
  /**
   * Field for the Craft node this HAS_PROCEDURE [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<Craft>
  /**
   * Field for the Procedure node this HAS_PROCEDURE [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<Procedure>
}

export interface _RemoveProcedureCrafts_has_procedurePayload {
  __typename: '_RemoveProcedureCrafts_has_procedurePayload' | undefined
  /**
   * Field for the Craft node this HAS_PROCEDURE [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<Craft>
  /**
   * Field for the Procedure node this HAS_PROCEDURE [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<Procedure>
}

export interface _MergeProcedureCrafts_has_procedurePayload {
  __typename: '_MergeProcedureCrafts_has_procedurePayload' | undefined
  /**
   * Field for the Craft node this HAS_PROCEDURE [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<Craft>
  /**
   * Field for the Procedure node this HAS_PROCEDURE [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<Procedure>
}

export interface Procedure {
  __typename: 'Procedure' | undefined
  id: ScalarsEnums['ID']
  name: ScalarsEnums['String']
  next: (args?: {
    first?: Maybe<Scalars['Int']>
    offset?: Maybe<Scalars['Int']>
    orderBy?: Maybe<Array<Maybe<_ProcedureOrdering>>>
    filter?: Maybe<_ProcedureFilter>
  }) => Maybe<Array<Maybe<Procedure>>>
  crafts_first_procedure: (args?: {
    first?: Maybe<Scalars['Int']>
    offset?: Maybe<Scalars['Int']>
    orderBy?: Maybe<Array<Maybe<_CraftOrdering>>>
    filter?: Maybe<_CraftFilter>
  }) => Maybe<Array<Maybe<Craft>>>
  crafts_last_procedure: (args?: {
    first?: Maybe<Scalars['Int']>
    offset?: Maybe<Scalars['Int']>
    orderBy?: Maybe<Array<Maybe<_CraftOrdering>>>
    filter?: Maybe<_CraftFilter>
  }) => Maybe<Array<Maybe<Craft>>>
  proceduretasks_uses_procedure: (args?: {
    first?: Maybe<Scalars['Int']>
    offset?: Maybe<Scalars['Int']>
    orderBy?: Maybe<Array<Maybe<_ProcedureTaskOrdering>>>
    filter?: Maybe<_ProcedureTaskFilter>
  }) => Maybe<Array<Maybe<ProcedureTask>>>
  crafts_has_procedure: (args?: {
    first?: Maybe<Scalars['Int']>
    offset?: Maybe<Scalars['Int']>
    orderBy?: Maybe<Array<Maybe<_CraftOrdering>>>
    filter?: Maybe<_CraftFilter>
  }) => Maybe<Array<Maybe<Craft>>>
  /**
   * Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node.
   */
  _id?: Maybe<ScalarsEnums['String']>
}

export interface _AddMaterialHas_craftPayload {
  __typename: '_AddMaterialHas_craftPayload' | undefined
  /**
   * Field for the Material node this HAS_CRAFT [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<Material>
  /**
   * Field for the Craft node this HAS_CRAFT [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<Craft>
}

export interface _RemoveMaterialHas_craftPayload {
  __typename: '_RemoveMaterialHas_craftPayload' | undefined
  /**
   * Field for the Material node this HAS_CRAFT [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<Material>
  /**
   * Field for the Craft node this HAS_CRAFT [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<Craft>
}

export interface _MergeMaterialHas_craftPayload {
  __typename: '_MergeMaterialHas_craftPayload' | undefined
  /**
   * Field for the Material node this HAS_CRAFT [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<Material>
  /**
   * Field for the Craft node this HAS_CRAFT [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<Craft>
}

export interface _AddMaterialBomsPayload {
  __typename: '_AddMaterialBomsPayload' | undefined
  /**
   * Field for the BOM node this USES_MATERIAL [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<BOM>
  /**
   * Field for the Material node this USES_MATERIAL [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<Material>
}

export interface _RemoveMaterialBomsPayload {
  __typename: '_RemoveMaterialBomsPayload' | undefined
  /**
   * Field for the BOM node this USES_MATERIAL [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<BOM>
  /**
   * Field for the Material node this USES_MATERIAL [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<Material>
}

export interface _MergeMaterialBomsPayload {
  __typename: '_MergeMaterialBomsPayload' | undefined
  /**
   * Field for the BOM node this USES_MATERIAL [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<BOM>
  /**
   * Field for the Material node this USES_MATERIAL [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<Material>
}

export interface _AddMaterialWorkordersPayload {
  __typename: '_AddMaterialWorkordersPayload' | undefined
  /**
   * Field for the WorkOrder node this HAS_PRODUCT [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<WorkOrder>
  /**
   * Field for the Material node this HAS_PRODUCT [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<Material>
}

export interface _RemoveMaterialWorkordersPayload {
  __typename: '_RemoveMaterialWorkordersPayload' | undefined
  /**
   * Field for the WorkOrder node this HAS_PRODUCT [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<WorkOrder>
  /**
   * Field for the Material node this HAS_PRODUCT [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<Material>
}

export interface _MergeMaterialWorkordersPayload {
  __typename: '_MergeMaterialWorkordersPayload' | undefined
  /**
   * Field for the WorkOrder node this HAS_PRODUCT [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<WorkOrder>
  /**
   * Field for the Material node this HAS_PRODUCT [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<Material>
}

export interface Material {
  __typename: 'Material' | undefined
  id: ScalarsEnums['ID']
  name: ScalarsEnums['String']
  has_craft: (args?: {
    first?: Maybe<Scalars['Int']>
    offset?: Maybe<Scalars['Int']>
    orderBy?: Maybe<Array<Maybe<_CraftOrdering>>>
    filter?: Maybe<_CraftFilter>
  }) => Maybe<Array<Maybe<Craft>>>
  boms: (args?: {
    first?: Maybe<Scalars['Int']>
    offset?: Maybe<Scalars['Int']>
    orderBy?: Maybe<Array<Maybe<_BOMOrdering>>>
    filter?: Maybe<_BOMFilter>
  }) => Maybe<Array<Maybe<BOM>>>
  workorders: (args?: {
    first?: Maybe<Scalars['Int']>
    offset?: Maybe<Scalars['Int']>
    orderBy?: Maybe<Array<Maybe<_WorkOrderOrdering>>>
    filter?: Maybe<_WorkOrderFilter>
  }) => Maybe<Array<Maybe<WorkOrder>>>
  /**
   * Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node.
   */
  _id?: Maybe<ScalarsEnums['String']>
}

export interface _AddBOMUses_materialPayload {
  __typename: '_AddBOMUses_materialPayload' | undefined
  /**
   * Field for the BOM node this USES_MATERIAL [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<BOM>
  /**
   * Field for the Material node this USES_MATERIAL [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<Material>
}

export interface _RemoveBOMUses_materialPayload {
  __typename: '_RemoveBOMUses_materialPayload' | undefined
  /**
   * Field for the BOM node this USES_MATERIAL [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<BOM>
  /**
   * Field for the Material node this USES_MATERIAL [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<Material>
}

export interface _MergeBOMUses_materialPayload {
  __typename: '_MergeBOMUses_materialPayload' | undefined
  /**
   * Field for the BOM node this USES_MATERIAL [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<BOM>
  /**
   * Field for the Material node this USES_MATERIAL [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<Material>
}

export interface _BOMUSES_MATERIAL_rel {
  __typename: '_BOMUSES_MATERIAL_rel' | undefined
  amount: ScalarsEnums['Int']
  /**
   * Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship.
   */
  _id?: Maybe<ScalarsEnums['String']>
  /**
   * Field for the Material node this USES_MATERIAL [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  Material?: Maybe<Material>
}

export interface _AddBOMUSES_MATERIAL_relPayload {
  __typename: '_AddBOMUSES_MATERIAL_relPayload' | undefined
  /**
   * Field for the BOM node this USES_MATERIAL [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<BOM>
  /**
   * Field for the Material node this USES_MATERIAL [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<Material>
  amount: ScalarsEnums['Int']
  /**
   * Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship.
   */
  _id?: Maybe<ScalarsEnums['String']>
}

export interface _RemoveBOMUSES_MATERIAL_relPayload {
  __typename: '_RemoveBOMUSES_MATERIAL_relPayload' | undefined
  /**
   * Field for the BOM node this USES_MATERIAL [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<BOM>
  /**
   * Field for the Material node this USES_MATERIAL [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<Material>
}

export interface _UpdateBOMUSES_MATERIAL_relPayload {
  __typename: '_UpdateBOMUSES_MATERIAL_relPayload' | undefined
  /**
   * Field for the BOM node this USES_MATERIAL [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<BOM>
  /**
   * Field for the Material node this USES_MATERIAL [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<Material>
  amount: ScalarsEnums['Int']
  /**
   * Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship.
   */
  _id?: Maybe<ScalarsEnums['String']>
}

export interface _MergeBOMUSES_MATERIAL_relPayload {
  __typename: '_MergeBOMUSES_MATERIAL_relPayload' | undefined
  /**
   * Field for the BOM node this USES_MATERIAL [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<BOM>
  /**
   * Field for the Material node this USES_MATERIAL [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<Material>
  amount: ScalarsEnums['Int']
  /**
   * Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship.
   */
  _id?: Maybe<ScalarsEnums['String']>
}

export interface _AddBOMCraftsPayload {
  __typename: '_AddBOMCraftsPayload' | undefined
  /**
   * Field for the Craft node this USES_BOM [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<Craft>
  /**
   * Field for the BOM node this USES_BOM [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<BOM>
}

export interface _RemoveBOMCraftsPayload {
  __typename: '_RemoveBOMCraftsPayload' | undefined
  /**
   * Field for the Craft node this USES_BOM [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<Craft>
  /**
   * Field for the BOM node this USES_BOM [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<BOM>
}

export interface _MergeBOMCraftsPayload {
  __typename: '_MergeBOMCraftsPayload' | undefined
  /**
   * Field for the Craft node this USES_BOM [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from.
   */
  from?: Maybe<Craft>
  /**
   * Field for the BOM node this USES_BOM [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to.
   */
  to?: Maybe<BOM>
}

export interface BOM {
  __typename: 'BOM' | undefined
  id: ScalarsEnums['ID']
  name: ScalarsEnums['String']
  uses_material: (args?: {
    first?: Maybe<Scalars['Int']>
    offset?: Maybe<Scalars['Int']>
    orderBy?: Maybe<Array<Maybe<_MaterialOrdering>>>
    filter?: Maybe<_MaterialFilter>
  }) => Maybe<Array<Maybe<Material>>>
  USES_MATERIAL_rel: (args?: {
    first?: Maybe<Scalars['Int']>
    offset?: Maybe<Scalars['Int']>
    orderBy?: Maybe<Array<Maybe<_USES_MATERIALOrdering>>>
    filter?: Maybe<_BOMUSES_MATERIALFilter>
  }) => Maybe<Array<Maybe<_BOMUSES_MATERIAL_rel>>>
  crafts: (args?: {
    first?: Maybe<Scalars['Int']>
    offset?: Maybe<Scalars['Int']>
    orderBy?: Maybe<Array<Maybe<_CraftOrdering>>>
    filter?: Maybe<_CraftFilter>
  }) => Maybe<Array<Maybe<Craft>>>
  /**
   * Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node.
   */
  _id?: Maybe<ScalarsEnums['String']>
}

export interface USES_MATERIAL {
  __typename: 'USES_MATERIAL' | undefined
  from: BOM
  to: Material
  amount: ScalarsEnums['Int']
}

export interface HAS_PRODUCT {
  __typename: 'HAS_PRODUCT' | undefined
  from: WorkOrder
  to: Material
  amount: ScalarsEnums['Int']
}

export interface EXECUTES {
  __typename: 'EXECUTES' | undefined
  from: User
  to: ProcedureTask
  at_time: ScalarsEnums['String']
  amount: ScalarsEnums['Int']
}

export interface HAS_PROCEDURE {
  __typename: 'HAS_PROCEDURE' | undefined
  from: Craft
  to: Procedure
  type?: Maybe<ScalarsEnums['String']>
}

/**
 * Generated Time object type for Neo4j [Temporal fields](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries).
 */
export interface _Neo4jTime {
  __typename: '_Neo4jTime' | undefined
  hour?: Maybe<ScalarsEnums['Int']>
  minute?: Maybe<ScalarsEnums['Int']>
  second?: Maybe<ScalarsEnums['Int']>
  millisecond?: Maybe<ScalarsEnums['Int']>
  microsecond?: Maybe<ScalarsEnums['Int']>
  nanosecond?: Maybe<ScalarsEnums['Int']>
  timezone?: Maybe<ScalarsEnums['String']>
  /**
   * Outputs a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries) Time value as a String type by using the [toString](https://neo4j.com/docs/cypher-manual/current/functions/string/#functions-tostring) Cypher function.
   */
  formatted?: Maybe<ScalarsEnums['String']>
}

/**
 * Generated Date object type for Neo4j [Temporal fields](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries).
 */
export interface _Neo4jDate {
  __typename: '_Neo4jDate' | undefined
  year?: Maybe<ScalarsEnums['Int']>
  month?: Maybe<ScalarsEnums['Int']>
  day?: Maybe<ScalarsEnums['Int']>
  /**
   * Outputs a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries) Date value as a String type by using the [toString](https://neo4j.com/docs/cypher-manual/current/functions/string/#functions-tostring) Cypher function.
   */
  formatted?: Maybe<ScalarsEnums['String']>
}

/**
 * Generated DateTime object type for Neo4j [Temporal fields](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries).
 */
export interface _Neo4jDateTime {
  __typename: '_Neo4jDateTime' | undefined
  year?: Maybe<ScalarsEnums['Int']>
  month?: Maybe<ScalarsEnums['Int']>
  day?: Maybe<ScalarsEnums['Int']>
  hour?: Maybe<ScalarsEnums['Int']>
  minute?: Maybe<ScalarsEnums['Int']>
  second?: Maybe<ScalarsEnums['Int']>
  millisecond?: Maybe<ScalarsEnums['Int']>
  microsecond?: Maybe<ScalarsEnums['Int']>
  nanosecond?: Maybe<ScalarsEnums['Int']>
  timezone?: Maybe<ScalarsEnums['String']>
  /**
   * Outputs a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries) DateTime value as a String type by using the [toString](https://neo4j.com/docs/cypher-manual/current/functions/string/#functions-tostring) Cypher function.
   */
  formatted?: Maybe<ScalarsEnums['String']>
}

/**
 * Generated LocalTime object type for Neo4j [Temporal fields](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries).
 */
export interface _Neo4jLocalTime {
  __typename: '_Neo4jLocalTime' | undefined
  hour?: Maybe<ScalarsEnums['Int']>
  minute?: Maybe<ScalarsEnums['Int']>
  second?: Maybe<ScalarsEnums['Int']>
  millisecond?: Maybe<ScalarsEnums['Int']>
  microsecond?: Maybe<ScalarsEnums['Int']>
  nanosecond?: Maybe<ScalarsEnums['Int']>
  /**
   * Outputs a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries) LocalTime value as a String type by using the [toString](https://neo4j.com/docs/cypher-manual/current/functions/string/#functions-tostring) Cypher function.
   */
  formatted?: Maybe<ScalarsEnums['String']>
}

/**
 * Generated LocalDateTime object type for Neo4j [Temporal fields](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries).
 */
export interface _Neo4jLocalDateTime {
  __typename: '_Neo4jLocalDateTime' | undefined
  year?: Maybe<ScalarsEnums['Int']>
  month?: Maybe<ScalarsEnums['Int']>
  day?: Maybe<ScalarsEnums['Int']>
  hour?: Maybe<ScalarsEnums['Int']>
  minute?: Maybe<ScalarsEnums['Int']>
  second?: Maybe<ScalarsEnums['Int']>
  millisecond?: Maybe<ScalarsEnums['Int']>
  microsecond?: Maybe<ScalarsEnums['Int']>
  nanosecond?: Maybe<ScalarsEnums['Int']>
  /**
   * Outputs a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries) LocalDateTime value as a String type by using the [toString](https://neo4j.com/docs/cypher-manual/current/functions/string/#functions-tostring) Cypher function.
   */
  formatted?: Maybe<ScalarsEnums['String']>
}

/**
 * Generated Point object type for Neo4j [Spatial fields](https://grandstack.io/docs/graphql-spatial-types#using-point-in-queries).
 */
export interface _Neo4jPoint {
  __typename: '_Neo4jPoint' | undefined
  x?: Maybe<ScalarsEnums['Float']>
  y?: Maybe<ScalarsEnums['Float']>
  z?: Maybe<ScalarsEnums['Float']>
  longitude?: Maybe<ScalarsEnums['Float']>
  latitude?: Maybe<ScalarsEnums['Float']>
  height?: Maybe<ScalarsEnums['Float']>
  crs?: Maybe<ScalarsEnums['String']>
  srid?: Maybe<ScalarsEnums['Int']>
}

export interface SchemaObjectTypes {
  Query: Query
  Mutation: Mutation
  Subscription: Subscription
  _AddWorkOrderHas_productPayload: _AddWorkOrderHas_productPayload
  _RemoveWorkOrderHas_productPayload: _RemoveWorkOrderHas_productPayload
  _MergeWorkOrderHas_productPayload: _MergeWorkOrderHas_productPayload
  _WorkOrderHAS_PRODUCT_rel: _WorkOrderHAS_PRODUCT_rel
  _AddWorkOrderHAS_PRODUCT_relPayload: _AddWorkOrderHAS_PRODUCT_relPayload
  _RemoveWorkOrderHAS_PRODUCT_relPayload: _RemoveWorkOrderHAS_PRODUCT_relPayload
  _UpdateWorkOrderHAS_PRODUCT_relPayload: _UpdateWorkOrderHAS_PRODUCT_relPayload
  _MergeWorkOrderHAS_PRODUCT_relPayload: _MergeWorkOrderHAS_PRODUCT_relPayload
  _AddWorkOrderHas_taskPayload: _AddWorkOrderHas_taskPayload
  _RemoveWorkOrderHas_taskPayload: _RemoveWorkOrderHas_taskPayload
  _MergeWorkOrderHas_taskPayload: _MergeWorkOrderHas_taskPayload
  WorkOrder: WorkOrder
  _AddProcedureTaskIn_orderPayload: _AddProcedureTaskIn_orderPayload
  _RemoveProcedureTaskIn_orderPayload: _RemoveProcedureTaskIn_orderPayload
  _MergeProcedureTaskIn_orderPayload: _MergeProcedureTaskIn_orderPayload
  _AddProcedureTaskUses_procedurePayload: _AddProcedureTaskUses_procedurePayload
  _RemoveProcedureTaskUses_procedurePayload: _RemoveProcedureTaskUses_procedurePayload
  _MergeProcedureTaskUses_procedurePayload: _MergeProcedureTaskUses_procedurePayload
  _AddProcedureTaskUsersPayload: _AddProcedureTaskUsersPayload
  _RemoveProcedureTaskUsersPayload: _RemoveProcedureTaskUsersPayload
  _MergeProcedureTaskUsersPayload: _MergeProcedureTaskUsersPayload
  ProcedureTask: ProcedureTask
  _AddUserExecutesPayload: _AddUserExecutesPayload
  _RemoveUserExecutesPayload: _RemoveUserExecutesPayload
  _MergeUserExecutesPayload: _MergeUserExecutesPayload
  _UserEXECUTES_rel: _UserEXECUTES_rel
  _AddUserEXECUTES_relPayload: _AddUserEXECUTES_relPayload
  _RemoveUserEXECUTES_relPayload: _RemoveUserEXECUTES_relPayload
  _UpdateUserEXECUTES_relPayload: _UpdateUserEXECUTES_relPayload
  _MergeUserEXECUTES_relPayload: _MergeUserEXECUTES_relPayload
  User: User
  _AddCraftUses_bomPayload: _AddCraftUses_bomPayload
  _RemoveCraftUses_bomPayload: _RemoveCraftUses_bomPayload
  _MergeCraftUses_bomPayload: _MergeCraftUses_bomPayload
  _AddCraftFirst_procedurePayload: _AddCraftFirst_procedurePayload
  _RemoveCraftFirst_procedurePayload: _RemoveCraftFirst_procedurePayload
  _MergeCraftFirst_procedurePayload: _MergeCraftFirst_procedurePayload
  _AddCraftLast_procedurePayload: _AddCraftLast_procedurePayload
  _RemoveCraftLast_procedurePayload: _RemoveCraftLast_procedurePayload
  _MergeCraftLast_procedurePayload: _MergeCraftLast_procedurePayload
  _AddCraftHas_procedurePayload: _AddCraftHas_procedurePayload
  _RemoveCraftHas_procedurePayload: _RemoveCraftHas_procedurePayload
  _MergeCraftHas_procedurePayload: _MergeCraftHas_procedurePayload
  _CraftHAS_PROCEDURE_rel: _CraftHAS_PROCEDURE_rel
  _AddCraftHAS_PROCEDURE_relPayload: _AddCraftHAS_PROCEDURE_relPayload
  _RemoveCraftHAS_PROCEDURE_relPayload: _RemoveCraftHAS_PROCEDURE_relPayload
  _UpdateCraftHAS_PROCEDURE_relPayload: _UpdateCraftHAS_PROCEDURE_relPayload
  _MergeCraftHAS_PROCEDURE_relPayload: _MergeCraftHAS_PROCEDURE_relPayload
  _AddCraftMaterialsPayload: _AddCraftMaterialsPayload
  _RemoveCraftMaterialsPayload: _RemoveCraftMaterialsPayload
  _MergeCraftMaterialsPayload: _MergeCraftMaterialsPayload
  Craft: Craft
  _AddProcedureNextPayload: _AddProcedureNextPayload
  _RemoveProcedureNextPayload: _RemoveProcedureNextPayload
  _MergeProcedureNextPayload: _MergeProcedureNextPayload
  _AddProcedureCrafts_first_procedurePayload: _AddProcedureCrafts_first_procedurePayload
  _RemoveProcedureCrafts_first_procedurePayload: _RemoveProcedureCrafts_first_procedurePayload
  _MergeProcedureCrafts_first_procedurePayload: _MergeProcedureCrafts_first_procedurePayload
  _AddProcedureCrafts_last_procedurePayload: _AddProcedureCrafts_last_procedurePayload
  _RemoveProcedureCrafts_last_procedurePayload: _RemoveProcedureCrafts_last_procedurePayload
  _MergeProcedureCrafts_last_procedurePayload: _MergeProcedureCrafts_last_procedurePayload
  _AddProcedureProceduretasks_uses_procedurePayload: _AddProcedureProceduretasks_uses_procedurePayload
  _RemoveProcedureProceduretasks_uses_procedurePayload: _RemoveProcedureProceduretasks_uses_procedurePayload
  _MergeProcedureProceduretasks_uses_procedurePayload: _MergeProcedureProceduretasks_uses_procedurePayload
  _AddProcedureCrafts_has_procedurePayload: _AddProcedureCrafts_has_procedurePayload
  _RemoveProcedureCrafts_has_procedurePayload: _RemoveProcedureCrafts_has_procedurePayload
  _MergeProcedureCrafts_has_procedurePayload: _MergeProcedureCrafts_has_procedurePayload
  Procedure: Procedure
  _AddMaterialHas_craftPayload: _AddMaterialHas_craftPayload
  _RemoveMaterialHas_craftPayload: _RemoveMaterialHas_craftPayload
  _MergeMaterialHas_craftPayload: _MergeMaterialHas_craftPayload
  _AddMaterialBomsPayload: _AddMaterialBomsPayload
  _RemoveMaterialBomsPayload: _RemoveMaterialBomsPayload
  _MergeMaterialBomsPayload: _MergeMaterialBomsPayload
  _AddMaterialWorkordersPayload: _AddMaterialWorkordersPayload
  _RemoveMaterialWorkordersPayload: _RemoveMaterialWorkordersPayload
  _MergeMaterialWorkordersPayload: _MergeMaterialWorkordersPayload
  Material: Material
  _AddBOMUses_materialPayload: _AddBOMUses_materialPayload
  _RemoveBOMUses_materialPayload: _RemoveBOMUses_materialPayload
  _MergeBOMUses_materialPayload: _MergeBOMUses_materialPayload
  _BOMUSES_MATERIAL_rel: _BOMUSES_MATERIAL_rel
  _AddBOMUSES_MATERIAL_relPayload: _AddBOMUSES_MATERIAL_relPayload
  _RemoveBOMUSES_MATERIAL_relPayload: _RemoveBOMUSES_MATERIAL_relPayload
  _UpdateBOMUSES_MATERIAL_relPayload: _UpdateBOMUSES_MATERIAL_relPayload
  _MergeBOMUSES_MATERIAL_relPayload: _MergeBOMUSES_MATERIAL_relPayload
  _AddBOMCraftsPayload: _AddBOMCraftsPayload
  _RemoveBOMCraftsPayload: _RemoveBOMCraftsPayload
  _MergeBOMCraftsPayload: _MergeBOMCraftsPayload
  BOM: BOM
  USES_MATERIAL: USES_MATERIAL
  HAS_PRODUCT: HAS_PRODUCT
  EXECUTES: EXECUTES
  HAS_PROCEDURE: HAS_PROCEDURE
  _Neo4jTime: _Neo4jTime
  _Neo4jDate: _Neo4jDate
  _Neo4jDateTime: _Neo4jDateTime
  _Neo4jLocalTime: _Neo4jLocalTime
  _Neo4jLocalDateTime: _Neo4jLocalDateTime
  _Neo4jPoint: _Neo4jPoint
}
export type SchemaObjectTypesNames =
  | 'Query'
  | 'Mutation'
  | 'Subscription'
  | '_AddWorkOrderHas_productPayload'
  | '_RemoveWorkOrderHas_productPayload'
  | '_MergeWorkOrderHas_productPayload'
  | '_WorkOrderHAS_PRODUCT_rel'
  | '_AddWorkOrderHAS_PRODUCT_relPayload'
  | '_RemoveWorkOrderHAS_PRODUCT_relPayload'
  | '_UpdateWorkOrderHAS_PRODUCT_relPayload'
  | '_MergeWorkOrderHAS_PRODUCT_relPayload'
  | '_AddWorkOrderHas_taskPayload'
  | '_RemoveWorkOrderHas_taskPayload'
  | '_MergeWorkOrderHas_taskPayload'
  | 'WorkOrder'
  | '_AddProcedureTaskIn_orderPayload'
  | '_RemoveProcedureTaskIn_orderPayload'
  | '_MergeProcedureTaskIn_orderPayload'
  | '_AddProcedureTaskUses_procedurePayload'
  | '_RemoveProcedureTaskUses_procedurePayload'
  | '_MergeProcedureTaskUses_procedurePayload'
  | '_AddProcedureTaskUsersPayload'
  | '_RemoveProcedureTaskUsersPayload'
  | '_MergeProcedureTaskUsersPayload'
  | 'ProcedureTask'
  | '_AddUserExecutesPayload'
  | '_RemoveUserExecutesPayload'
  | '_MergeUserExecutesPayload'
  | '_UserEXECUTES_rel'
  | '_AddUserEXECUTES_relPayload'
  | '_RemoveUserEXECUTES_relPayload'
  | '_UpdateUserEXECUTES_relPayload'
  | '_MergeUserEXECUTES_relPayload'
  | 'User'
  | '_AddCraftUses_bomPayload'
  | '_RemoveCraftUses_bomPayload'
  | '_MergeCraftUses_bomPayload'
  | '_AddCraftFirst_procedurePayload'
  | '_RemoveCraftFirst_procedurePayload'
  | '_MergeCraftFirst_procedurePayload'
  | '_AddCraftLast_procedurePayload'
  | '_RemoveCraftLast_procedurePayload'
  | '_MergeCraftLast_procedurePayload'
  | '_AddCraftHas_procedurePayload'
  | '_RemoveCraftHas_procedurePayload'
  | '_MergeCraftHas_procedurePayload'
  | '_CraftHAS_PROCEDURE_rel'
  | '_AddCraftHAS_PROCEDURE_relPayload'
  | '_RemoveCraftHAS_PROCEDURE_relPayload'
  | '_UpdateCraftHAS_PROCEDURE_relPayload'
  | '_MergeCraftHAS_PROCEDURE_relPayload'
  | '_AddCraftMaterialsPayload'
  | '_RemoveCraftMaterialsPayload'
  | '_MergeCraftMaterialsPayload'
  | 'Craft'
  | '_AddProcedureNextPayload'
  | '_RemoveProcedureNextPayload'
  | '_MergeProcedureNextPayload'
  | '_AddProcedureCrafts_first_procedurePayload'
  | '_RemoveProcedureCrafts_first_procedurePayload'
  | '_MergeProcedureCrafts_first_procedurePayload'
  | '_AddProcedureCrafts_last_procedurePayload'
  | '_RemoveProcedureCrafts_last_procedurePayload'
  | '_MergeProcedureCrafts_last_procedurePayload'
  | '_AddProcedureProceduretasks_uses_procedurePayload'
  | '_RemoveProcedureProceduretasks_uses_procedurePayload'
  | '_MergeProcedureProceduretasks_uses_procedurePayload'
  | '_AddProcedureCrafts_has_procedurePayload'
  | '_RemoveProcedureCrafts_has_procedurePayload'
  | '_MergeProcedureCrafts_has_procedurePayload'
  | 'Procedure'
  | '_AddMaterialHas_craftPayload'
  | '_RemoveMaterialHas_craftPayload'
  | '_MergeMaterialHas_craftPayload'
  | '_AddMaterialBomsPayload'
  | '_RemoveMaterialBomsPayload'
  | '_MergeMaterialBomsPayload'
  | '_AddMaterialWorkordersPayload'
  | '_RemoveMaterialWorkordersPayload'
  | '_MergeMaterialWorkordersPayload'
  | 'Material'
  | '_AddBOMUses_materialPayload'
  | '_RemoveBOMUses_materialPayload'
  | '_MergeBOMUses_materialPayload'
  | '_BOMUSES_MATERIAL_rel'
  | '_AddBOMUSES_MATERIAL_relPayload'
  | '_RemoveBOMUSES_MATERIAL_relPayload'
  | '_UpdateBOMUSES_MATERIAL_relPayload'
  | '_MergeBOMUSES_MATERIAL_relPayload'
  | '_AddBOMCraftsPayload'
  | '_RemoveBOMCraftsPayload'
  | '_MergeBOMCraftsPayload'
  | 'BOM'
  | 'USES_MATERIAL'
  | 'HAS_PRODUCT'
  | 'EXECUTES'
  | 'HAS_PROCEDURE'
  | '_Neo4jTime'
  | '_Neo4jDate'
  | '_Neo4jDateTime'
  | '_Neo4jLocalTime'
  | '_Neo4jLocalDateTime'
  | '_Neo4jPoint'

export interface GeneratedSchema {
  query: Query
  mutation: Mutation
  subscription: Subscription
}

export type MakeNullable<T> = {
  [K in keyof T]: T[K] | undefined
}

export interface ScalarsEnums extends MakeNullable<Scalars> {
  _HAS_PRODUCTOrdering: _HAS_PRODUCTOrdering | undefined
  _WorkOrderOrdering: _WorkOrderOrdering | undefined
  _ProcedureTaskOrdering: _ProcedureTaskOrdering | undefined
  _EXECUTESOrdering: _EXECUTESOrdering | undefined
  _UserOrdering: _UserOrdering | undefined
  _HAS_PROCEDUREOrdering: _HAS_PROCEDUREOrdering | undefined
  _CraftOrdering: _CraftOrdering | undefined
  _ProcedureOrdering: _ProcedureOrdering | undefined
  _MaterialOrdering: _MaterialOrdering | undefined
  _USES_MATERIALOrdering: _USES_MATERIALOrdering | undefined
  _BOMOrdering: _BOMOrdering | undefined
  _RelationDirections: _RelationDirections | undefined
}
