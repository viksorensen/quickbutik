// use this function to fetch the orders.
import { getOrders } from "../../api/api";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useQuery } from "react-query";
import {
  calculateTotalPrice,
  capitalize,
  formatDate,
  getFullName,
  variantMap,
} from "./helpers";
import { Button } from "../Button/Button";

export function OrdersList() {
  const { data: orders, isLoading } = useQuery({
    queryFn: () => getOrders(),
    queryKey: ["orders"],
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Table className="mt-4">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Order number</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Full name</TableHead>
          <TableHead>Number of products</TableHead>
          <TableHead>Sum</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id}>
            <TableCell className="font-medium">{order.id}</TableCell>
            <TableCell>{formatDate(order.created_at)}</TableCell>
            <TableCell>
              {getFullName(order.first_name, order.last_name)}
            </TableCell>
            <TableCell>{order.products.length}</TableCell>
            <TableCell>{calculateTotalPrice(order.products)}</TableCell>
            <TableCell className="text-center">
              <Button
                variant={variantMap[order.status]}
                onClick={() => alert(order.id)}
              >
                {capitalize(order.status)}
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
