const express = require('express');
const app = express();
const fs = require('fs');

class DirtyDb {
    constructor() {
        this.users = [];
        this.articles = [];
    }

    loadFromFile() {
        const rawdata = fs.readFileSync('db.json');
        const parsed = JSON.parse(rawdata);

        this.users = parsed.users;
        this.articles = parsed.articles;
    }

    saveToFile() {
        fs.writeFile("db.json", JSON.stringify(this), 'utf8', function (err) {
            if (err) {
                console.log("An error occured while writing JSON Object to File.");
                return console.log(err);
            }

            console.log("JSON file has been saved.");
        });
    }

    getRandomToken() {
        return Math.random().toString(36).substring(7);
    }

    login(username, password) {
        for (var user of this.users) {
            if (user.username.toLowerCase() === username.toLowerCase() && user.password === password) {
                user.token = this.getRandomToken();
                return user;
            }
        }
        return { error: 'password' };
    }

    attrExists(attr, value) {
        for (var user of this.users) {
            if (user[attr].toLowerCase() == value.toLowerCase()) {
                return true;
            }
        }
        return false;
    }

    doRegister(username, email, motto, password, look) {
        var newUser = { username, email, motto, password, look, token: this.getRandomToken() };
        const possibleErrorList = ['username', 'email'];

        for (var possibleError of possibleErrorList) {
            if (this.attrExists(possibleError, newUser[possibleError])) {
                return { error: possibleError };
            }
        }

        this.users.push(newUser);
        this.saveToFile();
        return newUser;
    }

    retrieveUser(token) {
        for (var user of this.users) {
            if (user.token == token) {
                return user;
            }
        }
        return { error: 'token' };
    }

    patchUser(token, data) {
        for (var user of this.users) {
            if (user.token == token) {
                for (var key in data) {
                    if (data[key] != undefined && user[key] != undefined) {
                        user[key] = data[key];
                    }
                }
                this.saveToFile();
                return user;
            }
        }
        return { error: 'token' };
    }

    changePassword(token, currentPassword, newPassword) {
        for (var user of this.users) {
            if (user.token == token) {
                if (user.password == currentPassword) {
                    user.password = newPassword;
                    this.saveToFile();
                    return user;
                } else {
                    return { error: 'currentPassword' };
                }
            }
        }
        return { error: 'token' };
    }

    randomItem(colors) {
        return colors[Math.floor(Math.random() * colors.length)];
    }

    register(username, email, password) {
        const looks = [
            "hd-190-10.lg-3023-1408.ch-215-91.hr-893-45",
            "hr-828-1407.sh-3089-110.ha-1013-110.ch-3323-110-92.lg-3058-82.hd-180-10",
            "ch-3050-104-62.ea-987462904-62.sh-305-1185.lg-275-1193.hd-185-1.hr-828-1034",
            "sh-725-68.he-3258-1410-92.hr-3012-45.ch-665-110.lg-3006-110-110.hd-600-28",
            "ha-1003-85.ch-665-92.lg-3328-1338-1338.hd-3105-10.sh-3035-64.hr-3012-1394.ea-3169-110.cc-3008-110-110",
            "ca-1811-62.lg-3018-81.hr-836-45.ch-669-1193.hd-600-10"
        ];

        const mottos = [
            "The unexamined life is not worth living",
            "Entities should not be multiplied unnecessarily",
            "It works!",
            "One cannot step twice in the same river",
            "Even while they teach, men learn",
            "Leisure is the mother of philosophy"
        ];

        return this.doRegister(username, email, this.randomItem(mottos), password, this.randomItem(looks));
    }

    getArticles() {
        return this.articles;
    }

    findArticle(id) {
        for (var article of this.articles) {
            if (article.id == id) {
                return article;
            }
        }
        return null;
    }

    getArticle(id) {
        const article = this.findArticle(id);
        if (article == null) {
            return this.articles[this.articles.length - 1];
        }
        return article;
    }
}

var db = new DirtyDb();

db.loadFromFile();

app.use(express.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,PATCH,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, token");
    next();
});

app.get('/', function (req, res) {
    res.json({});
});

app.get('/articles', function (req, res) {
    res.json(db.getArticles());
});

app.get('/articles/:id', function (req, res) {
    res.json(db.getArticle(req.params.id));
});

app.get('/onlines', function (req, res) {
    res.json(Math.ceil(Math.random() * 5));
});

app.get('/user', function (req, res) {
    res.json(db.retrieveUser(req.headers.token));
});

app.patch('/user', function (req, res) {
    res.json(db.patchUser(req.headers.token, req.body));
});

app.post('/login', function (req, res) {
    if (req.body.username != null && req.body.password != null) {
        res.json(db.login(req.body.username, req.body.password));
    } else {
        res.status(500).send('Something broke!');
    }
});

app.post('/changePassword', function (req, res) {
    res.json(db.changePassword(req.headers.token, req.body.currentPassword, req.body.newPassword));
});

app.post('/register', function (req, res) {
    if (req.body.username != null && req.body.password != null && req.body.email != null) {
        res.json(db.register(req.body.username, req.body.email, req.body.password));
    } else {
        res.status(500).send('Something broke!');
    }
});

app.listen(1232, function () {
    console.log('Listening on port 1232!');
});
