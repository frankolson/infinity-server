// const api = "http://localhost:5001"
const api = ""

// Generate a unique token for the backend server authentication headers.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

// Category API calls

export const getCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)

export const getCategoriesTopics = (category) =>
  fetch(`${api}/${category}/posts`, { headers })
    .then(res => res.json())

// Topic API calls

export const deleteTopic = (topicId) =>
  fetch(`${api}/posts/${topicId}`, {
    method: 'DELETE',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
  })

export const getTopic = (topicId) =>
  fetch(`${api}/posts/${topicId}`, { headers })
    .then(res => res.json())

export const getTopicComments = (topicId) =>
  fetch(`${api}/posts/${topicId}/comments`, { headers })
    .then(res => res.json())

export const getTopics = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())

export const postTopic = (params) =>
  fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  }).then(res => res.json())

export const postTopicVote = (topicId, params) =>
  fetch(`${api}/posts/${topicId}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  }).then(res => res.json())

export const putTopic = (params) =>
  fetch(`${api}/posts/${params.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  }).then(res => res.json())

// Comment API calls

export const deleteComment = (commentId) =>
  fetch(`${api}/comments/${commentId}`, {
    method: 'DELETE',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
  }).then(res => res.json())

export const getComment = (commentId) =>
  fetch(`${api}/comments/${commentId}`, { headers })
    .then(res => res.json())

export const postCommentVote = (commentId, option) =>
  fetch(`${api}/comments/${commentId}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ option })
  }).then(res => res.json())

export const postComment = (params) =>
  fetch(`${api}/comments`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  }).then(res => res.json())

export const putComment = (params) =>
  fetch(`${api}/comments/${params.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  }).then(res => res.json())
