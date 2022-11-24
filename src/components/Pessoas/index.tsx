import { Box, Button, FormControl, Grid, InputLabel, NativeSelect, TextField } from '@mui/material';
import React from 'react';
import { PessoasService } from '~/services/PessoaService';
import Title from '../Title';
import { v4 as uuidv4 } from 'uuid';

export const Pessoas = () => {
  const service = PessoasService;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const newPessoa = {
      id: Math.floor(Math.random() * 100),
      nome: data.get('nome'),
      cpf: data.get('cpf'),
      matricula: data.get('matricula'),
      username: data.get('username'),
      password: data.get('password'),
      genero: data.get('genero'),
      foto: data.get('foto'),
      nascimento: data.get('nascimento'),
    };
    console.log(newPessoa);

    try {
      await service.create(newPessoa);
    } catch (error) {
      console.log('Erro: ', error);
    }
  };
  return (
    <React.Fragment>
      <Title>Pessoas</Title>
      <Box component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3}>
            <TextField name='nome' required fullWidth id='nome' label='Nome' />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField required fullWidth id='username' label='Username' name='username' />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              required
              fullWidth
              id='password'
              label='Senha'
              name='password'
              type='password'
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField required fullWidth name='cpf' label='cpf' type='number' id='cpf' />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              required
              fullWidth
              name='matricula'
              label='matricula'
              type='number'
              id='matricula'
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              required
              fullWidth
              name='nascimento'
              label='nascimento'
              type='date'
              id='nascimento'
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControl fullWidth>
              <InputLabel variant='standard' htmlFor='uncontrolled-native'>
                Gênero
              </InputLabel>
              <NativeSelect name='genero' defaultValue={''}>
                <option value='M'>M</option>
                <option value='F'>F</option>
              </NativeSelect>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField required fullWidth name='foto' label='foto' type='url' id='foto' />
          </Grid>
        </Grid>
        <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
          Cadastrar
        </Button>
      </Box>
    </React.Fragment>
  );
};
