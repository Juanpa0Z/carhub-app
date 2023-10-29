
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
} = require('./runtime/library')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.4.2
 * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
 */
Prisma.prismaVersion = {
  client: "5.4.2",
  engine: "aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.CarsScalarFieldEnum = {
  cardId: 'cardId',
  carYear: 'carYear',
  transmitionTypes: 'transmitionTypes',
  driveTrains: 'driveTrains',
  carDescription: 'carDescription',
  carImageUrl: 'carImageUrl',
  motorFuelTypes: 'motorFuelTypes',
  carAcceleration: 'carAcceleration',
  accelarationTime: 'accelarationTime',
  speedMax: 'speedMax',
  averageConsumption: 'averageConsumption',
  deviceCapacity: 'deviceCapacity',
  numberOfDoors: 'numberOfDoors',
  carDimensions: 'carDimensions',
  carTrunkVolume: 'carTrunkVolume',
  carWeight: 'carWeight',
  maximumPower: 'maximumPower',
  motorWatts: 'motorWatts',
  carsMakesCarMakeId: 'carsMakesCarMakeId',
  carsModelsCarModelId: 'carsModelsCarModelId'
};

exports.Prisma.CarsMakesScalarFieldEnum = {
  carMakeId: 'carMakeId',
  name: 'name',
  createdAt: 'createdAt'
};

exports.Prisma.CarsModelsScalarFieldEnum = {
  carModelId: 'carModelId',
  carMakeId: 'carMakeId',
  name: 'name',
  createdAt: 'createdAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  Cars: 'Cars',
  CarsMakes: 'CarsMakes',
  CarsModels: 'CarsModels'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\juanp\\Documents\\carhub-app\\prisma\\generated\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null
  },
  "relativePath": "../..",
  "clientVersion": "5.4.2",
  "engineVersion": "aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "ZGF0YXNvdXJjZSBkYiB7DQogIHByb3ZpZGVyID0gInBvc3RncmVzcWwiDQogIHVybCAgICAgID0gZW52KCJEQVRBQkFTRV9VUkwiKQ0KfQ0KDQpnZW5lcmF0b3IgY2xpZW50IHsNCiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyINCiAgb3V0cHV0ICAgPSAiLi9nZW5lcmF0ZWQvY2xpZW50Ig0KfQ0KDQptb2RlbCBDYXJzIHsNCiAgY2FyZElkICAgICAgICAgICAgICAgU3RyaW5nICAgICAgQGlkIEB1bmlxdWUgQGRlZmF1bHQoY3VpZCgpKQ0KICBjYXJNYWtlICAgICAgICAgICAgICBDYXJzTWFrZXM/ICBAcmVsYXRpb24oZmllbGRzOiBbY2Fyc01ha2VzQ2FyTWFrZUlkXSwgcmVmZXJlbmNlczogW2Nhck1ha2VJZF0pDQogIGNhck1vZGVsICAgICAgICAgICAgIENhcnNNb2RlbHM/IEByZWxhdGlvbihmaWVsZHM6IFtjYXJzTW9kZWxzQ2FyTW9kZWxJZF0sIHJlZmVyZW5jZXM6IFtjYXJNb2RlbElkXSkNCiAgY2FyWWVhciAgICAgICAgICAgICAgSW50DQogIHRyYW5zbWl0aW9uVHlwZXMgICAgIFN0cmluZ1tdDQogIGRyaXZlVHJhaW5zICAgICAgICAgIFN0cmluZ1tdDQogIGNhckRlc2NyaXB0aW9uICAgICAgIFN0cmluZw0KICBjYXJJbWFnZVVybCAgICAgICAgICBTdHJpbmcNCiAgbW90b3JGdWVsVHlwZXMgICAgICAgU3RyaW5nW10NCiAgY2FyQWNjZWxlcmF0aW9uICAgICAgU3RyaW5nDQogIGFjY2VsYXJhdGlvblRpbWUgICAgIFN0cmluZw0KICBzcGVlZE1heCAgICAgICAgICAgICBTdHJpbmcNCiAgYXZlcmFnZUNvbnN1bXB0aW9uICAgU3RyaW5nDQogIGRldmljZUNhcGFjaXR5ICAgICAgIFN0cmluZw0KICBudW1iZXJPZkRvb3JzICAgICAgICBTdHJpbmcNCiAgY2FyRGltZW5zaW9ucyAgICAgICAgU3RyaW5nDQogIGNhclRydW5rVm9sdW1lICAgICAgIFN0cmluZw0KICBjYXJXZWlnaHQgICAgICAgICAgICBTdHJpbmcNCiAgbWF4aW11bVBvd2VyICAgICAgICAgU3RyaW5nDQogIG1vdG9yV2F0dHMgICAgICAgICAgIFN0cmluZw0KICBjYXJzTWFrZXNDYXJNYWtlSWQgICBJbnQNCiAgY2Fyc01vZGVsc0Nhck1vZGVsSWQgSW50DQp9DQoNCm1vZGVsIENhcnNNYWtlcyB7DQogIGNhck1ha2VJZCBJbnQgICAgQGlkIEB1bmlxdWUgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBuYW1lICAgICAgU3RyaW5nDQogIGNyZWF0ZWRBdCBEYXRlVGltZT8gQGRlZmF1bHQobm93KCkpDQogIENhcnMgICAgICBDYXJzW10NCiAgTW9kZWxzIENhcnNNb2RlbHNbXQ0KfQ0KDQptb2RlbCBDYXJzTW9kZWxzIHsNCiAgY2FyTW9kZWxJZCBJbnQgICAgQGlkIEB1bmlxdWUgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBjYXJNYWtlSWQgSW50DQogIG5hbWUgICAgICAgU3RyaW5nDQogIGNyZWF0ZWRBdCAgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKQ0KICBjYXJNYWtlICBDYXJzTWFrZXM/ICBAcmVsYXRpb24oZmllbGRzOiBbY2FyTWFrZUlkXSwgcmVmZXJlbmNlczogW2Nhck1ha2VJZF0pDQogIENhcnMgICAgICAgQ2Fyc1tdDQp9",
  "inlineSchemaHash": "08f5ffe6009ed9e95d6fadcf88cde851526a7983acdc165388b4fb0f22f4879e"
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "prisma/generated/client",
    "generated/client",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"Cars\":{\"dbName\":null,\"fields\":[{\"name\":\"cardId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"carMake\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CarsMakes\",\"relationName\":\"CarsToCarsMakes\",\"relationFromFields\":[\"carsMakesCarMakeId\"],\"relationToFields\":[\"carMakeId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"carModel\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CarsModels\",\"relationName\":\"CarsToCarsModels\",\"relationFromFields\":[\"carsModelsCarModelId\"],\"relationToFields\":[\"carModelId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"carYear\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transmitionTypes\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"driveTrains\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"carDescription\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"carImageUrl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"motorFuelTypes\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"carAcceleration\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"accelarationTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"speedMax\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"averageConsumption\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deviceCapacity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"numberOfDoors\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"carDimensions\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"carTrunkVolume\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"carWeight\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"maximumPower\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"motorWatts\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"carsMakesCarMakeId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"carsModelsCarModelId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CarsMakes\":{\"dbName\":null,\"fields\":[{\"name\":\"carMakeId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Cars\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Cars\",\"relationName\":\"CarsToCarsMakes\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Models\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CarsModels\",\"relationName\":\"CarsMakesToCarsModels\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CarsModels\":{\"dbName\":null,\"fields\":[{\"name\":\"carModelId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"carMakeId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"carMake\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CarsMakes\",\"relationName\":\"CarsMakesToCarsModels\",\"relationFromFields\":[\"carMakeId\"],\"relationToFields\":[\"carMakeId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Cars\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Cars\",\"relationName\":\"CarsToCarsModels\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)



const { warnEnvConflicts } = require('./runtime/library')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "prisma/generated/client/query_engine-windows.dll.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma/generated/client/schema.prisma")
