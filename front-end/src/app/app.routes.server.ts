// src/app/app.routes.server.ts
import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'property/:propertyId',
    renderMode: RenderMode.Client // Forces it to render on the client side (Saves you from prerendering)
    // OR if you want SSR on demand: renderMode: RenderMode.Server
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];