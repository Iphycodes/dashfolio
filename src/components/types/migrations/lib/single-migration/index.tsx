import { NextArrow, PrevArrow } from '@/_shared/components/nav-arrows';
import { mediaSize, useMediaQuery } from '@/_shared/components/responsiveness';
import StatisticsCard from '@/components/types/migrations/lib/statistics-card';
import { Skeleton, Tag } from 'antd';
import { capitalize, isEmpty, startCase } from 'lodash';
import moment from 'moment';
import { useRouter } from 'next/navigation';
import React from 'react';
import Slider from 'react-slick';

interface SingleMigrationProps {
  singleMigrationData: Record<string, any>;
  isLoadingSingleMigrationData: boolean;
}

const SingleMigration = ({
  singleMigrationData,
  isLoadingSingleMigrationData,
}: SingleMigrationProps) => {
  const isMobile = useMediaQuery(mediaSize.mobile);
  const router = useRouter();

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    centerMode: false,
    slidesToScroll: 1,
    swipeToSlide: true,
    slidesToShow: isMobile ? 1 : 4,
  };

  return (
    <div className="w-full">
      <span
        className={`text-muted-foreground ${isMobile ? 'mr-4' : 'mr-8'} cursor-pointer text-[18px] font-semibold`}
        onClick={() => router.push('/migrations')}
      >
        &larr; Back
      </span>
      <Slider
        {...settings}
        nextArrow={<NextArrow />}
        prevArrow={<PrevArrow />}
        className="mt-10 mb-5"
      >
        {(isEmpty(singleMigrationData)
          ? Object.entries({
              a: '',
              b: '',
              c: '',
              d: '',
            })
          : Object.entries(singleMigrationData?.stats ?? {})
        ).map(([key, value], idx: number) => {
          const typedValue: Record<string, any> | any = value;
          return (
            <div className="pr-3">
              <StatisticsCard
                key={`${idx}`}
                title={startCase(capitalize(key)) ?? ''}
                value={typedValue?.total ?? 0}
                style={{ flex: 1 }}
                extraLabel="migrated"
                isLoading={isLoadingSingleMigrationData}
              />
            </div>
          );
        })}
      </Slider>
      <div className="text-[20px] mb-3 font-semibold">Details</div>
      <Skeleton
        loading={isLoadingSingleMigrationData}
        active={true}
        title={false}
        paragraph={{ rows: 7 }}
      >
        <div className="flex flex-col gap-3">
          <div className="flex items-center text-[16px]">
            <span className="w-52">Id:</span>
            <span>{singleMigrationData?._id}</span>
          </div>

          <div className="flex items-center text-[16px]">
            <span className="w-52">Date:</span>
            <span>{moment(singleMigrationData?.createdAt).format('MMM DD, YYYY hh:mm A')}</span>
          </div>
          <div className="flex items-center text-[16px]">
            <span className="w-52">Status:</span>
            <Tag
              color={
                singleMigrationData?.status === 'completed'
                  ? 'success'
                  : singleMigrationData?.status === 'partial'
                    ? 'processing'
                    : 'error'
              }
            >
              {startCase(capitalize(singleMigrationData?.status ?? ''))}
            </Tag>
          </div>
          <div className="flex items-center text-[16px]">
            <span className="w-52">Error Count:</span>
            <span>{singleMigrationData?.errors?.[0]?.errorCount}</span>
          </div>
          <div className="flex items-center text-[16px]">
            <span className="w-52">Migrated Count:</span>
            <span>{singleMigrationData?.migrated?.[0]?.migratedCount}</span>
          </div>
          <div className="flex items-center text-[16px]">
            <span className="w-52">Source:</span>
            <span>{singleMigrationData?.data?.sourceService}</span>
          </div>
          <div className="flex items-center text-[16px]">
            <span className="w-52">Destination:</span>
            <span>{singleMigrationData?.data?.destination}</span>
          </div>
          <div className="flex items-center text-[16px]">
            <span className="w-52">Types:</span>
            <span className="flex gap-1 flex-wrap">
              {(singleMigrationData?.data?.types ?? [])?.map((value: any) => (
                <Tag color="cyan" bordered>
                  {value}
                </Tag>
              ))}
            </span>
          </div>
          <div className="flex items-center text-[16px]">
            <span className="w-52">Services:</span>
            <span className="flex gap-1 flex-wrap">
              {(singleMigrationData?.data?.services ?? [])?.map((value: any) => (
                <Tag color="purple" bordered>
                  {value}
                </Tag>
              ))}
            </span>
          </div>
        </div>
      </Skeleton>
    </div>
  );
};

export default SingleMigration;
