export function scrollById(id: string) {
  const elem = document.getElementById(id);
  const rect = elem?.getBoundingClientRect();
  window?.scrollBy({ top: rect!.top - 65, behavior: "smooth" });
}
