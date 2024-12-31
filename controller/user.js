import db from "../db/db.js";
export const register = (req, res) => {
  const { name, phone, address, email, password } = req.body;
  const q = "select * from `user` where email = ?";
  db.query(q, [email], (err, result) => {
    if (err) return res.send(err);

    if (result.length > 0) return res.send("Email already exists");

    const query =
      "insert into `user` (name, email, phone, address, password) values(?,?,?,?,?)";
    db.query(query, [name, email, phone, address, password], (err, respon) => {
      if (err) return res.send(err);
      return res.send({ message: "User created successfully" });
    });
  });
};
