// Copyright 2017-2023 @polkadot/react-hooks authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { useMemo } from 'react';

import { createNamedHook } from './createNamedHook.js';
import { useApi } from './useApi.js';

function useSystemApiImpl () {
  const { api, apiRelay } = useApi();

  return useMemo(() => apiRelay || api, [apiRelay, api]);
}

export const useSystemApi = createNamedHook('useSystemApi', useSystemApiImpl);
