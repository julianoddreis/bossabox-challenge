import api from '../providers/fetchClient'

export default {
  getAll: () => api.get('/tools'),
  create: tool => api.post('/tools', tool),
  delete: id => api.delete(`/tools/${id}`),
  getSome: params => api.get(`/tools${params}`)
}
