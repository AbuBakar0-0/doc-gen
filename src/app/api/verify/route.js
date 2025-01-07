import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    // Access the query parameter directly from the URL search params
    const id = request.nextUrl.searchParams.get("id");

    // Validate the input
    if (!id) {
      return NextResponse.json({ message: "Missing required field: id" }, { status: 400 });
    }

    // Update the user's verification status in the database
    const { data, error } = await supabase
      .from('users') // Replace with your users table name
      .update({ is_verified: true })
      .eq('id', id)
      .select(); // To get the updated row if necessary

    if (error) {
      console.error("Error updating user verification:", error);
      return NextResponse.json({ message: "Failed to verify user", error }, { status: 500 });
    }

    // Return success response with a redirect
    return NextResponse.redirect("http://localhost:3000?verified=true"); // Redirect to a success page after verification
    
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json({ message: "Failed to verify user", error }, { status: 500 });
  }
}
