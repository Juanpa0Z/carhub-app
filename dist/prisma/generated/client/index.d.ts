
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Cars
 * 
 */
export type Cars = $Result.DefaultSelection<Prisma.$CarsPayload>
/**
 * Model CarsMakes
 * 
 */
export type CarsMakes = $Result.DefaultSelection<Prisma.$CarsMakesPayload>
/**
 * Model CarsModels
 * 
 */
export type CarsModels = $Result.DefaultSelection<Prisma.$CarsModelsPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Cars
 * const cars = await prisma.cars.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Cars
   * const cars = await prisma.cars.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.cars`: Exposes CRUD operations for the **Cars** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cars
    * const cars = await prisma.cars.findMany()
    * ```
    */
  get cars(): Prisma.CarsDelegate<ExtArgs>;

  /**
   * `prisma.carsMakes`: Exposes CRUD operations for the **CarsMakes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CarsMakes
    * const carsMakes = await prisma.carsMakes.findMany()
    * ```
    */
  get carsMakes(): Prisma.CarsMakesDelegate<ExtArgs>;

  /**
   * `prisma.carsModels`: Exposes CRUD operations for the **CarsModels** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CarsModels
    * const carsModels = await prisma.carsModels.findMany()
    * ```
    */
  get carsModels(): Prisma.CarsModelsDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.4.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Cars: 'Cars',
    CarsMakes: 'CarsMakes',
    CarsModels: 'CarsModels'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'cars' | 'carsMakes' | 'carsModels'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Cars: {
        payload: Prisma.$CarsPayload<ExtArgs>
        fields: Prisma.CarsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarsPayload>
          }
          findFirst: {
            args: Prisma.CarsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarsPayload>
          }
          findMany: {
            args: Prisma.CarsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarsPayload>[]
          }
          create: {
            args: Prisma.CarsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarsPayload>
          }
          createMany: {
            args: Prisma.CarsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CarsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarsPayload>
          }
          update: {
            args: Prisma.CarsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarsPayload>
          }
          deleteMany: {
            args: Prisma.CarsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CarsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CarsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarsPayload>
          }
          aggregate: {
            args: Prisma.CarsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCars>
          }
          groupBy: {
            args: Prisma.CarsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CarsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CarsCountArgs<ExtArgs>,
            result: $Utils.Optional<CarsCountAggregateOutputType> | number
          }
        }
      }
      CarsMakes: {
        payload: Prisma.$CarsMakesPayload<ExtArgs>
        fields: Prisma.CarsMakesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarsMakesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarsMakesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarsMakesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarsMakesPayload>
          }
          findFirst: {
            args: Prisma.CarsMakesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarsMakesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarsMakesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarsMakesPayload>
          }
          findMany: {
            args: Prisma.CarsMakesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarsMakesPayload>[]
          }
          create: {
            args: Prisma.CarsMakesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarsMakesPayload>
          }
          createMany: {
            args: Prisma.CarsMakesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CarsMakesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarsMakesPayload>
          }
          update: {
            args: Prisma.CarsMakesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarsMakesPayload>
          }
          deleteMany: {
            args: Prisma.CarsMakesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CarsMakesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CarsMakesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarsMakesPayload>
          }
          aggregate: {
            args: Prisma.CarsMakesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCarsMakes>
          }
          groupBy: {
            args: Prisma.CarsMakesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CarsMakesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CarsMakesCountArgs<ExtArgs>,
            result: $Utils.Optional<CarsMakesCountAggregateOutputType> | number
          }
        }
      }
      CarsModels: {
        payload: Prisma.$CarsModelsPayload<ExtArgs>
        fields: Prisma.CarsModelsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarsModelsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarsModelsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarsModelsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarsModelsPayload>
          }
          findFirst: {
            args: Prisma.CarsModelsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarsModelsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarsModelsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarsModelsPayload>
          }
          findMany: {
            args: Prisma.CarsModelsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarsModelsPayload>[]
          }
          create: {
            args: Prisma.CarsModelsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarsModelsPayload>
          }
          createMany: {
            args: Prisma.CarsModelsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CarsModelsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarsModelsPayload>
          }
          update: {
            args: Prisma.CarsModelsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarsModelsPayload>
          }
          deleteMany: {
            args: Prisma.CarsModelsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CarsModelsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CarsModelsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarsModelsPayload>
          }
          aggregate: {
            args: Prisma.CarsModelsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCarsModels>
          }
          groupBy: {
            args: Prisma.CarsModelsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CarsModelsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CarsModelsCountArgs<ExtArgs>,
            result: $Utils.Optional<CarsModelsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CarsMakesCountOutputType
   */

  export type CarsMakesCountOutputType = {
    Cars: number
    Models: number
  }

  export type CarsMakesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Cars?: boolean | CarsMakesCountOutputTypeCountCarsArgs
    Models?: boolean | CarsMakesCountOutputTypeCountModelsArgs
  }

  // Custom InputTypes

  /**
   * CarsMakesCountOutputType without action
   */
  export type CarsMakesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarsMakesCountOutputType
     */
    select?: CarsMakesCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CarsMakesCountOutputType without action
   */
  export type CarsMakesCountOutputTypeCountCarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarsWhereInput
  }


  /**
   * CarsMakesCountOutputType without action
   */
  export type CarsMakesCountOutputTypeCountModelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarsModelsWhereInput
  }



  /**
   * Count Type CarsModelsCountOutputType
   */

  export type CarsModelsCountOutputType = {
    Cars: number
  }

  export type CarsModelsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Cars?: boolean | CarsModelsCountOutputTypeCountCarsArgs
  }

  // Custom InputTypes

  /**
   * CarsModelsCountOutputType without action
   */
  export type CarsModelsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarsModelsCountOutputType
     */
    select?: CarsModelsCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CarsModelsCountOutputType without action
   */
  export type CarsModelsCountOutputTypeCountCarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarsWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Cars
   */

  export type AggregateCars = {
    _count: CarsCountAggregateOutputType | null
    _avg: CarsAvgAggregateOutputType | null
    _sum: CarsSumAggregateOutputType | null
    _min: CarsMinAggregateOutputType | null
    _max: CarsMaxAggregateOutputType | null
  }

  export type CarsAvgAggregateOutputType = {
    carYear: number | null
    carsMakesCarMakeId: number | null
    carsModelsCarModelId: number | null
  }

  export type CarsSumAggregateOutputType = {
    carYear: number | null
    carsMakesCarMakeId: number | null
    carsModelsCarModelId: number | null
  }

  export type CarsMinAggregateOutputType = {
    cardId: string | null
    carYear: number | null
    carDescription: string | null
    carImageUrl: string | null
    carAcceleration: string | null
    accelarationTime: string | null
    speedMax: string | null
    averageConsumption: string | null
    deviceCapacity: string | null
    numberOfDoors: string | null
    carDimensions: string | null
    carTrunkVolume: string | null
    carWeight: string | null
    maximumPower: string | null
    motorWatts: string | null
    carsMakesCarMakeId: number | null
    carsModelsCarModelId: number | null
  }

  export type CarsMaxAggregateOutputType = {
    cardId: string | null
    carYear: number | null
    carDescription: string | null
    carImageUrl: string | null
    carAcceleration: string | null
    accelarationTime: string | null
    speedMax: string | null
    averageConsumption: string | null
    deviceCapacity: string | null
    numberOfDoors: string | null
    carDimensions: string | null
    carTrunkVolume: string | null
    carWeight: string | null
    maximumPower: string | null
    motorWatts: string | null
    carsMakesCarMakeId: number | null
    carsModelsCarModelId: number | null
  }

  export type CarsCountAggregateOutputType = {
    cardId: number
    carYear: number
    transmitionTypes: number
    driveTrains: number
    carDescription: number
    carImageUrl: number
    motorFuelTypes: number
    carAcceleration: number
    accelarationTime: number
    speedMax: number
    averageConsumption: number
    deviceCapacity: number
    numberOfDoors: number
    carDimensions: number
    carTrunkVolume: number
    carWeight: number
    maximumPower: number
    motorWatts: number
    carsMakesCarMakeId: number
    carsModelsCarModelId: number
    _all: number
  }


  export type CarsAvgAggregateInputType = {
    carYear?: true
    carsMakesCarMakeId?: true
    carsModelsCarModelId?: true
  }

  export type CarsSumAggregateInputType = {
    carYear?: true
    carsMakesCarMakeId?: true
    carsModelsCarModelId?: true
  }

  export type CarsMinAggregateInputType = {
    cardId?: true
    carYear?: true
    carDescription?: true
    carImageUrl?: true
    carAcceleration?: true
    accelarationTime?: true
    speedMax?: true
    averageConsumption?: true
    deviceCapacity?: true
    numberOfDoors?: true
    carDimensions?: true
    carTrunkVolume?: true
    carWeight?: true
    maximumPower?: true
    motorWatts?: true
    carsMakesCarMakeId?: true
    carsModelsCarModelId?: true
  }

  export type CarsMaxAggregateInputType = {
    cardId?: true
    carYear?: true
    carDescription?: true
    carImageUrl?: true
    carAcceleration?: true
    accelarationTime?: true
    speedMax?: true
    averageConsumption?: true
    deviceCapacity?: true
    numberOfDoors?: true
    carDimensions?: true
    carTrunkVolume?: true
    carWeight?: true
    maximumPower?: true
    motorWatts?: true
    carsMakesCarMakeId?: true
    carsModelsCarModelId?: true
  }

  export type CarsCountAggregateInputType = {
    cardId?: true
    carYear?: true
    transmitionTypes?: true
    driveTrains?: true
    carDescription?: true
    carImageUrl?: true
    motorFuelTypes?: true
    carAcceleration?: true
    accelarationTime?: true
    speedMax?: true
    averageConsumption?: true
    deviceCapacity?: true
    numberOfDoors?: true
    carDimensions?: true
    carTrunkVolume?: true
    carWeight?: true
    maximumPower?: true
    motorWatts?: true
    carsMakesCarMakeId?: true
    carsModelsCarModelId?: true
    _all?: true
  }

  export type CarsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cars to aggregate.
     */
    where?: CarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarsOrderByWithRelationInput | CarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cars
    **/
    _count?: true | CarsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarsMaxAggregateInputType
  }

  export type GetCarsAggregateType<T extends CarsAggregateArgs> = {
        [P in keyof T & keyof AggregateCars]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCars[P]>
      : GetScalarType<T[P], AggregateCars[P]>
  }




  export type CarsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarsWhereInput
    orderBy?: CarsOrderByWithAggregationInput | CarsOrderByWithAggregationInput[]
    by: CarsScalarFieldEnum[] | CarsScalarFieldEnum
    having?: CarsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarsCountAggregateInputType | true
    _avg?: CarsAvgAggregateInputType
    _sum?: CarsSumAggregateInputType
    _min?: CarsMinAggregateInputType
    _max?: CarsMaxAggregateInputType
  }

  export type CarsGroupByOutputType = {
    cardId: string
    carYear: number
    transmitionTypes: string[]
    driveTrains: string[]
    carDescription: string
    carImageUrl: string
    motorFuelTypes: string[]
    carAcceleration: string
    accelarationTime: string
    speedMax: string
    averageConsumption: string
    deviceCapacity: string
    numberOfDoors: string
    carDimensions: string
    carTrunkVolume: string
    carWeight: string
    maximumPower: string
    motorWatts: string
    carsMakesCarMakeId: number
    carsModelsCarModelId: number
    _count: CarsCountAggregateOutputType | null
    _avg: CarsAvgAggregateOutputType | null
    _sum: CarsSumAggregateOutputType | null
    _min: CarsMinAggregateOutputType | null
    _max: CarsMaxAggregateOutputType | null
  }

  type GetCarsGroupByPayload<T extends CarsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarsGroupByOutputType[P]>
            : GetScalarType<T[P], CarsGroupByOutputType[P]>
        }
      >
    >


  export type CarsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cardId?: boolean
    carYear?: boolean
    transmitionTypes?: boolean
    driveTrains?: boolean
    carDescription?: boolean
    carImageUrl?: boolean
    motorFuelTypes?: boolean
    carAcceleration?: boolean
    accelarationTime?: boolean
    speedMax?: boolean
    averageConsumption?: boolean
    deviceCapacity?: boolean
    numberOfDoors?: boolean
    carDimensions?: boolean
    carTrunkVolume?: boolean
    carWeight?: boolean
    maximumPower?: boolean
    motorWatts?: boolean
    carsMakesCarMakeId?: boolean
    carsModelsCarModelId?: boolean
    carMake?: boolean | Cars$carMakeArgs<ExtArgs>
    carModel?: boolean | Cars$carModelArgs<ExtArgs>
  }, ExtArgs["result"]["cars"]>

  export type CarsSelectScalar = {
    cardId?: boolean
    carYear?: boolean
    transmitionTypes?: boolean
    driveTrains?: boolean
    carDescription?: boolean
    carImageUrl?: boolean
    motorFuelTypes?: boolean
    carAcceleration?: boolean
    accelarationTime?: boolean
    speedMax?: boolean
    averageConsumption?: boolean
    deviceCapacity?: boolean
    numberOfDoors?: boolean
    carDimensions?: boolean
    carTrunkVolume?: boolean
    carWeight?: boolean
    maximumPower?: boolean
    motorWatts?: boolean
    carsMakesCarMakeId?: boolean
    carsModelsCarModelId?: boolean
  }

  export type CarsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carMake?: boolean | Cars$carMakeArgs<ExtArgs>
    carModel?: boolean | Cars$carModelArgs<ExtArgs>
  }


  export type $CarsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cars"
    objects: {
      carMake: Prisma.$CarsMakesPayload<ExtArgs> | null
      carModel: Prisma.$CarsModelsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      cardId: string
      carYear: number
      transmitionTypes: string[]
      driveTrains: string[]
      carDescription: string
      carImageUrl: string
      motorFuelTypes: string[]
      carAcceleration: string
      accelarationTime: string
      speedMax: string
      averageConsumption: string
      deviceCapacity: string
      numberOfDoors: string
      carDimensions: string
      carTrunkVolume: string
      carWeight: string
      maximumPower: string
      motorWatts: string
      carsMakesCarMakeId: number
      carsModelsCarModelId: number
    }, ExtArgs["result"]["cars"]>
    composites: {}
  }


  type CarsGetPayload<S extends boolean | null | undefined | CarsDefaultArgs> = $Result.GetResult<Prisma.$CarsPayload, S>

  type CarsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CarsFindManyArgs, 'select' | 'include'> & {
      select?: CarsCountAggregateInputType | true
    }

  export interface CarsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cars'], meta: { name: 'Cars' } }
    /**
     * Find zero or one Cars that matches the filter.
     * @param {CarsFindUniqueArgs} args - Arguments to find a Cars
     * @example
     * // Get one Cars
     * const cars = await prisma.cars.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CarsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CarsFindUniqueArgs<ExtArgs>>
    ): Prisma__CarsClient<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Cars that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CarsFindUniqueOrThrowArgs} args - Arguments to find a Cars
     * @example
     * // Get one Cars
     * const cars = await prisma.cars.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CarsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CarsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CarsClient<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Cars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarsFindFirstArgs} args - Arguments to find a Cars
     * @example
     * // Get one Cars
     * const cars = await prisma.cars.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CarsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CarsFindFirstArgs<ExtArgs>>
    ): Prisma__CarsClient<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Cars that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarsFindFirstOrThrowArgs} args - Arguments to find a Cars
     * @example
     * // Get one Cars
     * const cars = await prisma.cars.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CarsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CarsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CarsClient<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Cars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cars
     * const cars = await prisma.cars.findMany()
     * 
     * // Get first 10 Cars
     * const cars = await prisma.cars.findMany({ take: 10 })
     * 
     * // Only select the `cardId`
     * const carsWithCardIdOnly = await prisma.cars.findMany({ select: { cardId: true } })
     * 
    **/
    findMany<T extends CarsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CarsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Cars.
     * @param {CarsCreateArgs} args - Arguments to create a Cars.
     * @example
     * // Create one Cars
     * const Cars = await prisma.cars.create({
     *   data: {
     *     // ... data to create a Cars
     *   }
     * })
     * 
    **/
    create<T extends CarsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CarsCreateArgs<ExtArgs>>
    ): Prisma__CarsClient<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Cars.
     *     @param {CarsCreateManyArgs} args - Arguments to create many Cars.
     *     @example
     *     // Create many Cars
     *     const cars = await prisma.cars.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CarsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CarsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cars.
     * @param {CarsDeleteArgs} args - Arguments to delete one Cars.
     * @example
     * // Delete one Cars
     * const Cars = await prisma.cars.delete({
     *   where: {
     *     // ... filter to delete one Cars
     *   }
     * })
     * 
    **/
    delete<T extends CarsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CarsDeleteArgs<ExtArgs>>
    ): Prisma__CarsClient<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Cars.
     * @param {CarsUpdateArgs} args - Arguments to update one Cars.
     * @example
     * // Update one Cars
     * const cars = await prisma.cars.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CarsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CarsUpdateArgs<ExtArgs>>
    ): Prisma__CarsClient<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Cars.
     * @param {CarsDeleteManyArgs} args - Arguments to filter Cars to delete.
     * @example
     * // Delete a few Cars
     * const { count } = await prisma.cars.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CarsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CarsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cars
     * const cars = await prisma.cars.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CarsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CarsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cars.
     * @param {CarsUpsertArgs} args - Arguments to update or create a Cars.
     * @example
     * // Update or create a Cars
     * const cars = await prisma.cars.upsert({
     *   create: {
     *     // ... data to create a Cars
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cars we want to update
     *   }
     * })
    **/
    upsert<T extends CarsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CarsUpsertArgs<ExtArgs>>
    ): Prisma__CarsClient<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarsCountArgs} args - Arguments to filter Cars to count.
     * @example
     * // Count the number of Cars
     * const count = await prisma.cars.count({
     *   where: {
     *     // ... the filter for the Cars we want to count
     *   }
     * })
    **/
    count<T extends CarsCountArgs>(
      args?: Subset<T, CarsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CarsAggregateArgs>(args: Subset<T, CarsAggregateArgs>): Prisma.PrismaPromise<GetCarsAggregateType<T>>

    /**
     * Group by Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CarsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarsGroupByArgs['orderBy'] }
        : { orderBy?: CarsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CarsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cars model
   */
  readonly fields: CarsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cars.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    carMake<T extends Cars$carMakeArgs<ExtArgs> = {}>(args?: Subset<T, Cars$carMakeArgs<ExtArgs>>): Prisma__CarsMakesClient<$Result.GetResult<Prisma.$CarsMakesPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    carModel<T extends Cars$carModelArgs<ExtArgs> = {}>(args?: Subset<T, Cars$carModelArgs<ExtArgs>>): Prisma__CarsModelsClient<$Result.GetResult<Prisma.$CarsModelsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Cars model
   */ 
  interface CarsFieldRefs {
    readonly cardId: FieldRef<"Cars", 'String'>
    readonly carYear: FieldRef<"Cars", 'Int'>
    readonly transmitionTypes: FieldRef<"Cars", 'String[]'>
    readonly driveTrains: FieldRef<"Cars", 'String[]'>
    readonly carDescription: FieldRef<"Cars", 'String'>
    readonly carImageUrl: FieldRef<"Cars", 'String'>
    readonly motorFuelTypes: FieldRef<"Cars", 'String[]'>
    readonly carAcceleration: FieldRef<"Cars", 'String'>
    readonly accelarationTime: FieldRef<"Cars", 'String'>
    readonly speedMax: FieldRef<"Cars", 'String'>
    readonly averageConsumption: FieldRef<"Cars", 'String'>
    readonly deviceCapacity: FieldRef<"Cars", 'String'>
    readonly numberOfDoors: FieldRef<"Cars", 'String'>
    readonly carDimensions: FieldRef<"Cars", 'String'>
    readonly carTrunkVolume: FieldRef<"Cars", 'String'>
    readonly carWeight: FieldRef<"Cars", 'String'>
    readonly maximumPower: FieldRef<"Cars", 'String'>
    readonly motorWatts: FieldRef<"Cars", 'String'>
    readonly carsMakesCarMakeId: FieldRef<"Cars", 'Int'>
    readonly carsModelsCarModelId: FieldRef<"Cars", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Cars findUnique
   */
  export type CarsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarsInclude<ExtArgs> | null
    /**
     * Filter, which Cars to fetch.
     */
    where: CarsWhereUniqueInput
  }


  /**
   * Cars findUniqueOrThrow
   */
  export type CarsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarsInclude<ExtArgs> | null
    /**
     * Filter, which Cars to fetch.
     */
    where: CarsWhereUniqueInput
  }


  /**
   * Cars findFirst
   */
  export type CarsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarsInclude<ExtArgs> | null
    /**
     * Filter, which Cars to fetch.
     */
    where?: CarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarsOrderByWithRelationInput | CarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cars.
     */
    cursor?: CarsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cars.
     */
    distinct?: CarsScalarFieldEnum | CarsScalarFieldEnum[]
  }


  /**
   * Cars findFirstOrThrow
   */
  export type CarsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarsInclude<ExtArgs> | null
    /**
     * Filter, which Cars to fetch.
     */
    where?: CarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarsOrderByWithRelationInput | CarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cars.
     */
    cursor?: CarsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cars.
     */
    distinct?: CarsScalarFieldEnum | CarsScalarFieldEnum[]
  }


  /**
   * Cars findMany
   */
  export type CarsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarsInclude<ExtArgs> | null
    /**
     * Filter, which Cars to fetch.
     */
    where?: CarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarsOrderByWithRelationInput | CarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cars.
     */
    cursor?: CarsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    distinct?: CarsScalarFieldEnum | CarsScalarFieldEnum[]
  }


  /**
   * Cars create
   */
  export type CarsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarsInclude<ExtArgs> | null
    /**
     * The data needed to create a Cars.
     */
    data: XOR<CarsCreateInput, CarsUncheckedCreateInput>
  }


  /**
   * Cars createMany
   */
  export type CarsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cars.
     */
    data: CarsCreateManyInput | CarsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Cars update
   */
  export type CarsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarsInclude<ExtArgs> | null
    /**
     * The data needed to update a Cars.
     */
    data: XOR<CarsUpdateInput, CarsUncheckedUpdateInput>
    /**
     * Choose, which Cars to update.
     */
    where: CarsWhereUniqueInput
  }


  /**
   * Cars updateMany
   */
  export type CarsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cars.
     */
    data: XOR<CarsUpdateManyMutationInput, CarsUncheckedUpdateManyInput>
    /**
     * Filter which Cars to update
     */
    where?: CarsWhereInput
  }


  /**
   * Cars upsert
   */
  export type CarsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarsInclude<ExtArgs> | null
    /**
     * The filter to search for the Cars to update in case it exists.
     */
    where: CarsWhereUniqueInput
    /**
     * In case the Cars found by the `where` argument doesn't exist, create a new Cars with this data.
     */
    create: XOR<CarsCreateInput, CarsUncheckedCreateInput>
    /**
     * In case the Cars was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarsUpdateInput, CarsUncheckedUpdateInput>
  }


  /**
   * Cars delete
   */
  export type CarsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarsInclude<ExtArgs> | null
    /**
     * Filter which Cars to delete.
     */
    where: CarsWhereUniqueInput
  }


  /**
   * Cars deleteMany
   */
  export type CarsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cars to delete
     */
    where?: CarsWhereInput
  }


  /**
   * Cars.carMake
   */
  export type Cars$carMakeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarsMakes
     */
    select?: CarsMakesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarsMakesInclude<ExtArgs> | null
    where?: CarsMakesWhereInput
  }


  /**
   * Cars.carModel
   */
  export type Cars$carModelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarsModels
     */
    select?: CarsModelsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarsModelsInclude<ExtArgs> | null
    where?: CarsModelsWhereInput
  }


  /**
   * Cars without action
   */
  export type CarsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarsInclude<ExtArgs> | null
  }



  /**
   * Model CarsMakes
   */

  export type AggregateCarsMakes = {
    _count: CarsMakesCountAggregateOutputType | null
    _avg: CarsMakesAvgAggregateOutputType | null
    _sum: CarsMakesSumAggregateOutputType | null
    _min: CarsMakesMinAggregateOutputType | null
    _max: CarsMakesMaxAggregateOutputType | null
  }

  export type CarsMakesAvgAggregateOutputType = {
    carMakeId: number | null
  }

  export type CarsMakesSumAggregateOutputType = {
    carMakeId: number | null
  }

  export type CarsMakesMinAggregateOutputType = {
    carMakeId: number | null
    name: string | null
    createdAt: Date | null
  }

  export type CarsMakesMaxAggregateOutputType = {
    carMakeId: number | null
    name: string | null
    createdAt: Date | null
  }

  export type CarsMakesCountAggregateOutputType = {
    carMakeId: number
    name: number
    createdAt: number
    _all: number
  }


  export type CarsMakesAvgAggregateInputType = {
    carMakeId?: true
  }

  export type CarsMakesSumAggregateInputType = {
    carMakeId?: true
  }

  export type CarsMakesMinAggregateInputType = {
    carMakeId?: true
    name?: true
    createdAt?: true
  }

  export type CarsMakesMaxAggregateInputType = {
    carMakeId?: true
    name?: true
    createdAt?: true
  }

  export type CarsMakesCountAggregateInputType = {
    carMakeId?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type CarsMakesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CarsMakes to aggregate.
     */
    where?: CarsMakesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarsMakes to fetch.
     */
    orderBy?: CarsMakesOrderByWithRelationInput | CarsMakesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarsMakesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarsMakes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarsMakes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CarsMakes
    **/
    _count?: true | CarsMakesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarsMakesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarsMakesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarsMakesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarsMakesMaxAggregateInputType
  }

  export type GetCarsMakesAggregateType<T extends CarsMakesAggregateArgs> = {
        [P in keyof T & keyof AggregateCarsMakes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarsMakes[P]>
      : GetScalarType<T[P], AggregateCarsMakes[P]>
  }




  export type CarsMakesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarsMakesWhereInput
    orderBy?: CarsMakesOrderByWithAggregationInput | CarsMakesOrderByWithAggregationInput[]
    by: CarsMakesScalarFieldEnum[] | CarsMakesScalarFieldEnum
    having?: CarsMakesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarsMakesCountAggregateInputType | true
    _avg?: CarsMakesAvgAggregateInputType
    _sum?: CarsMakesSumAggregateInputType
    _min?: CarsMakesMinAggregateInputType
    _max?: CarsMakesMaxAggregateInputType
  }

  export type CarsMakesGroupByOutputType = {
    carMakeId: number
    name: string
    createdAt: Date | null
    _count: CarsMakesCountAggregateOutputType | null
    _avg: CarsMakesAvgAggregateOutputType | null
    _sum: CarsMakesSumAggregateOutputType | null
    _min: CarsMakesMinAggregateOutputType | null
    _max: CarsMakesMaxAggregateOutputType | null
  }

  type GetCarsMakesGroupByPayload<T extends CarsMakesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarsMakesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarsMakesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarsMakesGroupByOutputType[P]>
            : GetScalarType<T[P], CarsMakesGroupByOutputType[P]>
        }
      >
    >


  export type CarsMakesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    carMakeId?: boolean
    name?: boolean
    createdAt?: boolean
    Cars?: boolean | CarsMakes$CarsArgs<ExtArgs>
    Models?: boolean | CarsMakes$ModelsArgs<ExtArgs>
    _count?: boolean | CarsMakesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carsMakes"]>

  export type CarsMakesSelectScalar = {
    carMakeId?: boolean
    name?: boolean
    createdAt?: boolean
  }

  export type CarsMakesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Cars?: boolean | CarsMakes$CarsArgs<ExtArgs>
    Models?: boolean | CarsMakes$ModelsArgs<ExtArgs>
    _count?: boolean | CarsMakesCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CarsMakesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CarsMakes"
    objects: {
      Cars: Prisma.$CarsPayload<ExtArgs>[]
      Models: Prisma.$CarsModelsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      carMakeId: number
      name: string
      createdAt: Date | null
    }, ExtArgs["result"]["carsMakes"]>
    composites: {}
  }


  type CarsMakesGetPayload<S extends boolean | null | undefined | CarsMakesDefaultArgs> = $Result.GetResult<Prisma.$CarsMakesPayload, S>

  type CarsMakesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CarsMakesFindManyArgs, 'select' | 'include'> & {
      select?: CarsMakesCountAggregateInputType | true
    }

  export interface CarsMakesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CarsMakes'], meta: { name: 'CarsMakes' } }
    /**
     * Find zero or one CarsMakes that matches the filter.
     * @param {CarsMakesFindUniqueArgs} args - Arguments to find a CarsMakes
     * @example
     * // Get one CarsMakes
     * const carsMakes = await prisma.carsMakes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CarsMakesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CarsMakesFindUniqueArgs<ExtArgs>>
    ): Prisma__CarsMakesClient<$Result.GetResult<Prisma.$CarsMakesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one CarsMakes that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CarsMakesFindUniqueOrThrowArgs} args - Arguments to find a CarsMakes
     * @example
     * // Get one CarsMakes
     * const carsMakes = await prisma.carsMakes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CarsMakesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CarsMakesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CarsMakesClient<$Result.GetResult<Prisma.$CarsMakesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first CarsMakes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarsMakesFindFirstArgs} args - Arguments to find a CarsMakes
     * @example
     * // Get one CarsMakes
     * const carsMakes = await prisma.carsMakes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CarsMakesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CarsMakesFindFirstArgs<ExtArgs>>
    ): Prisma__CarsMakesClient<$Result.GetResult<Prisma.$CarsMakesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first CarsMakes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarsMakesFindFirstOrThrowArgs} args - Arguments to find a CarsMakes
     * @example
     * // Get one CarsMakes
     * const carsMakes = await prisma.carsMakes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CarsMakesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CarsMakesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CarsMakesClient<$Result.GetResult<Prisma.$CarsMakesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more CarsMakes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarsMakesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CarsMakes
     * const carsMakes = await prisma.carsMakes.findMany()
     * 
     * // Get first 10 CarsMakes
     * const carsMakes = await prisma.carsMakes.findMany({ take: 10 })
     * 
     * // Only select the `carMakeId`
     * const carsMakesWithCarMakeIdOnly = await prisma.carsMakes.findMany({ select: { carMakeId: true } })
     * 
    **/
    findMany<T extends CarsMakesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CarsMakesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarsMakesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a CarsMakes.
     * @param {CarsMakesCreateArgs} args - Arguments to create a CarsMakes.
     * @example
     * // Create one CarsMakes
     * const CarsMakes = await prisma.carsMakes.create({
     *   data: {
     *     // ... data to create a CarsMakes
     *   }
     * })
     * 
    **/
    create<T extends CarsMakesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CarsMakesCreateArgs<ExtArgs>>
    ): Prisma__CarsMakesClient<$Result.GetResult<Prisma.$CarsMakesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many CarsMakes.
     *     @param {CarsMakesCreateManyArgs} args - Arguments to create many CarsMakes.
     *     @example
     *     // Create many CarsMakes
     *     const carsMakes = await prisma.carsMakes.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CarsMakesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CarsMakesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CarsMakes.
     * @param {CarsMakesDeleteArgs} args - Arguments to delete one CarsMakes.
     * @example
     * // Delete one CarsMakes
     * const CarsMakes = await prisma.carsMakes.delete({
     *   where: {
     *     // ... filter to delete one CarsMakes
     *   }
     * })
     * 
    **/
    delete<T extends CarsMakesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CarsMakesDeleteArgs<ExtArgs>>
    ): Prisma__CarsMakesClient<$Result.GetResult<Prisma.$CarsMakesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one CarsMakes.
     * @param {CarsMakesUpdateArgs} args - Arguments to update one CarsMakes.
     * @example
     * // Update one CarsMakes
     * const carsMakes = await prisma.carsMakes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CarsMakesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CarsMakesUpdateArgs<ExtArgs>>
    ): Prisma__CarsMakesClient<$Result.GetResult<Prisma.$CarsMakesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more CarsMakes.
     * @param {CarsMakesDeleteManyArgs} args - Arguments to filter CarsMakes to delete.
     * @example
     * // Delete a few CarsMakes
     * const { count } = await prisma.carsMakes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CarsMakesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CarsMakesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CarsMakes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarsMakesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CarsMakes
     * const carsMakes = await prisma.carsMakes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CarsMakesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CarsMakesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CarsMakes.
     * @param {CarsMakesUpsertArgs} args - Arguments to update or create a CarsMakes.
     * @example
     * // Update or create a CarsMakes
     * const carsMakes = await prisma.carsMakes.upsert({
     *   create: {
     *     // ... data to create a CarsMakes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CarsMakes we want to update
     *   }
     * })
    **/
    upsert<T extends CarsMakesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CarsMakesUpsertArgs<ExtArgs>>
    ): Prisma__CarsMakesClient<$Result.GetResult<Prisma.$CarsMakesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of CarsMakes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarsMakesCountArgs} args - Arguments to filter CarsMakes to count.
     * @example
     * // Count the number of CarsMakes
     * const count = await prisma.carsMakes.count({
     *   where: {
     *     // ... the filter for the CarsMakes we want to count
     *   }
     * })
    **/
    count<T extends CarsMakesCountArgs>(
      args?: Subset<T, CarsMakesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarsMakesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CarsMakes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarsMakesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CarsMakesAggregateArgs>(args: Subset<T, CarsMakesAggregateArgs>): Prisma.PrismaPromise<GetCarsMakesAggregateType<T>>

    /**
     * Group by CarsMakes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarsMakesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CarsMakesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarsMakesGroupByArgs['orderBy'] }
        : { orderBy?: CarsMakesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CarsMakesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarsMakesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CarsMakes model
   */
  readonly fields: CarsMakesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CarsMakes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarsMakesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Cars<T extends CarsMakes$CarsArgs<ExtArgs> = {}>(args?: Subset<T, CarsMakes$CarsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, 'findMany'> | Null>;

    Models<T extends CarsMakes$ModelsArgs<ExtArgs> = {}>(args?: Subset<T, CarsMakes$ModelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarsModelsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the CarsMakes model
   */ 
  interface CarsMakesFieldRefs {
    readonly carMakeId: FieldRef<"CarsMakes", 'Int'>
    readonly name: FieldRef<"CarsMakes", 'String'>
    readonly createdAt: FieldRef<"CarsMakes", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * CarsMakes findUnique
   */
  export type CarsMakesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarsMakes
     */
    select?: CarsMakesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarsMakesInclude<ExtArgs> | null
    /**
     * Filter, which CarsMakes to fetch.
     */
    where: CarsMakesWhereUniqueInput
  }


  /**
   * CarsMakes findUniqueOrThrow
   */
  export type CarsMakesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarsMakes
     */
    select?: CarsMakesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarsMakesInclude<ExtArgs> | null
    /**
     * Filter, which CarsMakes to fetch.
     */
    where: CarsMakesWhereUniqueInput
  }


  /**
   * CarsMakes findFirst
   */
  export type CarsMakesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarsMakes
     */
    select?: CarsMakesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarsMakesInclude<ExtArgs> | null
    /**
     * Filter, which CarsMakes to fetch.
     */
    where?: CarsMakesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarsMakes to fetch.
     */
    orderBy?: CarsMakesOrderByWithRelationInput | CarsMakesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CarsMakes.
     */
    cursor?: CarsMakesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarsMakes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarsMakes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CarsMakes.
     */
    distinct?: CarsMakesScalarFieldEnum | CarsMakesScalarFieldEnum[]
  }


  /**
   * CarsMakes findFirstOrThrow
   */
  export type CarsMakesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarsMakes
     */
    select?: CarsMakesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarsMakesInclude<ExtArgs> | null
    /**
     * Filter, which CarsMakes to fetch.
     */
    where?: CarsMakesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarsMakes to fetch.
     */
    orderBy?: CarsMakesOrderByWithRelationInput | CarsMakesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CarsMakes.
     */
    cursor?: CarsMakesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarsMakes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarsMakes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CarsMakes.
     */
    distinct?: CarsMakesScalarFieldEnum | CarsMakesScalarFieldEnum[]
  }


  /**
   * CarsMakes findMany
   */
  export type CarsMakesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarsMakes
     */
    select?: CarsMakesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarsMakesInclude<ExtArgs> | null
    /**
     * Filter, which CarsMakes to fetch.
     */
    where?: CarsMakesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarsMakes to fetch.
     */
    orderBy?: CarsMakesOrderByWithRelationInput | CarsMakesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CarsMakes.
     */
    cursor?: CarsMakesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarsMakes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarsMakes.
     */
    skip?: number
    distinct?: CarsMakesScalarFieldEnum | CarsMakesScalarFieldEnum[]
  }


  /**
   * CarsMakes create
   */
  export type CarsMakesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarsMakes
     */
    select?: CarsMakesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarsMakesInclude<ExtArgs> | null
    /**
     * The data needed to create a CarsMakes.
     */
    data: XOR<CarsMakesCreateInput, CarsMakesUncheckedCreateInput>
  }


  /**
   * CarsMakes createMany
   */
  export type CarsMakesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CarsMakes.
     */
    data: CarsMakesCreateManyInput | CarsMakesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * CarsMakes update
   */
  export type CarsMakesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarsMakes
     */
    select?: CarsMakesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarsMakesInclude<ExtArgs> | null
    /**
     * The data needed to update a CarsMakes.
     */
    data: XOR<CarsMakesUpdateInput, CarsMakesUncheckedUpdateInput>
    /**
     * Choose, which CarsMakes to update.
     */
    where: CarsMakesWhereUniqueInput
  }


  /**
   * CarsMakes updateMany
   */
  export type CarsMakesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CarsMakes.
     */
    data: XOR<CarsMakesUpdateManyMutationInput, CarsMakesUncheckedUpdateManyInput>
    /**
     * Filter which CarsMakes to update
     */
    where?: CarsMakesWhereInput
  }


  /**
   * CarsMakes upsert
   */
  export type CarsMakesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarsMakes
     */
    select?: CarsMakesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarsMakesInclude<ExtArgs> | null
    /**
     * The filter to search for the CarsMakes to update in case it exists.
     */
    where: CarsMakesWhereUniqueInput
    /**
     * In case the CarsMakes found by the `where` argument doesn't exist, create a new CarsMakes with this data.
     */
    create: XOR<CarsMakesCreateInput, CarsMakesUncheckedCreateInput>
    /**
     * In case the CarsMakes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarsMakesUpdateInput, CarsMakesUncheckedUpdateInput>
  }


  /**
   * CarsMakes delete
   */
  export type CarsMakesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarsMakes
     */
    select?: CarsMakesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarsMakesInclude<ExtArgs> | null
    /**
     * Filter which CarsMakes to delete.
     */
    where: CarsMakesWhereUniqueInput
  }


  /**
   * CarsMakes deleteMany
   */
  export type CarsMakesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CarsMakes to delete
     */
    where?: CarsMakesWhereInput
  }


  /**
   * CarsMakes.Cars
   */
  export type CarsMakes$CarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarsInclude<ExtArgs> | null
    where?: CarsWhereInput
    orderBy?: CarsOrderByWithRelationInput | CarsOrderByWithRelationInput[]
    cursor?: CarsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarsScalarFieldEnum | CarsScalarFieldEnum[]
  }


  /**
   * CarsMakes.Models
   */
  export type CarsMakes$ModelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarsModels
     */
    select?: CarsModelsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarsModelsInclude<ExtArgs> | null
    where?: CarsModelsWhereInput
    orderBy?: CarsModelsOrderByWithRelationInput | CarsModelsOrderByWithRelationInput[]
    cursor?: CarsModelsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarsModelsScalarFieldEnum | CarsModelsScalarFieldEnum[]
  }


  /**
   * CarsMakes without action
   */
  export type CarsMakesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarsMakes
     */
    select?: CarsMakesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarsMakesInclude<ExtArgs> | null
  }



  /**
   * Model CarsModels
   */

  export type AggregateCarsModels = {
    _count: CarsModelsCountAggregateOutputType | null
    _avg: CarsModelsAvgAggregateOutputType | null
    _sum: CarsModelsSumAggregateOutputType | null
    _min: CarsModelsMinAggregateOutputType | null
    _max: CarsModelsMaxAggregateOutputType | null
  }

  export type CarsModelsAvgAggregateOutputType = {
    carModelId: number | null
    carMakeId: number | null
  }

  export type CarsModelsSumAggregateOutputType = {
    carModelId: number | null
    carMakeId: number | null
  }

  export type CarsModelsMinAggregateOutputType = {
    carModelId: number | null
    carMakeId: number | null
    name: string | null
    createdAt: Date | null
  }

  export type CarsModelsMaxAggregateOutputType = {
    carModelId: number | null
    carMakeId: number | null
    name: string | null
    createdAt: Date | null
  }

  export type CarsModelsCountAggregateOutputType = {
    carModelId: number
    carMakeId: number
    name: number
    createdAt: number
    _all: number
  }


  export type CarsModelsAvgAggregateInputType = {
    carModelId?: true
    carMakeId?: true
  }

  export type CarsModelsSumAggregateInputType = {
    carModelId?: true
    carMakeId?: true
  }

  export type CarsModelsMinAggregateInputType = {
    carModelId?: true
    carMakeId?: true
    name?: true
    createdAt?: true
  }

  export type CarsModelsMaxAggregateInputType = {
    carModelId?: true
    carMakeId?: true
    name?: true
    createdAt?: true
  }

  export type CarsModelsCountAggregateInputType = {
    carModelId?: true
    carMakeId?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type CarsModelsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CarsModels to aggregate.
     */
    where?: CarsModelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarsModels to fetch.
     */
    orderBy?: CarsModelsOrderByWithRelationInput | CarsModelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarsModelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarsModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarsModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CarsModels
    **/
    _count?: true | CarsModelsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarsModelsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarsModelsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarsModelsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarsModelsMaxAggregateInputType
  }

  export type GetCarsModelsAggregateType<T extends CarsModelsAggregateArgs> = {
        [P in keyof T & keyof AggregateCarsModels]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarsModels[P]>
      : GetScalarType<T[P], AggregateCarsModels[P]>
  }




  export type CarsModelsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarsModelsWhereInput
    orderBy?: CarsModelsOrderByWithAggregationInput | CarsModelsOrderByWithAggregationInput[]
    by: CarsModelsScalarFieldEnum[] | CarsModelsScalarFieldEnum
    having?: CarsModelsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarsModelsCountAggregateInputType | true
    _avg?: CarsModelsAvgAggregateInputType
    _sum?: CarsModelsSumAggregateInputType
    _min?: CarsModelsMinAggregateInputType
    _max?: CarsModelsMaxAggregateInputType
  }

  export type CarsModelsGroupByOutputType = {
    carModelId: number
    carMakeId: number
    name: string
    createdAt: Date | null
    _count: CarsModelsCountAggregateOutputType | null
    _avg: CarsModelsAvgAggregateOutputType | null
    _sum: CarsModelsSumAggregateOutputType | null
    _min: CarsModelsMinAggregateOutputType | null
    _max: CarsModelsMaxAggregateOutputType | null
  }

  type GetCarsModelsGroupByPayload<T extends CarsModelsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarsModelsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarsModelsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarsModelsGroupByOutputType[P]>
            : GetScalarType<T[P], CarsModelsGroupByOutputType[P]>
        }
      >
    >


  export type CarsModelsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    carModelId?: boolean
    carMakeId?: boolean
    name?: boolean
    createdAt?: boolean
    carMake?: boolean | CarsModels$carMakeArgs<ExtArgs>
    Cars?: boolean | CarsModels$CarsArgs<ExtArgs>
    _count?: boolean | CarsModelsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carsModels"]>

  export type CarsModelsSelectScalar = {
    carModelId?: boolean
    carMakeId?: boolean
    name?: boolean
    createdAt?: boolean
  }

  export type CarsModelsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carMake?: boolean | CarsModels$carMakeArgs<ExtArgs>
    Cars?: boolean | CarsModels$CarsArgs<ExtArgs>
    _count?: boolean | CarsModelsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CarsModelsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CarsModels"
    objects: {
      carMake: Prisma.$CarsMakesPayload<ExtArgs> | null
      Cars: Prisma.$CarsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      carModelId: number
      carMakeId: number
      name: string
      createdAt: Date | null
    }, ExtArgs["result"]["carsModels"]>
    composites: {}
  }


  type CarsModelsGetPayload<S extends boolean | null | undefined | CarsModelsDefaultArgs> = $Result.GetResult<Prisma.$CarsModelsPayload, S>

  type CarsModelsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CarsModelsFindManyArgs, 'select' | 'include'> & {
      select?: CarsModelsCountAggregateInputType | true
    }

  export interface CarsModelsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CarsModels'], meta: { name: 'CarsModels' } }
    /**
     * Find zero or one CarsModels that matches the filter.
     * @param {CarsModelsFindUniqueArgs} args - Arguments to find a CarsModels
     * @example
     * // Get one CarsModels
     * const carsModels = await prisma.carsModels.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CarsModelsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CarsModelsFindUniqueArgs<ExtArgs>>
    ): Prisma__CarsModelsClient<$Result.GetResult<Prisma.$CarsModelsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one CarsModels that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CarsModelsFindUniqueOrThrowArgs} args - Arguments to find a CarsModels
     * @example
     * // Get one CarsModels
     * const carsModels = await prisma.carsModels.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CarsModelsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CarsModelsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CarsModelsClient<$Result.GetResult<Prisma.$CarsModelsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first CarsModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarsModelsFindFirstArgs} args - Arguments to find a CarsModels
     * @example
     * // Get one CarsModels
     * const carsModels = await prisma.carsModels.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CarsModelsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CarsModelsFindFirstArgs<ExtArgs>>
    ): Prisma__CarsModelsClient<$Result.GetResult<Prisma.$CarsModelsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first CarsModels that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarsModelsFindFirstOrThrowArgs} args - Arguments to find a CarsModels
     * @example
     * // Get one CarsModels
     * const carsModels = await prisma.carsModels.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CarsModelsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CarsModelsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CarsModelsClient<$Result.GetResult<Prisma.$CarsModelsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more CarsModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarsModelsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CarsModels
     * const carsModels = await prisma.carsModels.findMany()
     * 
     * // Get first 10 CarsModels
     * const carsModels = await prisma.carsModels.findMany({ take: 10 })
     * 
     * // Only select the `carModelId`
     * const carsModelsWithCarModelIdOnly = await prisma.carsModels.findMany({ select: { carModelId: true } })
     * 
    **/
    findMany<T extends CarsModelsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CarsModelsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarsModelsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a CarsModels.
     * @param {CarsModelsCreateArgs} args - Arguments to create a CarsModels.
     * @example
     * // Create one CarsModels
     * const CarsModels = await prisma.carsModels.create({
     *   data: {
     *     // ... data to create a CarsModels
     *   }
     * })
     * 
    **/
    create<T extends CarsModelsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CarsModelsCreateArgs<ExtArgs>>
    ): Prisma__CarsModelsClient<$Result.GetResult<Prisma.$CarsModelsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many CarsModels.
     *     @param {CarsModelsCreateManyArgs} args - Arguments to create many CarsModels.
     *     @example
     *     // Create many CarsModels
     *     const carsModels = await prisma.carsModels.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CarsModelsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CarsModelsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CarsModels.
     * @param {CarsModelsDeleteArgs} args - Arguments to delete one CarsModels.
     * @example
     * // Delete one CarsModels
     * const CarsModels = await prisma.carsModels.delete({
     *   where: {
     *     // ... filter to delete one CarsModels
     *   }
     * })
     * 
    **/
    delete<T extends CarsModelsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CarsModelsDeleteArgs<ExtArgs>>
    ): Prisma__CarsModelsClient<$Result.GetResult<Prisma.$CarsModelsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one CarsModels.
     * @param {CarsModelsUpdateArgs} args - Arguments to update one CarsModels.
     * @example
     * // Update one CarsModels
     * const carsModels = await prisma.carsModels.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CarsModelsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CarsModelsUpdateArgs<ExtArgs>>
    ): Prisma__CarsModelsClient<$Result.GetResult<Prisma.$CarsModelsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more CarsModels.
     * @param {CarsModelsDeleteManyArgs} args - Arguments to filter CarsModels to delete.
     * @example
     * // Delete a few CarsModels
     * const { count } = await prisma.carsModels.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CarsModelsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CarsModelsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CarsModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarsModelsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CarsModels
     * const carsModels = await prisma.carsModels.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CarsModelsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CarsModelsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CarsModels.
     * @param {CarsModelsUpsertArgs} args - Arguments to update or create a CarsModels.
     * @example
     * // Update or create a CarsModels
     * const carsModels = await prisma.carsModels.upsert({
     *   create: {
     *     // ... data to create a CarsModels
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CarsModels we want to update
     *   }
     * })
    **/
    upsert<T extends CarsModelsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CarsModelsUpsertArgs<ExtArgs>>
    ): Prisma__CarsModelsClient<$Result.GetResult<Prisma.$CarsModelsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of CarsModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarsModelsCountArgs} args - Arguments to filter CarsModels to count.
     * @example
     * // Count the number of CarsModels
     * const count = await prisma.carsModels.count({
     *   where: {
     *     // ... the filter for the CarsModels we want to count
     *   }
     * })
    **/
    count<T extends CarsModelsCountArgs>(
      args?: Subset<T, CarsModelsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarsModelsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CarsModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarsModelsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CarsModelsAggregateArgs>(args: Subset<T, CarsModelsAggregateArgs>): Prisma.PrismaPromise<GetCarsModelsAggregateType<T>>

    /**
     * Group by CarsModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarsModelsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CarsModelsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarsModelsGroupByArgs['orderBy'] }
        : { orderBy?: CarsModelsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CarsModelsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarsModelsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CarsModels model
   */
  readonly fields: CarsModelsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CarsModels.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarsModelsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    carMake<T extends CarsModels$carMakeArgs<ExtArgs> = {}>(args?: Subset<T, CarsModels$carMakeArgs<ExtArgs>>): Prisma__CarsMakesClient<$Result.GetResult<Prisma.$CarsMakesPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    Cars<T extends CarsModels$CarsArgs<ExtArgs> = {}>(args?: Subset<T, CarsModels$CarsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the CarsModels model
   */ 
  interface CarsModelsFieldRefs {
    readonly carModelId: FieldRef<"CarsModels", 'Int'>
    readonly carMakeId: FieldRef<"CarsModels", 'Int'>
    readonly name: FieldRef<"CarsModels", 'String'>
    readonly createdAt: FieldRef<"CarsModels", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * CarsModels findUnique
   */
  export type CarsModelsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarsModels
     */
    select?: CarsModelsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarsModelsInclude<ExtArgs> | null
    /**
     * Filter, which CarsModels to fetch.
     */
    where: CarsModelsWhereUniqueInput
  }


  /**
   * CarsModels findUniqueOrThrow
   */
  export type CarsModelsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarsModels
     */
    select?: CarsModelsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarsModelsInclude<ExtArgs> | null
    /**
     * Filter, which CarsModels to fetch.
     */
    where: CarsModelsWhereUniqueInput
  }


  /**
   * CarsModels findFirst
   */
  export type CarsModelsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarsModels
     */
    select?: CarsModelsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarsModelsInclude<ExtArgs> | null
    /**
     * Filter, which CarsModels to fetch.
     */
    where?: CarsModelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarsModels to fetch.
     */
    orderBy?: CarsModelsOrderByWithRelationInput | CarsModelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CarsModels.
     */
    cursor?: CarsModelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarsModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarsModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CarsModels.
     */
    distinct?: CarsModelsScalarFieldEnum | CarsModelsScalarFieldEnum[]
  }


  /**
   * CarsModels findFirstOrThrow
   */
  export type CarsModelsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarsModels
     */
    select?: CarsModelsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarsModelsInclude<ExtArgs> | null
    /**
     * Filter, which CarsModels to fetch.
     */
    where?: CarsModelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarsModels to fetch.
     */
    orderBy?: CarsModelsOrderByWithRelationInput | CarsModelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CarsModels.
     */
    cursor?: CarsModelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarsModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarsModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CarsModels.
     */
    distinct?: CarsModelsScalarFieldEnum | CarsModelsScalarFieldEnum[]
  }


  /**
   * CarsModels findMany
   */
  export type CarsModelsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarsModels
     */
    select?: CarsModelsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarsModelsInclude<ExtArgs> | null
    /**
     * Filter, which CarsModels to fetch.
     */
    where?: CarsModelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarsModels to fetch.
     */
    orderBy?: CarsModelsOrderByWithRelationInput | CarsModelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CarsModels.
     */
    cursor?: CarsModelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarsModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarsModels.
     */
    skip?: number
    distinct?: CarsModelsScalarFieldEnum | CarsModelsScalarFieldEnum[]
  }


  /**
   * CarsModels create
   */
  export type CarsModelsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarsModels
     */
    select?: CarsModelsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarsModelsInclude<ExtArgs> | null
    /**
     * The data needed to create a CarsModels.
     */
    data: XOR<CarsModelsCreateInput, CarsModelsUncheckedCreateInput>
  }


  /**
   * CarsModels createMany
   */
  export type CarsModelsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CarsModels.
     */
    data: CarsModelsCreateManyInput | CarsModelsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * CarsModels update
   */
  export type CarsModelsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarsModels
     */
    select?: CarsModelsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarsModelsInclude<ExtArgs> | null
    /**
     * The data needed to update a CarsModels.
     */
    data: XOR<CarsModelsUpdateInput, CarsModelsUncheckedUpdateInput>
    /**
     * Choose, which CarsModels to update.
     */
    where: CarsModelsWhereUniqueInput
  }


  /**
   * CarsModels updateMany
   */
  export type CarsModelsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CarsModels.
     */
    data: XOR<CarsModelsUpdateManyMutationInput, CarsModelsUncheckedUpdateManyInput>
    /**
     * Filter which CarsModels to update
     */
    where?: CarsModelsWhereInput
  }


  /**
   * CarsModels upsert
   */
  export type CarsModelsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarsModels
     */
    select?: CarsModelsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarsModelsInclude<ExtArgs> | null
    /**
     * The filter to search for the CarsModels to update in case it exists.
     */
    where: CarsModelsWhereUniqueInput
    /**
     * In case the CarsModels found by the `where` argument doesn't exist, create a new CarsModels with this data.
     */
    create: XOR<CarsModelsCreateInput, CarsModelsUncheckedCreateInput>
    /**
     * In case the CarsModels was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarsModelsUpdateInput, CarsModelsUncheckedUpdateInput>
  }


  /**
   * CarsModels delete
   */
  export type CarsModelsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarsModels
     */
    select?: CarsModelsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarsModelsInclude<ExtArgs> | null
    /**
     * Filter which CarsModels to delete.
     */
    where: CarsModelsWhereUniqueInput
  }


  /**
   * CarsModels deleteMany
   */
  export type CarsModelsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CarsModels to delete
     */
    where?: CarsModelsWhereInput
  }


  /**
   * CarsModels.carMake
   */
  export type CarsModels$carMakeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarsMakes
     */
    select?: CarsMakesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarsMakesInclude<ExtArgs> | null
    where?: CarsMakesWhereInput
  }


  /**
   * CarsModels.Cars
   */
  export type CarsModels$CarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarsInclude<ExtArgs> | null
    where?: CarsWhereInput
    orderBy?: CarsOrderByWithRelationInput | CarsOrderByWithRelationInput[]
    cursor?: CarsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarsScalarFieldEnum | CarsScalarFieldEnum[]
  }


  /**
   * CarsModels without action
   */
  export type CarsModelsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarsModels
     */
    select?: CarsModelsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarsModelsInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CarsScalarFieldEnum: {
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

  export type CarsScalarFieldEnum = (typeof CarsScalarFieldEnum)[keyof typeof CarsScalarFieldEnum]


  export const CarsMakesScalarFieldEnum: {
    carMakeId: 'carMakeId',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type CarsMakesScalarFieldEnum = (typeof CarsMakesScalarFieldEnum)[keyof typeof CarsMakesScalarFieldEnum]


  export const CarsModelsScalarFieldEnum: {
    carModelId: 'carModelId',
    carMakeId: 'carMakeId',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type CarsModelsScalarFieldEnum = (typeof CarsModelsScalarFieldEnum)[keyof typeof CarsModelsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CarsWhereInput = {
    AND?: CarsWhereInput | CarsWhereInput[]
    OR?: CarsWhereInput[]
    NOT?: CarsWhereInput | CarsWhereInput[]
    cardId?: StringFilter<"Cars"> | string
    carYear?: IntFilter<"Cars"> | number
    transmitionTypes?: StringNullableListFilter<"Cars">
    driveTrains?: StringNullableListFilter<"Cars">
    carDescription?: StringFilter<"Cars"> | string
    carImageUrl?: StringFilter<"Cars"> | string
    motorFuelTypes?: StringNullableListFilter<"Cars">
    carAcceleration?: StringFilter<"Cars"> | string
    accelarationTime?: StringFilter<"Cars"> | string
    speedMax?: StringFilter<"Cars"> | string
    averageConsumption?: StringFilter<"Cars"> | string
    deviceCapacity?: StringFilter<"Cars"> | string
    numberOfDoors?: StringFilter<"Cars"> | string
    carDimensions?: StringFilter<"Cars"> | string
    carTrunkVolume?: StringFilter<"Cars"> | string
    carWeight?: StringFilter<"Cars"> | string
    maximumPower?: StringFilter<"Cars"> | string
    motorWatts?: StringFilter<"Cars"> | string
    carsMakesCarMakeId?: IntFilter<"Cars"> | number
    carsModelsCarModelId?: IntFilter<"Cars"> | number
    carMake?: XOR<CarsMakesNullableRelationFilter, CarsMakesWhereInput> | null
    carModel?: XOR<CarsModelsNullableRelationFilter, CarsModelsWhereInput> | null
  }

  export type CarsOrderByWithRelationInput = {
    cardId?: SortOrder
    carYear?: SortOrder
    transmitionTypes?: SortOrder
    driveTrains?: SortOrder
    carDescription?: SortOrder
    carImageUrl?: SortOrder
    motorFuelTypes?: SortOrder
    carAcceleration?: SortOrder
    accelarationTime?: SortOrder
    speedMax?: SortOrder
    averageConsumption?: SortOrder
    deviceCapacity?: SortOrder
    numberOfDoors?: SortOrder
    carDimensions?: SortOrder
    carTrunkVolume?: SortOrder
    carWeight?: SortOrder
    maximumPower?: SortOrder
    motorWatts?: SortOrder
    carsMakesCarMakeId?: SortOrder
    carsModelsCarModelId?: SortOrder
    carMake?: CarsMakesOrderByWithRelationInput
    carModel?: CarsModelsOrderByWithRelationInput
  }

  export type CarsWhereUniqueInput = Prisma.AtLeast<{
    cardId?: string
    AND?: CarsWhereInput | CarsWhereInput[]
    OR?: CarsWhereInput[]
    NOT?: CarsWhereInput | CarsWhereInput[]
    carYear?: IntFilter<"Cars"> | number
    transmitionTypes?: StringNullableListFilter<"Cars">
    driveTrains?: StringNullableListFilter<"Cars">
    carDescription?: StringFilter<"Cars"> | string
    carImageUrl?: StringFilter<"Cars"> | string
    motorFuelTypes?: StringNullableListFilter<"Cars">
    carAcceleration?: StringFilter<"Cars"> | string
    accelarationTime?: StringFilter<"Cars"> | string
    speedMax?: StringFilter<"Cars"> | string
    averageConsumption?: StringFilter<"Cars"> | string
    deviceCapacity?: StringFilter<"Cars"> | string
    numberOfDoors?: StringFilter<"Cars"> | string
    carDimensions?: StringFilter<"Cars"> | string
    carTrunkVolume?: StringFilter<"Cars"> | string
    carWeight?: StringFilter<"Cars"> | string
    maximumPower?: StringFilter<"Cars"> | string
    motorWatts?: StringFilter<"Cars"> | string
    carsMakesCarMakeId?: IntFilter<"Cars"> | number
    carsModelsCarModelId?: IntFilter<"Cars"> | number
    carMake?: XOR<CarsMakesNullableRelationFilter, CarsMakesWhereInput> | null
    carModel?: XOR<CarsModelsNullableRelationFilter, CarsModelsWhereInput> | null
  }, "cardId" | "cardId">

  export type CarsOrderByWithAggregationInput = {
    cardId?: SortOrder
    carYear?: SortOrder
    transmitionTypes?: SortOrder
    driveTrains?: SortOrder
    carDescription?: SortOrder
    carImageUrl?: SortOrder
    motorFuelTypes?: SortOrder
    carAcceleration?: SortOrder
    accelarationTime?: SortOrder
    speedMax?: SortOrder
    averageConsumption?: SortOrder
    deviceCapacity?: SortOrder
    numberOfDoors?: SortOrder
    carDimensions?: SortOrder
    carTrunkVolume?: SortOrder
    carWeight?: SortOrder
    maximumPower?: SortOrder
    motorWatts?: SortOrder
    carsMakesCarMakeId?: SortOrder
    carsModelsCarModelId?: SortOrder
    _count?: CarsCountOrderByAggregateInput
    _avg?: CarsAvgOrderByAggregateInput
    _max?: CarsMaxOrderByAggregateInput
    _min?: CarsMinOrderByAggregateInput
    _sum?: CarsSumOrderByAggregateInput
  }

  export type CarsScalarWhereWithAggregatesInput = {
    AND?: CarsScalarWhereWithAggregatesInput | CarsScalarWhereWithAggregatesInput[]
    OR?: CarsScalarWhereWithAggregatesInput[]
    NOT?: CarsScalarWhereWithAggregatesInput | CarsScalarWhereWithAggregatesInput[]
    cardId?: StringWithAggregatesFilter<"Cars"> | string
    carYear?: IntWithAggregatesFilter<"Cars"> | number
    transmitionTypes?: StringNullableListFilter<"Cars">
    driveTrains?: StringNullableListFilter<"Cars">
    carDescription?: StringWithAggregatesFilter<"Cars"> | string
    carImageUrl?: StringWithAggregatesFilter<"Cars"> | string
    motorFuelTypes?: StringNullableListFilter<"Cars">
    carAcceleration?: StringWithAggregatesFilter<"Cars"> | string
    accelarationTime?: StringWithAggregatesFilter<"Cars"> | string
    speedMax?: StringWithAggregatesFilter<"Cars"> | string
    averageConsumption?: StringWithAggregatesFilter<"Cars"> | string
    deviceCapacity?: StringWithAggregatesFilter<"Cars"> | string
    numberOfDoors?: StringWithAggregatesFilter<"Cars"> | string
    carDimensions?: StringWithAggregatesFilter<"Cars"> | string
    carTrunkVolume?: StringWithAggregatesFilter<"Cars"> | string
    carWeight?: StringWithAggregatesFilter<"Cars"> | string
    maximumPower?: StringWithAggregatesFilter<"Cars"> | string
    motorWatts?: StringWithAggregatesFilter<"Cars"> | string
    carsMakesCarMakeId?: IntWithAggregatesFilter<"Cars"> | number
    carsModelsCarModelId?: IntWithAggregatesFilter<"Cars"> | number
  }

  export type CarsMakesWhereInput = {
    AND?: CarsMakesWhereInput | CarsMakesWhereInput[]
    OR?: CarsMakesWhereInput[]
    NOT?: CarsMakesWhereInput | CarsMakesWhereInput[]
    carMakeId?: IntFilter<"CarsMakes"> | number
    name?: StringFilter<"CarsMakes"> | string
    createdAt?: DateTimeNullableFilter<"CarsMakes"> | Date | string | null
    Cars?: CarsListRelationFilter
    Models?: CarsModelsListRelationFilter
  }

  export type CarsMakesOrderByWithRelationInput = {
    carMakeId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    Cars?: CarsOrderByRelationAggregateInput
    Models?: CarsModelsOrderByRelationAggregateInput
  }

  export type CarsMakesWhereUniqueInput = Prisma.AtLeast<{
    carMakeId?: number
    AND?: CarsMakesWhereInput | CarsMakesWhereInput[]
    OR?: CarsMakesWhereInput[]
    NOT?: CarsMakesWhereInput | CarsMakesWhereInput[]
    name?: StringFilter<"CarsMakes"> | string
    createdAt?: DateTimeNullableFilter<"CarsMakes"> | Date | string | null
    Cars?: CarsListRelationFilter
    Models?: CarsModelsListRelationFilter
  }, "carMakeId" | "carMakeId">

  export type CarsMakesOrderByWithAggregationInput = {
    carMakeId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    _count?: CarsMakesCountOrderByAggregateInput
    _avg?: CarsMakesAvgOrderByAggregateInput
    _max?: CarsMakesMaxOrderByAggregateInput
    _min?: CarsMakesMinOrderByAggregateInput
    _sum?: CarsMakesSumOrderByAggregateInput
  }

  export type CarsMakesScalarWhereWithAggregatesInput = {
    AND?: CarsMakesScalarWhereWithAggregatesInput | CarsMakesScalarWhereWithAggregatesInput[]
    OR?: CarsMakesScalarWhereWithAggregatesInput[]
    NOT?: CarsMakesScalarWhereWithAggregatesInput | CarsMakesScalarWhereWithAggregatesInput[]
    carMakeId?: IntWithAggregatesFilter<"CarsMakes"> | number
    name?: StringWithAggregatesFilter<"CarsMakes"> | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"CarsMakes"> | Date | string | null
  }

  export type CarsModelsWhereInput = {
    AND?: CarsModelsWhereInput | CarsModelsWhereInput[]
    OR?: CarsModelsWhereInput[]
    NOT?: CarsModelsWhereInput | CarsModelsWhereInput[]
    carModelId?: IntFilter<"CarsModels"> | number
    carMakeId?: IntFilter<"CarsModels"> | number
    name?: StringFilter<"CarsModels"> | string
    createdAt?: DateTimeNullableFilter<"CarsModels"> | Date | string | null
    carMake?: XOR<CarsMakesNullableRelationFilter, CarsMakesWhereInput> | null
    Cars?: CarsListRelationFilter
  }

  export type CarsModelsOrderByWithRelationInput = {
    carModelId?: SortOrder
    carMakeId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    carMake?: CarsMakesOrderByWithRelationInput
    Cars?: CarsOrderByRelationAggregateInput
  }

  export type CarsModelsWhereUniqueInput = Prisma.AtLeast<{
    carModelId?: number
    AND?: CarsModelsWhereInput | CarsModelsWhereInput[]
    OR?: CarsModelsWhereInput[]
    NOT?: CarsModelsWhereInput | CarsModelsWhereInput[]
    carMakeId?: IntFilter<"CarsModels"> | number
    name?: StringFilter<"CarsModels"> | string
    createdAt?: DateTimeNullableFilter<"CarsModels"> | Date | string | null
    carMake?: XOR<CarsMakesNullableRelationFilter, CarsMakesWhereInput> | null
    Cars?: CarsListRelationFilter
  }, "carModelId" | "carModelId">

  export type CarsModelsOrderByWithAggregationInput = {
    carModelId?: SortOrder
    carMakeId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    _count?: CarsModelsCountOrderByAggregateInput
    _avg?: CarsModelsAvgOrderByAggregateInput
    _max?: CarsModelsMaxOrderByAggregateInput
    _min?: CarsModelsMinOrderByAggregateInput
    _sum?: CarsModelsSumOrderByAggregateInput
  }

  export type CarsModelsScalarWhereWithAggregatesInput = {
    AND?: CarsModelsScalarWhereWithAggregatesInput | CarsModelsScalarWhereWithAggregatesInput[]
    OR?: CarsModelsScalarWhereWithAggregatesInput[]
    NOT?: CarsModelsScalarWhereWithAggregatesInput | CarsModelsScalarWhereWithAggregatesInput[]
    carModelId?: IntWithAggregatesFilter<"CarsModels"> | number
    carMakeId?: IntWithAggregatesFilter<"CarsModels"> | number
    name?: StringWithAggregatesFilter<"CarsModels"> | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"CarsModels"> | Date | string | null
  }

  export type CarsCreateInput = {
    cardId?: string
    carYear: number
    transmitionTypes?: CarsCreatetransmitionTypesInput | string[]
    driveTrains?: CarsCreatedriveTrainsInput | string[]
    carDescription: string
    carImageUrl: string
    motorFuelTypes?: CarsCreatemotorFuelTypesInput | string[]
    carAcceleration: string
    accelarationTime: string
    speedMax: string
    averageConsumption: string
    deviceCapacity: string
    numberOfDoors: string
    carDimensions: string
    carTrunkVolume: string
    carWeight: string
    maximumPower: string
    motorWatts: string
    carMake?: CarsMakesCreateNestedOneWithoutCarsInput
    carModel?: CarsModelsCreateNestedOneWithoutCarsInput
  }

  export type CarsUncheckedCreateInput = {
    cardId?: string
    carYear: number
    transmitionTypes?: CarsCreatetransmitionTypesInput | string[]
    driveTrains?: CarsCreatedriveTrainsInput | string[]
    carDescription: string
    carImageUrl: string
    motorFuelTypes?: CarsCreatemotorFuelTypesInput | string[]
    carAcceleration: string
    accelarationTime: string
    speedMax: string
    averageConsumption: string
    deviceCapacity: string
    numberOfDoors: string
    carDimensions: string
    carTrunkVolume: string
    carWeight: string
    maximumPower: string
    motorWatts: string
    carsMakesCarMakeId: number
    carsModelsCarModelId: number
  }

  export type CarsUpdateInput = {
    cardId?: StringFieldUpdateOperationsInput | string
    carYear?: IntFieldUpdateOperationsInput | number
    transmitionTypes?: CarsUpdatetransmitionTypesInput | string[]
    driveTrains?: CarsUpdatedriveTrainsInput | string[]
    carDescription?: StringFieldUpdateOperationsInput | string
    carImageUrl?: StringFieldUpdateOperationsInput | string
    motorFuelTypes?: CarsUpdatemotorFuelTypesInput | string[]
    carAcceleration?: StringFieldUpdateOperationsInput | string
    accelarationTime?: StringFieldUpdateOperationsInput | string
    speedMax?: StringFieldUpdateOperationsInput | string
    averageConsumption?: StringFieldUpdateOperationsInput | string
    deviceCapacity?: StringFieldUpdateOperationsInput | string
    numberOfDoors?: StringFieldUpdateOperationsInput | string
    carDimensions?: StringFieldUpdateOperationsInput | string
    carTrunkVolume?: StringFieldUpdateOperationsInput | string
    carWeight?: StringFieldUpdateOperationsInput | string
    maximumPower?: StringFieldUpdateOperationsInput | string
    motorWatts?: StringFieldUpdateOperationsInput | string
    carMake?: CarsMakesUpdateOneWithoutCarsNestedInput
    carModel?: CarsModelsUpdateOneWithoutCarsNestedInput
  }

  export type CarsUncheckedUpdateInput = {
    cardId?: StringFieldUpdateOperationsInput | string
    carYear?: IntFieldUpdateOperationsInput | number
    transmitionTypes?: CarsUpdatetransmitionTypesInput | string[]
    driveTrains?: CarsUpdatedriveTrainsInput | string[]
    carDescription?: StringFieldUpdateOperationsInput | string
    carImageUrl?: StringFieldUpdateOperationsInput | string
    motorFuelTypes?: CarsUpdatemotorFuelTypesInput | string[]
    carAcceleration?: StringFieldUpdateOperationsInput | string
    accelarationTime?: StringFieldUpdateOperationsInput | string
    speedMax?: StringFieldUpdateOperationsInput | string
    averageConsumption?: StringFieldUpdateOperationsInput | string
    deviceCapacity?: StringFieldUpdateOperationsInput | string
    numberOfDoors?: StringFieldUpdateOperationsInput | string
    carDimensions?: StringFieldUpdateOperationsInput | string
    carTrunkVolume?: StringFieldUpdateOperationsInput | string
    carWeight?: StringFieldUpdateOperationsInput | string
    maximumPower?: StringFieldUpdateOperationsInput | string
    motorWatts?: StringFieldUpdateOperationsInput | string
    carsMakesCarMakeId?: IntFieldUpdateOperationsInput | number
    carsModelsCarModelId?: IntFieldUpdateOperationsInput | number
  }

  export type CarsCreateManyInput = {
    cardId?: string
    carYear: number
    transmitionTypes?: CarsCreatetransmitionTypesInput | string[]
    driveTrains?: CarsCreatedriveTrainsInput | string[]
    carDescription: string
    carImageUrl: string
    motorFuelTypes?: CarsCreatemotorFuelTypesInput | string[]
    carAcceleration: string
    accelarationTime: string
    speedMax: string
    averageConsumption: string
    deviceCapacity: string
    numberOfDoors: string
    carDimensions: string
    carTrunkVolume: string
    carWeight: string
    maximumPower: string
    motorWatts: string
    carsMakesCarMakeId: number
    carsModelsCarModelId: number
  }

  export type CarsUpdateManyMutationInput = {
    cardId?: StringFieldUpdateOperationsInput | string
    carYear?: IntFieldUpdateOperationsInput | number
    transmitionTypes?: CarsUpdatetransmitionTypesInput | string[]
    driveTrains?: CarsUpdatedriveTrainsInput | string[]
    carDescription?: StringFieldUpdateOperationsInput | string
    carImageUrl?: StringFieldUpdateOperationsInput | string
    motorFuelTypes?: CarsUpdatemotorFuelTypesInput | string[]
    carAcceleration?: StringFieldUpdateOperationsInput | string
    accelarationTime?: StringFieldUpdateOperationsInput | string
    speedMax?: StringFieldUpdateOperationsInput | string
    averageConsumption?: StringFieldUpdateOperationsInput | string
    deviceCapacity?: StringFieldUpdateOperationsInput | string
    numberOfDoors?: StringFieldUpdateOperationsInput | string
    carDimensions?: StringFieldUpdateOperationsInput | string
    carTrunkVolume?: StringFieldUpdateOperationsInput | string
    carWeight?: StringFieldUpdateOperationsInput | string
    maximumPower?: StringFieldUpdateOperationsInput | string
    motorWatts?: StringFieldUpdateOperationsInput | string
  }

  export type CarsUncheckedUpdateManyInput = {
    cardId?: StringFieldUpdateOperationsInput | string
    carYear?: IntFieldUpdateOperationsInput | number
    transmitionTypes?: CarsUpdatetransmitionTypesInput | string[]
    driveTrains?: CarsUpdatedriveTrainsInput | string[]
    carDescription?: StringFieldUpdateOperationsInput | string
    carImageUrl?: StringFieldUpdateOperationsInput | string
    motorFuelTypes?: CarsUpdatemotorFuelTypesInput | string[]
    carAcceleration?: StringFieldUpdateOperationsInput | string
    accelarationTime?: StringFieldUpdateOperationsInput | string
    speedMax?: StringFieldUpdateOperationsInput | string
    averageConsumption?: StringFieldUpdateOperationsInput | string
    deviceCapacity?: StringFieldUpdateOperationsInput | string
    numberOfDoors?: StringFieldUpdateOperationsInput | string
    carDimensions?: StringFieldUpdateOperationsInput | string
    carTrunkVolume?: StringFieldUpdateOperationsInput | string
    carWeight?: StringFieldUpdateOperationsInput | string
    maximumPower?: StringFieldUpdateOperationsInput | string
    motorWatts?: StringFieldUpdateOperationsInput | string
    carsMakesCarMakeId?: IntFieldUpdateOperationsInput | number
    carsModelsCarModelId?: IntFieldUpdateOperationsInput | number
  }

  export type CarsMakesCreateInput = {
    name: string
    createdAt?: Date | string | null
    Cars?: CarsCreateNestedManyWithoutCarMakeInput
    Models?: CarsModelsCreateNestedManyWithoutCarMakeInput
  }

  export type CarsMakesUncheckedCreateInput = {
    carMakeId?: number
    name: string
    createdAt?: Date | string | null
    Cars?: CarsUncheckedCreateNestedManyWithoutCarMakeInput
    Models?: CarsModelsUncheckedCreateNestedManyWithoutCarMakeInput
  }

  export type CarsMakesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Cars?: CarsUpdateManyWithoutCarMakeNestedInput
    Models?: CarsModelsUpdateManyWithoutCarMakeNestedInput
  }

  export type CarsMakesUncheckedUpdateInput = {
    carMakeId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Cars?: CarsUncheckedUpdateManyWithoutCarMakeNestedInput
    Models?: CarsModelsUncheckedUpdateManyWithoutCarMakeNestedInput
  }

  export type CarsMakesCreateManyInput = {
    carMakeId?: number
    name: string
    createdAt?: Date | string | null
  }

  export type CarsMakesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CarsMakesUncheckedUpdateManyInput = {
    carMakeId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CarsModelsCreateInput = {
    name: string
    createdAt?: Date | string | null
    carMake?: CarsMakesCreateNestedOneWithoutModelsInput
    Cars?: CarsCreateNestedManyWithoutCarModelInput
  }

  export type CarsModelsUncheckedCreateInput = {
    carModelId?: number
    carMakeId: number
    name: string
    createdAt?: Date | string | null
    Cars?: CarsUncheckedCreateNestedManyWithoutCarModelInput
  }

  export type CarsModelsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    carMake?: CarsMakesUpdateOneWithoutModelsNestedInput
    Cars?: CarsUpdateManyWithoutCarModelNestedInput
  }

  export type CarsModelsUncheckedUpdateInput = {
    carModelId?: IntFieldUpdateOperationsInput | number
    carMakeId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Cars?: CarsUncheckedUpdateManyWithoutCarModelNestedInput
  }

  export type CarsModelsCreateManyInput = {
    carModelId?: number
    carMakeId: number
    name: string
    createdAt?: Date | string | null
  }

  export type CarsModelsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CarsModelsUncheckedUpdateManyInput = {
    carModelId?: IntFieldUpdateOperationsInput | number
    carMakeId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type CarsMakesNullableRelationFilter = {
    is?: CarsMakesWhereInput | null
    isNot?: CarsMakesWhereInput | null
  }

  export type CarsModelsNullableRelationFilter = {
    is?: CarsModelsWhereInput | null
    isNot?: CarsModelsWhereInput | null
  }

  export type CarsCountOrderByAggregateInput = {
    cardId?: SortOrder
    carYear?: SortOrder
    transmitionTypes?: SortOrder
    driveTrains?: SortOrder
    carDescription?: SortOrder
    carImageUrl?: SortOrder
    motorFuelTypes?: SortOrder
    carAcceleration?: SortOrder
    accelarationTime?: SortOrder
    speedMax?: SortOrder
    averageConsumption?: SortOrder
    deviceCapacity?: SortOrder
    numberOfDoors?: SortOrder
    carDimensions?: SortOrder
    carTrunkVolume?: SortOrder
    carWeight?: SortOrder
    maximumPower?: SortOrder
    motorWatts?: SortOrder
    carsMakesCarMakeId?: SortOrder
    carsModelsCarModelId?: SortOrder
  }

  export type CarsAvgOrderByAggregateInput = {
    carYear?: SortOrder
    carsMakesCarMakeId?: SortOrder
    carsModelsCarModelId?: SortOrder
  }

  export type CarsMaxOrderByAggregateInput = {
    cardId?: SortOrder
    carYear?: SortOrder
    carDescription?: SortOrder
    carImageUrl?: SortOrder
    carAcceleration?: SortOrder
    accelarationTime?: SortOrder
    speedMax?: SortOrder
    averageConsumption?: SortOrder
    deviceCapacity?: SortOrder
    numberOfDoors?: SortOrder
    carDimensions?: SortOrder
    carTrunkVolume?: SortOrder
    carWeight?: SortOrder
    maximumPower?: SortOrder
    motorWatts?: SortOrder
    carsMakesCarMakeId?: SortOrder
    carsModelsCarModelId?: SortOrder
  }

  export type CarsMinOrderByAggregateInput = {
    cardId?: SortOrder
    carYear?: SortOrder
    carDescription?: SortOrder
    carImageUrl?: SortOrder
    carAcceleration?: SortOrder
    accelarationTime?: SortOrder
    speedMax?: SortOrder
    averageConsumption?: SortOrder
    deviceCapacity?: SortOrder
    numberOfDoors?: SortOrder
    carDimensions?: SortOrder
    carTrunkVolume?: SortOrder
    carWeight?: SortOrder
    maximumPower?: SortOrder
    motorWatts?: SortOrder
    carsMakesCarMakeId?: SortOrder
    carsModelsCarModelId?: SortOrder
  }

  export type CarsSumOrderByAggregateInput = {
    carYear?: SortOrder
    carsMakesCarMakeId?: SortOrder
    carsModelsCarModelId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type CarsListRelationFilter = {
    every?: CarsWhereInput
    some?: CarsWhereInput
    none?: CarsWhereInput
  }

  export type CarsModelsListRelationFilter = {
    every?: CarsModelsWhereInput
    some?: CarsModelsWhereInput
    none?: CarsModelsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CarsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CarsModelsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CarsMakesCountOrderByAggregateInput = {
    carMakeId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type CarsMakesAvgOrderByAggregateInput = {
    carMakeId?: SortOrder
  }

  export type CarsMakesMaxOrderByAggregateInput = {
    carMakeId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type CarsMakesMinOrderByAggregateInput = {
    carMakeId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type CarsMakesSumOrderByAggregateInput = {
    carMakeId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type CarsModelsCountOrderByAggregateInput = {
    carModelId?: SortOrder
    carMakeId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type CarsModelsAvgOrderByAggregateInput = {
    carModelId?: SortOrder
    carMakeId?: SortOrder
  }

  export type CarsModelsMaxOrderByAggregateInput = {
    carModelId?: SortOrder
    carMakeId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type CarsModelsMinOrderByAggregateInput = {
    carModelId?: SortOrder
    carMakeId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type CarsModelsSumOrderByAggregateInput = {
    carModelId?: SortOrder
    carMakeId?: SortOrder
  }

  export type CarsCreatetransmitionTypesInput = {
    set: string[]
  }

  export type CarsCreatedriveTrainsInput = {
    set: string[]
  }

  export type CarsCreatemotorFuelTypesInput = {
    set: string[]
  }

  export type CarsMakesCreateNestedOneWithoutCarsInput = {
    create?: XOR<CarsMakesCreateWithoutCarsInput, CarsMakesUncheckedCreateWithoutCarsInput>
    connectOrCreate?: CarsMakesCreateOrConnectWithoutCarsInput
    connect?: CarsMakesWhereUniqueInput
  }

  export type CarsModelsCreateNestedOneWithoutCarsInput = {
    create?: XOR<CarsModelsCreateWithoutCarsInput, CarsModelsUncheckedCreateWithoutCarsInput>
    connectOrCreate?: CarsModelsCreateOrConnectWithoutCarsInput
    connect?: CarsModelsWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CarsUpdatetransmitionTypesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type CarsUpdatedriveTrainsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type CarsUpdatemotorFuelTypesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type CarsMakesUpdateOneWithoutCarsNestedInput = {
    create?: XOR<CarsMakesCreateWithoutCarsInput, CarsMakesUncheckedCreateWithoutCarsInput>
    connectOrCreate?: CarsMakesCreateOrConnectWithoutCarsInput
    upsert?: CarsMakesUpsertWithoutCarsInput
    disconnect?: CarsMakesWhereInput | boolean
    delete?: CarsMakesWhereInput | boolean
    connect?: CarsMakesWhereUniqueInput
    update?: XOR<XOR<CarsMakesUpdateToOneWithWhereWithoutCarsInput, CarsMakesUpdateWithoutCarsInput>, CarsMakesUncheckedUpdateWithoutCarsInput>
  }

  export type CarsModelsUpdateOneWithoutCarsNestedInput = {
    create?: XOR<CarsModelsCreateWithoutCarsInput, CarsModelsUncheckedCreateWithoutCarsInput>
    connectOrCreate?: CarsModelsCreateOrConnectWithoutCarsInput
    upsert?: CarsModelsUpsertWithoutCarsInput
    disconnect?: CarsModelsWhereInput | boolean
    delete?: CarsModelsWhereInput | boolean
    connect?: CarsModelsWhereUniqueInput
    update?: XOR<XOR<CarsModelsUpdateToOneWithWhereWithoutCarsInput, CarsModelsUpdateWithoutCarsInput>, CarsModelsUncheckedUpdateWithoutCarsInput>
  }

  export type CarsCreateNestedManyWithoutCarMakeInput = {
    create?: XOR<CarsCreateWithoutCarMakeInput, CarsUncheckedCreateWithoutCarMakeInput> | CarsCreateWithoutCarMakeInput[] | CarsUncheckedCreateWithoutCarMakeInput[]
    connectOrCreate?: CarsCreateOrConnectWithoutCarMakeInput | CarsCreateOrConnectWithoutCarMakeInput[]
    createMany?: CarsCreateManyCarMakeInputEnvelope
    connect?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
  }

  export type CarsModelsCreateNestedManyWithoutCarMakeInput = {
    create?: XOR<CarsModelsCreateWithoutCarMakeInput, CarsModelsUncheckedCreateWithoutCarMakeInput> | CarsModelsCreateWithoutCarMakeInput[] | CarsModelsUncheckedCreateWithoutCarMakeInput[]
    connectOrCreate?: CarsModelsCreateOrConnectWithoutCarMakeInput | CarsModelsCreateOrConnectWithoutCarMakeInput[]
    createMany?: CarsModelsCreateManyCarMakeInputEnvelope
    connect?: CarsModelsWhereUniqueInput | CarsModelsWhereUniqueInput[]
  }

  export type CarsUncheckedCreateNestedManyWithoutCarMakeInput = {
    create?: XOR<CarsCreateWithoutCarMakeInput, CarsUncheckedCreateWithoutCarMakeInput> | CarsCreateWithoutCarMakeInput[] | CarsUncheckedCreateWithoutCarMakeInput[]
    connectOrCreate?: CarsCreateOrConnectWithoutCarMakeInput | CarsCreateOrConnectWithoutCarMakeInput[]
    createMany?: CarsCreateManyCarMakeInputEnvelope
    connect?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
  }

  export type CarsModelsUncheckedCreateNestedManyWithoutCarMakeInput = {
    create?: XOR<CarsModelsCreateWithoutCarMakeInput, CarsModelsUncheckedCreateWithoutCarMakeInput> | CarsModelsCreateWithoutCarMakeInput[] | CarsModelsUncheckedCreateWithoutCarMakeInput[]
    connectOrCreate?: CarsModelsCreateOrConnectWithoutCarMakeInput | CarsModelsCreateOrConnectWithoutCarMakeInput[]
    createMany?: CarsModelsCreateManyCarMakeInputEnvelope
    connect?: CarsModelsWhereUniqueInput | CarsModelsWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CarsUpdateManyWithoutCarMakeNestedInput = {
    create?: XOR<CarsCreateWithoutCarMakeInput, CarsUncheckedCreateWithoutCarMakeInput> | CarsCreateWithoutCarMakeInput[] | CarsUncheckedCreateWithoutCarMakeInput[]
    connectOrCreate?: CarsCreateOrConnectWithoutCarMakeInput | CarsCreateOrConnectWithoutCarMakeInput[]
    upsert?: CarsUpsertWithWhereUniqueWithoutCarMakeInput | CarsUpsertWithWhereUniqueWithoutCarMakeInput[]
    createMany?: CarsCreateManyCarMakeInputEnvelope
    set?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
    disconnect?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
    delete?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
    connect?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
    update?: CarsUpdateWithWhereUniqueWithoutCarMakeInput | CarsUpdateWithWhereUniqueWithoutCarMakeInput[]
    updateMany?: CarsUpdateManyWithWhereWithoutCarMakeInput | CarsUpdateManyWithWhereWithoutCarMakeInput[]
    deleteMany?: CarsScalarWhereInput | CarsScalarWhereInput[]
  }

  export type CarsModelsUpdateManyWithoutCarMakeNestedInput = {
    create?: XOR<CarsModelsCreateWithoutCarMakeInput, CarsModelsUncheckedCreateWithoutCarMakeInput> | CarsModelsCreateWithoutCarMakeInput[] | CarsModelsUncheckedCreateWithoutCarMakeInput[]
    connectOrCreate?: CarsModelsCreateOrConnectWithoutCarMakeInput | CarsModelsCreateOrConnectWithoutCarMakeInput[]
    upsert?: CarsModelsUpsertWithWhereUniqueWithoutCarMakeInput | CarsModelsUpsertWithWhereUniqueWithoutCarMakeInput[]
    createMany?: CarsModelsCreateManyCarMakeInputEnvelope
    set?: CarsModelsWhereUniqueInput | CarsModelsWhereUniqueInput[]
    disconnect?: CarsModelsWhereUniqueInput | CarsModelsWhereUniqueInput[]
    delete?: CarsModelsWhereUniqueInput | CarsModelsWhereUniqueInput[]
    connect?: CarsModelsWhereUniqueInput | CarsModelsWhereUniqueInput[]
    update?: CarsModelsUpdateWithWhereUniqueWithoutCarMakeInput | CarsModelsUpdateWithWhereUniqueWithoutCarMakeInput[]
    updateMany?: CarsModelsUpdateManyWithWhereWithoutCarMakeInput | CarsModelsUpdateManyWithWhereWithoutCarMakeInput[]
    deleteMany?: CarsModelsScalarWhereInput | CarsModelsScalarWhereInput[]
  }

  export type CarsUncheckedUpdateManyWithoutCarMakeNestedInput = {
    create?: XOR<CarsCreateWithoutCarMakeInput, CarsUncheckedCreateWithoutCarMakeInput> | CarsCreateWithoutCarMakeInput[] | CarsUncheckedCreateWithoutCarMakeInput[]
    connectOrCreate?: CarsCreateOrConnectWithoutCarMakeInput | CarsCreateOrConnectWithoutCarMakeInput[]
    upsert?: CarsUpsertWithWhereUniqueWithoutCarMakeInput | CarsUpsertWithWhereUniqueWithoutCarMakeInput[]
    createMany?: CarsCreateManyCarMakeInputEnvelope
    set?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
    disconnect?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
    delete?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
    connect?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
    update?: CarsUpdateWithWhereUniqueWithoutCarMakeInput | CarsUpdateWithWhereUniqueWithoutCarMakeInput[]
    updateMany?: CarsUpdateManyWithWhereWithoutCarMakeInput | CarsUpdateManyWithWhereWithoutCarMakeInput[]
    deleteMany?: CarsScalarWhereInput | CarsScalarWhereInput[]
  }

  export type CarsModelsUncheckedUpdateManyWithoutCarMakeNestedInput = {
    create?: XOR<CarsModelsCreateWithoutCarMakeInput, CarsModelsUncheckedCreateWithoutCarMakeInput> | CarsModelsCreateWithoutCarMakeInput[] | CarsModelsUncheckedCreateWithoutCarMakeInput[]
    connectOrCreate?: CarsModelsCreateOrConnectWithoutCarMakeInput | CarsModelsCreateOrConnectWithoutCarMakeInput[]
    upsert?: CarsModelsUpsertWithWhereUniqueWithoutCarMakeInput | CarsModelsUpsertWithWhereUniqueWithoutCarMakeInput[]
    createMany?: CarsModelsCreateManyCarMakeInputEnvelope
    set?: CarsModelsWhereUniqueInput | CarsModelsWhereUniqueInput[]
    disconnect?: CarsModelsWhereUniqueInput | CarsModelsWhereUniqueInput[]
    delete?: CarsModelsWhereUniqueInput | CarsModelsWhereUniqueInput[]
    connect?: CarsModelsWhereUniqueInput | CarsModelsWhereUniqueInput[]
    update?: CarsModelsUpdateWithWhereUniqueWithoutCarMakeInput | CarsModelsUpdateWithWhereUniqueWithoutCarMakeInput[]
    updateMany?: CarsModelsUpdateManyWithWhereWithoutCarMakeInput | CarsModelsUpdateManyWithWhereWithoutCarMakeInput[]
    deleteMany?: CarsModelsScalarWhereInput | CarsModelsScalarWhereInput[]
  }

  export type CarsMakesCreateNestedOneWithoutModelsInput = {
    create?: XOR<CarsMakesCreateWithoutModelsInput, CarsMakesUncheckedCreateWithoutModelsInput>
    connectOrCreate?: CarsMakesCreateOrConnectWithoutModelsInput
    connect?: CarsMakesWhereUniqueInput
  }

  export type CarsCreateNestedManyWithoutCarModelInput = {
    create?: XOR<CarsCreateWithoutCarModelInput, CarsUncheckedCreateWithoutCarModelInput> | CarsCreateWithoutCarModelInput[] | CarsUncheckedCreateWithoutCarModelInput[]
    connectOrCreate?: CarsCreateOrConnectWithoutCarModelInput | CarsCreateOrConnectWithoutCarModelInput[]
    createMany?: CarsCreateManyCarModelInputEnvelope
    connect?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
  }

  export type CarsUncheckedCreateNestedManyWithoutCarModelInput = {
    create?: XOR<CarsCreateWithoutCarModelInput, CarsUncheckedCreateWithoutCarModelInput> | CarsCreateWithoutCarModelInput[] | CarsUncheckedCreateWithoutCarModelInput[]
    connectOrCreate?: CarsCreateOrConnectWithoutCarModelInput | CarsCreateOrConnectWithoutCarModelInput[]
    createMany?: CarsCreateManyCarModelInputEnvelope
    connect?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
  }

  export type CarsMakesUpdateOneWithoutModelsNestedInput = {
    create?: XOR<CarsMakesCreateWithoutModelsInput, CarsMakesUncheckedCreateWithoutModelsInput>
    connectOrCreate?: CarsMakesCreateOrConnectWithoutModelsInput
    upsert?: CarsMakesUpsertWithoutModelsInput
    disconnect?: CarsMakesWhereInput | boolean
    delete?: CarsMakesWhereInput | boolean
    connect?: CarsMakesWhereUniqueInput
    update?: XOR<XOR<CarsMakesUpdateToOneWithWhereWithoutModelsInput, CarsMakesUpdateWithoutModelsInput>, CarsMakesUncheckedUpdateWithoutModelsInput>
  }

  export type CarsUpdateManyWithoutCarModelNestedInput = {
    create?: XOR<CarsCreateWithoutCarModelInput, CarsUncheckedCreateWithoutCarModelInput> | CarsCreateWithoutCarModelInput[] | CarsUncheckedCreateWithoutCarModelInput[]
    connectOrCreate?: CarsCreateOrConnectWithoutCarModelInput | CarsCreateOrConnectWithoutCarModelInput[]
    upsert?: CarsUpsertWithWhereUniqueWithoutCarModelInput | CarsUpsertWithWhereUniqueWithoutCarModelInput[]
    createMany?: CarsCreateManyCarModelInputEnvelope
    set?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
    disconnect?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
    delete?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
    connect?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
    update?: CarsUpdateWithWhereUniqueWithoutCarModelInput | CarsUpdateWithWhereUniqueWithoutCarModelInput[]
    updateMany?: CarsUpdateManyWithWhereWithoutCarModelInput | CarsUpdateManyWithWhereWithoutCarModelInput[]
    deleteMany?: CarsScalarWhereInput | CarsScalarWhereInput[]
  }

  export type CarsUncheckedUpdateManyWithoutCarModelNestedInput = {
    create?: XOR<CarsCreateWithoutCarModelInput, CarsUncheckedCreateWithoutCarModelInput> | CarsCreateWithoutCarModelInput[] | CarsUncheckedCreateWithoutCarModelInput[]
    connectOrCreate?: CarsCreateOrConnectWithoutCarModelInput | CarsCreateOrConnectWithoutCarModelInput[]
    upsert?: CarsUpsertWithWhereUniqueWithoutCarModelInput | CarsUpsertWithWhereUniqueWithoutCarModelInput[]
    createMany?: CarsCreateManyCarModelInputEnvelope
    set?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
    disconnect?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
    delete?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
    connect?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
    update?: CarsUpdateWithWhereUniqueWithoutCarModelInput | CarsUpdateWithWhereUniqueWithoutCarModelInput[]
    updateMany?: CarsUpdateManyWithWhereWithoutCarModelInput | CarsUpdateManyWithWhereWithoutCarModelInput[]
    deleteMany?: CarsScalarWhereInput | CarsScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CarsMakesCreateWithoutCarsInput = {
    name: string
    createdAt?: Date | string | null
    Models?: CarsModelsCreateNestedManyWithoutCarMakeInput
  }

  export type CarsMakesUncheckedCreateWithoutCarsInput = {
    carMakeId?: number
    name: string
    createdAt?: Date | string | null
    Models?: CarsModelsUncheckedCreateNestedManyWithoutCarMakeInput
  }

  export type CarsMakesCreateOrConnectWithoutCarsInput = {
    where: CarsMakesWhereUniqueInput
    create: XOR<CarsMakesCreateWithoutCarsInput, CarsMakesUncheckedCreateWithoutCarsInput>
  }

  export type CarsModelsCreateWithoutCarsInput = {
    name: string
    createdAt?: Date | string | null
    carMake?: CarsMakesCreateNestedOneWithoutModelsInput
  }

  export type CarsModelsUncheckedCreateWithoutCarsInput = {
    carModelId?: number
    carMakeId: number
    name: string
    createdAt?: Date | string | null
  }

  export type CarsModelsCreateOrConnectWithoutCarsInput = {
    where: CarsModelsWhereUniqueInput
    create: XOR<CarsModelsCreateWithoutCarsInput, CarsModelsUncheckedCreateWithoutCarsInput>
  }

  export type CarsMakesUpsertWithoutCarsInput = {
    update: XOR<CarsMakesUpdateWithoutCarsInput, CarsMakesUncheckedUpdateWithoutCarsInput>
    create: XOR<CarsMakesCreateWithoutCarsInput, CarsMakesUncheckedCreateWithoutCarsInput>
    where?: CarsMakesWhereInput
  }

  export type CarsMakesUpdateToOneWithWhereWithoutCarsInput = {
    where?: CarsMakesWhereInput
    data: XOR<CarsMakesUpdateWithoutCarsInput, CarsMakesUncheckedUpdateWithoutCarsInput>
  }

  export type CarsMakesUpdateWithoutCarsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Models?: CarsModelsUpdateManyWithoutCarMakeNestedInput
  }

  export type CarsMakesUncheckedUpdateWithoutCarsInput = {
    carMakeId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Models?: CarsModelsUncheckedUpdateManyWithoutCarMakeNestedInput
  }

  export type CarsModelsUpsertWithoutCarsInput = {
    update: XOR<CarsModelsUpdateWithoutCarsInput, CarsModelsUncheckedUpdateWithoutCarsInput>
    create: XOR<CarsModelsCreateWithoutCarsInput, CarsModelsUncheckedCreateWithoutCarsInput>
    where?: CarsModelsWhereInput
  }

  export type CarsModelsUpdateToOneWithWhereWithoutCarsInput = {
    where?: CarsModelsWhereInput
    data: XOR<CarsModelsUpdateWithoutCarsInput, CarsModelsUncheckedUpdateWithoutCarsInput>
  }

  export type CarsModelsUpdateWithoutCarsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    carMake?: CarsMakesUpdateOneWithoutModelsNestedInput
  }

  export type CarsModelsUncheckedUpdateWithoutCarsInput = {
    carModelId?: IntFieldUpdateOperationsInput | number
    carMakeId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CarsCreateWithoutCarMakeInput = {
    cardId?: string
    carYear: number
    transmitionTypes?: CarsCreatetransmitionTypesInput | string[]
    driveTrains?: CarsCreatedriveTrainsInput | string[]
    carDescription: string
    carImageUrl: string
    motorFuelTypes?: CarsCreatemotorFuelTypesInput | string[]
    carAcceleration: string
    accelarationTime: string
    speedMax: string
    averageConsumption: string
    deviceCapacity: string
    numberOfDoors: string
    carDimensions: string
    carTrunkVolume: string
    carWeight: string
    maximumPower: string
    motorWatts: string
    carModel?: CarsModelsCreateNestedOneWithoutCarsInput
  }

  export type CarsUncheckedCreateWithoutCarMakeInput = {
    cardId?: string
    carYear: number
    transmitionTypes?: CarsCreatetransmitionTypesInput | string[]
    driveTrains?: CarsCreatedriveTrainsInput | string[]
    carDescription: string
    carImageUrl: string
    motorFuelTypes?: CarsCreatemotorFuelTypesInput | string[]
    carAcceleration: string
    accelarationTime: string
    speedMax: string
    averageConsumption: string
    deviceCapacity: string
    numberOfDoors: string
    carDimensions: string
    carTrunkVolume: string
    carWeight: string
    maximumPower: string
    motorWatts: string
    carsModelsCarModelId: number
  }

  export type CarsCreateOrConnectWithoutCarMakeInput = {
    where: CarsWhereUniqueInput
    create: XOR<CarsCreateWithoutCarMakeInput, CarsUncheckedCreateWithoutCarMakeInput>
  }

  export type CarsCreateManyCarMakeInputEnvelope = {
    data: CarsCreateManyCarMakeInput | CarsCreateManyCarMakeInput[]
    skipDuplicates?: boolean
  }

  export type CarsModelsCreateWithoutCarMakeInput = {
    name: string
    createdAt?: Date | string | null
    Cars?: CarsCreateNestedManyWithoutCarModelInput
  }

  export type CarsModelsUncheckedCreateWithoutCarMakeInput = {
    carModelId?: number
    name: string
    createdAt?: Date | string | null
    Cars?: CarsUncheckedCreateNestedManyWithoutCarModelInput
  }

  export type CarsModelsCreateOrConnectWithoutCarMakeInput = {
    where: CarsModelsWhereUniqueInput
    create: XOR<CarsModelsCreateWithoutCarMakeInput, CarsModelsUncheckedCreateWithoutCarMakeInput>
  }

  export type CarsModelsCreateManyCarMakeInputEnvelope = {
    data: CarsModelsCreateManyCarMakeInput | CarsModelsCreateManyCarMakeInput[]
    skipDuplicates?: boolean
  }

  export type CarsUpsertWithWhereUniqueWithoutCarMakeInput = {
    where: CarsWhereUniqueInput
    update: XOR<CarsUpdateWithoutCarMakeInput, CarsUncheckedUpdateWithoutCarMakeInput>
    create: XOR<CarsCreateWithoutCarMakeInput, CarsUncheckedCreateWithoutCarMakeInput>
  }

  export type CarsUpdateWithWhereUniqueWithoutCarMakeInput = {
    where: CarsWhereUniqueInput
    data: XOR<CarsUpdateWithoutCarMakeInput, CarsUncheckedUpdateWithoutCarMakeInput>
  }

  export type CarsUpdateManyWithWhereWithoutCarMakeInput = {
    where: CarsScalarWhereInput
    data: XOR<CarsUpdateManyMutationInput, CarsUncheckedUpdateManyWithoutCarMakeInput>
  }

  export type CarsScalarWhereInput = {
    AND?: CarsScalarWhereInput | CarsScalarWhereInput[]
    OR?: CarsScalarWhereInput[]
    NOT?: CarsScalarWhereInput | CarsScalarWhereInput[]
    cardId?: StringFilter<"Cars"> | string
    carYear?: IntFilter<"Cars"> | number
    transmitionTypes?: StringNullableListFilter<"Cars">
    driveTrains?: StringNullableListFilter<"Cars">
    carDescription?: StringFilter<"Cars"> | string
    carImageUrl?: StringFilter<"Cars"> | string
    motorFuelTypes?: StringNullableListFilter<"Cars">
    carAcceleration?: StringFilter<"Cars"> | string
    accelarationTime?: StringFilter<"Cars"> | string
    speedMax?: StringFilter<"Cars"> | string
    averageConsumption?: StringFilter<"Cars"> | string
    deviceCapacity?: StringFilter<"Cars"> | string
    numberOfDoors?: StringFilter<"Cars"> | string
    carDimensions?: StringFilter<"Cars"> | string
    carTrunkVolume?: StringFilter<"Cars"> | string
    carWeight?: StringFilter<"Cars"> | string
    maximumPower?: StringFilter<"Cars"> | string
    motorWatts?: StringFilter<"Cars"> | string
    carsMakesCarMakeId?: IntFilter<"Cars"> | number
    carsModelsCarModelId?: IntFilter<"Cars"> | number
  }

  export type CarsModelsUpsertWithWhereUniqueWithoutCarMakeInput = {
    where: CarsModelsWhereUniqueInput
    update: XOR<CarsModelsUpdateWithoutCarMakeInput, CarsModelsUncheckedUpdateWithoutCarMakeInput>
    create: XOR<CarsModelsCreateWithoutCarMakeInput, CarsModelsUncheckedCreateWithoutCarMakeInput>
  }

  export type CarsModelsUpdateWithWhereUniqueWithoutCarMakeInput = {
    where: CarsModelsWhereUniqueInput
    data: XOR<CarsModelsUpdateWithoutCarMakeInput, CarsModelsUncheckedUpdateWithoutCarMakeInput>
  }

  export type CarsModelsUpdateManyWithWhereWithoutCarMakeInput = {
    where: CarsModelsScalarWhereInput
    data: XOR<CarsModelsUpdateManyMutationInput, CarsModelsUncheckedUpdateManyWithoutCarMakeInput>
  }

  export type CarsModelsScalarWhereInput = {
    AND?: CarsModelsScalarWhereInput | CarsModelsScalarWhereInput[]
    OR?: CarsModelsScalarWhereInput[]
    NOT?: CarsModelsScalarWhereInput | CarsModelsScalarWhereInput[]
    carModelId?: IntFilter<"CarsModels"> | number
    carMakeId?: IntFilter<"CarsModels"> | number
    name?: StringFilter<"CarsModels"> | string
    createdAt?: DateTimeNullableFilter<"CarsModels"> | Date | string | null
  }

  export type CarsMakesCreateWithoutModelsInput = {
    name: string
    createdAt?: Date | string | null
    Cars?: CarsCreateNestedManyWithoutCarMakeInput
  }

  export type CarsMakesUncheckedCreateWithoutModelsInput = {
    carMakeId?: number
    name: string
    createdAt?: Date | string | null
    Cars?: CarsUncheckedCreateNestedManyWithoutCarMakeInput
  }

  export type CarsMakesCreateOrConnectWithoutModelsInput = {
    where: CarsMakesWhereUniqueInput
    create: XOR<CarsMakesCreateWithoutModelsInput, CarsMakesUncheckedCreateWithoutModelsInput>
  }

  export type CarsCreateWithoutCarModelInput = {
    cardId?: string
    carYear: number
    transmitionTypes?: CarsCreatetransmitionTypesInput | string[]
    driveTrains?: CarsCreatedriveTrainsInput | string[]
    carDescription: string
    carImageUrl: string
    motorFuelTypes?: CarsCreatemotorFuelTypesInput | string[]
    carAcceleration: string
    accelarationTime: string
    speedMax: string
    averageConsumption: string
    deviceCapacity: string
    numberOfDoors: string
    carDimensions: string
    carTrunkVolume: string
    carWeight: string
    maximumPower: string
    motorWatts: string
    carMake?: CarsMakesCreateNestedOneWithoutCarsInput
  }

  export type CarsUncheckedCreateWithoutCarModelInput = {
    cardId?: string
    carYear: number
    transmitionTypes?: CarsCreatetransmitionTypesInput | string[]
    driveTrains?: CarsCreatedriveTrainsInput | string[]
    carDescription: string
    carImageUrl: string
    motorFuelTypes?: CarsCreatemotorFuelTypesInput | string[]
    carAcceleration: string
    accelarationTime: string
    speedMax: string
    averageConsumption: string
    deviceCapacity: string
    numberOfDoors: string
    carDimensions: string
    carTrunkVolume: string
    carWeight: string
    maximumPower: string
    motorWatts: string
    carsMakesCarMakeId: number
  }

  export type CarsCreateOrConnectWithoutCarModelInput = {
    where: CarsWhereUniqueInput
    create: XOR<CarsCreateWithoutCarModelInput, CarsUncheckedCreateWithoutCarModelInput>
  }

  export type CarsCreateManyCarModelInputEnvelope = {
    data: CarsCreateManyCarModelInput | CarsCreateManyCarModelInput[]
    skipDuplicates?: boolean
  }

  export type CarsMakesUpsertWithoutModelsInput = {
    update: XOR<CarsMakesUpdateWithoutModelsInput, CarsMakesUncheckedUpdateWithoutModelsInput>
    create: XOR<CarsMakesCreateWithoutModelsInput, CarsMakesUncheckedCreateWithoutModelsInput>
    where?: CarsMakesWhereInput
  }

  export type CarsMakesUpdateToOneWithWhereWithoutModelsInput = {
    where?: CarsMakesWhereInput
    data: XOR<CarsMakesUpdateWithoutModelsInput, CarsMakesUncheckedUpdateWithoutModelsInput>
  }

  export type CarsMakesUpdateWithoutModelsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Cars?: CarsUpdateManyWithoutCarMakeNestedInput
  }

  export type CarsMakesUncheckedUpdateWithoutModelsInput = {
    carMakeId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Cars?: CarsUncheckedUpdateManyWithoutCarMakeNestedInput
  }

  export type CarsUpsertWithWhereUniqueWithoutCarModelInput = {
    where: CarsWhereUniqueInput
    update: XOR<CarsUpdateWithoutCarModelInput, CarsUncheckedUpdateWithoutCarModelInput>
    create: XOR<CarsCreateWithoutCarModelInput, CarsUncheckedCreateWithoutCarModelInput>
  }

  export type CarsUpdateWithWhereUniqueWithoutCarModelInput = {
    where: CarsWhereUniqueInput
    data: XOR<CarsUpdateWithoutCarModelInput, CarsUncheckedUpdateWithoutCarModelInput>
  }

  export type CarsUpdateManyWithWhereWithoutCarModelInput = {
    where: CarsScalarWhereInput
    data: XOR<CarsUpdateManyMutationInput, CarsUncheckedUpdateManyWithoutCarModelInput>
  }

  export type CarsCreateManyCarMakeInput = {
    cardId?: string
    carYear: number
    transmitionTypes?: CarsCreatetransmitionTypesInput | string[]
    driveTrains?: CarsCreatedriveTrainsInput | string[]
    carDescription: string
    carImageUrl: string
    motorFuelTypes?: CarsCreatemotorFuelTypesInput | string[]
    carAcceleration: string
    accelarationTime: string
    speedMax: string
    averageConsumption: string
    deviceCapacity: string
    numberOfDoors: string
    carDimensions: string
    carTrunkVolume: string
    carWeight: string
    maximumPower: string
    motorWatts: string
    carsModelsCarModelId: number
  }

  export type CarsModelsCreateManyCarMakeInput = {
    carModelId?: number
    name: string
    createdAt?: Date | string | null
  }

  export type CarsUpdateWithoutCarMakeInput = {
    cardId?: StringFieldUpdateOperationsInput | string
    carYear?: IntFieldUpdateOperationsInput | number
    transmitionTypes?: CarsUpdatetransmitionTypesInput | string[]
    driveTrains?: CarsUpdatedriveTrainsInput | string[]
    carDescription?: StringFieldUpdateOperationsInput | string
    carImageUrl?: StringFieldUpdateOperationsInput | string
    motorFuelTypes?: CarsUpdatemotorFuelTypesInput | string[]
    carAcceleration?: StringFieldUpdateOperationsInput | string
    accelarationTime?: StringFieldUpdateOperationsInput | string
    speedMax?: StringFieldUpdateOperationsInput | string
    averageConsumption?: StringFieldUpdateOperationsInput | string
    deviceCapacity?: StringFieldUpdateOperationsInput | string
    numberOfDoors?: StringFieldUpdateOperationsInput | string
    carDimensions?: StringFieldUpdateOperationsInput | string
    carTrunkVolume?: StringFieldUpdateOperationsInput | string
    carWeight?: StringFieldUpdateOperationsInput | string
    maximumPower?: StringFieldUpdateOperationsInput | string
    motorWatts?: StringFieldUpdateOperationsInput | string
    carModel?: CarsModelsUpdateOneWithoutCarsNestedInput
  }

  export type CarsUncheckedUpdateWithoutCarMakeInput = {
    cardId?: StringFieldUpdateOperationsInput | string
    carYear?: IntFieldUpdateOperationsInput | number
    transmitionTypes?: CarsUpdatetransmitionTypesInput | string[]
    driveTrains?: CarsUpdatedriveTrainsInput | string[]
    carDescription?: StringFieldUpdateOperationsInput | string
    carImageUrl?: StringFieldUpdateOperationsInput | string
    motorFuelTypes?: CarsUpdatemotorFuelTypesInput | string[]
    carAcceleration?: StringFieldUpdateOperationsInput | string
    accelarationTime?: StringFieldUpdateOperationsInput | string
    speedMax?: StringFieldUpdateOperationsInput | string
    averageConsumption?: StringFieldUpdateOperationsInput | string
    deviceCapacity?: StringFieldUpdateOperationsInput | string
    numberOfDoors?: StringFieldUpdateOperationsInput | string
    carDimensions?: StringFieldUpdateOperationsInput | string
    carTrunkVolume?: StringFieldUpdateOperationsInput | string
    carWeight?: StringFieldUpdateOperationsInput | string
    maximumPower?: StringFieldUpdateOperationsInput | string
    motorWatts?: StringFieldUpdateOperationsInput | string
    carsModelsCarModelId?: IntFieldUpdateOperationsInput | number
  }

  export type CarsUncheckedUpdateManyWithoutCarMakeInput = {
    cardId?: StringFieldUpdateOperationsInput | string
    carYear?: IntFieldUpdateOperationsInput | number
    transmitionTypes?: CarsUpdatetransmitionTypesInput | string[]
    driveTrains?: CarsUpdatedriveTrainsInput | string[]
    carDescription?: StringFieldUpdateOperationsInput | string
    carImageUrl?: StringFieldUpdateOperationsInput | string
    motorFuelTypes?: CarsUpdatemotorFuelTypesInput | string[]
    carAcceleration?: StringFieldUpdateOperationsInput | string
    accelarationTime?: StringFieldUpdateOperationsInput | string
    speedMax?: StringFieldUpdateOperationsInput | string
    averageConsumption?: StringFieldUpdateOperationsInput | string
    deviceCapacity?: StringFieldUpdateOperationsInput | string
    numberOfDoors?: StringFieldUpdateOperationsInput | string
    carDimensions?: StringFieldUpdateOperationsInput | string
    carTrunkVolume?: StringFieldUpdateOperationsInput | string
    carWeight?: StringFieldUpdateOperationsInput | string
    maximumPower?: StringFieldUpdateOperationsInput | string
    motorWatts?: StringFieldUpdateOperationsInput | string
    carsModelsCarModelId?: IntFieldUpdateOperationsInput | number
  }

  export type CarsModelsUpdateWithoutCarMakeInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Cars?: CarsUpdateManyWithoutCarModelNestedInput
  }

  export type CarsModelsUncheckedUpdateWithoutCarMakeInput = {
    carModelId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Cars?: CarsUncheckedUpdateManyWithoutCarModelNestedInput
  }

  export type CarsModelsUncheckedUpdateManyWithoutCarMakeInput = {
    carModelId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CarsCreateManyCarModelInput = {
    cardId?: string
    carYear: number
    transmitionTypes?: CarsCreatetransmitionTypesInput | string[]
    driveTrains?: CarsCreatedriveTrainsInput | string[]
    carDescription: string
    carImageUrl: string
    motorFuelTypes?: CarsCreatemotorFuelTypesInput | string[]
    carAcceleration: string
    accelarationTime: string
    speedMax: string
    averageConsumption: string
    deviceCapacity: string
    numberOfDoors: string
    carDimensions: string
    carTrunkVolume: string
    carWeight: string
    maximumPower: string
    motorWatts: string
    carsMakesCarMakeId: number
  }

  export type CarsUpdateWithoutCarModelInput = {
    cardId?: StringFieldUpdateOperationsInput | string
    carYear?: IntFieldUpdateOperationsInput | number
    transmitionTypes?: CarsUpdatetransmitionTypesInput | string[]
    driveTrains?: CarsUpdatedriveTrainsInput | string[]
    carDescription?: StringFieldUpdateOperationsInput | string
    carImageUrl?: StringFieldUpdateOperationsInput | string
    motorFuelTypes?: CarsUpdatemotorFuelTypesInput | string[]
    carAcceleration?: StringFieldUpdateOperationsInput | string
    accelarationTime?: StringFieldUpdateOperationsInput | string
    speedMax?: StringFieldUpdateOperationsInput | string
    averageConsumption?: StringFieldUpdateOperationsInput | string
    deviceCapacity?: StringFieldUpdateOperationsInput | string
    numberOfDoors?: StringFieldUpdateOperationsInput | string
    carDimensions?: StringFieldUpdateOperationsInput | string
    carTrunkVolume?: StringFieldUpdateOperationsInput | string
    carWeight?: StringFieldUpdateOperationsInput | string
    maximumPower?: StringFieldUpdateOperationsInput | string
    motorWatts?: StringFieldUpdateOperationsInput | string
    carMake?: CarsMakesUpdateOneWithoutCarsNestedInput
  }

  export type CarsUncheckedUpdateWithoutCarModelInput = {
    cardId?: StringFieldUpdateOperationsInput | string
    carYear?: IntFieldUpdateOperationsInput | number
    transmitionTypes?: CarsUpdatetransmitionTypesInput | string[]
    driveTrains?: CarsUpdatedriveTrainsInput | string[]
    carDescription?: StringFieldUpdateOperationsInput | string
    carImageUrl?: StringFieldUpdateOperationsInput | string
    motorFuelTypes?: CarsUpdatemotorFuelTypesInput | string[]
    carAcceleration?: StringFieldUpdateOperationsInput | string
    accelarationTime?: StringFieldUpdateOperationsInput | string
    speedMax?: StringFieldUpdateOperationsInput | string
    averageConsumption?: StringFieldUpdateOperationsInput | string
    deviceCapacity?: StringFieldUpdateOperationsInput | string
    numberOfDoors?: StringFieldUpdateOperationsInput | string
    carDimensions?: StringFieldUpdateOperationsInput | string
    carTrunkVolume?: StringFieldUpdateOperationsInput | string
    carWeight?: StringFieldUpdateOperationsInput | string
    maximumPower?: StringFieldUpdateOperationsInput | string
    motorWatts?: StringFieldUpdateOperationsInput | string
    carsMakesCarMakeId?: IntFieldUpdateOperationsInput | number
  }

  export type CarsUncheckedUpdateManyWithoutCarModelInput = {
    cardId?: StringFieldUpdateOperationsInput | string
    carYear?: IntFieldUpdateOperationsInput | number
    transmitionTypes?: CarsUpdatetransmitionTypesInput | string[]
    driveTrains?: CarsUpdatedriveTrainsInput | string[]
    carDescription?: StringFieldUpdateOperationsInput | string
    carImageUrl?: StringFieldUpdateOperationsInput | string
    motorFuelTypes?: CarsUpdatemotorFuelTypesInput | string[]
    carAcceleration?: StringFieldUpdateOperationsInput | string
    accelarationTime?: StringFieldUpdateOperationsInput | string
    speedMax?: StringFieldUpdateOperationsInput | string
    averageConsumption?: StringFieldUpdateOperationsInput | string
    deviceCapacity?: StringFieldUpdateOperationsInput | string
    numberOfDoors?: StringFieldUpdateOperationsInput | string
    carDimensions?: StringFieldUpdateOperationsInput | string
    carTrunkVolume?: StringFieldUpdateOperationsInput | string
    carWeight?: StringFieldUpdateOperationsInput | string
    maximumPower?: StringFieldUpdateOperationsInput | string
    motorWatts?: StringFieldUpdateOperationsInput | string
    carsMakesCarMakeId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use CarsMakesCountOutputTypeDefaultArgs instead
     */
    export type CarsMakesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CarsMakesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CarsModelsCountOutputTypeDefaultArgs instead
     */
    export type CarsModelsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CarsModelsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CarsDefaultArgs instead
     */
    export type CarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CarsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CarsMakesDefaultArgs instead
     */
    export type CarsMakesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CarsMakesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CarsModelsDefaultArgs instead
     */
    export type CarsModelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CarsModelsDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}