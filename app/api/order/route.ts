import { NextRequest, NextResponse } from "next/server";
import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: "hwrb6spr", // Replace with your Sanity project ID
  dataset: "production", // Replace with your Sanity dataset
  useCdn: false, // Set to false for writes
  apiVersion: "2023-01-29", // Use the latest version or the appropriate one
  token:"sku7xy7eF1Pyq8mn4HfnSr5RKrww9aXRGJKjeGgM4cZoykwx0rHlrxD2xR6azrVQy274X9I1PVThprcx5yioM7iT1ta92qkkMlWZUnOSNIm0AH2wAf9ql1i6FUkAcw6MtF1CAGTefWSz6fdBzQmefQVG2ehm9KplKRgGA7VYmiHweND0le4F"
});

export async function POST(req: NextRequest) {
  try {
    const { cartItems, shippingDetails, totalPrice } = await req.json();

    // Create the order in Sanity
    const order = await client.create({
      _type: "order",
      status: "Pending",
      cartItems: cartItems.map((item: { title: string, quantity: number, price: number, imageUrl: string }) => ({
        title: item.title,
        quantity: item.quantity,
        price: item.price,
        imageUrl: item.imageUrl,
      })),
      shippingDetails,
      totalPrice,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({ message: "Order placed successfully", order }, { status: 200 });
  } catch (error) {
    console.error("Error placing order:", error);
    return NextResponse.json(
      { error: "Failed to place order", details: error },
      { status: 500 }
    );
  }
}
