'use client';

import DetailRow from '@/app/components/common/DetailRow';
import StickyAction from '@/app/components/order/StickyAction';
import { linkHref } from '@/app/constants/order.const';
import { useLayoutPage } from '@/app/store/layoutPage';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next-nprogress-bar';
import React, { useEffect } from 'react';
import { Home } from '@/app/components/svg';

const labelSticky: LabelSticky[] = [
  {
    text: '入力',
    selected: false,
  },
  {
    text: '確認',
    selected: true,
  },
  {
    text: '完了',
    selected: false,
  },
];

/**
 *
 * @page ORD0110
 */

export default function ConfirmCreateOrderLogistic() {
  const router = useRouter();

  const redirectToOrderMovingUpdate = () => {
    router.push('/order/moving/update');
  };

  const saveBreadcrumbs = useLayoutPage((state) => state.saveBreadcrumbs);
  useEffect(() => {
    saveBreadcrumbs([
      {
        href: '/dashboard',
        text: 'ホーム',
      },
      {
        href: '/order/moving',
        text: '受注一覧',
      },
      {
        href: '/order/moving/create',
        text: '受注確認',
      },
    ]);
  }, [saveBreadcrumbs]);

  return (
    <div className='w-full scroll-smooth px-10 pb-20 pt-6'>
      <div className='flex gap-9'>
        <div className='flex flex-1 flex-col gap-10'>
          <div className='flex items-center gap-4 font-bold'>
            <span className='text-2xl font-bold text-color-base'>受注編集</span>
            <span className='text-base font-bold text-color-label'>
              受注番号
            </span>
            <span className='text-2xl leading-[30px]'>0012436200</span>
            <div className='flex h-[29px] w-[66px] items-center justify-center gap-[7px] rounded-sm border border-color-border bg-color-gray text-sm font-bold leading-[14px] text-color-selected'>
              <Home /> <span>引越</span>
            </div>
          </div>

          <div className='flex flex-1 flex-col gap-16'>
            <div className='flex flex-col gap-6' id='basic_information'>
              <div className='border-b-[3px] border-primary pb-3 text-xl font-bold leading-[25px] text-primary'>
                基本情報
              </div>

              <div>
                <DetailRow
                  items={[
                    {
                      label: '受注日',
                      content: '23/08/06 (日)',
                    },
                    {
                      label: '関連受注番号',
                      content: '0012222200',
                    },
                  ]}
                />
                <DetailRow
                  items={[
                    {
                      label: '得意先名',
                      content: 'アート京都北支店',
                    },
                  ]}
                />
                <DetailRow
                  items={[
                    {
                      label: '受注支店',
                      content: '大阪北支店',
                    },
                    {
                      label: '配送担当支店',
                      content: '大阪支店',
                    },
                  ]}
                />
                <DetailRow
                  items={[
                    {
                      label: '受注担当者',
                      content: '鈴木太郎',
                    },
                    {
                      label: '配車担当者',
                      content: '佐藤花子',
                    },
                  ]}
                />
                <DetailRow
                  items={[
                    {
                      label: '請求担当支店',
                      content: '大阪支店',
                    },
                  ]}
                />
                <DetailRow
                  items={[
                    {
                      label: '小分類',
                      content: '04：幹線',
                    },
                    {
                      label: '貸切',
                      content: '',
                    },
                  ]}
                />
                <DetailRow
                  items={[
                    {
                      label: '要望車格オプション',
                      content: '４tゲート',
                    },
                    {
                      label: 'その他',
                      content: '2マン配送',
                    },
                  ]}
                />
                <DetailRow
                  items={[
                    {
                      label: '受付番号',
                      content: '7708-342491-01-1',
                    },
                    {
                      label: '顧客名',
                      content: '中村 博',
                    },
                  ]}
                />
                <DetailRow
                  items={[
                    {
                      label: '作成日',
                      content: '23/08/06 (日)',
                    },
                    {
                      label: '作成時間',
                      content: '11:00',
                    },
                  ]}
                />
                <DetailRow
                  items={[
                    {
                      label: '備考',
                      content: '11:00ごろ作業完了予定。',
                    },
                  ]}
                />
              </div>
            </div>

            <div className='flex flex-col gap-6' id='loading_information'>
              <div className='border-b-[3px] border-primary pb-3 text-xl font-bold leading-[25px] text-primary'>
                積込情報
              </div>

              <div>
                <DetailRow
                  items={[
                    {
                      label: '積込先作業店',
                      content: 'アート京都北支店',
                    },
                    {
                      label: '積込先集約店',
                      content: '',
                    },
                  ]}
                />
                <DetailRow
                  items={[
                    {
                      label: '積込先（エリア）',
                      content: '近畿',
                    },
                    {
                      label: '積込先（都道府県）',
                      content: '滋賀県',
                    },
                  ]}
                />
                <DetailRow
                  items={[
                    {
                      label: '積込先（市区町村）',
                      content: '米原市',
                    },
                    {
                      label: '積込日',
                      content: '23/08/13(日)',
                    },
                  ]}
                />
                <DetailRow
                  items={[
                    {
                      label: 'アポ時間',
                      content: '23/08/13 11:00',
                    },
                  ]}
                />
                <DetailRow
                  items={[
                    {
                      label: '引越作業注記',
                      content: '23/08/13 10:00ごろ 10:00～12:00',
                    },
                  ]}
                />
                <DetailRow
                  items={[
                    {
                      label: '顧客連絡先',
                      content: '03-1234-5678',
                    },
                  ]}
                />
                <DetailRow
                  items={[
                    {
                      label: '顧客住所',
                      content: '西円寺８０７ Ｙ＇ｓＧＡＲＡＧＥ西円寺１号室',
                    },
                    {
                      label: '注意事項',
                      content: '時間指定あり',
                    },
                  ]}
                />
              </div>
            </div>

            <div className='flex flex-col gap-6' id='unloading_information'>
              <div className='border-b-[3px] border-primary pb-3 text-xl font-bold leading-[25px] text-primary'>
                荷卸情報
              </div>

              <div>
                <DetailRow
                  items={[
                    {
                      label: '荷卸先作業店',
                      content: 'アート北九州支店',
                    },
                    {
                      label: '荷卸先集約店',
                      content: '',
                    },
                  ]}
                />
                <DetailRow
                  items={[
                    {
                      label: '荷卸先（エリア）',
                      content: '九州',
                    },
                    {
                      label: '荷卸先（都道府県）',
                      content: '福岡県',
                    },
                  ]}
                />
                <DetailRow
                  items={[
                    {
                      label: '荷卸先（市区町村）',
                      content: '福津市',
                    },
                    {
                      label: '荷卸日',
                      content: '23/08/14 (月)',
                    },
                  ]}
                />
                <DetailRow
                  items={[
                    {
                      label: 'アポ時間',
                      content: '23/08/14 09:00',
                    },
                  ]}
                />
                <DetailRow
                  items={[
                    {
                      label: '引越作業注記',
                      content: '23/08/14 10:00ごろ 10:00～12:00',
                    },
                  ]}
                />
                <DetailRow
                  items={[
                    {
                      label: '顧客連絡先',
                      content: '03-1234-5678',
                    },
                  ]}
                />
                <DetailRow
                  items={[
                    {
                      label: '顧客住所',
                      content:
                        '宮司２－１４－１２ ＮＹスタイルズ福津Ｅ棟Ｅ－１',
                    },
                    {
                      label: '注意事項',
                      content: '時間指定あり',
                    },
                  ]}
                />
              </div>
            </div>

            <div className='flex flex-col gap-6' id='dispatch_information'>
              <div className='border-b-[3px] border-primary pb-3 text-xl font-bold leading-[25px] text-primary'>
                配車情報
              </div>

              <div>
                <DetailRow
                  items={[
                    {
                      label: '依頼先',
                      content: '',
                    },
                  ]}
                />
              </div>
            </div>

            <div className='flex flex-col gap-6' id='more_information'>
              <div className='border-b-[3px] border-primary pb-3 text-xl font-bold leading-[25px] text-primary'>
                詳細情報
              </div>

              <div>
                <DetailRow
                  items={[
                    {
                      label: '距離',
                      content: '700 km',
                    },
                    {
                      label: '立米',
                      content: '1⁨⁩ m3',
                    },
                  ]}
                />
              </div>
            </div>

            <div className='flex flex-col gap-6' id='amount_information'>
              <div className='border-b-[3px] border-primary pb-3 text-xl font-bold leading-[25px] text-primary'>
                金額情報
              </div>

              <div className='flex w-full flex-col gap-[10px] bg-color-gray px-5 py-4'>
                <div className='jusfy-between flex items-center gap-2'>
                  <div className='text-lg font-bold leading-[22.5px] text-color-base'>
                    売上金額合計
                  </div>
                  <hr className='flex-1 border-dashed border-color-border' />
                  <div className='flex items-center gap-[2px] font-roboto text-[28px] font-bold leading-[32.81px] text-color-base'>
                    9,000
                    <div className='text-[12px] font-bold leading-[15px] text-color-base'>
                      円
                    </div>
                  </div>
                </div>

                <div className='flex justify-between gap-[10px] pr-[72px]'>
                  <div className='min-w-[100px] text-sm font-bold leading-[17.5px] text-color-label'>
                    運賃
                  </div>
                  <div className='flex-1 text-sm font-bold leading-[17.5px] text-color-label'>
                    基本の運賃
                  </div>
                  <div className='min-w-10'></div>
                  <div className='flex items-start gap-[2px] pl-[13px]'>
                    <div className='font-roboto text-base font-bold leading-5 text-color-base'>
                      9,000
                    </div>
                    <div className='text-xs font-normal leading-[15px] text-color-base'>
                      円
                    </div>
                  </div>
                </div>
              </div>

              <div className='-mt-[2px] flex flex-col gap-5 bg-color-gray p-5'>
                <div className='text-xl font-bold leading-[25px] text-color-base'>
                  会計情報
                </div>
                <div className='flex w-full gap-[10px]'>
                  <div className='flex max-w-[50%] flex-1 flex-col gap-3 bg-white px-4 py-5'>
                    <div className='w-full border-b border-color-border pb-2 text-xs font-bold leading-[15px] text-color-base'>
                      請求
                    </div>

                    <div className='flex items-center justify-between gap-2'>
                      <div className='text-sm font-bold leading-[17.5px] text-color-label'>
                        請求基準日
                      </div>
                      <hr className='flex-1 border-dashed border-color-border' />
                      <div className='text-sm font-normal leading-[17.5px]'>
                        23/08/14
                      </div>
                    </div>

                    <div className='flex items-center justify-between gap-2'>
                      <div className='text-sm font-bold leading-[17.5px] text-color-label'>
                        請求締日
                      </div>
                      <hr className='flex-1 border-dashed border-color-border' />
                      <div className='text-sm font-normal leading-[17.5px]'>
                        毎月20日
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='flex items-center justify-center gap-6'>
                <Button
                  className='min-h-[54px] min-w-[224px] rounded border-1 border-primary text-base font-bold leading-5'
                  color='primary'
                  variant='bordered'
                  onClick={redirectToOrderMovingUpdate}
                >
                  内容を修正
                </Button>
                <Button
                  className='min-h-[54px] min-w-[224px] rounded text-base font-bold leading-5'
                  color='primary'
                >
                  確定
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className='relative min-w-[225px]'>
          <div className='fixed'>
            <StickyAction labelSticky={labelSticky} LinkHref={linkHref} />
            <div className='flex flex-col gap-2'>
              <Button
                className='min-h-[54px] rounded text-base font-bold leading-5'
                color='primary'
              >
                確定
              </Button>

              <Button
                className='min-h-[54px] rounded border-1 border-color-base text-base font-bold leading-5'
                color='primary'
                variant='bordered'
                onClick={redirectToOrderMovingUpdate}
              >
                内容を修正
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
