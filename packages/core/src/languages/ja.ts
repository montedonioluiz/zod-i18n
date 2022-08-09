export const translation = {
  zod: {
    errors: {
      invalid_type:
        "{{expected}}での入力を期待していますが、{{received}}が入力されました。",
      invalid_type_received_undefined: "必須",
      invalid_literal: "無効なリテラル値です。{{expected}}を入力してください。",
      unrecognized_keys: "オブジェクトのキー{{- keys}}が識別できません。",
      invalid_union: "入力形式が間違っています。",
      invalid_union_discriminator:
        "無効な識別子です。{{- options}}で入力してください。",
      invalid_enum_value:
        "{{received}}は無効な値です。{{- options}}で入力してください。",
      invalid_arguments: "引数が間違っています。",
      invalid_return_type: "返値の型が間違っています。",
      invalid_date: "間違った日時データです。",
      custom: "入力形式が間違っています。",
      invalid_intersection_types: "交差型のマージができませんでした。",
      not_multiple_of: "{{multipleOf}}の倍数である必要があります。",
      invalid_string: {
        email: "{{validation}}の形式で入力してください。",
        url: "{{validation}}の形式で入力してください。",
        uuid: "{{validation}}の形式で入力してください。",
        cuid: "{{validation}}の形式で入力してください。",
        regex: "入力形式が間違っています。",
        startsWith: "{{startsWith}}で始まる文字列である必要があります。",
        endsWith: "{{endsWith}}で終わる文字列である必要があります。",
      },
      too_small: {
        array: {
          inclusive: "{{minimum}}個以上の要素が必要です。",
          not_inclusive: "{{minimum}}個より多くの要素が必要です。",
        },
        string: {
          inclusive: "{{minimum}}文字以上の文字列である必要があります。",
          not_inclusive: "{{minimum}}文字より長い文字列である必要があります。",
        },
        number: {
          inclusive: "{{minimum}}以上の数値である必要があります。",
          not_inclusive: "{{minimum}}より大きな数値である必要があります。",
        },
        set: {
          inclusive: "入力形式が間違っています。",
          not_inclusive: "入力形式が間違っています。",
        },
        date: {
          inclusive: "{{minimum}}以降の日時である必要があります。",
          not_inclusive: "{{minimum}}よりも後の日時である必要があります。",
        },
      },
      too_big: {
        array: {
          inclusive: "{{maximum}}個以下の要素である必要があります。",
          not_inclusive: "{{maximum}}個より少ない要素である必要があります。",
        },
        string: {
          inclusive: "{{maximum}}文字以下の文字列である必要があります。",
          not_inclusive: "{{maximum}}文字より短い文字列である必要があります。",
        },
        number: {
          inclusive: "{{maximum}}以下の数値である必要があります。",
          not_inclusive: "{{maximum}}より小さな数値である必要があります。",
        },
        set: {
          inclusive: "入力形式が間違っています。",
          not_inclusive: "入力形式が間違っています。",
        },
        date: {
          inclusive: "{{maximum}}以前の日時である必要があります。",
          not_inclusive: "{{maximum}}よりも前の日時である必要があります。",
        },
      },
    },
    validations: {
      email: "メールアドレス",
      url: "URL",
      uuid: "UUID",
      cuid: "CUID",
      regex: "正規表現",
    },
    types: {
      function: "関数",
      number: "数値",
      string: "文字列",
      nan: "NaN",
      integer: "整数",
      float: "浮動小数点数",
      boolean: "真偽値",
      date: "日時",
      bigint: "Bigint",
      undefined: "undefined",
      symbol: "シンボル",
      null: "NULL",
      array: "配列",
      object: "オブジェクト",
      unknown: "unknown",
      promise: "Promise",
      void: "void",
      never: "never",
      map: "マップ",
      set: "セット",
    },
  },
};
