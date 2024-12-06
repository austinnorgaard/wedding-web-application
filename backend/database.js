import mysql from 'mysql2'
import fs from 'fs'
import dotenv from 'dotenv'
dotenv.config()

const pool = mysql.createPool({
    host: `wedding-backend.mysql.database.azure.com`,
    user: "austinnorgaard",
    port: 3306,
    password: "*A11697n7*",
    database: "wedding-services",
    ssl:{ca:fs.readFileSync("DigiCertGlobalRootCA.crt.pem")}
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
    ORDER BY guestName
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

export async function createGuest(guestName, guestPhoneNumber, guestZip) {
    const [result] = await pool.query(`
    INSERT INTO guest
    VALUES (default, ?, ?, ?, 0);
    `, [guestName, guestPhoneNumber, guestZip])
    return result
};

export async function createUser(userName, userEmail, userPhoneNumber, userIsAdmin, userPassword) {
    const [result] = await pool.query(`
    INSERT INTO user (userId, userName, email, phoneNumber, isAdmin, password)
    VALUES (default, ?, ?, ?, ?, ?)
    `, [userName, userEmail, userPhoneNumber, userIsAdmin, userPassword])
    const id = result.insertId
    return getUser(id)
};

export async function login (userName) {
    const [rows] = await pool.query(
      `SELECT password 
      FROM user 
      WHERE userName = ?`, 
      [userName]
    );

    return rows[0].password
};

async function getItem(itemId) {
    const [rows] = await pool.query(`
    SELECT * 
    FROM item
    WHERE itemId = ?
    `, [itemId])
    return rows[0]  
}

async function getItems() {
    const [rows] = await pool.query(`
    SELECT * 
    FROM item
    `)
    return rows 
}

async function getStore(storeId) {
    const [rows] = await pool.query(`
    SELECT * 
    FROM store
    WHERE storeId = ?
    `, [storeId])
    return rows[0]  
}

async function getStores() {
    const [rows] = await pool.query(`
    SELECT * 
    FROM store
    `)
    return rows 
}
 
export async function getRegistry() {
    const rows = await getItems()
    return rows  
};

export async function updateItem(id) {
    var newStock = getItem(id)
                    .then((res) =>{
                        return (res.stock)
                    })
                    .catch((err) => {
                        return err;
                    });
    newStock = Number(newStock) - 1;

    const [result] = await pool.query(`
    UPDATE item
    SET stock = ?
    WHERE itemId = ?;
    `, [newStock, id])

    return result;
};