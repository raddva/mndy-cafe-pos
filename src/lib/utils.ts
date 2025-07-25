import { clsx, type ClassValue } from "clsx";
import { ChangeEvent } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getImageData(event: ChangeEvent<HTMLInputElement>) {
  // const dataTransfer = new DataTransfer();

  // Array.from(event.target.files!).forEach((image) =>
  //   dataTransfer.items.add(image)
  // );

  // const file = dataTransfer.files[0];
  // const displayUrl = URL.createObjectURL(event.target.files![0]);
  const file = event.target.files![0];
  const displayUrl = URL.createObjectURL(file);
  return { file, displayUrl };
}
