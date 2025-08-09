import { faker } from '@faker-js/faker';
import { factory, primaryKey } from '@mswjs/data';

export const db = factory({
  user: {
    id: primaryKey(faker.number.int),
    email: faker.internet.email,
    first_name: faker.person.firstName,
    last_name: faker.person.lastName,
    avatar: faker.image.avatar,
  },
});
