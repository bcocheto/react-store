import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../Title';
import { Pessoa } from '~/types/Pessoa';
import { PessoasService } from '~/services/PessoaService';
import { Box, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export const Users = () => {
  const service = PessoasService;
  const [users, setUsers] = useState<Pessoa[] | undefined>([]);

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getUsers = async () => {
    try {
      const { data }: any = await service.getAll();
      setUsers(data);
    } catch (error) {
      console.log('Erro ao solicitar dados dos usuários: ', error);
    }
  };

  const handleDelete = async (id: any) => {
    try {
      const data = await service.deleteById(id);
      console.log(data);
    } catch (error) {
      console.log('Erro: ', error);
    }
  };

  return (
    <React.Fragment>
      <Title>Usuários</Title>
      <Table size='medium'>
        <TableHead>
          <TableRow>
            <TableCell>Foto</TableCell>
            <TableCell>Usuário</TableCell>
            <TableCell>Matrícula</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users?.map((pessoa: Pessoa) => (
            <TableRow key={pessoa.id}>
              <TableCell>
                <Box
                  component='img'
                  sx={{
                    height: 20,
                    width: 20,
                  }}
                  alt={pessoa.nome}
                  src={pessoa.foto}
                />
              </TableCell>
              <TableCell>{pessoa.nome}</TableCell>
              <TableCell>{pessoa.matricula}</TableCell>
              <TableCell>
                <Button
                  type='button'
                  variant='outlined'
                  endIcon={<DeleteIcon />}
                  onClick={() => handleDelete(pessoa.id)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
};
