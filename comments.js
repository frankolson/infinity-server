const clone = require('clone')

let db = {}

const defaultData = {
  "894tuq4ut84ut8v4t8wun89g": {
    id: '894tuq4ut84ut8v4t8wun89g',
    parentId: "8xf0y6ziyjabvozdd253nd",
    timestamp: 1468166872634,
    body: 'We can target schools across the country that have top IT programs.',
    author: 'Kim Lee',
    voteScore: 6,
    deleted: false,
    parentDeleted: false
  },
  "894tuq4ut84u46655htht3un89g": {
    id: '894tuq4ut84u46655htht3un89g',
    parentId: "8xf0y6ziyjabvozdd253nd",
    timestamp: 1468166872634,
    body: 'We can ask current employees to refer candidates that meet these qualifications.',
    author: 'Kendra Smith',
    voteScore: 4,
    deleted: false,
    parentDeleted: false
  },
  "894tuq4ut84u345345hb4j5b3i5jk89g": {
    id: '894tuq4ut84u345345hb4j5b3i5jk89g',
    parentId: "8xf0y6ziyjabvozdd253nd",
    timestamp: 1468166872634,
    body: 'Utilize LinkedIn to search for qualified candidates that reside around the area.',
    author: 'Tara Johnson',
    voteScore: 4,
    deleted: false,
    parentDeleted: false
  },
  "8tu4bsun805n8un48ve89": {
    id: '8tu4bsun805n8un48ve89',
    parentId: "6ni6ok3ym7mf1p33lnez",
    timestamp: 1469479767190,
    body: 'We can create a macro using VBA within Microsoft Excel to automate our data into a dashboard.',
    author: 'Louis Lincoln',
    voteScore: 15,
    deleted: false,
    parentDeleted: false
  },
  "8tuldslkvasldkv98488ve89": {
    id: '8tuldslkvasldkv98488ve89',
    parentId: "6ni6ok3ym7mf1p33lnez",
    timestamp: 1469479767190,
    body: 'Using Tableau, we can efficiently create graphs and tables to convey the information the client is interested in seeing. These graphs and tables can be refreshed with a click of a button when we receive new data.',
    author: 'Jen Park',
    voteScore: 75,
    deleted: false,
    parentDeleted: false
  },
  "82307203974odfhsdvsdvsun48ve89": {
    id: '82307203974odfhsdvsdvsun48ve89',
    parentId: "6ni6ok3ym7mf1p33lnez",
    timestamp: 1469479767190,
    body: 'We can use SAS to explore the data. Then we can create visualizations to display to the client.',
    author: 'Cameron Patel',
    voteScore: 150,
    deleted: false,
    parentDeleted: false
  }
}

function getData (token) {
  let data = db[token]
  if (data == null) {
    data = db[token] = clone(defaultData)
  }
  return data
}

function getByParent (token, parentId) {
  return new Promise((res) => {
    let comments = getData(token)
    let keys = Object.keys(comments)
    filtered_keys = keys.filter(key => comments[key].parentId === parentId && !comments[key].deleted)
    res(filtered_keys.map(key => comments[key]))
  })
}

function get (token, id) {
  return new Promise((res) => {
    const comments = getData(token)
    res(
      comments[id].deleted || comments[id].parentDeleted
        ? {}
        : comments[id]
      )
  })
}

function add (token, comment) {
  return new Promise((res) => {
    let comments = getData(token)

    comments[comment.id] = {
      id: comment.id,
      timestamp: comment.timestamp,
      body: comment.body,
      author: comment.author,
      parentId: comment.parentId,
      voteScore: 1,
      deleted: false,
      parentDeleted: false
    }

    res(comments[comment.id])
  })
}

function vote (token, id, option) {
  return new Promise((res) => {
    let comments = getData(token)
    comment = comments[id]
    switch(option) {
        case "upVote":
            comment.voteScore = comment.voteScore + 1
            break
        case "downVote":
            comment.voteScore = comment.voteScore - 1
            break
        default:
            console.log(`comments.vote received incorrect parameter: ${option}`)
    }
    res(comment)
  })
}

function disableByParent (token, post) {
    return new Promise((res) => {
        let comments = getData(token)
        keys = Object.keys(comments)
        filtered_keys = keys.filter(key => comments[key].parentId === post.id)
        filtered_keys.forEach(key => comments[key].parentDeleted = true)
        res(post)
    })
}

function disable (token, id) {
    return new Promise((res) => {
      let comments = getData(token)
      comments[id].deleted = true
      res(comments[id])
    })
}

function edit (token, id, comment) {
    return new Promise((res) => {
        let comments = getData(token)
        for (prop in comment) {
            comments[id][prop] = comment[prop]
        }
        res(comments[id])
    })
}

module.exports = {
  get,
  getByParent,
  add,
  vote,
  disableByParent,
  disable,
  edit
}
