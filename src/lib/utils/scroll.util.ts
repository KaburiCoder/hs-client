export function scrollById(id: string, minusTop: number = 10) {
  const elem = document.getElementById(id);
  if (!elem) return;
  const rect = elem.getBoundingClientRect();
  window?.scrollBy({ top: rect.top - minusTop, behavior: "smooth" });
}
