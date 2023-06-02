// Copyright 2017-2023 @polkadot/app-democracy authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React, { useRef } from 'react';

import { Table } from '@polkadot/react-components';
import { useApi, useCall } from '@polkadot/react-hooks';

import { useTranslation } from '../translate.js';
import ProposalDisplay from './Proposal.js';

interface Props {
  className?: string;
}

function Proposals ({ className }: Props): React.ReactElement<Props> {
  const { t } = useTranslation();
  const { api } = useApi();
  const proposals = useCall(api.derive.democracy.proposals);

  const headerRef = useRef<([React.ReactNode?, string?, number?] | false)[]>([
    [t<string>('proposals'), 'start', 2],
    [t<string>('proposer'), 'address'],
    [t<string>('locked'), 'media--1200'],
    [undefined, undefined, 2]
  ]);

  return (
    <Table
      className={className}
      empty={proposals && t<string>('No active proposals')}
      header={headerRef.current}
    >
      {proposals?.map((proposal): React.ReactNode => (
        <ProposalDisplay
          key={proposal.index.toString()}
          value={proposal}
        />
      ))}
    </Table>
  );
}

export default React.memo(Proposals);
