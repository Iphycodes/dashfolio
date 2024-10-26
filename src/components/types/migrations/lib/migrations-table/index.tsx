import { ColumnsType } from 'antd/es/table';
import React from 'react';
import moment from 'moment';
import { capitalize, startCase } from 'lodash';
import { Skeleton, Tag } from 'antd';
import { Table } from 'antd/lib';
import { Pagination } from '@/_shared/namespace';
import { mediaSize, useMediaQuery } from '@/_shared/components/responsiveness';
import { useRouter } from 'next/navigation';

interface MigrationsTableProps {
  isLoadingMigrations: boolean;
  pagination: Pagination;
  migrationsData: Record<string, any>[];
  handleRowClick?: (record: any) => void;
}

const MigrationsTable = ({
  isLoadingMigrations,
  pagination,
  migrationsData,
  handleRowClick,
}: MigrationsTableProps) => {
  const isMobile = useMediaQuery(mediaSize.mobile);
  const { push } = useRouter();

  const columns: ColumnsType<any> = [
    {
      title: (
        <span className="flex text-[14px] font-semibold text-gray-500 items-center gap-1">
          <span>Date</span>
        </span>
      ),
      ellipsis: {
        showTitle: true,
      },
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (text) => {
        return <span>{moment(text).format('MMM DD, YYYY hh:mm A')}</span>;
      },
    },
    {
      title: (
        <span className="flex text-[14px] font-semibold text-gray-500 items-center gap-1">
          <span>Type</span>
        </span>
      ),
      dataIndex: 'data',
      //   width: '150px',
      key: 'type',
      ellipsis: {
        showTitle: false,
      },
      render: (values: any) => (
        <span className="flex gap-1 flex-wrap">
          {(values?.types ?? [])?.map((value: any) => (
            <Tag color="cyan" bordered>
              {value}
            </Tag>
          ))}
        </span>
      ),
    },
    {
      title: (
        <span className="flex text-[14px] font-semibold text-gray-500 items-center gap-1">
          <span className="w-full text-center">Source</span>
        </span>
      ),
      dataIndex: 'data',
      key: 'sourceService',
      width: '150px',
      align: 'center',
      render: (value) => (
        <span className=" font-semibold">{startCase(capitalize(value?.sourceService ?? ''))}</span>
      ),
    },
    {
      title: (
        <span className="flex text-[14px] font-semibold text-gray-500 items-center gap-1">
          <span className="w-full text-center">Destination</span>
        </span>
      ),
      dataIndex: 'data',
      key: 'destination',
      ellipsis: {
        showTitle: true,
      },
      align: 'center',
      render: (value) => (
        <span className=" font-semibold">{startCase(capitalize(value?.destination ?? ''))}</span>
      ),
    },
    {
      title: (
        <span className="flex text-[14px] font-semibold text-gray-500 items-center gap-1">
          <span>Services</span>
        </span>
      ),
      dataIndex: 'data',
      width: '200px',
      key: 'services',
      ellipsis: {
        showTitle: false,
      },
      render: (values: any) => (
        <span className="flex gap-1 flex-wrap">
          {(values?.services ?? [])?.map((value: any) => <Tag color="purple">{value}</Tag>)}
        </span>
      ),
    },
    {
      title: (
        <span className="flex text-[14px] font-semibold text-gray-500 items-center gap-1">
          <span>Status</span>
        </span>
      ),
      dataIndex: 'status',
      width: '150px',
      key: 'status',
      ellipsis: {
        showTitle: false,
      },
      render: (text) => (
        <Tag color={text === 'completed' ? 'success' : text === 'partial' ? 'processing' : 'error'}>
          {text}
        </Tag>
      ),
    },
    {
      title: (
        <span className="flex text-[14px] font-semibold text-gray-500 items-center gap-1">
          <span>Error count</span>
        </span>
      ),
      dataIndex: 'errors',
      width: '150px',
      key: 'error',
      ellipsis: {
        showTitle: false,
      },
      render: (text) => <span>{text[0]?.errorCount}</span>,
    },
    {
      title: (
        <span className="flex text-[14px] font-semibold text-gray-500 items-center gap-1">
          <span>Migrated count</span>
        </span>
      ),
      dataIndex: 'migrated',
      width: '150px',
      key: 'migrated',
      ellipsis: {
        showTitle: false,
      },
      render: (text) => <span>{text[0]?.migratedCount}</span>,
    },
    {
      //   title: (
      //     <span className="flex text-[14px] font-semibold text-gray-500 items-center gap-1">
      //       <span></span>
      //     </span>
      //   ),
      width: '150px',
      key: 'view',
      render: (_, record) => (
        <span
          className="hover:underline text-blue cursor-pointer"
          onClick={() => push(`/migrations/${record?._id}`)}
        >
          View Details
        </span>
      ),
    },
  ];

  const rowClick = (record: any) => ({
    onClick: () => handleRowClick?.(record),
  });

  return (
    <Skeleton active loading={isLoadingMigrations} paragraph={{ rows: 5 }}>
      <Table
        size="large"
        columns={columns}
        pagination={pagination}
        dataSource={migrationsData}
        scroll={{ x: isMobile ? true : 0 }}
        className={'transaction-table dark:bg-transparent dark:!text-white rounded-lg'}
        // rootClassName='bg-blue'
        rowClassName={'dark:hover:bg-[#000000]'}
        onRow={rowClick}
        loading={isLoadingMigrations}
      />
    </Skeleton>
  );
};

export default MigrationsTable;
