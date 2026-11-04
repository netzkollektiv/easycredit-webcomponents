import { h } from '@stencil/core';

const INSTALLMENT_COST_NOTICE = 'Achtung! Durch Ratenzahlung entstehen Kosten.';
const INSTALLMENT_COST_NOTICE_FLEX = 'Achtung! Durch Ratenzahlung können Kosten entstehen.';

export function installmentCostNotice(flexprice = false): string {
  return flexprice ? INSTALLMENT_COST_NOTICE_FLEX : INSTALLMENT_COST_NOTICE;
}

export function CostNotice(props: { flexprice?: boolean; slot?: string }) {
  return (
    <p class="ec-cost-notice" slot={props.slot}>
      {installmentCostNotice(!!props.flexprice)}
    </p>
  );
}
