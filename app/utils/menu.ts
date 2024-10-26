interface MenuItemChild {
  text: string;
  link: string;
}

interface MenuItem {
  text: string;
  link: string;
  hasChild: boolean;
  child?: MenuItemChild[];
}

export const menuItem: MenuItem[] = [
  {
    text: 'ホーム',
    link: '/dashboard',
    hasChild: false,
  },
  {
    text: '受注一覧',
    link: '/order/logistic',
    hasChild: true,
    child: [
      {
        text: '一般',
        link: '/order/logistic',
      },
      {
        text: 'コース一覧',
        link: '/course',
      },
    ],
  },
  {
    text: '受注マスタ',
    link: '/order/master',
    hasChild: false,
  },
  {
    text: 'コース一覧',
    link: '/course',
    hasChild: false,
  },
  {
    text: '経費一覧',
    link: '#',
    hasChild: false,
  },
  {
    text: '実績確定',
    link: '#',
    hasChild: true,
    child: [
      {
        text: '売上',
        link: '#',
      },
      {
        text: '支払',
        link: '#',
      },
    ],
  },
  {
    text: '請求一覧',
    link: '#',
    hasChild: false,
  },
  {
    text: '支払一覧',
    link: '#',
    hasChild: false,
  },
  {
    text: '財務会計データ',
    link: '#',
    hasChild: false,
  },
  {
    text: '予算管理',
    link: '#',
    hasChild: false,
  },
  {
    text: '分析',
    link: '#',
    hasChild: false,
  },
  {
    text: 'BSS',
    link: '#',
    hasChild: false,
  },
  {
    text: 'マスタ管理',
    link: '#',
    hasChild: true,
    child: [
      {
        text: 'ユーザー',
        link: '#',
      },
      {
        text: '拠点',
        link: '#',
      },
      {
        text: '社員',
        link: '#',
      },
      {
        text: '車両',
        link: '#',
      },
      {
        text: '請求運賃タリフ',
        link: '#',
      },
      {
        text: 'お知らせ管理',
        link: '#',
      },
      {
        text: '法人',
        link: '#',
      },
      {
        text: '取引先',
        link: '#',
      },
      {
        text: '得意先',
        link: '#',
      },
      {
        text: '協力会社',
        link: '#',
      },
      {
        text: '支店',
        link: '#',
      },
    ],
  },
  {
    text: 'アカウント設定',
    link: '#',
    hasChild: false,
  },
];
