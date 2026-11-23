const player = document.querySelector(".player");
const video = player.querySelector("video");
const title = player.querySelector("h2");
let trigger;

if (typeof player.showModal === "function") {
  document.querySelectorAll("[data-demo]").forEach((link) => {
    link.addEventListener("click", (event) => {
      if (event.defaultPrevented || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;

      event.preventDefault();
      trigger = link;
      title.textContent = link.dataset.title;
      video.src = link.href;
      player.showModal();
      video.play().catch(() => {});
    });
  });

  player.addEventListener("close", () => {
    video.pause();
    video.removeAttribute("src");
    video.load();
    trigger?.focus();
  });
}
