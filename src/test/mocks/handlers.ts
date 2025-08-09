import { http, HttpResponse } from 'msw';
import { db } from './db';

export const handlers = [
  ...db.user.toHandlers('rest', 'https://reqres.in/api'),

  http.get('https://reqres.in/api/users', ({ request }) => {
    const url = new URL(request.url);
    const page = Number(url.searchParams.get('page')) || 1;
    const per_page = Number(url.searchParams.get('per_page')) || 5;

    const allUsers = db.user.getAll();
    const startIndex = (page - 1) * per_page;
    const endIndex = startIndex + per_page;
    const users = allUsers.slice(startIndex, endIndex);

    return HttpResponse.json({
      page,
      per_page,
      total: allUsers.length,
      total_pages: Math.ceil(allUsers.length / per_page),
      data: users,
    });
  }),
];
