/* MajorMap PWA bootstrap — kept outside the app so it can change without touching index.html. */
(function () {
  if (!("serviceWorker" in navigator)) return;
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js", { scope: "./" }).then(reg => {
      reg.addEventListener("updatefound", () => {
        const nw = reg.installing;
        nw && nw.addEventListener("statechange", () => {
          if (nw.state === "installed" && navigator.serviceWorker.controller) showToast("A new version of MajorMap is ready.", "Reload", () => { nw.postMessage("SKIP_WAITING"); location.reload(); });
        });
      });
    }).catch(() => {});
  });

  // Install chip (Chrome/Edge/Android). iOS has no prompt API — show a one-time hint instead.
  let deferred = null;
  window.addEventListener("beforeinstallprompt", e => {
    e.preventDefault(); deferred = e;
    if (!dismissed("install")) showToast("Install MajorMap for one-tap access.", "Install", async () => { deferred.prompt(); await deferred.userChoice; deferred = null; }, "install");
  });
  window.addEventListener("appinstalled", () => { deferred = null; hideToast(); });

  const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent) && !window.MSStream;
  const standalone = window.matchMedia("(display-mode: standalone)").matches || navigator.standalone === true;
  if (isIOS && !standalone && !dismissed("ios")) setTimeout(() => showToast("On iPhone: tap Share, then “Add to Home Screen” to install MajorMap.", "Got it", null, "ios"), 4000);

  function dismissed(k) { try { return localStorage.getItem("majormap.toast." + k) === "1"; } catch (_) { return false; } }
  function remember(k) { try { if (k) localStorage.setItem("majormap.toast." + k, "1"); } catch (_) {} }
  let el = null;
  function showToast(msg, btn, onClick, key) {
    hideToast();
    el = document.createElement("div");
    el.setAttribute("role", "status");
    el.style.cssText = "position:fixed;left:50%;bottom:18px;transform:translateX(-50%);max-width:min(560px,calc(100vw - 32px));background:#1e1b4b;color:#fff;padding:12px 14px 12px 16px;border-radius:14px;box-shadow:0 12px 32px rgba(30,27,75,.35);font:600 14px/1.4 system-ui,-apple-system,Segoe UI,Roboto,sans-serif;display:flex;gap:12px;align-items:center;z-index:9999";
    el.innerHTML = "<span style='flex:1'>" + msg + "</span>" +
      (btn ? "<button type='button' data-act style='background:#fff;color:#3730a3;border:0;border-radius:10px;padding:8px 12px;font-weight:800;cursor:pointer'>" + btn + "</button>" : "") +
      "<button type='button' data-x aria-label='Dismiss' style='background:transparent;color:#c7d2fe;border:0;font-size:18px;cursor:pointer;padding:4px'>×</button>";
    el.querySelector("[data-x]").onclick = () => { remember(key); hideToast(); };
    const a = el.querySelector("[data-act]"); if (a) a.onclick = () => { remember(key); if (onClick) onClick(); else hideToast(); };
    document.body.appendChild(el);
  }
  function hideToast() { if (el && el.parentNode) el.parentNode.removeChild(el); el = null; }
})();
