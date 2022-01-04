// https://binarysearch.com/problems/Validate-Delivery-Orders
class ValidateDeliveryOrders {
  solve(orders: Array<string>): boolean {
    let valid = true;
    let mapOrders = new Map();

    for (let index = 0; index < orders.length; index++) {
      const code = orders[index];
      const [char, number] = [code.substring(0, 1), code.substring(1)];
      const key = char === 'P' ? code : `P${number}`;

      if (char === 'P') {
        if (mapOrders.has(key)) {
          valid = false;
          break;
        }

        mapOrders.set(key, null);
      } else if (char === 'D') {
        if (mapOrders.get(key) !== null) {
          valid = false;
          break;
        }

        mapOrders.set(key, code);
      }
    }

    return valid && [...mapOrders].every(([, val]) => val !== null);
  }
}
