import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const getCartData = () => {
  return async (dispatch) => {
    const getData = async () => {
      const response = await fetch(
        "https://react-http-67642-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json"
      );

      if (!response.ok) throw new Error("Could not fetch cart data!");

      const data = await response.json();

      return data;
    };

    try {
      const cartData = await getData();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
          totalAmount: cartData.totalAmount,
        })
      );
    } catch (error) {
      setTimeout(
        () =>
          dispatch(
            uiActions.showNotification({
              status: "hide",
              title: "",
              message: "",
            })
          ),
        5000
      );

      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Failed to fetch data",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    // Hiding the notification after 5 seconds
    setTimeout(
      () =>
        dispatch(
          uiActions.showNotification({
            status: "hide",
            title: "",
            message: "",
          })
        ),
      5000
    );

    // State - Sending data
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending Cart Data!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-67642-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalAmount: cart.totalAmount,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );

      if (!response.ok) throw new Error("Sending cart data failed");
    };

    try {
      await sendRequest();

      // Success notification
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    } catch (error) {
      // Error notification
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Failed to send data",
        })
      );
    }
  };
};
