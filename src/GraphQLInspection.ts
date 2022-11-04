import { GraphQLResolveInfo, SelectionNode } from 'graphql';
import { findSelectionNode } from './functions';

export class GraphQLInspection {
  public constructor(public readonly info: GraphQLResolveInfo) {}

  /**
   * Returns the SelectionNode for referenced field if it was selected in the GraphQL query, or null if it's not found.
   * `fieldPath` can reference nested fields using dotted 'parentField.childField.grandchildField' notation.
   */
  public find(fieldPath: string): SelectionNode | null {
    return findSelectionNode(fieldPath, this.info);
  }

  /**
   * Returns true if the referenced field was selected in the GraphQL query, or false if it's not found.
   * `fieldPath` can reference nested fields using dotted 'parentField.childField.grandchildField' notation.
   */
  public isSelected(fieldPath: string): boolean {
    return this.find(fieldPath) != null;
  }
}
