import { FragmentDefinitionNode, GraphQLResolveInfo, SelectionNode, SelectionSetNode } from 'graphql';

/**
 * Returns the SelectionNode for referenced field if it was selected in the GraphQL query, or null if it's not found.
 * `fieldPath` can reference nested fields using dotted 'parentField.childField.grandchildField' notation.
 */
export function findSelectionNode(fieldPath: string, info: GraphQLResolveInfo): SelectionNode | null {
  const baseNode = info.fieldNodes.find(fieldNode => fieldNode.name.value === info.fieldName);

  if (baseNode == null) {
    throw new Error(`Could not locate field named "${info.fieldName}" in query info"`);
  }

  let currentBaseNode: SelectionNode = baseNode;
  const fieldPathNodes: (SelectionNode | null)[] = [];

  // loop through each level of the path and find the matching selection node, if it's selected
  fieldPath.split('.').forEach((fieldName): void => {
    const selectionSet = getSelectionSetFromNode(currentBaseNode, info.fragments);

    if (selectionSet == null) {
      return;
    }

    const foundNode = findFieldInSelection(fieldName, selectionSet, info.fragments);

    if (foundNode == null) {
      fieldPathNodes.push(null);

      return;
    }

    fieldPathNodes.push(foundNode);
    currentBaseNode = foundNode;
  });

  // in case of a bad field path
  if (fieldPathNodes.length === 0) {
    return null;
  }

  // if there are nulls in the array then we did not find selection nodes at every level of the field path
  if (fieldPathNodes.filter(node => node === null).length > 0) {
    return null;
  }

  return fieldPathNodes[fieldPathNodes.length - 1];
}

export function getNameFromNode(selectionNode: SelectionNode): string | null {
  switch (selectionNode.kind) {
    case 'Field':
    case 'FragmentSpread':
      return selectionNode.name.value;
    case 'InlineFragment':
    default:
      return null;
  }
}

export function getSelectionSetFromNode(
  selectionNode: SelectionNode,
  fragments?: Record<string, FragmentDefinitionNode>,
): SelectionSetNode | undefined {
  switch (selectionNode.kind) {
    case 'FragmentSpread':
      if (fragments == null || fragments[selectionNode.name.value] == null) {
        throw new Error(`Could not find the fragment named ${selectionNode.name.value} referenced in the query.`);
      }

      return fragments[selectionNode.name.value].selectionSet;
    case 'Field':
    case 'InlineFragment':
      return selectionNode.selectionSet;
  }
}

export function findFieldInSelection(
  fieldName: string,
  selectionSet: SelectionSetNode,
  fragments?: Record<string, FragmentDefinitionNode>,
): SelectionNode | undefined {
  let foundNode: SelectionNode | undefined = undefined;

  for (const selectionNode of selectionSet.selections) {
    if (foundNode !== undefined) {
      break;
    }

    if (selectionNode.kind === 'InlineFragment' || selectionNode.kind === 'FragmentSpread') {
      const selectionSet = getSelectionSetFromNode(selectionNode, fragments);

      if (selectionSet === undefined) {
        break;
      }

      foundNode = findFieldInSelection(fieldName, selectionSet, fragments);

      break;
    }

    if (getNameFromNode(selectionNode) === fieldName) {
      foundNode = selectionNode;

      break;
    }
  }

  return foundNode;
}
