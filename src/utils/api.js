const api = (() => {
  const BASE_URL = 'https://backendhub.lotaf.id/api/admin'

  async function _fetchWithAuth(url, options = {}) {
    return fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${getAccessToken()}`
      }
    })
  }

  function getAccessToken() {
    // Return the hardcoded token for now
    return '1|Lk2q1R3i1h26fl9apTxADT3slmo41wcEGmyzatDT813e17f3';
  }

  async function getLaporans() {
    const response = await _fetchWithAuth(`${BASE_URL}/laporans`);
    const responseJson = await response.json();
    // Extract the data array
    const { data } = responseJson;
    return data;
  }

  async function addForm(formData) {
    const response = await _fetchWithAuth(`${BASE_URL}/laporans`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${getAccessToken()}`
      },
      body: formData
    });

    const responseJson = await response.json()
    const { data } = responseJson

    return data;
  }

  return {
    getAccessToken,
    getLaporans,
    addForm
  }
})();

export default api;