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
import { Box } from '@mui/material';
import { PresencaService } from '~/services/PresencaService';
import { Presenca } from '~/types/Presenca';

export const History = () => {
  const service = PessoasService;
  const serviceP = PresencaService;
  const [users, setUsers] = useState<Pessoa[] | undefined>([]);
  const [presencas, setPresencas] = useState<Presenca[] | undefined>([]);

  useEffect(() => {
    getUsers();
    getPresencas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getPresencas = async () => {
    try {
      const { data }: any = await serviceP.getAll();
      setPresencas(data);
    } catch (error) {
      console.log('Erro ao solicitar dados dos usuários: ', error);
    }
  };
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
            <TableCell></TableCell>
            <TableCell>Usuário</TableCell>
            <TableCell>Data de nascimento</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell>CPF</TableCell>
            <TableCell>Matrícula</TableCell>
            <TableCell>Gênero</TableCell>
            <TableCell>Situação</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users?.map((pessoa: Pessoa) => {
            const presencaUser = presencas?.find(
              (presenca: Presenca) => presenca.pessoa.id === pessoa.id,
            );
            console.log(presencaUser);

            return (
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
                <TableCell>{pessoa.username}</TableCell>
                <TableCell>{pessoa.nascimento}</TableCell>
                <TableCell>{pessoa.nome}</TableCell>
                <TableCell>{pessoa.cpf}</TableCell>
                <TableCell>{pessoa.matricula}</TableCell>
                <TableCell>{pessoa.genero}</TableCell>
                <TableCell>{presencaUser?.situacao ? 'Presente' : 'Faltou'}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </React.Fragment>
  );
};
