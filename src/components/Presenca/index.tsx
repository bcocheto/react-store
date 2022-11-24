import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { PessoasService } from '~/services/PessoaService';
import { PresencaService } from '~/services/PresencaService';
import { Pessoa } from '~/types/Pessoa';
import Title from '../Title';

export const Presenca = () => {
  const pService = PessoasService;
  const service = PresencaService;
  const [users, setUsers] = useState<Pessoa[]>([]);
  const [user, setUser] = useState<Pessoa>();
  const [valueText, setValueText] = useState('');

  useEffect(() => {
    const getUsers = async () => {
      try {
        const { data }: any = await pService.getAll();
        setUsers(data);
      } catch (error) {
        console.log('Erro ao solicitar dados dos usuários: ', error);
      }
    };
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      <Title>Presença</Title>
      <Box component='form' noValidate onSubmit={handleSubmit}>
        <FormControl size='small' fullWidth>
          <InputLabel id='user'>Usuário</InputLabel>
          <Select
            labelId='user'
            id='user'
            label='Usuário'
            value={String(user?.id_pessoa)}
            onChange={handleChange}
          >
            {users?.map((user: Pessoa) => (
              <MenuItem key={user.id_pessoa} value={user.id_pessoa}>
                {user.username}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          required
          fullWidth
          margin='normal'
          size='small'
          name='value'
          label='Valor'
          type='number'
          value={valueText}
          onChange={(e) => setValueText(e.target.value)}
          id='value'
        />

        <Button type='submit' fullWidth variant='contained' sx={{ mt: 1 }}>
          Enviar
        </Button>
      </Box>
    </React.Fragment>
  );
};
