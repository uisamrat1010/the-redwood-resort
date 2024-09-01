import supabase, { supabaseUrl } from "./Supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

export async function createEditCabin(newCabin, id) {
  // https://wjwoezweapqmybyhbtuq.supabase.co/storage/v1/object/public/cabin-images/cabin-003.jpg

  // console.log(newCabin, id);
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  const imgName = `${Math.random()}-${newCabin.image.name}`.replaceAll("/", "");

  const imgPath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imgName}`;

  let query = supabase.from("cabins");
  //1. Create Cabin
  if (!id) query = query.insert([{ ...newCabin, image: imgPath }]);

  //2. Update Cabin
  if (id)
    query = query
      .update({ ...newCabin, image: imgPath })
      .eq("id", id)
      .select();

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be created");
  }

  //2. Upload File

  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imgName, newCabin.image);

  //3.Delete the cabin if there was an error on upload image

  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "Cabins image could not be uploaded and the cabin was not created"
    );
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be deleted");
  }

  return data;
}
