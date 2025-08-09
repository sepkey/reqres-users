import { render, screen } from '@testing-library/react';
import { delay, http, HttpResponse } from 'msw';
import UsersList from '../../features/user/ui/users-list';
import AllProviders from '../AllProviders';
import { db } from '../mocks/db';
import { server } from '../mocks/server';

describe('UsersList', () => {
  const userIds: number[] = [];

  beforeAll(() => {
    db.user.deleteMany({ where: {} });
    [1, 2, 3].forEach(() => {
      const user = db.user.create();
      userIds.push(user.id);
    });
  });

  afterAll(() => db.user.deleteMany({ where: { id: { in: userIds } } }));

  it('should render list of users', async () => {
    render(<UsersList />, { wrapper: AllProviders });

    const table = await screen.findByRole('table');
    expect(table).toBeInTheDocument();
  });

  it('should render no users if no user is found', async () => {
    db.user.deleteMany({ where: {} });
    server.use(
      http.get('https://reqres.in/api/users', () =>
        HttpResponse.json({
          data: [],
          total: 0,
          page: 1,
          per_page: 5,
          total_pages: 0,
        })
      )
    );

    render(<UsersList />, { wrapper: AllProviders });

    const message = await screen.findByText(/No users found/i);
    expect(message).toBeInTheDocument();
  });

  it('should render an error message when there is error', async () => {
    server.use(
      http.get('https://reqres.in/api/users', () => HttpResponse.error())
    );
    render(<UsersList />, { wrapper: AllProviders });

    const message = await screen.findByText(/error loading users/i);
    expect(message).toBeInTheDocument();
  });

  it('should render loading indicator when fetching data', async () => {
    server.use(
      http.get('https://reqres.in/api/users', async () => {
        await delay(1000);
        return HttpResponse.json({
          data: [
            {
              id: 1,
              email: 'test@example.com',
              first_name: 'Test',
              last_name: 'User',
              avatar: 'test.jpg',
            },
          ],
          total: 1,
          page: 1,
          per_page: 5,
          total_pages: 1,
        });
      })
    );

    render(<UsersList />, { wrapper: AllProviders });

    const table = await screen.findByRole('table');
    expect(table).toBeInTheDocument();
  });
});
