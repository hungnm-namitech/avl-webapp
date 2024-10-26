'use client';

import DetailRow from '@/app/components/common/DetailRow';
import StickyAction from '@/app/components/order/StickyAction';
import Bill from '@/app/components/svg/order/Bill';
import { linkHref } from '@/app/constants/order.const';
import { useLayoutPage } from '@/app/store/layoutPage';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next-nprogress-bar';
import React, { useEffect } from 'react';

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
 * @page ORD0109
 */

export default function ConfirmCreateOrderLogistic() {
  const router = useRouter();

  const redirectToCreateOrderLogistic = () => {
    router.push('/order-list/logistic/create');
  };

  const saveBreadcrumbs = useLayoutPage((state) => state.saveBreadcrumbs);
  useEffect(() => {
    saveBreadcrumbs([
      {
        href: '/dashboard',
        text: 'ホーム',
      },
      {
        href: '/order/logistic',
        text: '受注一覧',
      },
      {
        href: '/order/logistic/create',
        text: '受注作成',
      },
    ]);
  }, [saveBreadcrumbs]);

  return (
    <div className='w-full scroll-smooth px-10 pb-20 pt-6'>
      <div className='flex gap-9'>
        <div className='flex flex-1 flex-col gap-16 pt-[65px]'>
          <div className='flex flex-col gap-6' id='basic_information'>
            <div className='border-b-[3px] border-primary pb-3 text-xl font-bold leading-[25px] text-primary'>
              基本情報
            </div>

            <div>
              <DetailRow
                items={[
                  {
                    label: '受注日',
                    content: '23/8/10 (木)',
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
                    content: '株式会社ナカノ商会 茨木',
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
                    label: '担当支店',
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
                    label: '請求支店',
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
                    content: '貸切',
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
                    content: '3マン配送',
                  },
                ]}
              />
              <DetailRow
                items={[
                  {
                    label: '要望台数',
                    content: '3',
                  },
                ]}
              />
              <DetailRow
                items={[
                  {
                    label: 'お客様関連ID①',
                    content: '',
                  },
                  {
                    label: 'お客様関連ID②',
                    content: '',
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
              <DetailRow
                items={[
                  {
                    label: '添付資料',
                    content: '',
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
                    label: '積込日',
                    content: '23/8/14 (日)',
                  },
                  {
                    label: '積込時間',
                    content: '12:00',
                  },
                ]}
              />
              <DetailRow
                items={[
                  {
                    label: '最終積込時間',
                    content: '13:00',
                  },
                ]}
              />
              <DetailRow
                items={[
                  {
                    label: '積込先名称 ',
                    content: 'DWJ3尼崎LDS',
                  },
                  {
                    label: '積込先（エリア）',
                    content: '近畿',
                  },
                ]}
              />
              <DetailRow
                items={[
                  {
                    label: '積込先（都道府県）',
                    content: '兵庫県',
                  },
                  {
                    label: '積込先（市区町村）',
                    content: '尼崎市',
                  },
                ]}
              />
              <DetailRow
                items={[
                  {
                    label: '積込先（住所）',
                    content: '兵庫県尼崎市末広町1-5-1 ',
                  },
                ]}
              />
              <DetailRow
                items={[
                  {
                    label: 'お客様担当者',
                    content: '山田浩介',
                  },
                  {
                    label: 'お客様連絡先',
                    content: '090-4754-3802',
                  },
                ]}
              />
              <DetailRow
                items={[
                  {
                    label: '注意事項',
                    content: '',
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
                    label: '荷卸日',
                    content: '23/8/14 (月)',
                  },
                  {
                    label: '荷卸時間',
                    content: '17:00',
                  },
                ]}
              />
              <DetailRow
                items={[
                  {
                    label: '荷卸先名称',
                    content: 'OOO3東淀川XPT',
                  },
                  {
                    label: '荷卸先（エリア）',
                    content: '近畿',
                  },
                ]}
              />
              <DetailRow
                items={[
                  {
                    label: '荷卸先(都道府県) ',
                    content: '大阪府',
                  },
                  {
                    label: '荷卸先(市区町村)',
                    content: '大阪市',
                  },
                ]}
              />
              <DetailRow
                items={[
                  {
                    label: '住所',
                    content: '浪速区',
                  },
                ]}
              />
              <DetailRow
                items={[
                  {
                    label: '開始日時(実績)',
                    content: '-',
                  },
                  {
                    label: '終了日時(実績)',
                    content: '-',
                  },
                ]}
              />
              <DetailRow
                items={[
                  {
                    label: '注意事項',
                    content: '',
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
                    content: '',
                  },
                ]}
              />
              <DetailRow
                items={[
                  {
                    label: '荷物名',
                    content: '家具部品',
                  },
                  {
                    label: '荷姿',
                    content: 'ケース',
                  },
                ]}
              />
              <DetailRow
                items={[
                  {
                    label: '重量',
                    content: '1,240 km',
                  },
                  {
                    label: '数量',
                    content: '30',
                  },
                ]}
              />
              <DetailRow
                items={[
                  {
                    label: '才数',
                    content: '',
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
              <div className='flex items-center justify-between'>
                <div className='text-xl font-bold leading-[25px] text-color-base'>
                  案件収支
                </div>
                <div className='flex items-end gap-1 font-roboto text-[32px] font-bold leading-[37.5px] text-color-base'>
                  1,000
                  <div className='text-base font-bold leading-[19.36px] text-color-base'>
                    円
                  </div>
                </div>
              </div>

              <hr className='border-white' />

              <div className='jusfy-between flex items-center gap-2'>
                <div className='text-lg font-bold leading-[22.5px] text-color-base'>
                  売上金額合計
                </div>
                <hr className='flex-1 border-dashed border-color-border' />
                <div className='flex items-center gap-[2px] font-roboto text-[28px] font-bold leading-[32.81px] text-color-base'>
                  1,000
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

              <div className='flex justify-between gap-[10px] pr-[72px]'>
                <div className='min-w-[100px] text-sm font-bold leading-[17.5px] text-color-label'>
                  高速代
                </div>
                <div className='flex-1 text-sm font-bold leading-[17.5px] text-color-label'>
                  積み地待機のため、交渉済み
                </div>
                <div className='min-w-10'>
                  <Bill />
                </div>
                <div className='flex items-start gap-[2px] pl-[13px]'>
                  <div className='font-roboto text-base font-bold leading-5 text-color-base'>
                    1,000
                  </div>
                  <div className='text-xs font-normal leading-[15px] text-color-base'>
                    円
                  </div>
                </div>
              </div>

              <div className='flex items-center justify-between gap-2'>
                <div className='text-lg font-bold leading-[22.5px] text-color-base'>
                  支払金額合計
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
                    7,500
                  </div>
                  <div className='text-xs font-normal leading-[15px] text-color-base'>
                    円
                  </div>
                </div>
              </div>

              <div className='flex justify-between gap-[10px] pr-[72px]'>
                <div className='min-w-[100px] text-sm font-bold leading-[17.5px] text-color-label'>
                  高速代
                </div>
                <div className='flex-1 text-sm font-bold leading-[17.5px] text-color-label'>
                  積み地待機のため、交渉済み
                </div>
                <div className='min-w-10'>
                  <Bill />
                </div>
                <div className='flex items-start gap-[2px] pl-[13px]'>
                  <div className='font-roboto text-base font-bold leading-5 text-color-base'>
                    1,000
                  </div>
                  <div className='text-xs font-normal leading-[15px] text-color-base'>
                    円
                  </div>
                </div>
              </div>

              <div className='flex justify-between gap-[10px] pr-[72px]'>
                <div className='min-w-[100px] text-sm font-bold leading-[17.5px] text-color-label'>
                  待機料
                </div>
                <div className='flex-1 text-sm font-bold leading-[17.5px] text-color-label'>
                  ・・・・・・・
                </div>
                <div className='min-w-10'></div>
                <div className='flex items-start gap-[2px] pl-[13px]'>
                  <div className='font-roboto text-base font-bold leading-5 text-color-base'>
                    500
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
                <div className='flex flex-1 flex-col gap-3 bg-white px-4 py-5'>
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

                <div className='flex flex-1 flex-col gap-3 bg-white px-4 py-5'>
                  <div className='w-full border-b border-color-border pb-2 text-xs font-bold leading-[15px] text-color-base'>
                    支払
                  </div>

                  <div className='flex items-center justify-between gap-2'>
                    <div className='text-sm font-bold leading-[17.5px] text-color-label'>
                      支払基準日
                    </div>
                    <hr className='flex-1 border-dashed border-color-border' />
                    <div className='text-sm font-normal leading-[17.5px]'>
                      23/08/14
                    </div>
                  </div>

                  <div className='flex items-center justify-between gap-2'>
                    <div className='text-sm font-bold leading-[17.5px] text-color-label'>
                      支払締日
                    </div>
                    <hr className='flex-1 border-dashed border-color-border' />
                    <div className='text-sm font-normal leading-[17.5px]'>
                      翌月末
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
                onClick={redirectToCreateOrderLogistic}
              >
                内容を修正
              </Button>
              <Button
                className='min-h-[54px] min-w-[224px] rounded text-base font-bold leading-5'
                color='primary'
                onPress={() => router.push('/course/delete-completion')}
              >
                確定
              </Button>
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
                onPress={() => router.push('/course/delete-completion')}
              >
                確定
              </Button>

              <Button
                className='min-h-[54px] rounded border-1 border-color-base text-base font-bold leading-5'
                color='primary'
                variant='bordered'
                onClick={redirectToCreateOrderLogistic}
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
