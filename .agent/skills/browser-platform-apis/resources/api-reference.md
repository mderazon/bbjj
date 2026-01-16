# Browser Platform API Reference

Comprehensive guidelines for modern web platform integration.

## Storage

- **localStorage**: Simple key-value, max 5MB.
- **sessionStorage**: Tab-specific data.
- **IndexedDB**: Large, complex data (use a library like `idb`).

## Networking & Real-time

- **Fetch**: Use `AbortController` for cancellation.
- **WebSockets**: Implement reconnection logic and heartbeat.
- **WebRTC**: Peer-to-peer data/media streams.
- **CORS**: Correct header handling and pre-flight understanding.

## Observers & Performance

- **IntersectionObserver**: Lazy loading and visibility tracking.
- **ResizeObserver**: Element-level responsiveness.
- **MutationObserver**: Reacting to DOM changes (use sparingly).
- **Web Workers**: Offload heavy JS to background threads.

## Hardware & OS Integration

- **Clipboard**: `navigator.clipboard` (Async).
- **Geolocation**: Permission-based tracking.
- **Notifications**: Request permission, use Service Workers for background.
- **Web Share**: Native OS share dialogs.

## Best Practices

- **Feature Detection**: Always test for browser support before use.
- **Cleanup**: Always `disconnect()`, `close()`, or `abort()` in component unmounts.
