'use client';
import { migrationsUrl } from '@/_shared/constants';
import { fetchData } from '@/_shared/helpers';
import SingleMigration from '@/components/types/migrations/lib/single-migration';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

interface SingleMigrationPageProps {}

const SingleMigrationPage = ({}: SingleMigrationPageProps) => {
  const pathName = usePathname();
  const path = pathName?.split('/');
  const id = path[2];
  const [singleMigrationData, setSingleMigrationData] = useState<Record<string, any>>({});
  const [isLoadingSingleMigrationData, setIsLoadingMigrationData] = useState<boolean>(false);

  console.log('pathName', pathName);
  console.log('id', id);

  useEffect(() => {
    setIsLoadingMigrationData(true);
    fetchData(`${migrationsUrl}/${id}/status`, {})
      .then((data: any) => {
        console.log(data);
        setSingleMigrationData(data?.data ?? {});
        setIsLoadingMigrationData(false);
      })
      .catch((err: any) => {
        console.log(err);
        setIsLoadingMigrationData(false);
      });
  }, [id]);

  return (
    <SingleMigration
      singleMigrationData={singleMigrationData}
      isLoadingSingleMigrationData={isLoadingSingleMigrationData}
    />
  );
};

export default SingleMigrationPage;
