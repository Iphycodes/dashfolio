'use client';
import { mediaSize, useMediaQuery } from '@/_shared/components/responsiveness';
import { WithLoaderRender } from '@/_shared/components/with-app-loder';
import {
  fetchByQuestidsUrl,
  questPopulation,
  questPopulationString,
  questUrl,
  tagsUrl,
  typesUrl,
} from '@/_shared/constants';
import { fetchData, postData } from '@/_shared/helpers';
import Quest from '@/components/types/single';
import { usePagination } from '@/hooks/usePagination';
import { useSearch } from '@/hooks/useSearch';
import { message } from 'antd';
import { toLower } from 'lodash';
import React, { useEffect, useState } from 'react';

const QuestPage = () => {
  const [questData, setQuestData] = useState<Record<string, any>[]>([]);
  const [comparisonQuestData, setComparisonQuestData] = useState<Record<string, any>[]>([]);
  const isMobile = useMediaQuery(mediaSize.mobile);
  const [isQuestLoading, setIsQuestLoading] = useState<boolean>(false);
  const [isLoadingPromoteItem, setIsLoadingPromoteItem] = useState<boolean>(false);
  const [isLoadingGetComparisonData, setIsLoadingGetComparisonData] = useState<boolean>(false);

  const { paginate, pagination, setTotal } = usePagination({
    key: 'quest',
    title: 'quests',
    perPage: 10,
  });
  const [tagOptions, setTagOptions] = useState<Record<string, any>[]>([]);
  const [typesOptions, setTypesOptions] = useState<Record<string, any>[]>([]);
  const [filterData, setFilterData] = useState<Record<string, any>>({});
  const { searchValue, debouncedChangeHandler } = useSearch();
  const [questServiceUrl, setQuestServiceUrl] = useState<'game' | 'api'>('api');
  const [questEnvUrl, setQuestEnvUrl] = useState<'dev' | 'proj' | 'prod'>('dev');

  const requestHeader = {
    redirect: 'follow',
  };

  const queryParams = {
    ...paginate,
    ...filterData,
    search: searchValue,
    population: questPopulationString,
  };

  useEffect(() => {
    setIsQuestLoading(true);

    console.log('new queryPArams data', queryParams);

    fetchData(questUrl, requestHeader, queryParams)
      .then((data: any) => {
        console.log('fetchhhhhhh', data);
        setQuestData(data?.data);
        setTotal(data?.meta?.pagination?.totalCount ?? 100);
        setIsQuestLoading(false);
      })
      .catch(() => {
        message.error('Failed to fetch quests', 5);
        setIsQuestLoading(false);
      });
  }, [JSON.stringify(queryParams)]);

  const handleSetTagOptions = (data: Record<string, any>[]) => {
    const options = data.map((option) => {
      return {
        label: option?.title ?? '',
        value: option?.id,
      };
    });
    setTagOptions(options ?? []);
  };

  const handleSetTypesOptions = (data: string[]) => {
    const options = data.map((option) => {
      return {
        label: option ?? '',
        value: toLower(option),
      };
    });
    setTypesOptions(options ?? []);
  };

  useEffect(() => {
    fetchData(tagsUrl)
      .then((data: any) => {
        handleSetTagOptions(data?.data ?? []);
      })
      .catch(() => {
        message.error('Failed to fetch tags', 5);
      });

    fetchData(typesUrl)
      .then((data: any) => {
        handleSetTypesOptions(data?.QuestTypes ?? []);
      })
      .catch(() => {
        message.error('Failed to fetch types', 5);
      });
  }, [tagsUrl]);

  const handlePromoteItem = (values: Record<string, any>) => {
    setIsLoadingPromoteItem(true);
    const payload = {
      ...values,
      adminKey: 'AdminKey',
      sourceService: 'api',
    };

    console.log('payloaddddd', payload);
    // postData(promoteItemUrl, {}, payload)
    //   .then((res) => {
    //     console.log('response', res);
    //     setIsLoadingPromoteItem(false);
    //   })
    //   .catch((err) => {
    //     console.log('errorrrr', err);
    //     setIsLoadingPromoteItem(false);
    //   });
  };

  const handleGetComparisonData = (ids: string[]) => {
    setIsLoadingGetComparisonData(true);

    const payload = {
      ids: ids,
      population: questPopulation,
    };

    const updatedFetchByIdsUrl = `https://${questServiceUrl}-stm-${questEnvUrl}.stardevs.xyz/v1/quest/fetch-by-quest-ids`;

    postData(updatedFetchByIdsUrl, {}, payload)
      .then((res) => {
        console.log('fetch-by-ids', res);
        setComparisonQuestData(res?.data ?? []);
        setIsLoadingGetComparisonData(false);
      })
      .catch((err) => {
        console.log(err);
        message.error(err?.message ?? 'Could not fetch data', 10);
        setComparisonQuestData([]);
        setIsLoadingGetComparisonData(false);
      });
  };

  return (
    <WithLoaderRender loading={false} theme="light" mobileResponsive={isMobile}>
      <Quest
        questData={questData}
        comparisonQuestData={comparisonQuestData}
        isLoadingQuestData={isQuestLoading}
        handlePromoteItem={handlePromoteItem}
        isLoadingPromoteItem={isLoadingPromoteItem}
        paginate={paginate}
        pagination={pagination}
        tagOptions={tagOptions}
        typesOptions={typesOptions}
        setFilterData={setFilterData}
        filterData={filterData}
        debouncedChangeHandler={debouncedChangeHandler}
        handleGetComparisonData={handleGetComparisonData}
        setQuestEnvUrl={setQuestEnvUrl}
        setQuestServiceUrl={setQuestServiceUrl}
        questEnvUrl={questEnvUrl}
        questServiceUrl={questServiceUrl}
        isLoadingGetComparisonData={isLoadingGetComparisonData}
      />
    </WithLoaderRender>
  );
};

export default QuestPage;
