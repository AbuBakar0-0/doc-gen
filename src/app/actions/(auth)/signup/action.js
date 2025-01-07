import { supabase } from "@/lib/supabase";

export async function Signup(payload) {
  try {
    const { email, password } = payload;

    // Insert the user data directly into the users table
    const { data, error } = await supabase
      .from("users")
      .insert({
        email: email,
        password: password,
      })
      .select("*"); // Retrieve all columns of the inserted row

    // Handle error
    if (error) {
      return { error: error.message };
    }

    // Return the first created user (since it's a single insert)
    return { user: data[0] }; // Assuming the first inserted row is the one we want
  } catch (error) {
    return { error: error.message };
  }
}
