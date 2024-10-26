export enum BASIC_INFO {
  ORDER_DATE = '受注日',
  RELATED_ORDER_NUMBER = '関連受注番号',
  NAME = '得意先名',
  ORDER_BRANCH = '受注支店',
  RESPONSIBLE_BRANCH = '担当支店',
  RESPONSIBLE_PERSON = '受注担当者',
  DISTRIBUTOR = '配車担当者',
  BILLING_BRACH = '請求支店',
  SUBCATEGORY = '小分類',
  EXCLUSIVE = '貸切',
  OTHERS = 'その他',
  NUMBER_UNIT_REQUESTED = '要望台数',
  VEHICLE_CLASS = '要望車格オプション',
  RECEIPT_NUMBER = '受付番号',
  CUSTOMER_NAME = '顧客名',
  STATUS = 'ステータス',
  COURSE_ALLOCATION = 'コース割付',
  COURSE_ID = 'コースID',
  REMARKS = '備考',
  CREATE_BY = '作成者',
  LAST_UPDATE_BY = '最終更新者',
  VEHICLE_SIZE = '要望車格',
  TYPE = '種別',
  DATE = '積込日',
  LINK_SSCV = 'SSCV連携',
  UNLOAD_DATE = '荷卸日',
  REQUEST_OPTIONS = '要望オプション',
}

export enum LOADING_INFO {
  LOADING_DESTINATION_AREA = '積込先(エリア)',
  DESTINATION_NAME = '積込先名称',
  DESTINATION_CONFERENCE = '積込先作業店',
  DESTINATION_CONSOLIDATION = '積込先集約店',
  DESTINATION_AREA = '積込先（エリア）',
  DESTINATION_PREFECTURE = '積込先（都道府県）',
  DESTINATION_CITY = '積込先（市区町村)',
  LOADING_NOTES = '積込注記',
  APPOINTMENT_TIME = '積込アポ時間',
  CUSTOM_REPRESENTATIVE = 'お客様担当者',
  CUSTOM_CONTACT = 'お客様連絡先',
  START_DATE_END_DATE = '開始日/終了日',
  DESIRED_LOADING_DATE = '積込希望日',
  PREFERRED_TIME_SLOT = '希望時間帯',
  DATE = '積込日',
  CONTACT = '連絡先',
  ADDRESS = '住所',
  PRECAUTIONS = '注意事項',
  ARRIVAL_DATE = '到着日時(実績)',
  DEPARTURE_DATE = '出発日時(実績)',
  START_DATE = '開始日時(実績)',
  END_DATE = '終了日時(実績)',
}

export enum UNLOADING_INFO {
  NAME_UNLOADING_DESTINATION = '荷卸先名称',
  UNLOADING_DESTINATION = '荷卸先(エリア)',
  UNLOADING_DESTINATION_PREFECTURE = '荷卸先(都道府県)',
  UNLOADING_DESTINATION_CITY = '荷卸先(市区町村)',
  DESIRED_UNLOADING_DATE = '荷卸希望日',
}

export enum DISTRIBUTE_INFO {
  REQUEST_BY = '依頼先',
  COMPANY = '実走会社',
  VEHICLE_NUM = '車番',
  FULL_VEHICLE_NUM = 'フル車番',
  DRIVER = 'ドライバー',
  DRIVER_CONTACT = 'ドライバー連絡先',
  VEHICLE_CLASS = '車格',
  PASSENGER_NAME = '同乗者名',
  SUBCONTRACTORS = '下請け業者数',
}

export enum MORE_INFO {
  DISTANCE = '距離',
  CUBIC_METERS = '立米',
  BAGGAGE_NAME = '荷物名',
  PACKAGING = '荷姿',
  WEIGHT = '重量',
  QUANTITY = '重量',
  TALENT = '才数',
}

export enum ORDER_STATUS {
  INCOMPLETE = 0,
  COMPLETE,
  WAITING_LIST,
}

export enum COURSE_ALLOCATION {
  NOT_ASSIGNED = 0,
  CONFIRMED,
  ALLOCATED,
}

export const orderListEdit = [
  { id: '1', label: '受注番号', show: true },
  {
    id: '2',
    label: 'ステータス',
    show: false,
  },
  {
    id: '3',
    label: 'コース割付',
    show: false,
  },
  {
    id: '4',
    label: '得意先名',
    show: false,
  },
  {
    id: '5',
    label: '積市区町村',
    show: true,
  },
  {
    id: '6',
    label: '積込区町村',
    show: true,
  },
  {
    id: '7',
    label: '積込先',
    show: true,
  },
  {
    id: '8',
    label: '積込町村',
    show: true,
  },
  {
    id: '9',
    label: '込(市区町村)',
    show: true,
  },
  {
    id: '10',
    label: '区町村',
    show: true,
  },
  {
    id: '11',
    label: '積込',
    show: true,
  },
];

export const divisions = [
  {
    label: '1',
    value: '1',
  },
  {
    label: '2',
    value: '2',
  },
  {
    label: '3',
    value: '3',
  },
  {
    label: '4',
    value: '4',
  },
  {
    label: '5',
    value: '5',
  },
];

export const linkHref: LinkHref[] = [
  {
    text: '基本情報',
    link: 'basic_information',
  },
  {
    text: '積込情報',
    link: 'loading_information',
  },
  {
    text: '荷卸情報',
    link: 'unloading_information',
  },
  {
    text: '配車情報',
    link: 'dispatch_information',
  },
  {
    text: '詳細情報',
    link: 'more_information',
  },
  {
    text: '金額情報',
    link: 'amount_information',
  },
];

export const ORDER_TYPE = {
  MOVING: 'moving',
  MASTER: 'master',
  LOGISTICS: 'logistic',
};

export const ORDER_TYPE_LABEL = {
  [ORDER_TYPE.MOVING]: '引越',
  [ORDER_TYPE.MASTER]: '混載',
  [ORDER_TYPE.LOGISTICS]: '一般',
};

export const IMPORT_ORDER = {
  excel: 'Excel',
  csv: 'CSV',
  commonCsv: '共通CSV',
  spreadsheet: 'スプレッドシート',
};
