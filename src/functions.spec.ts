import { FieldNode } from 'graphql';
import { fragmentsInfo } from '../test/fixtures/fragments';
import { productsInfo } from '../test/fixtures/products';
import { findSelectionNode } from './functions';

describe('functions', () => {
  describe('findQueryNode()', () => {
    it('finds simple nested field selections', async () => {
      expect(findSelectionNode('invalidField', productsInfo)).toBeNull();
      expect(findSelectionNode('name', productsInfo)).toMatchObject<FieldNode>({
        kind: 'Field',
        name: { kind: 'Name', value: 'name' },
      });
      expect(findSelectionNode('owner', productsInfo)).toMatchObject<FieldNode>({
        kind: 'Field',
        name: { kind: 'Name', value: 'owner' },
      });
      expect(findSelectionNode('owner.name', productsInfo)).toMatchObject<FieldNode>({
        kind: 'Field',
        name: { kind: 'Name', value: 'name' },
      });
      expect(findSelectionNode('store', productsInfo)).toMatchObject<FieldNode>({
        kind: 'Field',
        name: { kind: 'Name', value: 'store' },
      });
      expect(findSelectionNode('store.name', productsInfo)).toMatchObject<FieldNode>({
        kind: 'Field',
        name: { kind: 'Name', value: 'name' },
      });
      expect(findSelectionNode('store.owner', productsInfo)).toMatchObject<FieldNode>({
        kind: 'Field',
        name: { kind: 'Name', value: 'owner' },
      });
      expect(findSelectionNode('store.owner.name', productsInfo)).toMatchObject<FieldNode>({
        kind: 'Field',
        name: { kind: 'Name', value: 'name' },
      });
    });

    it('finds nested non-entity relations', async () => {
      expect(findSelectionNode('name', productsInfo)).toMatchObject<FieldNode>({
        kind: 'Field',
        name: { kind: 'Name', value: 'name' },
      });
      expect(findSelectionNode('images.sizes', productsInfo)).toMatchObject<FieldNode>({
        kind: 'Field',
        name: { kind: 'Name', value: 'sizes' },
      });
      expect(findSelectionNode('images.sizes.small', productsInfo)).toBeNull();
      expect(findSelectionNode('images.sizes.medium', productsInfo)).toMatchObject<FieldNode>({
        kind: 'Field',
        name: { kind: 'Name', value: 'medium' },
      });
      expect(findSelectionNode('images.sizes.medium.fileName', productsInfo)).toMatchObject<FieldNode>({
        kind: 'Field',
        name: { kind: 'Name', value: 'fileName' },
      });
    });

    it('finds fields in spread fragments nested within inline fragments', async () => {
      expect(findSelectionNode('media', fragmentsInfo)).toMatchObject<FieldNode>({
        kind: 'Field',
        name: { kind: 'Name', value: 'media' },
      });
      expect(findSelectionNode('media.sizes', fragmentsInfo)).toMatchObject<FieldNode>({
        kind: 'Field',
        name: { kind: 'Name', value: 'sizes' },
      });
      expect(findSelectionNode('media.sizes.small', fragmentsInfo)).toBeNull();
      expect(findSelectionNode('media.sizes.medium', fragmentsInfo)).toMatchObject<FieldNode>({
        kind: 'Field',
        name: { kind: 'Name', value: 'medium' },
      });
      expect(findSelectionNode('media.sizes.medium.fileName', fragmentsInfo)).toMatchObject<FieldNode>({
        kind: 'Field',
        name: { kind: 'Name', value: 'fileName' },
      });
      expect(findSelectionNode('media.duration', fragmentsInfo)).toMatchObject<FieldNode>({
        kind: 'Field',
        name: { kind: 'Name', value: 'duration' },
      });
    });
  });
});
