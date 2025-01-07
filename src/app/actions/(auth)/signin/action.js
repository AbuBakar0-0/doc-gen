import { supabase } from "@/lib/supabase";
import { setCookie } from "cookies-next"; // Import the cookies utility
import md5 from "md5";

export default async function Signin(payload) {
  try {
    const { email, password } = payload;

    // Query the users table to find the user with the provided email
    const { data: userData, error: userError } = await supabase
      .from("users")
      .select("*")
      .eq("email", email)
      .single(); // Assuming you only expect one user with this email

    if (userError || !userData) {
      return { error: "Invalid email or password" };
    }

    // Check if the user is verified
    if (!userData.is_verified) {
      return { error: "Email not verified. Please check your inbox." };
    }

    // Directly compare the entered password with the stored password (hashed)
    if (userData.password !== md5(password)) {
      return { error: "Invalid email or password" };
    }

    // If password is valid, return user data (without the password field)
    const { password: _, ...userWithoutPassword } = userData; // Destructure to remove password field

    // Generate an authentication token (md5 of the user ID)
    const authToken = md5(userData.id);

    // Set the token in cookies (with options for security, such as HttpOnly, Secure, SameSite)
    setCookie("auth_token", authToken, {
      maxAge: 60 * 60 * 24 * 7, // Cookie expires in 7 days
    });

    return { user: userWithoutPassword };
  } catch (error) {
    return { error: error.message };
  }
}
