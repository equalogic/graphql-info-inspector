import { GraphQLResolveInfo } from 'graphql';

// This was produced from a JSON representation and doesn't exactly fit the GraphQLResolveInfo type,
// but it's close enough for the purpose of our tests
export const fragmentsInfo: GraphQLResolveInfo = {
  fieldName: 'products',
  fieldNodes: [
    {
      kind: 'Field',
      name: {
        kind: 'Name',
        value: 'products',
        loc: {
          start: 645,
          end: 653,
        },
      },
      arguments: [],
      directives: [],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: {
              kind: 'Name',
              value: 'ProductFragment',
              loc: {
                start: 671,
                end: 686,
              },
            },
            directives: [],
            loc: {
              start: 668,
              end: 686,
            },
          },
        ],
        loc: {
          start: 654,
          end: 698,
        },
      },
      loc: {
        start: 645,
        end: 698,
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
  fragments: {
    ImageFragment: {
      kind: 'FragmentDefinition',
      name: {
        kind: 'Name',
        value: 'ImageFragment',
        loc: {
          start: 18,
          end: 31,
        },
      },
      typeCondition: {
        kind: 'NamedType',
        name: {
          kind: 'Name',
          value: 'Image',
          loc: {
            start: 35,
            end: 40,
          },
        },
        loc: {
          start: 35,
          end: 40,
        },
      },
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
                start: 53,
                end: 55,
              },
            },
            arguments: [],
            directives: [],
            loc: {
              start: 53,
              end: 55,
            },
          },
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'sizes',
              loc: {
                start: 66,
                end: 71,
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
                      start: 86,
                      end: 92,
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
                            start: 109,
                            end: 111,
                          },
                        },
                        arguments: [],
                        directives: [],
                        loc: {
                          start: 109,
                          end: 111,
                        },
                      },
                      {
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'fileName',
                          loc: {
                            start: 126,
                            end: 134,
                          },
                        },
                        arguments: [],
                        directives: [],
                        loc: {
                          start: 126,
                          end: 134,
                        },
                      },
                    ],
                    loc: {
                      start: 93,
                      end: 148,
                    },
                  },
                  loc: {
                    start: 86,
                    end: 148,
                  },
                },
              ],
              loc: {
                start: 72,
                end: 160,
              },
            },
            loc: {
              start: 66,
              end: 160,
            },
          },
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'product',
              loc: {
                start: 171,
                end: 178,
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
                      start: 193,
                      end: 195,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 193,
                    end: 195,
                  },
                },
              ],
              loc: {
                start: 179,
                end: 207,
              },
            },
            loc: {
              start: 171,
              end: 207,
            },
          },
        ],
        loc: {
          start: 41,
          end: 217,
        },
      },
      loc: {
        start: 9,
        end: 217,
      },
    },
    VideoFragment: {
      kind: 'FragmentDefinition',
      name: {
        kind: 'Name',
        value: 'VideoFragment',
        loc: {
          start: 236,
          end: 249,
        },
      },
      typeCondition: {
        kind: 'NamedType',
        name: {
          kind: 'Name',
          value: 'Video',
          loc: {
            start: 253,
            end: 258,
          },
        },
        loc: {
          start: 253,
          end: 258,
        },
      },
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
                start: 271,
                end: 273,
              },
            },
            arguments: [],
            directives: [],
            loc: {
              start: 271,
              end: 273,
            },
          },
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'duration',
              loc: {
                start: 284,
                end: 292,
              },
            },
            arguments: [],
            directives: [],
            loc: {
              start: 284,
              end: 292,
            },
          },
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'product',
              loc: {
                start: 303,
                end: 310,
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
                      start: 325,
                      end: 327,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 325,
                    end: 327,
                  },
                },
              ],
              loc: {
                start: 311,
                end: 339,
              },
            },
            loc: {
              start: 303,
              end: 339,
            },
          },
        ],
        loc: {
          start: 259,
          end: 349,
        },
      },
      loc: {
        start: 227,
        end: 349,
      },
    },
    ProductFragment: {
      kind: 'FragmentDefinition',
      name: {
        kind: 'Name',
        value: 'ProductFragment',
        loc: {
          start: 368,
          end: 383,
        },
      },
      typeCondition: {
        kind: 'NamedType',
        name: {
          kind: 'Name',
          value: 'Product',
          loc: {
            start: 387,
            end: 394,
          },
        },
        loc: {
          start: 387,
          end: 394,
        },
      },
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
                start: 407,
                end: 409,
              },
            },
            arguments: [],
            directives: [],
            loc: {
              start: 407,
              end: 409,
            },
          },
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'name',
              loc: {
                start: 420,
                end: 424,
              },
            },
            arguments: [],
            directives: [],
            loc: {
              start: 420,
              end: 424,
            },
          },
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'media',
              loc: {
                start: 435,
                end: 440,
              },
            },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: {
                      kind: 'Name',
                      value: 'Image',
                      loc: {
                        start: 462,
                        end: 467,
                      },
                    },
                    loc: {
                      start: 462,
                      end: 467,
                    },
                  },
                  directives: [],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: {
                          kind: 'Name',
                          value: 'ImageFragment',
                          loc: {
                            start: 487,
                            end: 500,
                          },
                        },
                        directives: [],
                        loc: {
                          start: 484,
                          end: 500,
                        },
                      },
                    ],
                    loc: {
                      start: 468,
                      end: 514,
                    },
                  },
                  loc: {
                    start: 455,
                    end: 514,
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: {
                      kind: 'Name',
                      value: 'Video',
                      loc: {
                        start: 534,
                        end: 539,
                      },
                    },
                    loc: {
                      start: 534,
                      end: 539,
                    },
                  },
                  directives: [],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: {
                          kind: 'Name',
                          value: 'VideoFragment',
                          loc: {
                            start: 559,
                            end: 572,
                          },
                        },
                        directives: [],
                        loc: {
                          start: 556,
                          end: 572,
                        },
                      },
                    ],
                    loc: {
                      start: 540,
                      end: 586,
                    },
                  },
                  loc: {
                    start: 527,
                    end: 586,
                  },
                },
              ],
              loc: {
                start: 441,
                end: 598,
              },
            },
            loc: {
              start: 435,
              end: 598,
            },
          },
        ],
        loc: {
          start: 395,
          end: 608,
        },
      },
      loc: {
        start: 359,
        end: 608,
      },
    },
  },
  rootValue: {},
  operation: {
    kind: 'OperationDefinition',
    operation: 'query',
    name: {
      kind: 'Name',
      value: 'products',
      loc: {
        start: 624,
        end: 632,
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
              start: 645,
              end: 653,
            },
          },
          arguments: [],
          directives: [],
          selectionSet: {
            kind: 'SelectionSet',
            selections: [
              {
                kind: 'FragmentSpread',
                name: {
                  kind: 'Name',
                  value: 'ProductFragment',
                  loc: {
                    start: 671,
                    end: 686,
                  },
                },
                directives: [],
                loc: {
                  start: 668,
                  end: 686,
                },
              },
            ],
            loc: {
              start: 654,
              end: 698,
            },
          },
          loc: {
            start: 645,
            end: 698,
          },
        },
      ],
      loc: {
        start: 633,
        end: 708,
      },
    },
    loc: {
      start: 618,
      end: 708,
    },
  },
  variableValues: {},
} as unknown as GraphQLResolveInfo;
