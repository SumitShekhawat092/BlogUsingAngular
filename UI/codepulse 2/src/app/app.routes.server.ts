import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'admin/categories',
    renderMode: RenderMode.Prerender
  }
];
