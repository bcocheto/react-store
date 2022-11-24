import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  NativeSelect,
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
  const [presente, setPresente] = useState(false);

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
    const newUser = users?.filter((user: Pessoa) => user.username === event.target.value);
    setUser(newUser[0]);
  };

  const handleChangeP = (event: any) => {
    if (event.target.value === '1') {
      setPresente(true);
    }
    setPresente(true);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const data = new FormData(event.currentTarget);
      const newPresenca = {
        situacao: presente,
        data: data.get('data'),
        pessoa: user,
      };
      console.log(newPresenca);

      const response = await service.create(newPresenca);
      console.log(response);
    } catch (error) {
      console.log('Erro: ', error);
    }
  };
  return (
    <React.Fragment>
      <Title>Presença</Title>
      <Box component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField required fullWidth name='data' type='date' id='data' />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id='demo-simple-select-label'>Age</InputLabel>
              <Select
                labelId='Usuário'
                id='user'
                value={user?.username}
                label='Usuário'
                onChange={handleChange}
              >
                {users.map((user: Pessoa) => (
                  <MenuItem key={user.id_pessoa} value={user.username}>
                    {user.username}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel variant='standard' htmlFor='uncontrolled-native'>
                Presença
              </InputLabel>
              <NativeSelect defaultValue={1} onChange={handleChangeP}>
                <option value={1}>Presente</option>
                <option value={2}>Faltou</option>
              </NativeSelect>
            </FormControl>
          </Grid>
        </Grid>
        <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
          Cadastrar
        </Button>
      </Box>
    </React.Fragment>
  );
};
