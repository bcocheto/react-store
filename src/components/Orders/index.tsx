import React, { useEffect, useState } from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../Title';
import { Pessoa } from '~/types/Pessoa';
import { PessoasService } from '~/services/PessoaService';

export const Orders = () => {
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

  return (
    <React.Fragment>
      <Title>Histórico</Title>
      <Table size='medium'>
        <TableHead>
          <TableRow>
            <TableCell>Data</TableCell>
            <TableCell>Usuário</TableCell>
            <TableCell>Transação</TableCell>
            <TableCell>Valor</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users?.map((pessoa: Pessoa) => (
            <TableRow key={pessoa.id_pessoa}>
              <TableCell>{pessoa.nome}</TableCell>
              <TableCell>{pessoa.genero}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
};
