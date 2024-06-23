let posts = [
    { id: 1, title: 'First Post', content: 'This is the content of the first post.' },
    { id: 2, title: 'Second Post', content: 'This is the content of the second post.' }
];



// Route handler to get user by ID
exports.getAllUsers = (req, res) => {
    res.json(posts);
};

// Route handler to get user by ID
exports.getUserById = (req, res) => {
    let {id} = req.params;
    id = parseInt(id);
    let post = posts.find(p => p.id === (id));
    if (post) {
        res.status(200).json(post);
    }else{
        res.status(404).json({ message: 'Post not found' });
    }
};


// Route to render the form to add the user
exports.newUser = (req, res) =>{
    console.log("Render successfull!")
    res.render("../views/usersViews/addNewUser.ejs");
};

// Route handler to add user
exports.addUser = (req, res) => {
    console.log("Entred post request!");
    let{ id, title, content} = req.body;
    console.log(id);
    console.log(title);
    console.log(content);
}




