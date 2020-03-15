/**
 * @description redis的操作操作
 * @author lxf
 */

const redis = require('redis');
const {REDIS_CONF} = require('../conf/db');

//创建客户端
const redisClient = redis.createClient(REDIS_CONF.port, REDIS_CONF.host);

redisClient.on('error',err=>{
    console.log("redis error",err);
});

/**
 * redis set
 * @param {string} key 键
 * @param {string} value 值
 * @param {number} timeout 过期时间，单位是s
 * 
 */
function set(key,value,timeout = 60*60){
    if(typeof val === 'object'){
        val = JSON.stringify(val);
    }
    redisClient.set(key,value);
    redisClient.expire(key,timeout);
}

/**
 * redis get
 * @param {string} key  键 
 */
function get(key){
    const promise = new Promise((resolve,reject)=>{
        redisClient.get(key,(err,val)=>{
            if(err){
                reject(err);
                return ;
            }
            if(val == null){
                resolve(null);
                return ;
            }
            try{
                resolve(JSON.parse(val));
            }catch(ex){
                resolve(val);
            }
        });
    });
    return promise;
}

module.exports = {
    set,
    get
};