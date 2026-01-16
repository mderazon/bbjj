---
name: browser-platform-apis
description: Expert usage of modern web platform APIs. Covers Storage, Fetch, Observers (Intersection, Resize), WebWorkers, and Hardware APIs (Clipboard, Geolocation).
---

# Browser Platform APIs

Expert integration with the modern web platform ensuring performance and reliability.

## Core Directives

1.  **Lifecycle**: Mandatory cleanup (disconnect/abort) of all observers and fetch requests on unmount.
2.  **Performance**: Offload heavy logic to **Web Workers**. Use **IntersectionObserver** for lazy loading.
3.  **Storage**: Use `localStorage` for simple persistence and `IndexedDB` for complex data.
4.  **Security**: Handle permissions for Geolocation, Notifications, and Clipboard asynchronously.
5.  **Robustness**: Implement feature detection for all modern or non-standard APIs.

## Full Reference

For specific implementation details on WebRTC, WebSockets, or MutationObservers, refer to `resources/api-reference.md`.
