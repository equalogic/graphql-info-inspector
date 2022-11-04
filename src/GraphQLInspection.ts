import { GraphQLResolveInfo, SelectionNode } from 'graphql';
import { findSelectionNode, isFieldSelected } from './functions';

export class GraphQLInspection {
  public constructor(public readonly info: GraphQLResolveInfo) {}

  public find(fieldPath: string): SelectionNode | null {
    return findSelectionNode(fieldPath, this.info);
  }

  public has(fieldPath: string): boolean {
    return isFieldSelected(fieldPath, this.info);
  }
}
