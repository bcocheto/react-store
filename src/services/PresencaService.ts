import { Api } from './AxiosService';

const getAll = async () => {
  try {
    const { data } = await Api.get('/presenca');
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
    const { data } = await Api.get(`/presenca${id}`);
    if (data) {
      return {
        data,
      };
    }
    return new Error('Erro ao listar os registros.');
  } catch (error) {
    return new Error((error as { message: string }).message || 'Erro ao listar registros.');
  }
};

const create = async (data: any): Promise<any> => {
  try {
    console.log(data, 'data');
    const { response }: any = await Api.post(`/presenca`, data);
    if (response) {
      return response;
    }
  } catch (error) {
    return new Error((error as { message: string }).message || 'Erro ao criar presença.');
  }
};

const update = async (data: any): Promise<any> => {
  try {
    const { response }: any = await Api.put(`/presenca`, data);
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
    const { response }: any = await Api.delete(`/presenca${id}`);
    if (response) {
      return response;
    }
    return new Error('Erro ao criar usuário.');
  } catch (error) {
    return new Error((error as { message: string }).message || 'Erro ao criar usuário usuário.');
  }
};

export const PresencaService = {
  getAll,
  create,
  getById,
  update,
  deleteById,
};
