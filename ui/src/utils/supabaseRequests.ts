import type { WordData } from '../types/vocabTypes';
import type { SupabaseClient, AuthError } from "@supabase/supabase-js";
import type { BoolAndError } from '../types/vocabTypes';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const verifyOptToken = async (supabase: SupabaseClient | null, token_hash: any, type: any): Promise<boolean> => {
  if(!supabase) return false;
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

export const sendLoginEmail = async (supabase: SupabaseClient | null, email: string): Promise<boolean> => {
  if(!supabase) return false;
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

export const signInWithPassword = async (supabase: SupabaseClient | null, email: string, password: string): Promise<boolean> => {
  if(!supabase) return false;
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

export const logout = async (supabase: SupabaseClient | null) => {
  if(!supabase) return false;
  await supabase.auth.signOut();
};

export async function fetchOneWord(
  supabase: SupabaseClient | null,
  databaseName: string,
  id: string,
): Promise<WordData | null> {
  if(!supabase) return null;
  const { data, error } = await supabase
    .from(databaseName)
    .select("*")
    .eq("id", id)
    .single()

  if(data) {
    console.log("got data", data);
    return data;
  } else if (error) {
    console.warn(error);
  }
  return null;
}

export async function fetchData(
  supabase: SupabaseClient | null,
  databaseName: string
): Promise<WordData[] > {

  /* DEBUGGING: Find out number of rows in query
  const { count, error } = await supabase
    .from(databaseName)
    .select("*", { count: "exact" });
    console.log('count: ', count); // showing 2238
  */
  if(!supabase) return [];
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
  supabase: SupabaseClient | null,
  databaseName: string,
  newWordData: WordData,

): Promise<BoolAndError> {
  if(!supabase) return [false, null];
  try {
    // see if it's not yet in there and add it if needed
    if(!newWordData.id) return [false, null];
    const word = await fetchOneWord(supabase, 'spanish_vocab', newWordData.id)
    if(!word) {
      // Add it if its not in there already
      const result = await addData(supabase, 'spanish_vocab', newWordData);
      return result;
    } else {
      // if in there already, update the data
      const { data, error } = await supabase
        .from(databaseName)
        .update({
          category: newWordData.category,
          spanish: newWordData.spanish,
          english: newWordData.english,
          knowledgelevel: newWordData.knowledgelevel,
        })
        .eq("id", newWordData.id)
        .select()
        .single();
      
      if (data) {
        console.log('updated data: ', data);
        return [true, null];
      } else {
        console.warn(error);
        return [false, error];
      }
    }


    
  } catch (error) {
    console.warn(error);
  }
  return [false, null];
};
/*
export async function updateData(
  supabase: SupabaseClient | null,
  databaseName: string,
  id: string | number,
  columnName: string,
  newValue: string | number
): Promise<BoolAndError> {
  if(!supabase) return [false, null];
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
};*/

export async function addData(
  supabase: SupabaseClient | null,
  databaseName: string, 
  newWordData: WordData,
): Promise<BoolAndError> {
  console.log('addData running');
  if(!supabase) return [false, null];
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
