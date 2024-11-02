import mysql from 'mysql2'
import fs from 'fs'
import dotenv from 'dotenv'
dotenv.config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    ssl: {ca:fs.readFileSync(process.env.MYSQL_SSL_FILE_PATH)}
}).promise()

export async function getUser(userId) {
    const [rows] = await pool.query(`
    SELECT * 
    FROM user
    WHERE userId = ?
    `, [userId])
    return rows[0]   
}

export async function getUserId(userName) {
    const [rows] = await pool.query(`
    SELECT userId 
    FROM user
    WHERE userName = ?
    `, [userName])
    return rows[0]  
}

export async function getUsers() {
    const [rows] = await pool.query(`
    SELECT * 
    FROM user
    `)
    return rows   
}

export async function getGuests() {
    const [rows] = await pool.query(`
    SELECT * 
    FROM guest
    `)
    return rows   
}

export async function updateGuestCount(guestName, guestCount) {
    const [result] = await pool.query(`
    UPDATE guest
    SET guestCount = ?
    WHERE guestName = ?;
    `, [guestCount, guestName])
    return result
}

export async function createUser(userName, userEmail, userPhoneNumber, userIsAdmin, userPassword) {
    const [result] = await pool.query(`
    INSERT INTO user (userId, userName, email, phoneNumber, isAdmin, password)
    VALUES (default, ?, ?, ?, ?, ?)
    `, [userName, userEmail, userPhoneNumber, userIsAdmin, userPassword])
    const id = result.insertId
    return getUser(id)
}

export async function login (userName) {
    const [rows] = await pool.query(
      `SELECT password 
      FROM user 
      WHERE userName = ?`, 
      [userName]
    );

    return rows[0].password
};