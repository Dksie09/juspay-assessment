import React from "react";
import Card, { CardContent, CardHeading } from "../ui/card";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableHeaderSeparator,
} from "../ui/table";

// Example data
const data = [
  {
    Name: "ASOS Ridley High Waist",
    Price: 79.49,
    Quantity: 82,
    Amount: 6518.18,
  },
  {
    Name: "Marco Lightweight Shirt",
    Price: 128.5,
    Quantity: 37,
    Amount: 4754.5,
  },
  {
    Name: "Half Sleeve Shirt",
    Price: 39.99,
    Quantity: 64,
    Amount: 2559.36,
  },
  {
    Name: "Lightweight Jacket",
    Price: 20.0,
    Quantity: 184,
    Amount: 3680.0,
  },
  {
    Name: "Marco Shoes",
    Price: 79.49,
    Quantity: 64,
    Amount: 1965.81,
  },
];

function SalesTableCard() {
  return (
    <Card className="w-full h-full">
      <CardHeading>Top Selling Products</CardHeading>
      <CardContent>
        <SalesTable data={data} />
      </CardContent>
    </Card>
  );
}

export default SalesTableCard;

function SalesTable({ data }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead>Amount</TableHead>
        </TableRow>
        <TableHeaderSeparator />
      </TableHeader>
      <TableBody>
        {data.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{item.Name}</TableCell>
            <TableCell>${item.Price.toFixed(2)}</TableCell>
            <TableCell>{item.Quantity}</TableCell>
            <TableCell>${item.Amount.toFixed(2)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
