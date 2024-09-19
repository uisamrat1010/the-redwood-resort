import Button from "../../ui/Button";
import { useCheckOut } from "./useCheckOut";

function CheckoutButton({ bookingId }) {
  const { isCheckingOut, checkout } = useCheckOut();

  return (
    <Button
      variation="secondary"
      size="small"
      onClick={() => checkout(bookingId)}
      disabled={isCheckingOut}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
