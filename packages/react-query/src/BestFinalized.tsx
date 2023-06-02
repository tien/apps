// Copyright 2017-2023 @polkadot/react-query authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { useApi, useCall } from '@polkadot/react-hooks';
import { formatNumber } from '@polkadot/util';

interface Props {
  children?: React.ReactNode;
  className?: string;
  label?: React.ReactNode;
}

function BestFinalized ({ children, className = '', label }: Props): React.ReactElement<Props> {
  const { api } = useApi();
  const bestNumberFinalized = useCall(api.derive.chain.bestNumberFinalized);

  return (
    <div className={`${className} ${bestNumberFinalized ? '' : '--tmp'}`}>
      {label || ''}{
        <span className='--digits'>{formatNumber(bestNumberFinalized || 1234)}</span>
      }{children}
    </div>
  );
}

export default React.memo(BestFinalized);
