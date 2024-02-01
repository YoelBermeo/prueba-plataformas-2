const { Router } = require("express");
const router = Router();
const user = require("../controllers/users.controllers");

router.get("/", user.getUsers);
router.get("/:id", user.getUser);
router.delete("/:id", user.deleteUser);
router.post("/registro", user.addUser);

//router.post('/ingreso',user.loginUser);
//router.get('/tareas',user.getTasks);
//router.get('/tareas-privadas',user.geTasksPrivate);
//router.get('/api-user',user.geTasksPrivate);

module.exports = router;

