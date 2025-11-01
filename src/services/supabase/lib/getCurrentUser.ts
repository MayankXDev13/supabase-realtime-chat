import { createClient } from "../server";

export async function getCurrentUser() {
  const suapbase = await createClient();
  return (await suapbase.auth.getUser()).data.user;
}
