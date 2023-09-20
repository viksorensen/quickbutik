interface Products {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export function getFullName(firstName: string, lastName: string) {
  return `${firstName} ${lastName}`;
}

export function calculateTotalPrice(products: Products[]) {
  let totalPrice = 0;

  for (const product of products) {
    totalPrice += product.price * product.quantity;
  }

  return totalPrice;
}

export function capitalize(word: string) {
  if (typeof word !== "string" || word.length === 0) {
    return word;
  }

  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function formatDate(dateString: string) {
  const date = new Date(dateString);

  const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;

  return formattedDate;
}

export const variantMap = {
  paid: "success",
  shipped: "primary",
  pending: "accent",
  cancelled: "danger",
};
