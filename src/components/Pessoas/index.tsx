import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { PessoasService } from '~/services/PessoaService';
import { Pessoa } from '~/types/Pessoa';
import Title from '../Title';

export const Pessoas = () => {
  const service = PessoasService;
  const [users, setUsers] = useState<Pessoa[]>([]);
  const [user, setUser] = useState<Pessoa>();
  const [valueText, setValueText] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    const newUser = users?.filter((user: Pessoa) => user.id_pessoa === Number(event.target.value));
    setUser(newUser[0]);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const { data } = await service.create(valueText);
      console.log(data);
    } catch (error) {
      console.log('Erro: ', error);
    }
  };
  return (
    <React.Fragment>
      <Title>Pessoas</Title>
      <Box component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField name='nome' required fullWidth id='nome' label='Nome' />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField required fullWidth id='username' label='Username' name='usename' />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField required fullWidth id='senha' label='Senha' name='senha' />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='new-password'
            />
          </Grid>
        </Grid>
        <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
          Sign Up
        </Button>
      </Box>
    </React.Fragment>
  );
};
