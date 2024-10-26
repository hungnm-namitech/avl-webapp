export const HEIGHT_HEAD = 64;

export const MESSAGE_ERROR = 'エラーが発生しました。';

export const FORGOT_PASSWORD = {
  MIN_LENGTH: 1,
  MAX_LENGTH: 200,
  MESSAGE_FORMAT: 'メールアドレスは正しい形式で入力してください。',
  MESSAGE_REQUIRED: 'メールアドレスは必須入力です。',
  MESSAGE_LENGTH: 'メールアドレスは200以下で入力してください。',
  MESSAGE_NOT_FOUND_EMAIL: 'このメールアドレスのアカウントは存在しません。',
};

export const LOGIN = {
  MIN_LENGTH_ID: 1,
  MAX_LENGTH_ID: 50,
  MIN_LENGTH_PASSWORD: 1,
  MAX_LENGTH_PASSWORD: 255,
  MESSAGE_REQUIRED_ID: 'ログインIDは必須入力です。',
  MESSAGE_REQUIRED_PASSWORD: 'パスワードは必須入力です。',
  MESSAGE_LENGTH_ID: 'ログインIDは50以下で入力してください。',
  MESSAGE_LENGTH_PASSWORD: 'パスワードは$8~255以内で入力してください。',
  MESSAGE_LOGIN_FAILED: '認証情報が正しくありません。もう一度試してください。',
};

export const VALIDATE_LIST = {
  FORMAT_DATE: 'yy/mm/ddの形式で入力してください。', //12
  INVALID_DATE: '不正な日付です。正しい日付を入力してください。', //13
  INVALID_NUMBER: '不正な数字です。正しい数字を入力してください。', //7
  BEFORE_UNLOADING_DATE: '積込日は荷卸日以前の日付を入力してください。', //14
  LOADING_BEFORE_BILLING_DATE:
    '積込日は請求基準日以前の日付を入力してください。', //15
  UNLOADING_BEFORE_BILLING_DATE:
    '荷卸日は請求基準日以前の日付を入力してください。', //16
  BEFORE_UNLOADING_TIME: '積込時間は最終積込時間以前の時分を入力してください。', //18
  DISTANCE: {
    NUMBER_OF_DIGIT: '距離は整数9桁までで入力してください。', //8
    NUMBER_AFTER_DECIMAL_POINT: '距離は小数点9桁までで入力してください。', //9
  },
  CUBIC: {
    NUMBER_OF_DIGIT: '重量は整数9桁までで入力してください。',
    NUMBER_AFTER_DECIMAL_POINT: '重量は小数点9桁までで入力してください。',
  },
  WEIGHT: {
    NUMBER_OF_DIGIT: '立米は整数9桁までで入力してください。',
    NUMBER_AFTER_DECIMAL_POINT: '立米は小数点9桁までで入力してください。',
  },
  TALENT: {
    NUMBER_OF_DIGIT: '才数は整数9桁までで入力してください。',
    NUMBER_AFTER_DECIMAL_POINT: '才数は小数点9桁までで入力してください。',
  },
  PRICE_TAX: {
    NUMBER_OF_DIGIT: '金額（税込）は整数10桁までで入力してください。', //8
  },
  REGEX_NUMBER: /^[0-9]/,
  LOGISTIC: {
    INVALID_NUMBER_CONTACT:
      '電話番号はハイフン区切りの数字で入力してください。', //10
    REGEX_NUMBER_CONTACT: /^[0-9\-]+$/,
  },
};
