import { FC } from "react";
// CUSTOM UTILS LIBRARY FUNCTION
import { currency } from "lib";
// STYLED COMPONENTS
import { StyledTableCell, StyledTableRow } from "../styles";
// DATA TYPES
import { Payout } from "./types";

// =============================================================================
type Props = { payout: Payout };
// =============================================================================

const PayoutRow: FC<Props> = ({ payout }) => {
  const { no, amount, date, payment } = payout || {};

  return (
    <StyledTableRow role="checkbox">
      <StyledTableCell align="center">{no}</StyledTableCell>
      <StyledTableCell align="center">{currency(amount)}</StyledTableCell>
      <StyledTableCell align="center">{payment}</StyledTableCell>
      <StyledTableCell align="center">{date}</StyledTableCell>
    </StyledTableRow>
  );
};

export default PayoutRow;
