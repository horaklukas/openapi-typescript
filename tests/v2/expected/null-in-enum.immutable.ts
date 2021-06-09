/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  readonly "/test": {
    readonly post: operations["addTest"];
  };
}

export interface definitions {
  /** Enum with null and nullable */
  readonly MyType: {
    readonly myField?: ("foo" | "bar") | null;
  };
  /** Enum with null */
  readonly MyTypeNotNullable: {
    readonly myField?: "foo" | "bar" | null;
  };
  /** Enum with null */
  readonly MyTypeNotNullableNotNull: {
    readonly myField?: "foo" | "bar";
  };
  /** Enum with null */
  readonly MyTypeMixed: {
    readonly myField?: "foo" | 2 | false | null;
  };
}

export interface operations {
  readonly addTest: {
    readonly responses: {
      /** OK */
      readonly 200: unknown;
    };
  };
}

export interface external {}