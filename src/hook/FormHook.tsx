import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(4).max(15).required(),
});
export const registerSchema = yup.object().shape({
  firstName: yup.string().required('Obavezno polje'),
  lastName: yup.string().required('Obavezno polje'),
  email: yup.string().email('Email nije validan').required('Obavezno polje'),
  password: yup
    .string()
    .min(4, 'Lozinka mora da sadrži najmanje 4 karaktera')
    .max(15, 'Lozinka mora da sadrži najviše 15 karaktera')
    .required('Obavezno polje'),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Lozinke se ne podudaraju '),
});
export const editUserSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
});
export const moviesSchema = yup.object().shape({
  title: yup.string().required(),
  english_title: yup.string().required(),
  director: yup.string().required(),
  actors: yup.string().required(),
  genre: yup.string().required(),
  distributor: yup.string().required(),
  country_of_origin: yup.string().required(),
  duration: yup.number().positive().required(),
  trailer: yup.string().required(),
  year_of_production: yup.number().positive().required(),
  coming_soon: yup.string().required().default('Da'),
  broadcast_date: yup.string().required(),
  description: yup.string().required(),
  image: yup.string().required(),
});
export const projectionsSchema = yup.object().shape({
  movie: yup.string().required(),
  date: yup.string().required(),
  time: yup.string().required(),
  hall: yup.number().required().default(1),
  price: yup.number().required(),
});
export const newsSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  image: yup.string().required(),
});
