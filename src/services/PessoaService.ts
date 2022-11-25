import { Api } from './AxiosService';

const getAll = async () => {
  try {
    const { data } = await Api.get('/pessoa');
    if (data) {
      return {
        data,
      };
    }
    return new Error('Erro ao listar os registros.');
  } catch (error) {
    console.error(error);
    return new Error((error as { message: string }).message || 'Erro ao listar os registros.');
  }
};

const getById = async (id: number): Promise<any> => {
  try {
    const { data } = await Api.get(`/pessoa${id}`);
    if (data) {
      return {
        data,
      };
    }
    return new Error('Erro ao listar os registros.');
  } catch (error) {
    return new Error((error as { message: string }).message || 'Erro ao buscar usuário.');
  }
};

const create = async (data: any): Promise<any> => {
  try {
    const { response }: any = await Api.post(`/pessoa`, data);
    if (response) {
      return response;
    }
    return new Error('Erro ao criar usuário.');
  } catch (error) {
    return new Error((error as { message: string }).message || 'Erro ao criar usuário usuário.');
  }
};

const update = async (data: any): Promise<any> => {
  try {
    const { response }: any = await Api.put(`/pessoa`, data);
    if (response) {
      return response;
    }
    return new Error('Erro ao atualizar presença.');
  } catch (error) {
    return new Error((error as { message: string }).message || 'Erro ao atualizar presença.');
  }
};
const deleteById = async (id: string): Promise<any> => {
  try {
    const { response }: any = await Api.delete(`/pessoa/${id}`);
    if (response) {
      return response;
    }
    return new Error('Erro ao criar usuário.');
  } catch (error) {
    return new Error((error as { message: string }).message || 'Erro ao criar usuário usuário.');
  }
};

export const PessoasService = {
  getAll,
  create,
  getById,
  update,
  deleteById,
};
