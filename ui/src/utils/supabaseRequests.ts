import type { WordData } from '../types/vocabTypes';
import type { SupabaseClient, AuthError } from "@supabase/supabase-js";
import type { BoolAndError } from '../types/vocabTypes';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const verifyOptToken = async (supabase: SupabaseClient, token_hash: any, type: any): Promise<boolean> => {
  supabase.auth.verifyOtp({
    token_hash,
    type: type || "email",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any)
  // })
  .then(({ error }: { error: AuthError | null }) => {
    if (error) {
      console.warn(error)
      return false;
    } else {
      // Clear URL params
      window.history.replaceState({}, document.title, "/");
    }
  });
  return true;
};

export const sendLoginEmail = async (supabase: SupabaseClient, email: string): Promise<boolean> => {
  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: window.location.origin,
    }
  });
  if (error) {
    console.warn(error);
    return false;
  } else {
    return true;
  }
}

export const signInWithPassword = async (supabase: SupabaseClient, email: string, password: string): Promise<boolean> => {
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    console.warn(error);
    return false;
  }
  return true;
}

export const logout = async (supabase: SupabaseClient) => {
    await supabase.auth.signOut();
};

export async function fetchData(supabase: SupabaseClient, databaseName: string): Promise<WordData[] > {

  /* DEBUGGING: Find out number of rows in query
  const { count, error } = await supabase
    .from(databaseName)
    .select("*", { count: "exact" });
    console.log('count: ', count); // showing 2238
  */

  const { data, error } = await supabase
    .from(databaseName)
    .select("*")

  if(data) {
    console.log("ROWS:", data?.length);
    return data;
  } else if (error) {
    console.warn(error);
  }
  return [];
}

export async function updateData(
  supabase: SupabaseClient,
  databaseName: string,
  id: string | number,
  columnName: string,
  newValue: string | number
): Promise<BoolAndError> {

  try {
    const { data, error } = await supabase
      .from(databaseName)
      .update({ [columnName]: newValue })
      .eq("id", id)
      .select()
      .single();
    
    if (data) {
      console.log('updated data: ', data);
      return [true, null];
    } else {
      console.warn(error);
      return [false, error];
    }
  } catch (error) {
    console.warn(error);
  }
  return [false, null];
};

export async function addData(
  supabase: SupabaseClient,
  databaseName: string, 
  newWordData: WordData,
): Promise<BoolAndError> {
  try {
    const { data, error } = await supabase
      .from(databaseName)
      .insert(newWordData)
      .select()
      .single();

    if (data) {
      console.log('updated data: ', data);
      return [true, null];
    } else {
      console.warn(error);
      return [false, error];
    }
  } catch (error) {
    console.warn(error);
  }
  return [false, null];
}
