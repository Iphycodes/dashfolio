import React from 'react';
import MigrationsTable from './lib/migrations-table';
import { Pagination } from '@/_shared/namespace';

interface MigrationsProps {
  isLoadingMigrations: boolean;
  pagination: Pagination;
  migrationsData: Record<string, any>[];
  handleRowClick?: (record: any) => void;
}

const Migrations = ({
  isLoadingMigrations,
  pagination,
  migrationsData,
  handleRowClick,
}: MigrationsProps) => {
  return (
    <div className="w-full">
      <MigrationsTable
        isLoadingMigrations={isLoadingMigrations}
        pagination={pagination}
        migrationsData={migrationsData}
        handleRowClick={handleRowClick}
      />
    </div>
  );
};

export default Migrations;
