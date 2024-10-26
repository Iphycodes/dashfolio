'use client';
import { migrationsUrl } from '@/_shared/constants';
import { fetchData } from '@/_shared/helpers';
import Migrations from '@/components/types/migrations';
import { usePagination } from '@/hooks/usePagination';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const MigrationPage = () => {
  const { paginate, pagination, setTotal } = usePagination({ perPage: 5, title: 'migrations' });
  const [migrationsData, setMigrationsData] = useState<Record<string, any>[]>([]);
  const [isMigrationsLoading, setIsMigrationsLoading] = useState<boolean>(false);
  const { push } = useRouter();

  const migrationsParams = {
    ...paginate,
  };

  useEffect(() => {
    setIsMigrationsLoading(true);

    fetchData(migrationsUrl, {}, migrationsParams)
      .then((data: any) => {
        console.log('fetchhhhhhh', data);
        setMigrationsData(data?.data ?? []);
        setTotal(data?.meta?.pagination?.totalCount ?? 100);
        setIsMigrationsLoading(false);
      })
      .catch(() => {
        setIsMigrationsLoading(false);
      });
  }, [JSON.stringify(migrationsParams)]);

  const handleRowClick = (data: Record<string, any>) => {
    console.log(data);
    push(`/migrations/${data?._id ?? ''}`);
  };

  return (
    <Migrations
      migrationsData={migrationsData}
      isLoadingMigrations={isMigrationsLoading}
      pagination={pagination}
      handleRowClick={handleRowClick}
    />
  );
};

export default MigrationPage;
