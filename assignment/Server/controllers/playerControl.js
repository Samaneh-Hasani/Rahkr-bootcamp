let users = [
    {
        id: 1,
        player1: "",
     
    },
    {
        id: 2,
        player2: "",
 
    }
];
exports.addPlayers=(req, res, next) => {
    
    
    res.json({
        
        name: findedUser.name,
        books: findedUser.books,
    });
}
