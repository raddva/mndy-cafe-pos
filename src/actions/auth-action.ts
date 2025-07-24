"use server";

import { createClient } from "@/lib/supabase/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function signOut() {
  const supabase = await createClient();
  const cookieStore = await cookies();

  try {
    await supabase.auth.signOut();
    cookieStore.delete("user_profile");
    revalidatePath("/", "layout");
  } catch (e) {
    console.error("Error signing out:  ", e);
  }
  redirect("/login");
}
