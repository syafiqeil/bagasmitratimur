"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

// Ensure there is at least one row in the DB
export async function getSiteContent() {
  try {
    let content = await prisma.siteContent.findFirst();
    if (!content) {
      content = await prisma.siteContent.create({
        data: {
          id: 1,
        },
      });
    }
    return content;
  } catch (error) {
    console.error("Error fetching site content:", error);
    return null;
  }
}

export async function updateSiteContent(formData: FormData) {
  try {
    const data: Record<string, string> = {};
    for (const [key, value] of formData.entries()) {
      if (typeof value === "string") {
        data[key] = value;
      }
    }

    await prisma.siteContent.update({
      where: { id: 1 },
      data,
    });

    revalidatePath("/");
    revalidatePath("/product");
    
    return { success: true };
  } catch (error) {
    console.error("Error updating site content:", error);
    return { success: false, error: "Gagal menyimpan data" };
  }
}
