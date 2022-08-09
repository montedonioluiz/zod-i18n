export const translation = {
  zod: {
    errors: {
      invalid_type: "Expected {{expected}}, received {{received}}",
      invalid_type_received_undefined: "Required",
      invalid_literal: "Invalid literal value, expected {{expected}}",
      unrecognized_keys: "Unrecognized key(s) in object: {{- keys}}",
      invalid_union: "Invalid input",
      invalid_union_discriminator:
        "Invalid discriminator value. Expected {{- options}}",
      invalid_enum_value:
        "Invalid enum value. Expected {{- options}}, received {{received}}",
      invalid_arguments: "Invalid function arguments",
      invalid_return_type: "Invalid function return type",
      invalid_date: "Invalid date",
      custom: "Invalid input",
      invalid_intersection_types: "Intersection results could not be merged",
      not_multiple_of: "Number must be a multiple of {{multipleOf}}",
      invalid_string: {
        email: "Invalid {{validation}}",
        url: "Invalid {{validation}}",
        uuid: "Invalid {{validation}}",
        cuid: "Invalid {{validation}}",
        regex: "Invalid",
        startsWith: "Invalid input: must start with {{startsWith}}",
        endsWith: "Invalid input: must end with {{endsWith}}",
      },
      too_small: {
        array: {
          inclusive: "Array must contain at least {{minimum}} element(s)",
          not_inclusive: "Array must contain more than {{minimum}} element(s)",
        },
        string: {
          inclusive: "String must contain at least {{minimum}} character(s)",
          not_inclusive: "String must contain over {{minimum}} character(s)",
        },
        number: {
          inclusive: "Number must be greater than or equal to {{minimum}}",
          not_inclusive: "Number must be greater than {{minimum}}",
        },
        set: {
          inclusive: "Invalid input",
          not_inclusive: "Invalid input",
        },
        date: {
          inclusive: "Date must be greater than or equal to {{minimum}}",
          not_inclusive: "Date must be greater than {{minimum}}",
        },
      },
      too_big: {
        array: {
          inclusive: "Array must contain at most {{maximum}} element(s)",
          not_inclusive: "Array must contain less than {{maximum}} element(s)",
        },
        string: {
          inclusive: "String must contain at most {{maximum}} character(s)",
          not_inclusive: "String must contain under {{maximum}} character(s)",
        },
        number: {
          inclusive: "Number must be less than or equal to {{maximum}}",
          not_inclusive: "Number must be less than {{maximum}}",
        },
        set: {
          inclusive: "Invalid input",
          not_inclusive: "Invalid input",
        },
        date: {
          inclusive: "Date must be smaller than or equal to {{maximum}}",
          not_inclusive: "Date must be smaller than {{maximum}}",
        },
      },
    },
    validations: {
      email: "email",
      url: "url",
      uuid: "uuid",
      cuid: "cuid",
      regex: "regex",
    },
    types: {
      function: "function",
      number: "number",
      string: "string",
      nan: "nan",
      integer: "integer",
      float: "float",
      boolean: "boolean",
      date: "date",
      bigint: "bigint",
      undefined: "undefined",
      symbol: "symbol",
      null: "null",
      array: "array",
      object: "object",
      unknown: "unknown",
      promise: "promise",
      void: "void",
      never: "never",
      map: "map",
      set: "set",
    },
  },
};
