import { GraphQLResolveInfo } from 'graphql';

// This was produced from a JSON representation and doesn't exactly fit the GraphQLResolveInfo type,
// but it's close enough for the purpose of our tests
export const productsInfo: GraphQLResolveInfo = {
  fieldName: 'products',
  fieldNodes: [
    {
      kind: 'Field',
      name: {
        kind: 'Name',
        value: 'products',
        loc: {
          start: 36,
          end: 44,
        },
      },
      arguments: [],
      directives: [],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'id',
              loc: {
                start: 59,
                end: 61,
              },
            },
            arguments: [],
            directives: [],
            loc: {
              start: 59,
              end: 61,
            },
          },
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'name',
              loc: {
                start: 74,
                end: 78,
              },
            },
            arguments: [],
            directives: [],
            loc: {
              start: 74,
              end: 78,
            },
          },
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'owner',
              loc: {
                start: 91,
                end: 96,
              },
            },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'id',
                    loc: {
                      start: 113,
                      end: 115,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 113,
                    end: 115,
                  },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'name',
                    loc: {
                      start: 130,
                      end: 134,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 130,
                    end: 134,
                  },
                },
              ],
              loc: {
                start: 97,
                end: 148,
              },
            },
            loc: {
              start: 91,
              end: 148,
            },
          },
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'store',
              loc: {
                start: 161,
                end: 166,
              },
            },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'id',
                    loc: {
                      start: 183,
                      end: 185,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 183,
                    end: 185,
                  },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'name',
                    loc: {
                      start: 200,
                      end: 204,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 200,
                    end: 204,
                  },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'owner',
                    loc: {
                      start: 219,
                      end: 224,
                    },
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'id',
                          loc: {
                            start: 243,
                            end: 245,
                          },
                        },
                        arguments: [],
                        directives: [],
                        loc: {
                          start: 243,
                          end: 245,
                        },
                      },
                      {
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'name',
                          loc: {
                            start: 262,
                            end: 266,
                          },
                        },
                        arguments: [],
                        directives: [],
                        loc: {
                          start: 262,
                          end: 266,
                        },
                      },
                    ],
                    loc: {
                      start: 225,
                      end: 282,
                    },
                  },
                  loc: {
                    start: 219,
                    end: 282,
                  },
                },
              ],
              loc: {
                start: 167,
                end: 296,
              },
            },
            loc: {
              start: 161,
              end: 296,
            },
          },
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'images',
              loc: {
                start: 309,
                end: 315,
              },
            },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'sizes',
                    loc: {
                      start: 332,
                      end: 337,
                    },
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'medium',
                          loc: {
                            start: 356,
                            end: 362,
                          },
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'id',
                                loc: {
                                  start: 383,
                                  end: 385,
                                },
                              },
                              arguments: [],
                              directives: [],
                              loc: {
                                start: 383,
                                end: 385,
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'fileName',
                                loc: {
                                  start: 404,
                                  end: 412,
                                },
                              },
                              arguments: [],
                              directives: [],
                              loc: {
                                start: 404,
                                end: 412,
                              },
                            },
                          ],
                          loc: {
                            start: 363,
                            end: 430,
                          },
                        },
                        loc: {
                          start: 356,
                          end: 430,
                        },
                      },
                    ],
                    loc: {
                      start: 338,
                      end: 446,
                    },
                  },
                  loc: {
                    start: 332,
                    end: 446,
                  },
                },
              ],
              loc: {
                start: 316,
                end: 460,
              },
            },
            loc: {
              start: 309,
              end: 460,
            },
          },
        ],
        loc: {
          start: 45,
          end: 472,
        },
      },
      loc: {
        start: 36,
        end: 472,
      },
    },
  ],
  returnType: '[Product]!',
  parentType: 'Query',
  path: {
    key: 'products',
    typename: 'Query',
  },
  schema: {
    __validationErrors: [],
    astNode: {
      kind: 'SchemaDefinition',
      directives: [],
      operationTypes: [
        {
          kind: 'OperationTypeDefinition',
          operation: 'query',
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Query',
              loc: {
                start: 819,
                end: 824,
              },
            },
            loc: {
              start: 819,
              end: 824,
            },
          },
          loc: {
            start: 812,
            end: 824,
          },
        },
      ],
      loc: {
        start: 799,
        end: 828,
      },
    },
    extensionASTNodes: [],
    _queryType: 'Query',
    _directives: ['@include', '@skip', '@deprecated', '@specifiedBy'],
    _typeMap: {
      Country: 'Country',
      Int: 'Int',
      String: 'String',
      Address: 'Address',
      Owner: 'Owner',
      Product: 'Product',
      Store: 'Store',
      Image: 'Image',
      ImageFile: 'ImageFile',
      ImageSizeMap: 'ImageSizeMap',
      Video: 'Video',
      MediaTypeUnion: 'MediaTypeUnion',
      Query: 'Query',
      Boolean: 'Boolean',
      __Schema: '__Schema',
      __Type: '__Type',
      __TypeKind: '__TypeKind',
      __Field: '__Field',
      __InputValue: '__InputValue',
      __EnumValue: '__EnumValue',
      __Directive: '__Directive',
      __DirectiveLocation: '__DirectiveLocation',
    },
    _subTypeMap: {
      MediaTypeUnion: {
        Image: true,
        Video: true,
      },
    },
    _implementationsMap: {},
  },
  fragments: {},
  rootValue: {},
  operation: {
    kind: 'OperationDefinition',
    operation: 'query',
    name: {
      kind: 'Name',
      value: 'products',
      loc: {
        start: 15,
        end: 23,
      },
    },
    variableDefinitions: [],
    directives: [],
    selectionSet: {
      kind: 'SelectionSet',
      selections: [
        {
          kind: 'Field',
          name: {
            kind: 'Name',
            value: 'products',
            loc: {
              start: 36,
              end: 44,
            },
          },
          arguments: [],
          directives: [],
          selectionSet: {
            kind: 'SelectionSet',
            selections: [
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'id',
                  loc: {
                    start: 59,
                    end: 61,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 59,
                  end: 61,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'name',
                  loc: {
                    start: 74,
                    end: 78,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 74,
                  end: 78,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'owner',
                  loc: {
                    start: 91,
                    end: 96,
                  },
                },
                arguments: [],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'id',
                        loc: {
                          start: 113,
                          end: 115,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 113,
                        end: 115,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'name',
                        loc: {
                          start: 130,
                          end: 134,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 130,
                        end: 134,
                      },
                    },
                  ],
                  loc: {
                    start: 97,
                    end: 148,
                  },
                },
                loc: {
                  start: 91,
                  end: 148,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'store',
                  loc: {
                    start: 161,
                    end: 166,
                  },
                },
                arguments: [],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'id',
                        loc: {
                          start: 183,
                          end: 185,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 183,
                        end: 185,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'name',
                        loc: {
                          start: 200,
                          end: 204,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 200,
                        end: 204,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'owner',
                        loc: {
                          start: 219,
                          end: 224,
                        },
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: 'SelectionSet',
                        selections: [
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'id',
                              loc: {
                                start: 243,
                                end: 245,
                              },
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 243,
                              end: 245,
                            },
                          },
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'name',
                              loc: {
                                start: 262,
                                end: 266,
                              },
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 262,
                              end: 266,
                            },
                          },
                        ],
                        loc: {
                          start: 225,
                          end: 282,
                        },
                      },
                      loc: {
                        start: 219,
                        end: 282,
                      },
                    },
                  ],
                  loc: {
                    start: 167,
                    end: 296,
                  },
                },
                loc: {
                  start: 161,
                  end: 296,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'images',
                  loc: {
                    start: 309,
                    end: 315,
                  },
                },
                arguments: [],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'sizes',
                        loc: {
                          start: 332,
                          end: 337,
                        },
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: 'SelectionSet',
                        selections: [
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'medium',
                              loc: {
                                start: 356,
                                end: 362,
                              },
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                              kind: 'SelectionSet',
                              selections: [
                                {
                                  kind: 'Field',
                                  name: {
                                    kind: 'Name',
                                    value: 'id',
                                    loc: {
                                      start: 383,
                                      end: 385,
                                    },
                                  },
                                  arguments: [],
                                  directives: [],
                                  loc: {
                                    start: 383,
                                    end: 385,
                                  },
                                },
                                {
                                  kind: 'Field',
                                  name: {
                                    kind: 'Name',
                                    value: 'fileName',
                                    loc: {
                                      start: 404,
                                      end: 412,
                                    },
                                  },
                                  arguments: [],
                                  directives: [],
                                  loc: {
                                    start: 404,
                                    end: 412,
                                  },
                                },
                              ],
                              loc: {
                                start: 363,
                                end: 430,
                              },
                            },
                            loc: {
                              start: 356,
                              end: 430,
                            },
                          },
                        ],
                        loc: {
                          start: 338,
                          end: 446,
                        },
                      },
                      loc: {
                        start: 332,
                        end: 446,
                      },
                    },
                  ],
                  loc: {
                    start: 316,
                    end: 460,
                  },
                },
                loc: {
                  start: 309,
                  end: 460,
                },
              },
            ],
            loc: {
              start: 45,
              end: 472,
            },
          },
          loc: {
            start: 36,
            end: 472,
          },
        },
      ],
      loc: {
        start: 24,
        end: 482,
      },
    },
    loc: {
      start: 9,
      end: 482,
    },
  },
  variableValues: {},
} as unknown as GraphQLResolveInfo;
