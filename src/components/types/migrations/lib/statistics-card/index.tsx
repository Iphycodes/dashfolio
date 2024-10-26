'use client';

import { formatNumber, numberFormat } from '@/_shared/helpers';
import { Skeleton } from 'antd';
import Circle from 'react-circle';

interface StatisticsCardProps {
  title?: string;
  value?: number;
  percentage?: number;
  key?: string;
  style?: React.CSSProperties;
  color?: string;
  isMobile?: boolean;
  extraValue?: number;
  extraLabel?: string;
  amount?: number;
  isLoading?: boolean;
}

const StatisticsCard = (props: StatisticsCardProps) => {
  const { style, color, value, title, percentage, isMobile, extraValue, extraLabel, amount, isLoading } =
    props;

  return (
    <div
      className={`w-full transaction-stat-card min-h-full h-full min-w-40 dark:bg-card-background border dark:border-gray-500 rounded-xl shadow-md ${percentage === undefined ? 'py-7' : 'py-5'} px-3 scale-100 hover:scale-105 transition-transform duration-300 ease-in-out `}
      style={{ ...style }}
    >
      {isLoading ? (
        <Skeleton loading={isLoading} active={true} title={false} paragraph={{ rows: 2 }} />
      ) : (
        <div className="flex flex-col h-full justify-between gap-3">
          <div
            className={`text-gray-500 font-bold w-full text-center dark:text-gray-100 ${
              isMobile && 'text-[12px]'
            }`}
          >
            {title}
          </div>
          <div className="flex flex-col w-full text-center gap-0">
            <span className={`amount font-semibold text-lg dark:text-gray-100`}>
              {amount !== undefined
                ? (numberFormat(amount / 100, '₦ ') ?? '₦ 0.00')
                : (formatNumber(value ?? 0, 1) ?? '')}
            </span>
          </div>
          {extraValue !== undefined && (
            <div
              className={`flex items-center ${isMobile ? `text-[1px]` : 'text-[14px]'} justify-center gap-1`}
            >
              <span>{`${extraLabel}:`}</span>
              <span>{formatNumber(extraValue ?? 0, 1) ?? ''}</span>
            </div>
          )}
          {percentage !== undefined && (
            <div className={`flex justify-end`}>
              <Circle
                animate={true}
                animationDuration="2s"
                roundedStroke={true}
                progress={parseFloat(percentage?.toFixed(1) ?? '0') ?? 0} // Specifies the fill percentage of the inner red border
                progressColor={color ?? 'rgb(30 136 229)'} // Sets the color of the inner red border
                bgColor="transparent" // Sets the background color as transparent
                lineWidth={'30'} // Sets the thickness of the blue border
                textStyle={{ fontSize: '5rem', fontWeight: '700' }} // Customizes the text style if needed
                size={isMobile ? '40' : '50'} // Sets the size of the circle
                textColor="hsl(var(--muted-foreground))"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default StatisticsCard;
