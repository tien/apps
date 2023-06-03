// Copyright 2017-2023 @polkadot/react-hooks authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AccountId, Address } from '@polkadot/types/interfaces';

import { createNamedHook } from './createNamedHook.js';
import { useCall } from './useCall.js';
import { useSystemApi } from './useSystemApi.js';

function useDeriveAccountFlagsImpl (value?: AccountId | Address | Uint8Array | string | null) {
  const api = useSystemApi();

  return useCall(api && api.derive.accounts.flags,
    // @ts-expect-error `api.derive.accounts.flags` doesn't accepts `Uint8Array`
    [value]);
}

export const useDeriveAccountFlags = createNamedHook('useDeriveAccountFlags', useDeriveAccountFlagsImpl);
