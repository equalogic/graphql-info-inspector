<div align="center">
  <img src="https://github.com/equalogic/graphql-info-inspector/raw/master/resources/logo@720w.png" width="720" height="309">
  <br>
  <br>
  <a href="https://npmjs.com/package/graphql-info-inspector">
    <img src="https://img.shields.io/npm/v/graphql-info-inspector">
  </a>
  <a href="https://npmjs.com/package/graphql-info-inspector">
    <img src="https://img.shields.io/npm/dy/graphql-info-inspector">
  </a>
  <br>
  <br>
</div>

A toolkit for working with `GraphQLResolveInfo` objects. Enables resolvers to easily determine whether a client's
GraphQL query selected a particular field.

---

## Installation

```
npm i graphql-info-inspector
```

This library is written in TypeScript, so type definitions are included in the box.

You must also install [graphql](https://www.npmjs.com/package/graphql) v14.x or higher as a peer dependency.

---

## Introduction

GraphQL servers commonly pass an `info` object to resolver functions. This `info` object, which has the shape defined by
[GraphQLResolveInfo](https://graphql.org/graphql-js/type/#graphqlobjecttype:~:text=type-,GraphQLResolveInfo,-%3D%20%7B),
conveys to the resolver extensive detail about the client's query (starting from the point of resolution).

It can be used to determine which fields the client selected to retrieve on the object being resolved to optimize your
response. But the structure of `GraphQLResolveInfo` is complex.

`graphql-info-inspector` is a toolkit that helps to make the retrieval of information from `GraphQLResolveInfo` easier.

---

## Usage

### Functions

#### `isFieldSelected(fieldPath: string, info: GraphQLResolveInfo): boolean`

Returns true if the specified field was selected in the GraphQL query, or false if it's not found.
The `fieldPath` can reference nested fields using dotted `parentField.childField.grandchildField` notation.

```ts
import { GraphQLResolveInfo } from 'graphql';
import { isFieldSelected } from 'graphql-info-inspector';

// Example resolver function for a "products" query in your GQL schema
async function products(source: any, args: any, context: any, info: GraphQLResolveInfo): Promise<Product[]> {
  const products = await loadProducts();
  
  if (isFieldSelected('image', info)) {
    // Client requested `products { image { ... } }` so we need to fetch that data somehow
    await loadImages(products);
  }
  
  if (isFieldSelected('image.tags', info)) {
    // Client requested `products { image { tags: { ... } } }` so we need to fetch that data as well
    await loadImageTags(products);
  }
  
  return products;
}
```

#### `findSelectionNode(fieldPath: string, info: GraphQLResolveInfo): SelectionNode | null`

Like `isFieldSelected`, but it returns the `SelectionNode` for the specified field if it was selected in the GraphQL
query, or null if it's not found.

### GraphQLInspection class

If you prefer an object-oriented style, you can use `GraphQLInspection` class like this:

```ts
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLInspection } from 'graphql-info-inspector';

// Example resolver function for a "products" query in your GQL schema
async function products(source: any, args: any, context: any, info: GraphQLResolveInfo): Promise<Product[]> {
  const queryInspection = new GraphQLInspection(info);
  
  const products = await loadProducts();

  if (queryInspection.has('image')) {
    // Client requested `products { image { ... } }` so we need to fetch that data somehow
    await loadImages(products);
  }
  
  if (queryInspection.has('image.tags')) {
    // Client requested `products { image { tags: { ... } } }` so we need to fetch that data as well
    await loadImageTags(products);
  }
  
  return products;
}
```

---

## License

MIT
