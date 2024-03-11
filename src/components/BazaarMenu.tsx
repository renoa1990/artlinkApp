import { Children, cloneElement, Fragment, ReactElement, useState } from "react";
import Menu from "@mui/material/Menu";
import { SxProps } from "@mui/material/styles";

// ===============================================================
interface Props {
  sx?: SxProps;
  open?: boolean;
  className?: string;
  elevation?: number;
  handler: ReactElement;
  shouldCloseOnItemClick?: boolean;
  children: ReactElement | ReactElement[];
  direction?: "left" | "right" | "center";
}
// ===============================================================

export default function BazaarMenu({
  open,
  handler,
  children,
  direction = "left",
  shouldCloseOnItemClick = true,
  ...props
}: Props) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => setAnchorEl(null);
  const handleClick = (event: any) => setAnchorEl(event.currentTarget);

  const handleMenuItemClick = (customOnClick: any) => () => {
    if (customOnClick) customOnClick();
    if (shouldCloseOnItemClick) handleClose();
  };

  return (
    <Fragment>
      {handler && cloneElement(handler, { onClick: handler.props.onClick || handleClick })}

      <Menu
        anchorEl={anchorEl}
        onClose={handleClose}
        open={open !== undefined ? open : !!anchorEl}
        anchorOrigin={{ vertical: "bottom", horizontal: direction }}
        transformOrigin={{ vertical: "top", horizontal: direction }}
        {...props}>
        {Children.map(children, (child: ReactElement) =>
          cloneElement(child, { onClick: handleMenuItemClick(child.props.onClick) })
        )}
      </Menu>
    </Fragment>
  );
}
