const Redis = require('ioredis')
const redis = new Redis()

module.exports = {
  get: async (userId) => {
    return await redis.hgetall('user:'+userId)
  },

  count: async () => {
    return await redis.get('counter')   
  },

  getAll: async (limit, offset) => {
    let Users = []
    let users = await redis.smembers("users")
    users = users.slice(offset, offset+limit)
    for(let user of users){
      Users.push(await redis.hgetall('user:'+user))
    }
    return Users
  },

  insert: async (params) => {
    const userId = require('uuid').v4()
    const pipeline = redis.pipeline()

    pipeline.hmset(`user:${userId}`, {
      rowid: userId,
      pseudo: params.pseudo,
      firstname: params.firstname,
      lastname: params.lastname,
      email: params.email,
      password: params.password,
    })

    pipeline.sadd('users', userId)

    pipeline.incr("counter")

    return await pipeline.exec()
  },

  update: async (userId, params) => {
    const pipeline = redis.pipeline()

    pipeline.hmset(`user:${userId}`, {
      rowid: userId,
      pseudo: params.pseudo,
      firstname: params.firstname,
      lastname: params.lastname,
      email: params.email,
      password: params.password,
    })

    return await pipeline.exec()
  },

  remove: async (userId) => {
    const pipeline = redis.pipeline()
    pipeline.del('user:'+userId)
    pipeline.srem('users', userId)
    pipeline.decr("counter")
    return await pipeline.exec()
  }

}
