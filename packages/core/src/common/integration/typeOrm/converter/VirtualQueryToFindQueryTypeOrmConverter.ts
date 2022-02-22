import { FindConditions, QueryBuilder, WhereExpressionBuilder } from 'typeorm';

import { ConverterAsync } from '../../../domain/converter/ConverterAsync';

export type VirtualQueryToFindQueryTypeOrmConverter<TModelDb, TQuery> = ConverterAsync<
  TQuery,
  FindConditions<TModelDb> | (QueryBuilder<TModelDb> & WhereExpressionBuilder),
  QueryBuilder<TModelDb> & WhereExpressionBuilder
>;
