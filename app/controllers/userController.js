
const User = require("../models/userModel.js")
const bcrypt = require("bcryptjs")

//registration
const registerUser = async (req, res) => {
  try {
    const { name, email, password,} = req.body;

    if (!name || !email || !password) {
      return res.status(400).send({ error: "All Field are require" });
    }
    const emailExist = await User.findOne({ email });

    if (emailExist) {
      return res.send({ error: "Email already exist" }).status(400);
    } else {
      const user = new User({
        name,
        email,
        password,
      });
      await user.save();
      res.send({ success: "Register Successful..." }).status(201);
    }
  } catch (error) {
    console.log("server error", error);
  }
};

//login
const loginUser = async (req, res) => {
  try {
    let { email, password } = req.body;
    console.log(email, password)
    password = password.toString();
    if (!email || !password) {
      res.send({ error: "Invalid login detail" });
    }
    const userLogin = await User.findOne({ email });

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      if (!isMatch) {
        res.status(400).json({ error: "Invalid login detail" });
      } else {
        const token = await userLogin.generateAuthToken();

       res.cookie("jwt", token, {
          expires: new Date(Date.now() + 25892000000),
          httpOnly: true,
        });
        res.json({userId:userLogin._id}  );
      }
    } else {
      res.status(400).json({ error: "Invalid login detail" });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {loginUser,registerUser}