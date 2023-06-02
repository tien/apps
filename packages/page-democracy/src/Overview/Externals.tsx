// Copyright 2017-2023 @polkadot/app-democracy authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React, { useRef } from 'react';

import { Table } from '@polkadot/react-components';
import { useApi, useCall } from '@polkadot/react-hooks';

import { useTranslation } from '../translate.js';
import External from './External.js';

interface Props {
  className?: string;
}

function Externals ({ className }: Props): React.ReactElement<Props> | null {
  const { t } = useTranslation();
  const { api } = useApi();
  const external = useCall(api.derive.democracy.nextExternal);

  const headerRef = useRef<([React.ReactNode?, string?, number?] | false)[]>([
    [t<string>('external'), 'start'],
    [t<string>('proposer'), 'address'],
    [t<string>('locked')],
    []
  ]);

  return (
    <Table
      className={className}
      empty={external === null && t<string>('No external proposal')}
      header={headerRef.current}
    >
      {external && <External value={external} />}
    </Table>
  );
}

export default React.memo(Externals);
