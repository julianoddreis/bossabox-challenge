import api from '../providers/fetchClient'

export default {
  getTools: (params = '') => api.get(`/tools${params}`),
  create: tool => api.post('/tools', tool),
  delete: id => api.delete(`/tools/${id}`)
}
