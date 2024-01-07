// database.js
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('doan.db');

// Tạo bảng người dùng
db.transaction(tx => {
  tx.executeSql(
    'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, password TEXT);'
  );
});

// Thêm người dùng
export const addUser = (username, password, callback) => {
  db.transaction(tx => {
    tx.executeSql('INSERT INTO users (username, password) VALUES (?, ?);', [username, password], (_, result) => {
      callback(result);
    });
  });
};

// Lấy người dùng theo tên đăng nhập
export const getUserByUsername = (username, callback) => {
  db.transaction(tx => {
    tx.executeSql('SELECT * FROM users WHERE username = ?;', [username], (_, result) => {
      callback(result);
    });
  });
};

// Cập nhật mật khẩu người dùng
export const updateUserPassword = (username, newPassword, callback) => {
  db.transaction(tx => {
    tx.executeSql('UPDATE users SET password = ? WHERE username = ?;', [newPassword, username], (_, result) => {
      callback(result);
    });
  });
};

// Xóa người dùng
export const deleteUser = (username, callback) => {
  db.transaction(tx => {
    tx.executeSql('DELETE FROM users WHERE username = ?;', [username], (_, result) => {
      callback(result);
    });
  });
};