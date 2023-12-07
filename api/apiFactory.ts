export const apiFactory = (baseURL: string) => {
  const options = (method: string, token?: string) => {
    const opt: { headers: { [key: string]: string }; method: string } = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      method: method
    }

    if (token) {
      opt.headers['Authorization'] = `Bearer ${token}`
    }
    return opt
  }

  const getApi: (token?: string) => Promise<any> = async (token) => {
    try {
      const response = await fetch(`${baseURL}`, options('GET', token));

      return await response.json();
    } catch (error) {
      console.log(error)
      return null;
    }
  }

  const postApi: (item: any, token?: string) => Promise<any> = async (item, token) => {
    try {
      const response = await fetch(`${baseURL}`, options('POST', token));

      return await response.json();
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  const putApi: (id: number, item: any, token?: string) => Promise<any> = async (id, item, token) => {
    try {
      const response = await fetch(`${baseURL}${id}`, options('PUT', token));

      return await response.json();
    } catch (error) {
      console.log(error)
      return null;
    }
  }

  const deleteApi: (id: number, token?: string) => Promise<any> = async (id, token) => {
    try {
      await fetch(`${baseURL}${id}`, options('DELETE', token));
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  return {
    getApi, postApi, putApi, deleteApi
  }
}
