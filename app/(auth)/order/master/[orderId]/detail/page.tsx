'use client';

import DetailRow from '@/app/components/common/DetailRow';
import StickyAction from '@/app/components/order/StickyAction';
import { linkHref } from '@/app/constants/order.const';
import { useLayoutPage } from '@/app/store/layoutPage';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next-nprogress-bar';
import React, { useEffect } from 'react';
import { Home } from '@/app/components/svg';

/**
 *
 * @page ORD0207
 */

interface MasterOrderDetail {
  params: {
    orderId: string;
  };
}

export default function ConfirmCreateOrderMaster({
  params,
}: MasterOrderDetail) {
  const router = useRouter();

  const redirectToCreateOrderMaster = () => {
    router.push('/order/master/search');
  };

  const handleUpdateMasterOrder = () => {
    router.push('/order/master/edit');
  };

  const saveBreadcrumbs = useLayoutPage((state) => state.saveBreadcrumbs);
  useEffect(() => {
    saveBreadcrumbs([
      {
        href: '/dashboard',
        text: 'ホーム',
      },
      {
        href: '/order/master',
        text: '受注マスタ',
      },
      {
        href: '/order/master/create',
        text: '詳細',
      },
    ]);
  }, [saveBreadcrumbs]);

  return (
    <div className='w-full scroll-smooth px-10 pb-20 pt-6'>
      <div className='flex gap-9'>
        <div className='flex flex-1 flex-col gap-10'>
          <div className='flex items-center gap-4 font-bold'>
            <span className='font-bold text-color-label'>受注マスタID</span>
            <span className='text-2xl leading-[30px]'>0012572100</span>
            <div className='flex h-[29px] w-[66px] items-center justify-center gap-[7px] rounded-sm border border-color-border bg-color-gray text-sm font-bold leading-[14px] text-color-selected'>
              <Home /> <span>一般</span>
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
                      label: '得意先名',
                      content: '株式会社ナカノ商会　茨城',
                    },
                  ]}
                />
                <DetailRow
                  items={[
                    {
                      label: '受注支店',
                      content: '大阪支店',
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
                      content: '田中智也',
                    },
                    {
                      label: '配車担当者',
                      content: '鈴木太郎',
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
                      content: '４tゲート車',
                    },
                    {
                      label: 'その他',
                      content: '２マン希望',
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
                      label: '備考',
                      content: '毎週積込あり。',
                    },
                  ]}
                />
                <DetailRow
                  items={[
                    {
                      label: '作成者',
                      content: '鈴木太郎',
                    },
                    {
                      label: '最終更新者',
                      content: '佐藤花子',
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
                      label: '積込先名称',
                      content: 'DWJ3尼崎LDS',
                    },
                    {
                      label: '積込先(エリア)',
                      content: '近畿',
                    },
                  ]}
                />
                <DetailRow
                  items={[
                    {
                      label: '積込先(都道府県)',
                      content: '兵庫県',
                    },
                    {
                      label: '積込先(市区町村)',
                      content: '尼崎市末広町',
                    },
                  ]}
                />
                <DetailRow
                  items={[
                    {
                      label: '住所',
                      content: '1-5-1',
                    },
                  ]}
                />
                <DetailRow
                  items={[
                    {
                      label: 'お客様担当者 ',
                      content: '田中太郎',
                    },
                    {
                      label: 'お客様連絡先',
                      content: '01564-2-2067',
                    },
                  ]}
                />
                <DetailRow
                  items={[
                    {
                      label: '開始日/終了日',
                      content: '23年8月27日（月）〜 2024年8月29日（水）',
                    },
                  ]}
                />
                <DetailRow
                  items={[
                    {
                      label: '積込希望日',
                      content: '火曜日',
                    },
                    {
                      label: '希望時間帯',
                      content: '08:00-10:00',
                    },
                  ]}
                />
                <DetailRow
                  items={[
                    {
                      label: '注意事項',
                      content: '火曜日が祝日の場合は翌日荷卸',
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
                      label: '荷卸先名称',
                      content: '大阪市北区中之島',
                    },
                    {
                      label: '荷卸先(エリア)',
                      content: '近畿',
                    },
                  ]}
                />
                <DetailRow
                  items={[
                    {
                      label: '荷卸先(都道府県)',
                      content: '大阪府',
                    },
                    {
                      label: '荷卸先(市区町村)',
                      content: '大阪市北区中之島',
                    },
                  ]}
                />
                <DetailRow
                  items={[
                    {
                      label: '住所',
                      content: '１－３１ ○○ヒルズ ６６６号室',
                    },
                  ]}
                />
                <DetailRow
                  items={[
                    {
                      label: 'お客様担当者',
                      content: '竹下由美子',
                    },
                    {
                      label: 'お客様連絡先',
                      content: '01564-2-4628',
                    },
                  ]}
                />
                <DetailRow
                  items={[
                    {
                      label: '荷卸希望日',
                      content: '当日',
                    },
                    {
                      label: '希望時間帯',
                      content: '08:00-10:00',
                    },
                  ]}
                />
                <DetailRow
                  items={[
                    {
                      label: '注意事項',
                      content: '火曜日が祝日の場合は翌日荷卸',
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
                      content: '-',
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
                      content: '30 km',
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
                      content: '1.24t',
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
                <div className='jusfy-between flex items-center gap-2'>
                  <div className='text-lg font-bold leading-[22.5px] text-color-base'>
                    売上金額合計
                  </div>
                  <hr className='flex-1 border-dashed border-color-border' />
                  <div className='flex items-center gap-[2px] font-roboto text-[28px] font-bold leading-[32.81px] text-color-base'>
                    10,000
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
                    1回あたりの運賃
                  </div>
                  <div className='flex items-start gap-[2px] pl-[13px]'>
                    <div className='font-roboto text-base font-bold leading-5 text-color-base'>
                      10,000
                    </div>
                    <div className='text-xs font-normal leading-[15px] text-color-base'>
                      円
                    </div>
                  </div>
                </div>
              </div>

              <div className='flex w-full flex-col gap-[10px] bg-color-gray px-5 py-4'>
                <div className='jusfy-between flex items-center gap-2'>
                  <div className='text-lg font-bold leading-[22.5px] text-color-base'>
                    支払金額合計
                  </div>
                  <hr className='flex-1 border-dashed border-color-border' />
                  <div className='flex items-center gap-[2px] font-roboto text-[28px] font-bold leading-[32.81px] text-color-base'>
                    8,000
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
                    1回あたりの運賃
                  </div>
                  <div className='flex items-start gap-[2px] pl-[13px]'>
                    <div className='font-roboto text-base font-bold leading-5 text-color-base'>
                      8,000
                    </div>
                    <div className='text-xs font-normal leading-[15px] text-color-base'>
                      円
                    </div>
                  </div>
                </div>
              </div>

              <div className='flex items-center justify-center gap-6'>
                <Button
                  className='min-h-[54px] min-w-[224px] rounded border-1 border-primary text-base font-bold leading-5'
                  color='primary'
                  variant='bordered'
                  onClick={redirectToCreateOrderMaster}
                >
                  受注マスタ一覧に戻る
                </Button>
                <Button
                  className='min-h-[54px] min-w-[224px] rounded text-base font-bold leading-5'
                  color='primary'
                  onClick={handleUpdateMasterOrder}
                >
                  編集
                </Button>
                <Button
                  className='min-h-[54px] min-w-[224px] rounded text-base font-bold leading-5'
                  color='danger'
                >
                  削除
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className='relative min-w-[225px]'>
          <div className='fixed'>
            <div className='flex justify-end'>
              <Button
                className='min-h-[36px] rounded border-1 border-primary text-sm font-bold leading-5'
                color='primary'
                variant='bordered'
              >
                このマスタを複製
              </Button>
            </div>
            <StickyAction labelSticky={[]} LinkHref={linkHref} />
            <div className='flex flex-col gap-2'>
              <Button
                className='min-h-[54px] rounded text-base font-bold leading-5'
                color='primary'
                onClick={handleUpdateMasterOrder}
              >
                編集
              </Button>

              <Button
                className='min-h-[54px] rounded border-1 border-primary text-base font-bold leading-5'
                color='primary'
                variant='bordered'
                onClick={redirectToCreateOrderMaster}
              >
                受注マスタ一覧に戻る
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
