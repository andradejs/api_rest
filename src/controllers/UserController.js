import User from "../models/User"


class UserController{

  async store(req,res){
    try {
      const novoUser = await User.create({
        nome: 'fabricio',
        email: 'fabricio@gmail.com',
        password: 'miau12345',
      });
      res.json(novoUser);

    } catch (e) {
      console.log(e)
      res.status(400).json({erros: e.errors.map((err) => err.message)});
    }
  }
}

export default new UserController()
