import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import logo from '~/assets/img/logo.svg';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form>
        <Input name="email" type="emai" placeholder="Seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />

        <button type="submit">Acessar</button>
        <Link to="/register">Criar conta gratuita</Link>
      </Form>
    </>
  );
}
